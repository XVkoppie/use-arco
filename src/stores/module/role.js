import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRoleStore = defineStore('role', () => {
  const currentRole = ref('admin')

  const setRole = (newRole) => {
    currentRole.value = newRole
  }
  const resetRole = () => {
    currentRole.value = 'admin'
  }

  return { currentRole, setRole, resetRole }
})
