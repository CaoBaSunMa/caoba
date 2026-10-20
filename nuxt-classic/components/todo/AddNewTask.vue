<template>
  <BModal ref="newTaskModal" id="add_new_task" hide-header centered>
    <BCloseButton @click="closeModal">
      <span aria-hidden="true">×</span>
    </BCloseButton>
    <h5 class="mb-4">新建任务</h5>
    <BForm @submit.prevent>
      <div class="title title-xs title-wth-divider text-primary text-uppercase mt-1 mb-4">
        <span>基本信息</span>
      </div>
      <BRow gutter-x="3">
        <BCol sm="8">
          <BFormGroup label="名称" label-for="task_name" class="mb-3">
            <BFormInput id="task_name" type="text" />
          </BFormGroup>
        </BCol>
        <BCol sm="4">
          <BFormGroup label="编码" label-for="code" class="mb-3">
            <BFormInput id="code" type="text" />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol md="12">
          <BFormGroup class="mb-3">
            <div class="form-label-group">
              <label class="form-label">备注/描述</label>
              <small class="text-muted">200</small>
            </div>
            <BFormTextarea rows="3"></BFormTextarea>
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="6">
          <BFormGroup label="开始日期" label-for="start_date" class="datepicker mb-3">
            <date-range-picker
              id="start_date"
              v-model="startDate"
              :dateRange="{ startDate: startDate }"
              :ranges="false"
              :single-date-picker="true"
              :show-dropdowns="true"
              append-to-body
            />
            <BFormCheckbox
              id="checkbox-1"
              size="sm"
              name="checkbox-1"
              class="mt-2"
              :model-value="true"
            >
              标记为里程碑
            </BFormCheckbox>
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
        <BCol sm="6">
          <BFormGroup label="结束日期" label-for="end_date" class="mb-3">
            <date-range-picker
              id="end_date"
              v-model="endDate"
              :dateRange="{ startDate: endDate }"
              :ranges="false"
              :single-date-picker="true"
              :show-dropdowns="true"
              append-to-body
            />
            <BFormCheckbox
              id="checkbox-2"
              size="sm"
              name="checkbox-2"
              class="mt-2"
              :model-value="true"
            >
              标记为里程碑
            </BFormCheckbox>
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup label="结束时间" label-for="end_date" class="time-picker mb-3">
            <date-range-picker
              id="end_date"
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
              append-to-body
            />
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <BCol sm="6">
          <BFormGroup label="类别" label-for="category" class="mb-3">
            <BFormSelect id="category" class="custom-select" model-value="selected">
              <BFormSelectOption value="selected">项目</BFormSelectOption>
              <BFormSelectOption value="1">一</BFormSelectOption>
              <BFormSelectOption value="2">二</BFormSelectOption>
              <BFormSelectOption value="3">三</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
        </BCol>
        <BCol sm="6">
          <BFormGroup label="状态" label-for="status" class="mb-3">
            <BFormSelect id="status" class="custom-select" model-value="selected">
              <BFormSelectOption value="selected">待办</BFormSelectOption>
              <BFormSelectOption value="1">暂停</BFormSelectOption>
              <BFormSelectOption value="1">进行中</BFormSelectOption>
              <BFormSelectOption value="2">已完成</BFormSelectOption>
              <BFormSelectOption value="3">待处理</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
        </BCol>
      </BRow>
      <BRow gutter-x="3">
        <div class="col-sm-12">
          <div class="form-inline">
            <BFormGroup class="mb-3">
              <label class="form-label me-3">设置优先级：</label>
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
        </div>
      </BRow>
      <div class="title title-xs title-wth-divider text-primary text-uppercase my-4">
        <span>分配给</span>
      </div>
      <div class="repeater">
        <div data-repeater-list="category-group">
          <div class="d-flex">
            <BRow gutter-x="3" class="flex-1">
              <BCol sm="6" class="form-group mb-0">
                <label class="form-label">添加人员</label>
              </BCol>
              <BCol sm="6" class="form-group mb-0">
                <label class="form-label">角色</label>
              </BCol>
            </BRow>
            <BButton
              variant="light"
              size="xs"
              href="#"
              class="btn-icon btn-rounded mb-2"
              data-repeater-create
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="添加人员"
            >
              <span class="icon">
                <feather-icon name="plus"></feather-icon>
              </span>
            </BButton>
          </div>
          <div class="d-flex" data-repeater-item>
            <BRow gutter-x="3" class="flex-1">
              <BCol sm="6">
                <BFormGroup class="mb-3">
                  <BFormInput placeholder="--" type="text" />
                </BFormGroup>
              </BCol>
              <BCol sm="6">
                <BFormGroup class="mb-3">
                  <BFormInput placeholder="--" type="text" />
                </BFormGroup>
              </BCol>
            </BRow>
            <BButton
              variant="light"
              size="xs"
              href="#"
              class="btn-icon btn-rounded ms-2 mt-1"
              data-repeater-delete
            >
              <span class="icon">
                <i class="ri-delete-bin-6-line"></i>
              </span>
            </BButton>
          </div>
        </div>
      </div>
    </BForm>
    <template #footer>
      <BButton variant="secondary" @click="closeModal"> 放弃 </BButton>
      <BButton variant="primary" class="float-end" @click="closeModal"> 添加 </BButton>
    </template>
  </BModal>
</template>

<script setup>
const date = ref(new Date());
const startDate = ref(new Date());
const endDate = ref(new Date());
const startTime = ref(new Date());
const endTime = ref(new Date());
// 模板里的优先级单选 v-model="selectedPriority" 之前没有定义，
// SSR 渲染时会报 "Property 'selectedPriority' was accessed during render
// but is not defined on instance"
const selectedPriority = ref("medium");
// Modal reference
const newTaskModal = ref(null);
// Function to close the modal
const closeModal = () => {
  newTaskModal.value.hide(); // Close the modal programmatically
};
</script>
