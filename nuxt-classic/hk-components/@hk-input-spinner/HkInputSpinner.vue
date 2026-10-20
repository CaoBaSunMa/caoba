<template>
  <b-input-group :size="size" :class="['input-spinner-wrap', wrapperClass]">
    <b-button
      class="btn-decrement"
      variant="outline-light"
      :size="size"
      @click="decrement"
      :disabled="value === minValue"
    >
    </b-button>
    <b-form-input
      :class="['text-center', inputFieldClass]"
      type="text"
      :value="value"
      :placeholder="initialValue"
      :min="minValue"
      :max="maxValue"
      :step="step"
      :state="inputState"
      @input="handleChange"
      @blur="handleFocus"
    />
    <b-button
      class="btn-increment"
      variant="outline-light"
      :size="size"
      @click="increment"
      :disabled="value === maxValue"
    >
    </b-button>
  </b-input-group>
</template>

<script>
import { ref, watch } from "vue";
import { BInputGroup, BButton, BFormInput } from "bootstrap-vue-next";

export default {
  components: {
    BInputGroup,
    BButton,
    BFormInput,
  },
  props: {
    initialValue: {
      type: Number,
      default: 0,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 100,
    },
    precision: Number,
    step: {
      type: Number,
      default: 1,
    },
    size: String,
    onChange: Function,
    isValid: {
      type: Boolean,
      default: false,
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    wrapperClass: String,
    inputFieldClass: String,
  },
  setup(props) {
    const isFloatInputAllowed = props.precision !== undefined;

    const value = ref(
      isFloatInputAllowed
        ? props.initialValue.toFixed(props.precision)
        : parseInt(props.initialValue, 10)
    );

    const handleChange = (e) => {
      const inputValue = e.target.value;
      const isValidNumber = isFloatInputAllowed
        ? /^-?\d*\.?\d*$/.test(inputValue)
        : /^-?\d*$/.test(inputValue);

      if (isValidNumber) {
        value.value = inputValue;
      }
    };

    const handleFocus = () => {
      if (value.value > props.maxValue) {
        value.value = isFloatInputAllowed
          ? props.maxValue.toFixed(props.precision)
          : parseInt(props.maxValue, 10);
      } else if (value.value < props.minValue) {
        value.value = isFloatInputAllowed
          ? props.minValue.toFixed(props.precision)
          : parseInt(props.minValue, 10);
      }
    };

    const increment = () => {
      value.value = Math.min(
        props.maxValue,
        parseFloat(value.value) + props.step
      ).toFixed(props.precision);
    };

    const decrement = () => {
      value.value = Math.max(
        props.minValue,
        parseFloat(value.value) - props.step
      ).toFixed(props.precision);
    };

    watch(value, (newValue) => {
      if (props.onChange) {
        props.onChange(parseFloat(newValue));
      }
    });

    const inputState = props.isValid ? true : props.isInvalid ? false : null;

    return {
      value,
      handleChange,
      handleFocus,
      increment,
      decrement,
      inputState,
    };
  },
};
</script>
