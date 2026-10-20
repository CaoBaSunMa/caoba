// plugins/bootstrap-tooltip.client.ts
import { defineNuxtPlugin } from '#app'
import { Tooltip } from 'bootstrap'

export default defineNuxtPlugin((nuxtApp) => {
  const initializeTooltips = () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl)
    })
  }

  // Initialize on initial page load
  nuxtApp.hook('app:mounted', () => {
    initializeTooltips()
  })

  // Initialize on every page navigation
  nuxtApp.hook('page:finish', () => {
    initializeTooltips()
  })
})
