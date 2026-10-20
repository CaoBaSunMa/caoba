<template>
  <DateRangePicker
    :dateRange="dateRange"
    :min-date="minDate"
    :max-date="maxDate"
    :locale-data="format"
    :ranges="ranges"
    :time-picker="timePicker"
    :time-picker24-hour="false"
    :time-picker-seconds="timePickerSeconds"
    :single-date-picker="singelDatePicker"
    :opens="opens"
    :linked-calendars="true"
    :show-dropdowns="showDropdowns"
    :auto-apply="autoApply"
    :control-container-class="inputFieldClasses"
    :append-to-body="appendToBody"
    :readonly="readOnly"
    :icon="inputIcon"
    :timePickerOnly="timePickerOnly"
  />
</template>

<script>
import DateRangePicker from "./vue3-daterange-picker/src/index";

// :format="timePicker ? 'hh:mm aa' : 'M/dd hh:mm aa'"

export default {
  name: "HkDateRangePicker",
  components: {
    DateRangePicker,
  },
  props: {
    dateRange: {
      type: Object,
      default: () => ({
        startDate: new Date(),
        endDate: new Date(),
      }),
    },
    minDate: {
      type: Date | String,
      default: null,
    },
    maxDate: {
      type: Date | String,
      default: null,
    },
    inputIcon: {
      type: Boolean,
      default: false,
    },
    ranges: {
      type: Boolean,
      default: false,
    },
    timePicker: {
      type: Boolean,
      default: false, //Show the dropdowns for time (hour/minute) selection below the calendars
    },
    timePickerSeconds: {
      type: Boolean,
      default: false, //Show the seconds in the timePicker
    },
    timePickerOnly: {
      type: Boolean,
      default: false, //Only show the time picker
    },
    opens: {
      type: String,
      default: "", //which way the picker opens - "center", "left", "right" or "inline"
    },
    format: String,
    singelDatePicker: {
      type: Boolean,
      default: false, //Only show a single calendar, with or without ranges.
    },
    showDropdowns: {
      type: Boolean,
      default: false, //show dropdowns for year and month
    },
    autoApply: {
      type: Boolean,
      default: false, //hide apply and cancel buttons, and automatically apply a new date range as soon as two dates are clicked.
    },
    inputFieldClasses: {
      type: String,
      default: "form-control reportrange-text", //CSS class to apply to the input fields
    },
    appendToBody: {
      type: Boolean,
      default: false, //Whether the picker should be appended to the body and not the element
    },
    readOnly: {
      type: Boolean,
      default: false, //Whether the picker should be read only
    },
  },
};
</script>
