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
    isLoggedIn: (state) => Boolean(state.token),
  },
  actions: {
    login({ token, user }) {
      authService.setToken(token)
      userStorage.set(user)
      this.token = token
      this.user = user
    },
    logout() {
      authService.removeToken()
      userStorage.remove()
      this.token = null
      this.user = null
    },
    updateUser(user) {
      userStorage.set(user);
      this.user = user
    }
  }
})
