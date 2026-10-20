<script>
// @ts-nocheck

  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import moment from "moment";
  import { browser } from "$app/environment";

  const dispatch = createEventDispatcher();
  let inputEl;
  let picker;

  export let startDate = moment().subtract(29, "days");
  export let endDate = moment();
  export let format = "YYYY-MM-DD";

  onMount(async () => {
    if (!browser) return;

    // Load CSS globally (only once in +layout.svelte)
    // import "bootstrap/dist/css/bootstrap.min.css";
    // import "bootstrap-daterangepicker/daterangepicker.css";

    // Dynamically load jQuery + plugins
    const jQuery = (await import("jquery")).default;
    await import("bootstrap");
    await import("bootstrap-daterangepicker");

    // Initialize plugin
    picker = jQuery(inputEl).daterangepicker(
      {
        startDate,
        endDate,
        locale: { format }
      },
      function (start, end) {
        dispatch("change", { start, end });
      }
    );
  });

  onDestroy(() => {
    if (picker) {
      picker.remove();
    }
  });
</script>

<input bind:this={inputEl} type="text" class="form-control" />
