import http from '@/services/http';
import { API } from '@/configs/urls';

import { REGISTER_STATUS } from './constants';

const config = {
  withToken: true
}

function transformTeacher({
  name,
  _id: id
}) {
  return { name, id }
}

function transformTime({
  startTime,
  endTime,
  _id: id
}) {
  return { startTime, endTime, id}
}

function transformWorkshop({
  capacity,
  description,
  price,
  teachers,
  times,
  title,
  _id: id
}) {
  return {
    id,
    capacity,
    description,
    price,
    title,
    teachers: teachers.map(transformTeacher),
    times: times.map(transformTime)
  }
}

function transformWorkshopsResponse({ data: workshops }) {
  return workshops.map(transformWorkshop)
}

export function fetchWorkshops() {
  return http.get(`${API}/workshops`, config).then(transformWorkshopsResponse);
}

function transformRegisterResponse({
  data
}) {
  switch (data) {
    case REGISTER_STATUS.PAID:
      return { status: REGISTER_STATUS.PAID }
    case REGISTER_STATUS.ERROR:
      return { status: REGISTER_STATUS.ERROR }
    default:
      return { status: REGISTER_STATUS.REQUEST_PAYMENT, paymentUrl: data }
  }
}
export function registerWorkshops({ workshops = [], discountCode = '' }) {
  const workshopIds = workshops.map(({ id }) => id);
  const body = {
    workshopIds,
    discountCode
  }

  return http.post(`${API}/users/initpayment`, body, config).then(transformRegisterResponse)
    // axios({
    //     url: this.baseURL + 'users/initpayment',
    //     method: 'post',
    //     data: this.objectToPost,
    //     headers: this.$store.getters.httpHeaders
    // }).then(response => {
    //   console.log("response:"+response);
    //       console.log(response);
    //       this.redirectForPayment(response);
    //       resolve();

    // }).catch(error => {
    //   if(error.response.status===400) {
    //     this.$notify({
    //       group: 'auth',
    //       title: 'خطا',
    //       text: 'در کارگاه ثبت نام کرده اید و یا کارگاهی برای ثبت نام انتخاب نکرده اید ',
    //       type: "error"
    //     });
    //   }
    //   else{
    //     this.$notify({
    //       group: 'auth',
    //       title: 'خطا',
    //       text: 'خطایی در سرور رخ داده است. مجددا تلاش کن',
    //       type: "error"
    //     });
    //   }
    //     console.log(error.response);
    //     reject();
    // })
// })
}
