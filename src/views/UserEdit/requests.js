import http from '@/services/http'
import { API } from '@/configs/urls'
import transformUser from '@/utils/transformers/user'

const usersGateway = `${API}/users`
const config = {
  withToken: true,
}

function transformUserResponse({
  data: {
    user,
  },
}) {
  return transformUser(user)
}

export function fetchUser() {
  return http.get(`${usersGateway}/me`, config).then(transformUserResponse)
}

export function editUserRequest(user) {
  return http.patch(`${usersGateway}/me`, user, config)
}
