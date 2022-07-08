import { defineStore } from 'pinia'

import authService from '@/services/auth.js'
import LocalStorageManager from '@/services/storage'

const userStorage = new LocalStorageManager('user', true)

export default defineStore({
  id: 'auth',
  state: () => ({
    token: authService.getToken() || '',
    user: userStorage.get() || ''
  }),
  getters: {
    isLoggedIn: (state) => authService.isLoggedIn() && Boolean(state.token),
  },
  actions: {
    login(token) {
      authService.setToken(token)
      this.token = token
    },
    logout() {
      authService.removeToken()
      this.token = ''
    },
    setUser(user) {
      userStorage.set(user)
      this.user = user
    }
  }
})
