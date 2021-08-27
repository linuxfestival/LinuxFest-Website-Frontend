import LocalStorageManager from '@/services/storage'

import { SELECTED_WORKSHOPS_STORAGE_KEY } from './constants'

const storage = new LocalStorageManager(SELECTED_WORKSHOPS_STORAGE_KEY, true)

class SelectedWorkshopsStorageManager {
  constructor(storage) {
    this.storage = storage
  }

  getPersistedWorkshops() {
    return this.storage.get() || []
  }

  removeBadSelectedWorkshops(originalWorkshops) {
    const selectedWorkshops = this.getPersistedWorkshops()

    const availableSelectedWorkshops = selectedWorkshops.filter((selectedWorkshop) => {
      const {
        id: selectedWorkshopId,
      } = selectedWorkshop
      const isSelectedWorkshopInOriginalWorkshops = originalWorkshops.some(({ id }) => id === selectedWorkshopId)

      return isSelectedWorkshopInOriginalWorkshops
    })

    this.storage.set(availableSelectedWorkshops)
  }

  persistSelectedWorkshop(selectedWorkshop) {
    const selectedWorkshops = this.getPersistedWorkshops()
    const isDuplicate = selectedWorkshops.some(({ id }) => id === selectedWorkshop.id)

    if (isDuplicate) {
      return
    }

    selectedWorkshops.push(selectedWorkshop)
    this.storage.set(selectedWorkshops)
  }

  unPersistSelectedWorkshop(selectedWorkshop) {
    const selectedWorkshops = this.storage.get()
    const filteredSelectedWorkshops = selectedWorkshops.filter(({ id }) => id !== selectedWorkshop.id)

    this.storage.set(filteredSelectedWorkshops)
  }

  clearSelectedWorkshops() {
    this.storage.remove()
  }
}

export const selectedWorkshopsStorageManager = new SelectedWorkshopsStorageManager(storage)
