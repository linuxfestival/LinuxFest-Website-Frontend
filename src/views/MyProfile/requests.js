import http from '@/services/http.js';
import { API_USERS } from '@/configs/urls.js';
import { isPrimitiveEmpty } from '@/utils/validators.js';
import { getAuthHeaders } from '@/utils/http.js';

function transformUpdatedUser({
    email,
    firstName,
    lastName,
    phoneNumber,
    _id: id
}) {
    return {
        email,
        firstName,
        lastName,
        phoneNumber,
        id
    }
}

export function updateUser(userInfo) {
    const payload = Object.fromEntries(Object.entries(userInfo).filter(([, val]) => !isPrimitiveEmpty(val)))

    const config = {
        headers: getAuthHeaders()
    }

    return http.patch(`${API_USERS}/me`, payload, config).then(transformUpdatedUser)
}