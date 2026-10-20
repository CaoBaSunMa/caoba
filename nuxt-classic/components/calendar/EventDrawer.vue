<template>
  <div
    :class="['hk-drawer calendar-drawer drawer-right', { 'drawer-toggle': show }]"
    style="border: none; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)"
  >
    <!-- Non-editable content -->
    <div v-if="!editable">
      <div class="drawer-header">
        <div class="drawer-header-action">
          <BButton
            id="edit_event"
            variant="flush-secondary"
            size="sm"
            href="#"
            class="btn-icon btn-rounded flush-soft-hover"
            @click="toggleEditable"
          >
            <span class="icon">
              <feather-icon name="edit-2"></feather-icon>
            </span>
          </BButton>
          <BButton
            variant="flush-secondary"
            size="sm"
            href="#"
            class="btn-icon btn-rounded flush-soft-hover"
            @click="deleteEvent(events)"
          >
            <span class="icon">
              <feather-icon name="trash-2"></feather-icon>
            </span>
          </BButton>
          <BButton
            variant="flush-secondary"
            size="sm"
            href="#"
            class="btn-icon btn-rounded flush-soft-hover me-2"
          >
            <span class="icon">
              <feather-icon name="external-link"></feather-icon>
            </span>
          </BButton>
          <BCloseButton class="drawer-close" @click="closeDrawer">
            <span aria-hidden="true">×</span>
          </BCloseButton>
        </div>
      </div>
      <div class="drawer-body">
        <simplebar class="nicescroll-bar">
          <div class="drawer-content-wrap">
            <div class="event-head mb-4">
              <HkBadge
                variant="violet"
                indicator
                indicatorSize="xl"
                class="flex-shrink-0 me-2"
              />
              <div>
                <div class="event-name">{{ eventInfo }}</div>
                <span>日程</span>
              </div>
            </div>
            <ul class="event-detail">
              <li>
                <span class="ev-icon-wrap">
                  <feather-icon name="calendar"></feather-icon>
                </span>
                2020年8月18日 - 2020年8月19日
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <feather-icon name="clock"></feather-icon>
                </span>
                08:40 - 17:40
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <feather-icon name="map-pin"></feather-icon>
                </span>
                加拿大奥斯陆
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <feather-icon name="check-square"></feather-icon>
                </span>
                会议
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <feather-icon name="eye"></feather-icon>
                </span>
                默认可见性
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <feather-icon name="user-plus"></feather-icon>
                </span>
                <div class="d-flex flex-wrap">
                  <HkChip class="mb-2 me-2" variant="primary" :src="avatar11" dismissable>
                    摩根
                  </HkChip>
                  <HkChip class="mb-2 me-2" variant="primary" :src="avatar12" dismissable>
                    查理
                  </HkChip>
                  <HkChip class="mb-2 me-2" variant="primary" :src="avatar13" dismissable>
                    温斯顿
                  </HkChip>
                </div>
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <feather-icon name="menu"></feather-icon>
                </span>
                与全球分公司团队及管理层举行的年度会议，讨论增长规划与财年报告
              </li>
            </ul>
          </div>
        </simplebar>
      </div>
    </div>
    <!-- Editable content -->
    <div v-if="editable">
      <div class="drawer-header">
        <div class="drawer-header-action">
          <BButton
            href="#"
            variant="flush-secondary"
            size="sm"
            class="btn-icon btn-rounded flush-soft-hover me-2"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="external-link"></feather-icon>
              </span>
            </span>
          </BButton>
          <BCloseButton class="drawer-close" @click="toggleEditable">
            <span aria-hidden="true">×</span>
          </BCloseButton>
        </div>
      </div>
      <div class="drawer-body">
        <simplebar class="nicescroll-bar">
          <div class="drawer-content-wrap">
            <div class="event-head mb-4">
              <HkBadge
                variant="violet"
                indicator
                indicatorSize="xl"
                class="flex-shrink-0 me-2"
              />
              <div>
                <div class="event-name" contenteditable="true">{{ eventInfo }}</div>
                <BFormGroup class="mt-2 mb-0">
                  <BFormRadio v-model="eventType" name="eventSelect" value="event" inline>
                    日程
                  </BFormRadio>
                  <BFormRadio
                    v-model="eventType"
                    name="eventSelect"
                    value="reminder"
                    inline
                  >
                    提醒
                  </BFormRadio>
                </BFormGroup>
              </div>
            </div>
            <BForm>
              <BFormGroup class="mb-3">
                <date-range-picker
                  v-model="eventDate"
                  :dateRange="eventDate"
                  :ranges="false"
                  :inputIcon="true"
                  opens="left"
                  append-to-body
                />
              </BFormGroup>
              <BFormGroup class="mb-3">
                <date-range-picker
                  v-model="eventTime"
                  :date-range="eventTime"
                  :locale-data="{ format: 'hh:mm:ss' }"
                  :ranges="false"
                  :show-dropdowns="true"
                  :time-picker="true"
                  :time-picker24-hour="false"
                  :inputIcon="true"
                  :timePickerOnly="true"
                  opens="left"
                  append-to-body
                />
              </BFormGroup>
              <BFormGroup class="mb-3">
                <BInputGroup>
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <feather-icon name="map-pin"></feather-icon>
                    </span>
                    <BFormInput
                      type="text"
                      class="form-wth-icon"
                      model-value="加拿大奥斯陆"
                    />
                  </span>
                </BInputGroup>
              </BFormGroup>
              <BFormGroup class="mb-3">
                <BInputGroup>
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <feather-icon name="check-square"></feather-icon>
                    </span>
                    <BFormSelect model-value="1">
                      <BFormSelectOption value="1">全天</BFormSelectOption>
                      <BFormSelectOption value="2">半天</BFormSelectOption>
                      <BFormSelectOption value="3">9点至17点</BFormSelectOption>
                    </BFormSelect>
                  </span>
                </BInputGroup>
              </BFormGroup>
              <BFormGroup class="mb-3">
                <BInputGroup>
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <feather-icon name="eye"></feather-icon>
                    </span>
                    <BFormSelect model-value="1">
                      <BFormSelectOption value="1">默认可见性</BFormSelectOption>
                      <BFormSelectOption value="2">私密</BFormSelectOption>
                      <BFormSelectOption value="3">公开</BFormSelectOption>
                    </BFormSelect>
                  </span>
                </BInputGroup>
              </BFormGroup>
              <BFormGroup class="mb-3">
                <BInputGroup class="color-picker">
                  <BInputGroupText class="colorpicker-input-addon">
                    <BFormInput v-model="eventColor" type="color" class="p-0" />
                  </BInputGroupText>
                  <BFormInput type="text" v-model="eventColor" />
                </BInputGroup>
              </BFormGroup>
              <BFormGroup class="mb-3">
                <div class="d-flex flex-wrap">
                  <HkChip class="mb-2 me-2" variant="primary" :src="avatar11" dismissable>
                    摩根
                  </HkChip>
                  <HkChip class="mb-2 me-2" variant="primary" :src="avatar12" dismissable>
                    查理
                  </HkChip>
                  <HkChip class="mb-2 me-2" variant="primary" :src="avatar13" dismissable>
                    温斯顿
                  </HkChip>
                  <BFormInput
                    type="text"
                    class="border-0 p-0 shadow-none flex-1 mb-2 me-2"
                  />
                </div>
              </BFormGroup>
              <BFormGroup>
                <BFormTextarea
                  rows="4"
                  model-value="与全球分公司团队及管理层举行的年度会议，讨论增长规划与财年报告"
                />
              </BFormGroup>
            </BForm>
          </div>
        </simplebar>
      </div>
      <div class="drawer-footer d-flex justify-content-end">
        <BButton variant="secondary" class="me-2" @click="toggleEditable"
          >放弃</BButton
        >
        <BButton variant="primary" @click="toggleEditable">保存</BButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import "animate.css";

