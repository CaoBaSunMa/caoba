<template>
  <div class="card-body">
    <button type="button" class="card-close btn-close" @click="closeCallout">
      <span aria-hidden="true">×</span>
    </button>
    <!-- Slot for children content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    closeCallout() {
      this.$emit("close-callout");
    },
  },
};
</script>
