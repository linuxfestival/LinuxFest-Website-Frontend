import Vue from 'vue'

export function showErrorNotif(message = 'خطایی رخ داده است. لطفا مجددا تلاش کنید.') {
  Vue.notify({
    title: 'خطا',
    type: 'error',
    text: message,
  })
}

export function showSuccessNotif(message = 'عملیات موفقیت آمیز بود.') {
  Vue.notify({
    type: 'success',
    title: 'موفقیت',
    text: message,
  })
}