// Images
import avatar11 from "@/assets/img/avatar11.jpg";
import avatar12 from "@/assets/img/avatar12.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";

// Props
const props = defineProps({
  show: Boolean,
  eventInfo: Object,
  targetedEvent: Object,
  // ... other props
});

const emit = defineEmits(["close", "eventDelete"]);

// Reactive references
const editable = ref(false);
const eventType = ref("event");
const eventDate = ref({
  startDate: new Date(),
  endDate: new Date(),
});
const eventTime = ref({
  startDate: new Date(),
  endDate: new Date(),
});
const eventColor = ref("#009B84");

// Methods
const toggleEditable = () => {
  editable.value = !editable.value;
};

const closeDrawer = () => {
  emit("close");
};

const saveEvent = () => {
  // Logic to save the event
  toggleEditable();
};

const deleteEvent = () => {
  closeDrawer();
  Swal.fire({
    html:
      '<div class="mb-3"><i class="ri-delete-bin-6-line fs-5 text-danger"></i></div><h5 class="text-danger">删除便签？</h5><p>删除后将从您的库中永久移除。</p>',
    customClass: {
      confirmButton: "btn btn-outline-secondary text-danger",
      cancelButton: "btn btn-outline-secondary text-grey",
      container: "swal2-has-bg",
    },
    showCancelButton: true,
    buttonsStyling: false,
    confirmButtonText: "确定，删除便签",
    cancelButtonText: "不，保留便签",
    reverseButtons: true,
    showDenyButton: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  }).then((result) => {
    if (result.value) {
      emit("eventDelete");
      Swal.fire({
        html:
          '<div class="d-flex align-items-center"><i class="ri-delete-bin-5-fill me-2 fs-3 text-danger"></i><h5 class="text-danger mb-0">日程已删除！</h5></div>',
        timer: 2000,
        customClass: {
          content: "p-0 text-left",
          actions: "justify-content-start",
        },
        showConfirmButton: false,
        buttonsStyling: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  });
};
</script>
