import transformWorkshop from './workshop'

export default function transformUserResponse({
  email,
  firstName,
  lastName,
  orderIDs,
  orders,
  phoneNumber,
  workshops,
  _id: id,
}) {
  return {
    email,
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    orderIDs,
    orders,
    phone: phoneNumber,
    workshops: workshops.map(transformWorkshop),
    id,
  }
}
