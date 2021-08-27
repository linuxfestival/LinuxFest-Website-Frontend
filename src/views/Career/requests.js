import http from '@/services/http'
import { API } from '@/configs/urls'
import transformCompany from '@/utils/transformers/company'

const config = {
  withToken: true,
}

function transformCompanyResponse({
  data: company,
}) {
  return transformCompany(company)
}

export function fetchCompany(id) {
  const url = `${API}/companies/find/${id}`
  return http.get(url, config).then(transformCompanyResponse)
}
