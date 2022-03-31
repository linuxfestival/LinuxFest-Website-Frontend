import http from '@/services/http'

import { API } from '@/configs/urls'

const config = {
  withToken: true,
}

function transformTeacher({
  fullName,
  fullName_en,
  description,
  description_en,
  _id: id,
}) {
  // const avatar = `${BASE_URL}${picUrl}`
  const avatar = `${API}/teachers/pic/${id}`
  return {
    fullName, fullName_en, description, description_en, avatar, id,
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
      prerequisites,
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
    prerequisites,
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
