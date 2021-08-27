import { API } from '@/configs/urls'
import transformJobOpportunity from './job-opportunity'

export default function transformCompany({
  _id: id,
  name,
  description,
  job_opportunities: opportunities,
}) {
  return {
    id,
    name,
    description,
    avatar: `${API}/companies/pic/${id}`,
    opportunities: opportunities.map(transformJobOpportunity),
  }
}
