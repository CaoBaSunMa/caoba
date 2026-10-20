<template>
  <div
    v-if="isVisible"
    :class="[
      'callout card',
      bg ? `bg-${bg}` : null,
      { 'callout-dark': variant === 'dark' },
      { 'close-over': closeOver },
    ]"
  >
    <img
      v-if="cardImg"
      :class="['card-img ', cardImgClass]"
      :src="cardImg"
      alt="Card image cap"
    />
    <div class="card-body">
      <button
        type="button"
        :class="['card-close btn-close', { 'btn-close-white': variant === 'dark' }]"
        @click="closeCallout"
      >
        <span aria-hidden="true">×</span>
      </button>
      <!-- Slot for children content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HkCallout",
  props: {
    closeOver: Boolean,
    variant: String,
    cardImg: String,
    cardImgClass: String,
    bg: String,
  },
  data() {
    return {
      isVisible: true, // Local state to track visibility
    };
  },
  emits: ["close"],
  methods: {
    closeCallout() {
      // Emit an event when the close button is clicked
      this.isVisible = false; // Hide the callout when the close button is clicked
      this.$emit("close"); // Emit an event for the parent component
      console.log("Callout closed");
    },
  },
};
</script>
