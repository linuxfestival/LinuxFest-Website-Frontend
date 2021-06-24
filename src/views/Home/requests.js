import http from '@/services/http';
import { apiGateway } from '@/configs/urls';

const workshopsApiGateway = `${apiGateway}/workshops`;

function transformTimesObject(time) {
    return {...time, id: time._id }
}

function transformWorkshopsResponse({ data }) {
    return data.map(workshop => {
        const times = workshop.times.map(transformTimesObject)
        const { _id: id } = workshop;
        return {
            ...workshop,
            id,
            times
        }
    })
}

export function getWorkshops() {
    return http.get(workshopsApiGateway).then(transformWorkshopsResponse)
}