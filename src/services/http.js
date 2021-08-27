import axios from 'axios'

import authService from './auth'

function withToken(reqConfig) {
  const {
    withToken,
    ...otherReqConfig
  } = reqConfig

  if (!withToken) {
    return otherReqConfig
  }

  const token = authService.getToken()
  otherReqConfig.headers.Authorization = `Bearer ${token}`

  return otherReqConfig
}

const requestInterceptors = [withToken]

class HttpService {
  constructor(instance) {
    this.instance = instance
    HttpService.injectRequestResponseInspectors(this.instance, requestInterceptors)
  }

  static injectRequestResponseInspectors(instance, interceptors) {
    interceptors.forEach((interceptor) => instance.interceptors.request.use(interceptor))
  }

  get(url, config) {
    return this.instance.get(url, config)
  }

  post(url, body, config) {
    return this.instance.post(url, body, config)
  }

  put(url, body, config) {
    return this.instance.put(url, body, config)
  }

  patch(url, body, config) {
    return this.instance.patch(url, body, config)
  }

  delete(url, config) {
    return this.instance.delete(url, config)
  }
}

const httpService = new HttpService(axios.create())
Object.freeze(httpService)
Object.seal(httpService)

export default httpService
