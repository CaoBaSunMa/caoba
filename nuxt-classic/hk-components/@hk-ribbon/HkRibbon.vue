<template>
  <div
    :class="[
      variant ? `hk-ribbon-${variant}` : null,
      overhead ? `overhead-${overhead}` : null,
      over ? `${over}-over` : null,
      touch ? `${touch}-touch` : null,
      {
        'hk-ribbon-type-1': !type || type === 'h',
        'hk-ribbon-type-2': type === 'v',
        'ribbon-square': square,
        'ribbon-wth-icon': icon,
        ' ribbon-wth-flag': flag,
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HkBadge",
  props: {
    type: {
      type: String,
      default: "h",
      validator: (value) => {
        const validTypes = ["h", "v"];
        return validTypes.includes(value);
      },
    },
    variant: String,
    overhead: {
      type: String,
      validator: (value) => {
        const validPositions = ["start", "center", "end"];
        return validPositions.includes(value);
      },
    },
    over: {
      type: String,
      validator: (value) => {
        const validOver = ["start", "end"];
        return validOver.includes(value);
      },
    },
    touch: {
      type: String,
      validator: (value) => {
        const validTouch = ["start", "end", "top"];
        return validTouch.includes(value);
      },
    },
    square: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    flag: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
