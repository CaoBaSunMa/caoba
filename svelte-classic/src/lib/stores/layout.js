// @ts-nocheck
import { writable } from "svelte/store"

// Layout store using Svelte stores
export const layoutStore = writable({
    isSidebarCollapsed: false,
    topNavCollapse: false,
    dataHover: false,
})

// Layout actions
export const layoutActions = {
    toggleSidebar() {
        layoutStore.update((state) => ({
            ...state,
            isSidebarCollapsed: !state.isSidebarCollapsed,
        }))
    },

    collapseSidebar() {
        layoutStore.update((state) => ({
            ...state,
            isSidebarCollapsed: true,
            dataHover: true,
        }))
    },

    expandSidebar() {
        layoutStore.update((state) => ({
            ...state,
            isSidebarCollapsed: false,
            dataHover: false,
        }))
    },

    toggleTopNav() {
        layoutStore.update((state) => ({
            ...state,
            topNavCollapse: !state.topNavCollapse,
        }))
    },

    setDataHover(value) {
        layoutStore.update((state) => ({
            ...state,
            dataHover: value,
        }))
    },
}
