<template>
    <div
      :class="[
        classes,
        'chip',
        `chip-${variant}`,
        { 'chip-dismissable': dismissable },
        { 'chip-pill': pill },
        { 'chip-ticked': ticked },
        { 'chip-wth-icon': icon },
        { 'd-none': !show },
        { 'user-chip': src },
        { 'chip-lg': lg },
        { 'chip-disabled': disabled }
      ]"
    >
      <template v-if="!dismissable && !src">
        <input type="checkbox" class="form-check-input" />
      </template>
      <span>
        <slot v-if="icon" name="icon">{{ icon }}</slot>
        <template v-if="src">
          <span class="avatar">
            <img :src="src" alt="用户" class="avatar-img" />
          </span>
        </template>
        <span class="chip-text">
          <slot>{{ children }}</slot>
        </span>
        <button type="button" v-if="dismissable" class="btn-close" @click="toggleShow"></button>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HkChip',
    props: {
      children: String,
      variant: String,
      dismissable: Boolean,
      pill: Boolean,
      ticked: Boolean,
      icon: String,
      src: String,
      lg: Boolean,
      disabled: Boolean,
      classes: String
    },
    data() {
      return {
        show: true
      };
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
      }
    }
  };
  </script>
  