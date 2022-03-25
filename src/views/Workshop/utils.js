import jalali from 'jalali-moment'

export function getTimeTable({ startTime, endTime }, index) {
  const count = index + 1
  const formattedDate = jalali(startTime).utc().locale('en').format('dddd YYYY/MM/DD')
  const readableStart = jalali(startTime).utc().locale('en').format('HH:mm')
  const readableEnd = jalali(endTime).utc().locale('en').format('HH:mm')

  return `${count}.${formattedDate} | ساعت ${readableStart} تا ${readableEnd}`
}



export function getTimeTable_en({ startTime, endTime }, index) {
  const count = index + 1
  const dayInWeek = jalali(startTime).utc().locale('en').format('dddd')
  const formattedDate = jalali(startTime).utc().locale('fa').format('YYYY/MM/DD')
  const readableStart = jalali(startTime).utc().locale('en').format('HH:mm')
  const readableEnd = jalali(endTime).utc().locale('en').format('HH:mm')

  return `${count}. ${dayInWeek}  ${formattedDate} | ${readableStart} to ${readableEnd}`
}

