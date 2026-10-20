<template>
  <star-rating
    :rating="rating"
    :star-size="size"
    :text-class="!tooltip ? 'd-none' : ''"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    :read-only="readOnly"
    :increment="fraction"
    :padding="padding"
    :active-on-click="AciveOnClick"
    :clearable="clearable"
    :glow="glow"
    :glow-color="glowColor"
    :animate="animate"
    :border-color="borderColor"
    :border-width="borderWidth"
    :rounded-corners="roundedCorners"
    inline
  ></star-rating>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "HkRating",
  components: {
    StarRating,
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 18,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String || Array,
      default: "#FFC400",
    },
    inactiveColor: {
      type: String || Array,
      default: "#D8D8D8",
    },
    tooltip: {
      type: Boolean,
      default: false,
    },
    fraction: {
      type: Number,
      default: 1,
    },
    padding: {
      type: Number,
      default: 2,
    },
    AciveOnClick: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    glow: {
      type: Number,
      default: 0,
    },
    glowColor: {
      type: String || Array,
      default: "#FFC400",
    },
    animate: {
      type: Boolean,
      default: false,
    },
    borderColor: {
      type: String || Array,
      default: "#999",
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
    roundedCorners: {
      type: Boolean,
      default: false,
    },
  },
  // Your component's properties, methods, etc. go here
};
</script>
