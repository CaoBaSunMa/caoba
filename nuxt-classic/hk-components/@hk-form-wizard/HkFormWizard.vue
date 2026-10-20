<template>
  <div>
    <div class="hk-wizard hk-wizard-horizontal hk-wizard-label-horizontal">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="[
          'hk-wizard-item hk-wizard-item-wait hk-wizard-item-custom',
          { 'hk-wizard-item-active hk-wizard-item-finish': activeStep === index },
          { 'hk-wizard-item-completed': activeStep > index },
        ]"
      >
        <div class="hk-wizard-item-container" role="button" @click="selectStep(index)">
          <div class="hk-wizard-item-tail" />
          <div class="hk-wizard-item-icon">
            <span class="hk-wizard-icon">
              <!-- <component :is="step.icon" /> -->
              <feather-icon :name="step.icon" />
            </span>
          </div>
          <div class="hk-wizard-item-content align-bottom">
            <div class="hk-wizard-item-title d-none d-md-block">{{ step.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="hk-wizard-form-container">
      <component :is="steps[activeStep]?.content" />
      <BForm aria-disabled="true">
        <component :is="activeStep === steps.length && steps[activeStep - 1].content" />
      </BForm>
    </div>

    <div class="hk-wizard-actions">
      <b-button
        v-if="activeStep > 0"
        variant="primary"
        class="me-3"
        @click="handlePrevious"
        :disabled="activeStep === steps.length"
      >
        {{ prevBtnLabel || "Previous" }}
      </b-button>
      <b-button
        v-if="activeStep < steps.length - 1"
        variant="primary"
        @click="handleNext"
      >
        {{ nextBtnLabel || "Next" }}
      </b-button>
      <b-button
        v-if="activeStep === steps.length - 1"
        variant="success"
        @click="handleFinish"
      >
        {{ submitBtnLabel || "Submit" }}
      </b-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    steps: {
      type: Array,
      required: true,
    },
    nextBtnLabel: {
      type: String,
      default: null,
    },
    prevBtnLabel: {
      type: String,
      default: null,
    },
    submitBtnLabel: {
      type: String,
      default: null,
    },
    onSubmit: {
      type: Function,
      default: null,
    },
  },
  setup(props, { emit }) {
    const activeStep = ref(0);

    const handleNext = () => {
      activeStep.value += 1;
    };

    const handlePrevious = () => {
      activeStep.value -= 1;
    };

    const selectStep = (step) => {
      if (step < activeStep.value && activeStep.value !== props.steps.length) {
        activeStep.value = step;
      }
    };

    const handleFinish = () => {
      emit("onSubmit");
      activeStep.value += 1;
    };

    return {
      activeStep,
      handleNext,
      handlePrevious,
      selectStep,
      handleFinish,
    };
  },
};
</script>
