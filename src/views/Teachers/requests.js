import http from '@/services/http'
import { API, BASE_URL } from '@/configs/urls'

const config = {
  withToken: true,
}

function transformTeachersResponse({ data: teachers }) {
  return teachers.map((teacher)=> {
    teacher.teacher.id = teacher.teacher._id
    if(teacher.teacher.resume){
      teacher.teacher.resume = toRepresentationResume(teacher.teacher.resume)
    }
    teacher.teacher.profile = getTeacherProfileUrl(teacher.teacher.id)
    return teacher
  })
  // return teachers
}

export function fetchTeachers() {
  return http.get(`${API}/teachers`, config).then(transformTeachersResponse)
}


export function toRepresentationResume(url) {
  return `${BASE_URL}${url}`
}

export function getTeacherProfileUrl(teacher_id) {
  return `${API}/teachers/pic/${teacher_id}`
}