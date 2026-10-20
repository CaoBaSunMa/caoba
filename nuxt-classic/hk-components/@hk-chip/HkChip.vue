<template>
  <div :class="chipClasses" v-if="show">
    <input v-if="!dismissable && !src" type="checkbox" />
    <span>
      <slot name="icon"></slot>
      <span v-if="src" class="avatar">
        <img :src="src" alt="user" class="avatar-img" />
      </span>
      <span class="chip-text">
        <slot></slot>
      </span>
      <button
        v-if="dismissable"
        type="button"
        class="btn-close"
        @click="show = false"
      ></button>
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  dismissable: {
    type: Boolean,
    default: false,
  },
  pill: {
    type: Boolean,
    default: false,
  },
  ticked: {
    type: Boolean,
    default: false,
  },
  withIcon: {
    type: Boolean,
    default: false,
  },
  src: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const show = ref(true);

const chipClasses = computed(() => ({
  [`chip chip-${props.variant}`]: true,
  "chip-dismissable": props.dismissable,
  "chip-pill": props.pill,
  "chip-ticked": props.ticked,
  "chip-wth-icon": props.withIcon,
  "user-chip": props.src,
  "chip-lg": props.size === "lg",
  "chip-disabled": props.disabled,
}));
</script>
