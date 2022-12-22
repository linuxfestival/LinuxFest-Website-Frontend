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
      isFree: Number(price) === 0,
      title,
      teachers: teachers.map(transformTeacher),
    }
  })
}

export default {
    getAll() {
        return http.get(API_WORKSHOPS).then(transformWorkshops)
    },
}