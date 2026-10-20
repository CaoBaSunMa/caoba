import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("bootstrap", bootstrap);
  if (process.client) {
    (window as any).bootstrap = bootstrap;
  }

  // added this for tooltip
  if (process.client) {
    // Function to initialize all tooltips
    const initTooltips = () => {
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    };

    // Initialize tooltips when the app is first mounted
    nuxtApp.hook('app:mounted', () => {
      initTooltips();
    });

    // Re-initialize tooltips on route change
    nuxtApp.hook('page:finish', () => {
      initTooltips();
    });
  }
  //**** */
});
