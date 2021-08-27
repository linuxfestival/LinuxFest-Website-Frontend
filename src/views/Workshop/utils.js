import jalali from 'jalali-moment'

export function getTimeTable({ startTime, endTime }, index) {
  const count = index + 1
  const formattedDate = jalali(startTime).utc().locale('fa').format('dddd YYYY/MM/DD')
  const readableStart = jalali(startTime).utc().locale('fa').format('HH:mm')
  const readableEnd = jalali(endTime).utc().locale('fa').format('HH:mm')

  return `${count}.${formattedDate} | ساعت ${readableStart} تا ${readableEnd}`
}
