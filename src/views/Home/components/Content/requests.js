import http from '@/services/http'
import { API } from '@/configs/urls'
import transformWorkshop from '@/utils/transformers/workshop'

const config = {
  withToken: true,
}

function transformWorkshopsResponse({ data: workshops }) {
  return workshops.map(transformWorkshop)
}

export function fetchWorkshops() {
  return http.get(`${API}/workshops`, config).then(transformWorkshopsResponse)
}
