import http from '@/services/http.js';
import { API_WORKSHOPS } from '@/configs/urls.js'

function transformTeacher({
    _id: id,
    fullName_en: fullName,
    description_en: bio,
    picUrl: avatarPath
} = {}) {
    return {
        id,
        fullName,
        bio,
        avatarPath,
        // TODO: use deployed production url (with env probably)
        avatarUrl: `http://linuxfest.aut.ac.ir${avatarPath}`,
        avatarAltText: `عکس ${fullName}`
    }
}

// Appends 0 's to start of string until it reaches length 2
// padStartZero(0) -> 00
// padStartZero(1) -> 01
// padStartZero(10) -> 10
function padStartZero(num) {
    return String(num).padStart(2, '0')
}

function transformTime({
    _id: id,
    startTime,
    endTime
}) {
    /*
        dayNum is Saturday|Sunday|...
        shamsiDate like 1401/01/01
        startTimeClock like 10:00
        endTimeClock like startTimeClock
    */
    const date = new Date(startTime)
    const endDate = new Date(endTime);
    const dayName = date.toLocaleString('en-EN', { weekday: 'long' })
    const shamsiDate = date.toLocaleDateString('fa-FA');
    const startTimeClock = `${padStartZero(date.getUTCHours())}:${padStartZero(date.getUTCMinutes())}`
    const endTimeClock = `${padStartZero(endDate.getUTCHours())}:${padStartZero(endDate.getUTCMinutes())}`

    return {
        id,
        date: `${dayName} ${shamsiDate} | ${startTimeClock} to ${endTimeClock}`,
    }
}

function transformWorkshop({
    workshop: {
        _id: id,
        title,
        description = '',
        capacity = 0,
        isRegOpen: isOpen = false,
        price = 0,
        times = []
    } = {},
    // workshop obj has its own 'teachers' key, but those entries dont have teachers readable data
    // so server sends us richer teachers data in this key here
    // workshop.teachers can be omitted from server response to reduce network usage
    teachers = []
}) {
    return {
        id,
        capacity,
        description,
        isOpen,
        isFree: price === 0,
        price,
        title,
        teachers: teachers.map(transformTeacher),
        times: times.map(transformTime)
    }
}


export function fetchWorkshop(id) {
    const url = `${API_WORKSHOPS}/${id}`;

    return http.get(url).then(transformWorkshop)
}