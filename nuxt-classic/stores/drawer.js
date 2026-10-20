import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    drawerContents: {
      status: false,
      title: '',
      text: '',
      img: '',
      footer: '',
      classes: '',
      backdrop: true,
    },
  }),
  actions: {
    toggleDrawerStatus() {
      this.drawerContents.status = !this.drawerContents.status
    },
    openDrawer(payload = {}) {
      Object.assign(this.drawerContents, { status: true, ...payload })
    },
    closeDrawer() {
      this.drawerContents.status = false
    },
  },
})
