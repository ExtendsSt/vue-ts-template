import { defineStore } from 'pinia'
import { StorageEnum } from '~/enums/storageEnum'
import { storage } from '~/utils/Storage'

export const useUserStore = defineStore('user', () => {
  const token = ref('')

  function setToken(newVal: string) {
    storage.set(StorageEnum.ACCESS_TOKEN, newVal)
    token.value = newVal
  }

  function userLogin() {
    setToken('123')
  }

  function userLogout() {
    storage.remove(StorageEnum.ACCESS_TOKEN)
  }

  return {
    token,
    setToken,
    userLogin,
    userLogout,
  }
})
