import transformOrder from './order'

export default function transformUser({
  email,
  firstName,
  lastName,
  orderIDs: orderIds,
  orders,
  phoneNumber,
  _id: id,
}) {
  return {
    email,
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    orderIds: orderIds.map(transformOrder),
    orders,
    phone: phoneNumber,
    id,
  }
}
