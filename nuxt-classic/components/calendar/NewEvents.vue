<template>
  <BModal id="create_new_event" ref="newEventModal" size="lg" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-4">新建日程</h5>
    <BForm>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="名称" label-for="event_name" class="mb-3">
            <BFormInput id="event_name" v-model="title" />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup class="mb-3">
            <div class="form-label-group">
              <label>备注/说明</label>
              <small class="text-muted">200</small>
            </div>
            <BFormTextarea rows="3" />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="6">
          <BFormGroup label="开始日期" label-for="start_date" class="mb-3">
            <date-range-picker
              id="start_date"
              v-model="startDate"
              :date-range="{ startDate: startDate }"
              :ranges="false"
              :single-date-picker="true"
              :show-dropdowns="true"
            />
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup label="开始时间" label-for="start_time" class="time-picker mb-3">
            <date-range-picker
              id="start_time"
              v-model="startTime"
              :date-range="{ startDate: startTime }"
              :locale-data="{ format: 'hh:mm:ss' }"
              :ranges="false"
              :single-date-picker="true"
              :show-dropdowns="true"
              :time-picker="true"
              :time-picker-seconds="true"
              :time-picker24-hour="false"
              :timePickerOnly="true"
            />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="6">
          <BFormGroup label="结束日期" label-for="end_date" class="mb-3">
            <date-range-picker
              id="end_date"
              v-model="endDate"
              :dateRange="{ startDate: endDate }"
              :ranges="false"
              :single-date-picker="true"
              :show-dropdowns="true"
            />
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup label="结束时间" label-for="end_time" class="time-picker mb-3">
            <date-range-picker
              id="end_time"
              v-model="endTime"
              :date-range="{ startDate: endTime }"
              :locale-data="{ format: 'hh:mm:ss' }"
              :ranges="false"
              :single-date-picker="true"
              :show-dropdowns="true"
              :time-picker="true"
              :time-picker-seconds="true"
              :time-picker24-hour="false"
              :timePickerOnly="true"
            />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="地点" label-for="location" class="mb-3">
            <BFormInput id="location" type="text" />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="5">
          <BFormGroup label="分类" label-for="cat" class="mb-3">
            <BFormInput id="cat" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="7">
          <BFormGroup label="可见性" label-for="cat" class="mb-3">
            <div class="d-flex">
              <BFormSelect id="select-default" model-value="2" class="me-3">
                <BFormSelectOption value="2">公开</BFormSelectOption>
                <BFormSelectOption value="1">私密</BFormSelectOption>
              </BFormSelect>
              <BInputGroup class="color-picker w-auto">
                <BInputGroupText class="colorpicker-input-addon">
                  <BFormInput v-model="backgroundColor" type="color" class="p-0" />
                </BInputGroupText>
              </BInputGroup>
            </div>
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="12">
          <div class="form-inline">
            <BFormGroup class="mt-3">
              <label class="form-label me-3">设置优先级：</label>
              <BFormRadio
                v-model="selectedPriority"
                name="priority"
                value="urgent"
                inline
              >
                紧急
              </BFormRadio>
              <BFormRadio v-model="selectedPriority" name="priority" value="high" inline>
                高
              </BFormRadio>
              <BFormRadio
                v-model="selectedPriority"
                name="priority"
                value="medium"
                inline
              >
                中
              </BFormRadio>
              <BFormRadio v-model="selectedPriority" name="priority" value="low" inline>
                低
              </BFormRadio>
            </BFormGroup>
          </div>
        </BCol>
      </BRow>
    </BForm>
    <template #footer>
      <BButton variant="secondary" @click="closeModal"> 放弃 </BButton>
      <BButton
        id="add_event"
        variant="primary"
        class="fc-addEventButton-button"
        @click="updateEventList"
      >
        添加
      </BButton>
    </template>
  </BModal>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NewEvents",
  props: {
    calendarRef: Object,
  },
  setup(props) {
    // Modal reference
    const newEventModal = ref(null);

    //event properties
    const title = ref("");
    const startDate = ref(new Date());
    const endDate = ref(new Date());
    const startTime = ref(new Date());
    const endTime = ref(new Date());
    const backgroundColor = ref("#009B84");
    const selectedPriority = ref("urgent");

    const updateEventList = () => {
      let calendarApi = props.calendarRef.getApi();
      calendarApi.addEvent({
        backgroundColor: backgroundColor.value,
        borderColor: backgroundColor.value,
        title: title.value,
        start: startDate.value.startDate,
        end: endDate.value.startDate,
      });
      newEventModal.value.hide();
    };

    // Function to close the modal
    const closeModal = () => {
      newEventModal.value.hide(); // Close the modal programmatically
    };

    return {
      title,
      startDate,
      endDate,
      startTime,
      endTime,
      backgroundColor,
      selectedPriority,
      updateEventList,
      newEventModal,
      closeModal,
    };
  },
};
</script>
