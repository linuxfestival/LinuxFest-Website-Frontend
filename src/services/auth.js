import LocalStorageManager from './storage'

const tokenStorageManager = new LocalStorageManager('token')

class AuthService {
  constructor(storage) {
    this.storage = storage
  }

  getToken() {
    return this.storage.get()
  }

  setToken(token) {
    if (!token) {
      this.removeToken()
    }
    return this.storage.set(token)
  }

  removeToken() {
    return this.storage.remove()
  }

  isLoggedIn() {
    return Boolean(this.storage.get())
  }
}

export default new AuthService(tokenStorageManager)
