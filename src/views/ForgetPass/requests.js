import http from '@/services/http'
import { API } from '@/configs/urls'

export function confirmPassword({ token, password }) {
  const url = `${API}/users/forget/${token}`
  const body = {
    password,
  }
  return http.patch(url, body)
}
