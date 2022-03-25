function generateTeachersName(teachers = []) {
  let title = 'مدرس'
  if (teachers.length > 1) {
    title = 'مدرسین'
  }

  const names = teachers.map(({ name }) => name).join(' - ')

  return `${title}: ${names}`
}

function generateReadableDate({ startTime, endTime }) {
  const startDate = new Date(startTime)
  const endDate = new Date(endTime)

  const farsiWeekday = startDate.toLocaleString('fa-Fa', { weekday: 'long' })
  const readableFarsiDate = startDate.toLocaleDateString('fa-Fa')
  const readableStartTime = `${startDate.getUTCHours()}:${startDate.getUTCMinutes()}`
  const readableEndTime = `${endDate.getUTCHours()}:${endDate.getUTCMinutes()}`

  return `${farsiWeekday} ${readableFarsiDate} ${readableEndTime} - ${readableStartTime}`
}

function generateTimelineObjectFromWorkshop({
  teachers,
  title,
  times,
  id,
}) {
  const {
    startTime, endTime,
  } = times[0]

  return {
    id,
    title,
    teacherNames: generateTeachersName(teachers),
    readableDate: generateReadableDate({ startTime, endTime }),
  }
}

export function generateWorkshopsTimeline(workshops = []) {
  const filtered_workshop = workshops.filter(w => w.times.length > 0)
  return filtered_workshop.sort(
    ({ times: sourceTimes }, { times: targetTimes }) => {
      const {
        startTime: sourceWorkshopStartDate,
      } = sourceTimes[0]

      const {
        startTime: targetWorkshopStartDate,
      } = targetTimes[0]

      const sourceStartTimeStamp = (new Date(sourceWorkshopStartDate)).getTime()
      const targetStartTimeStamp = (new Date(targetWorkshopStartDate)).getTime()

      return sourceStartTimeStamp - targetStartTimeStamp
    },
  )
    .map(generateTimelineObjectFromWorkshop)
}
