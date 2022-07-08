import { API_WORKSHOPS } from '@/configs/urls.js'
import http from '@/services/http.js';

function transformTeacher({
  id,
  name
} = {}) {
  return {
    id,
    name
  }
}

function transformWorkshops(workshops) {
  return workshops.map(({
    _id: id,
    teachers = [],
    capacity = 0,
    isRegOpen = false,
    price = 0,
    title,
  }) => {
    return {
      id,
      capacity,
      isRegOpen,
      price,
      title,
      teachers: teachers.map(transformTeacher),
    }
  })
}

export function fetchWorkshops() {
  return http.get(API_WORKSHOPS).then(transformWorkshops)
}