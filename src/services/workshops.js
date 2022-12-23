import http from '@/services/http.js';
import { API_WORKSHOPS, API_USERS } from '@/configs/urls.js'

import { getAuthHeaders } from '../utils/http';

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

function transformMyWorkshops({
  workshops
}) {
  return transformWorkshops(workshops)
}

function transformRegisterResponse() {
  
}

export default {
    getAll() {
        return http.get(API_WORKSHOPS).then(transformWorkshops)
    },

    getMyWorkshops() {
      const config = { headers: getAuthHeaders() }

      return http.get(`${API_USERS}/me`, config).then(transformMyWorkshops)
    },

    register(workshops, discountCode) {
      const url = `${API_USERS}/initpayment`;
      const config = { headers: getAuthHeaders() }
      const payload = {
          workshopIds: workshops,
          discountCode
      }

      return http.post(url, payload, config).then(transformRegisterResponse)
    }
}