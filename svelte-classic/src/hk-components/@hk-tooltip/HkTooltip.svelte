<script>
  // @ts-nocheck

  import { onMount, onDestroy } from "svelte";
  import { Tooltip } from "bootstrap";

  export let title = "";
  export let placement = "auto";
  export let delay = 0;
  export let trigger = "hover";
  export let htmlContent = false;
  let className = "";
  export { className as class };

  let tooltipEl;

  onMount(() => {
    if (tooltipEl) {
      new Tooltip(tooltipEl, {
        title,
        placement,
        delay,
        trigger,
        html: htmlContent,
      });
    }

    return () => {
      const tooltipInstance = Tooltip.getInstance(tooltipEl);
      if (tooltipInstance) {
        tooltipInstance.dispose();
      }
    };
  });
</script>

<span
  bind:this={tooltipEl}
  class={("d-inline-block", className)}
  tabindex="0"
  data-bs-toggle="tooltip"
  {title}
  data-bs-html={htmlContent}
>
  <slot></slot>
</span>
