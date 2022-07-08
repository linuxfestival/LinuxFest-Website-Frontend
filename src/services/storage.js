class LocalStorageManager {
  constructor(key, isJson = false) {
    if (!key) {
      throw new Error('`key` property is required for LocalStorageManager')
    }

    this.key = key
    this.isJson = isJson
  }

  get() {
    const item = localStorage.getItem(this.key)
    return this.isJson ? JSON.parse(item) : item
  }

  set(item) {
    if (!item) {
      return
    }
    const toSet = this.isJson ? JSON.stringify(item) : item
    localStorage.setItem(this.key, toSet)
  }

  remove() {
    localStorage.removeItem(this.key)
  }
}

export default LocalStorageManager
