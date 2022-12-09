import { defineStore } from 'pinia'

import authService from '@/services/auth.js'
import LocalStorageManager from '@/services/storage'

const userStorage = new LocalStorageManager('user', true)

export default defineStore({
  id: 'auth',
  state: () => ({
    token: authService.getToken() || null,
    user: userStorage.get() || null
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
      userStorage.remove()
      this.user = null
      this.token = null
    },
    setUser(user) {
      userStorage.set(user)
      this.user = user
    }
  }
})
