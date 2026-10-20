<script>
import { Tooltip } from "bootstrap";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    placement: {
      type: String,
      default: "top", // Default placement (can be customized)
    },
    delay: {
      type: Number,
      default: 0, // Delay in milliseconds
    },
    trigger: {
      type: String,
      default: "hover", // Default trigger (can be customized)
    },
    htmlContent: {
      type: Boolean,
      default: false, // Default value for HTML content
    },
    class: {
      type: String,
      default: "", // Custom class
    },
  },
  mounted() {
    this.initializeTooltip();
  },
  methods: {
    initializeTooltip() {
      const tooltipTriggerEl = this.$refs.tooltip;
      if (tooltipTriggerEl) {
        new Tooltip(tooltipTriggerEl, {
          title: this.title,
          trigger: this.trigger,
          placement: this.placement,
        });
      }
    },
  },

  beforeUnmount() {
    if (this.$refs.tooltip) {
      const tooltipInstance = Tooltip.getInstance(this.$refs.tooltip);
      if (tooltipInstance) {
        tooltipInstance.dispose();
      }
    }
  },
};
</script>

<template>
  <span
    ref="tooltip"
    class="d-inline-block"
    tabindex="0"
    data-bs-toggle="tooltip"
    :title="title"
    :data-bs-html="htmlContent"
  >
    <slot></slot>
  </span>
</template>
