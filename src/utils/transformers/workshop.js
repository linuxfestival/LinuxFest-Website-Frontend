import transformTeacher from './teacher'
import transformTime from './time'

export default function transformWorkshop({
  capacity,
  description,
  price,
  teachers,
  times,
  title,
  _id: id,
}) {
  return {
    id,
    capacity,
    description,
    price,
    title,
    teachers: teachers.map(transformTeacher),
    times: times.map(transformTime),
  }
}
