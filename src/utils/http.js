import authService from '@/services/auth.js';

export function getAuthHeaders() {
    if(!authService.isLoggedIn()) {
        return {}
    }

    return {
        Authorization: `Bearer ${authService.getToken()}`
    }
}