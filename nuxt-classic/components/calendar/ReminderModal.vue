<template>
  <BModal id="set_new_reminder" ref="reminderModal" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-4">新建提醒</h5>
    <BForm>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="名称" label-for="reminder_name" class="mb-3">
            <BFormInput id="reminder_name" v-model="title" type="text" />
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
              append-to-body
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
              append-to-body
            />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="12">
          <BFormGroup label="提醒频率" label-for="reminder_type" class="mb-3">
            <BFormSelect id="reminder_type" model-value="3" class="me-3">
              <BFormSelectOption value="1">每天</BFormSelectOption>
              <BFormSelectOption value="2">每月</BFormSelectOption>
              <BFormSelectOption value="3">每周</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
        </BCol>
      </BRow>
    </BForm>
    <template #footer>
      <BButton variant="secondary" @click="closeModal"> 放弃 </BButton>
      <BButton variant="primary" @click="closeModal"> 添加 </BButton>
    </template>
  </BModal>
</template>

<script setup>
// 模板里的 v-model="title" 之前没有定义，SSR 渲染时会报
// "Property 'title' was accessed during render but is not defined on instance"
const title = ref("");
const startDate = ref(new Date());
const startTime = ref(new Date());

// Modal reference
const reminderModal = ref(null);

// Function to close the modal
const closeModal = () => {
  reminderModal.value.hide(); // Close the modal programmatically
};
</script>
