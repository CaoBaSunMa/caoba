// src/components/FeatherIcon.vue

<template>
  <span class="feather-icon" v-html="svgContent"></span>
</template>

<script>
import feather from 'feather-icons';

export default {
  name: 'FeatherIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '24',
    },
    color: String,
  },
  computed: {
    svgContent() {
      return feather.icons[this.name].toSvg({ class: 'feather', 'stroke-width': 2, width: this.size, height: this.size, color: this.color });
    },
  },
};
</script>