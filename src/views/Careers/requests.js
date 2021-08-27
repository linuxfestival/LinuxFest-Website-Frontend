import http from '@/services/http'
import { API } from '@/configs/urls'
import transformCompany from '@/utils/transformers/company'

function transformCompaniesResponse({
  data: companies,
}) {
  return companies.map(transformCompany)
}

export function fetchCompanies() {
  const url = `${API}/companies/`
  return http.get(url).then(transformCompaniesResponse)
}
