import http from '@/services/http.js';
import { API_USERS } from '@/configs/urls.js'
import { getAuthHeaders } from '@/utils/http';

export const PAYMENT_STATUS = {
    PAID: 'Paid',
    ERROR: 'Error',
    REQUEST_PAYMENT: 'RequestPayment',
}

export default {
    init(workshops, discountCode = '') {
        const url = `${API_USERS}/initpayment`;
        const config = { headers: getAuthHeaders() }
        const payload = {
            workshopIds: workshops,
            discountCode
        }

        return http.post(url, payload, config)
    }
}