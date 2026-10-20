<template>
  <!-- Wrapper for the progress and label -->
  <div :class="['progress-lb-wrap', wrapperClass]">
    <!-- Label Slot -->
    <slot name="label">
      <label v-if="label" :class="['progress-label', labelClass]">{{ label }}</label>
    </slot>

    <!-- Progress bar -->
    <BProgress
      :max="max"
      :variant="variant"
      :value="currentValue"
      :min="min"
      :animated="animated"
      :striped="striped"
      :class="[
        progressClass,
        { 'progress-bar-rounded': rounded },
        size ? `progress-bar-${size}` : '',
      ]"
    />
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { BProgress } from "bootstrap-vue-next";

const props = defineProps({
  now: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    default: 100,
  },
  min: {
    type: Number,
    default: 0,
  },
  variant: String,
  label: String,
  striped: Boolean,
  size: String,
  animated: Boolean,
  rounded: Boolean,
  progressClass: String,
  labelClass: String, // Optional class for the label
  wrapperClass: String, // Optional class for the wrapper
});

const currentValue = ref(0);

watchEffect(() => {
  setTimeout(() => {
    currentValue.value = props.now;
  }, 500);
});
</script>
