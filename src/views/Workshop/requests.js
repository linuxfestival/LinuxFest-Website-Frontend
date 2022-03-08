import http from '@/services/http'

import { API } from '@/configs/urls'

const config = {
  withToken: true,
}

function transformTeacher({
  fullName,
  description,
  _id: id,
}) {
  // const avatar = `${BASE_URL}${picUrl}`
  const avatar = `${API}/teachers/pic/${id}`
  return {
    fullName, description, avatar, id,
  }
}

function transformTime({
  startTime,
  endTime,
  _id: id,
}) {
  return { startTime, endTime, id }
}

function transformWorkshopResponse({
  data: {
    teachers,
    workshop: {
      capacity,
      description,
      price,
      times,
      title,
      isRegOpen,
      _id: id,
    },
  },
}) {
  return {
    id,
    capacity,
    description,
    price,
    isRegOpen,
    title,
    teachers: teachers.map(transformTeacher),
    times: times.map(transformTime),
  }
}

export function fetchWorkshopById(id) {
  return http.get(`${API}/workshops/${id}`, config).then(transformWorkshopResponse)
}
