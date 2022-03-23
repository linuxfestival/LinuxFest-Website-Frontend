import http from '@/services/http'
import { API } from '@/configs/urls'

const config = {
  withToken: true,
}

function transformTeacher({
  name,
  _id: id,
}) {
  return { name, id }
}

function transformTime({
  startTime,
  endTime,
  _id: id,
}) {
  return { startTime, endTime, id }
}

function transformWorkshop({
  capacity,
  description,
  price,
  teachers,
  times,
  title,
  _id: id,
}) {
  return {
    id,
    capacity,
    description,
    price,
    title,
    teachers: teachers.map(transformTeacher),
    times: times.map(transformTime),
  }
}

function transformWorkshopsResponse({ data: workshops }) {
  return workshops.map(transformWorkshop)
}

export function fetchWorkshops() {
  return http.get(`${API}/workshops`, config).then(transformWorkshopsResponse)
}

export function sendResetPasswordRequest(email) {
  return http.post(`${API}/users/forget`, {email: email})
}
