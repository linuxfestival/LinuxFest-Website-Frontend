import http from '@/services/http'
import { API } from '@/configs/urls'

const usersGateway = `${API}/users`

function transformAuthResponse({
  data: {
    token,
  },
}) {
  return token
}

export function signUpRequest(user) {
  return http.post(usersGateway, user).then(transformAuthResponse)
}

export function signInRequest(user) {
  return http.post(`${usersGateway}/login`, user).then(transformAuthResponse)
}
