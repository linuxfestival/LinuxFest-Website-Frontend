import axios from 'axios'

const instance = axios.create({
  timeout: 10000 // 10 seconds
})

function takeoutData({ data } = {}) {
  return data
}

export default {
  async get(...params) {
    return instance.get(...params).then(takeoutData)
  },

  async post(...params) {
    return instance.post(...params).then(takeoutData)
  },

  async patch(...params) {
    return instance.patch(...params).then(takeoutData)
  }
}
