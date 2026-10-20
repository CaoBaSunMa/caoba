<template>
  <!-- for link badges -->
  <router-link
    v-if="href"
    :to="href"
    :class="[
      'badge',
      soft ? `badge-soft-${variant}` : `badge-${variant}`,
      placement ? `position-${placement}-overflow` : null,
      placement && mr ? `position-${placement}-overflow-${mr}` : null,
      borderless
        ? `badge-indicator-nobdr-${indicatorSize}`
        : `badge-indicator-${indicatorSize}`,
      {
        'badge-pill': pill,
        'badge-outline': outline,
        'badge-sm': sm,
        'badge-indicator': indicator,
        'badge-indicator badge-indicator-processing': blinkedIndicator,
        'badge-indicator-nobdr': borderless,
      },
    ]"
  >
    <slot />
  </router-link>

  <!-- for normal badges -->
  <span
    v-else
    :class="[
      'badge',
      soft ? `badge-soft-${variant}` : `badge-${variant}`,
      placement ? `position-${placement}-overflow` : null,
      placement && mr ? `position-${placement}-overflow-${mr}` : null,
      borderless
        ? `badge-indicator-nobdr-${indicatorSize}`
        : `badge-indicator-${indicatorSize}`,
      {
        'badge-pill': pill,
        'badge-outline': outline,
        'badge-sm': sm,
        'badge-indicator': indicator,
        'badge-indicator badge-indicator-processing': blinkedIndicator,
        'badge-indicator-nobdr': borderless,
      },
    ]"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: "HkBadge",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    pill: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    soft: {
      type: Boolean,
      default: false,
    },
    href: {
      type: [String, Object],
      default: "",
    },
    sm: {
      type: Boolean,
      default: false,
    },
    indicator: {
      type: Boolean,
      default: false,
    },
    blinkedIndicator: {
      type: Boolean,
      default: false,
    },
    indicatorSize: {
      type: String,
      default: "",
    },
    borderless: {
      type: Boolean,
      default: false,
    },  
    placement: String,
    mr: String,
  },
};
</script>
