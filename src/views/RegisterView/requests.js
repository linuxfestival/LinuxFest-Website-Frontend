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

export function submitRegister({
  firstName,
  lastName,
  age,
  email,
  isAmirkabiri,
  phone: phoneNumber,
  studentNumber,
  password,
}) {
  const payload = {
    firstName,
    lastName,
    age,
    email,
    isAmirkabiri,
    phoneNumber,
    studentNumber,
    password
  }

  if(!isAmirkabiri) {
    delete payload.studentNumber
  }

  return http.post(API_USERS, payload).then(transformLoginResponse)
}