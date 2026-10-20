import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        isSidebarCollapsed: false,
        topNavCollapse: false,
        dataHover: false,
    }),
    actions: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed
        },
        collapseSidebar() {
            this.isSidebarCollapsed = true,
            this.dataHover = true
        },
        expandSidebar() {
            this.isSidebarCollapsed = false,
            this.dataHover = false
        },
        toggleTopNav() {
            this.topNavCollapse = !this.topNavCollapse
        },
        setDataHover(value) {
            this.dataHover = value
        }
    }
})
