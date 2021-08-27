export default function transformOrder({
  idNumber: number,
  workshopId: workshopIds,
  _id: id,
}) {
  return {
    number,
    id,
    workshopIds
  }
}
