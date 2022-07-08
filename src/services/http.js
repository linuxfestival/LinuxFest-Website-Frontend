import axios from 'axios'

const instance = axios.create({
  timeout: 10000 // 10 seconds
})

function takeoutData({ data } = {}) {
  return data
}

export default {
  get(...params) {
    return instance.get(...params).then(takeoutData)
  },

  post(...params) {
    return instance.post(...params).then(takeoutData)
  }
}
