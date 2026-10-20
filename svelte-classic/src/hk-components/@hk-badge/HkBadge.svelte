<script>
  let clazz = "";
  export let variant = "primary";
  export let pill = false;
  export let outline = false;
  export let soft = false;
  export let href = "";
  export let sm = false;
  export let indicator = false;
  export let blinkedIndicator = false;
  export let indicatorSize = "";
  export let borderless = false;
  export let placement = "";
  export let mr = "";
  export { clazz as class };

  // Compute the class names based on the props
  $: classes = [
    "badge",
    soft ? `badge-soft-${variant}` : `badge-${variant}`,
    placement ? `position-${placement}-overflow` : null,
    placement && mr ? `position-${placement}-overflow-${mr}` : null,
    borderless
      ? `badge-indicator-nobdr-${indicatorSize}`
      : `badge-indicator-${indicatorSize}`,
    pill ? "badge-pill" : null,

    outline ? "badge-outline" : null,
    sm ? "badge-sm" : null,
    indicator ? "badge-indicator" : null,
    blinkedIndicator ? "badge-indicator badge-indicator-processing" : null,
    borderless ? "badge-indicator-nobdr" : null,
    clazz ? clazz : null,
  ]
    .filter(Boolean)
    .join(" ");
</script>

{#if href}
  <a {href} class={classes}>
    <slot />
  </a>
{:else}
  <span class={classes}>
    <slot />
  </span>
{/if}
