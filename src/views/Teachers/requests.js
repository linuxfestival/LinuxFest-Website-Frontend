import http from '@/services/http'
import { API } from '@/configs/urls'

const config = {
  withToken: true,
}

function transformTeachersResponse({ data: teachers }) {
  return teachers
}

export function fetchTeachers() {
  return http.get(`${API}/teachers`, config).then(transformTeachersResponse)
}
