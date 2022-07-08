import http from '@/services/http.js';
import { API_USERS } from '@/configs/urls.js';

function transformLoginResponse({
  token,
  user: {
    email,
    firstName,
    lastName,
    phoneNumber,
    _id: id
  } = {}
}) {
  return {
    token,
    user: {
      id,
      email,
      phoneNumber,
      firstName,
      lastName
    }
  }
}

export function sendLogin({
  email,
  password
}) {
  const payload =  {
    email,
    password
  }

  return http.post(`${API_USERS}/login`, payload).then(transformLoginResponse)
}