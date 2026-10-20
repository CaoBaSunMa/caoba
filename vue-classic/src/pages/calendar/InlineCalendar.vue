<template>
  <date-range-picker
    :single-date-picker="true"
    :show-dropdowns="false"
    :date-range="dateRange"
    :ranges="false"
    :auto-apply="true"
    opens="inline"
    control-container-class="invisible position-absolute"
  />
</template>

<script>

export default {
  name: "InlineCalendar",
  components: {
  },

  setup() {
    return {
      dateRange: {
        startDate: new Date(),
      },
    };
  },
};
</script>
