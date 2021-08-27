import http from '@/services/http'
import { API } from '@/configs/urls'
import { transformUser, transformWorkshop } from '@/utils/transformers/index'

const usersGateway = `${API}/users`
const config = {
  withToken: true,
}

function transformUserAndWorkshopsResponse({
  data: {
    user,
    workshops
  },
}) {
  return { user: transformUser(user), workshops: workshops.map(transformWorkshop) }
}

export function fetchUserAndWorkshops() {
  return http.get(`${usersGateway}/me`, config).then(transformUserAndWorkshopsResponse)
}
