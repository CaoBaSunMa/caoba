<template>
  <div
    :class="['hk-drawer calendar-drawer drawer-right', { 'drawer-toggle': show }]"
    style="border: none; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)"
  >
    <!-- Non-editable content -->
    <div v-if="!editable">
      <div class="drawer-header">
        <div class="drawer-header-action">
          <a
            href="#"
            id="edit_event"
            class="btn btn-sm btn-icon btn-flush-secondary btn-rounded flush-soft-hover"
            @click="toggleEditable"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="edit-2"></feather-icon>
              </span>
            </span>
          </a>
          <a
            href="#"
            id="del_event"
            class="btn btn-sm btn-icon btn-flush-secondary btn-rounded flush-soft-hover"
            @click="deleteEvent(events)"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="trash-2"></feather-icon>
              </span>
            </span>
          </a>
          <a
            href="#"
            class="btn btn-sm btn-icon btn-flush-secondary btn-rounded flush-soft-hover me-2"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="external-link"></feather-icon>
              </span>
            </span>
          </a>
          <button type="button" class="drawer-close btn-close" @click="closeDrawer">
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
      <div class="drawer-body">
        <simplebar class="nicescroll-bar">
          <div class="drawer-content-wrap">
            <div class="event-head mb-4">
              <span
                class="badge badge-violet badge-indicator badge-indicator-xl flex-shrink-0 me-2"
              ></span>
              <div>
                <div class="event-name">{{ eventInfo }}</div>
                <span>日程</span>
              </div>
            </div>
            <ul class="event-detail">
              <li>
                <span class="ev-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="calendar"></feather-icon>
                  </span>
                </span>
                2020年8月18日 - 2020年8月19日
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="clock"></feather-icon>
                  </span>
                </span>
                08:40 - 17:40
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="map-pin"></feather-icon>
                  </span>
                </span>
                加拿大奥斯陆
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="check-square"></feather-icon>
                  </span>
                </span>
                会议
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="eye"></feather-icon>
                  </span>
                </span>
                默认可见性
              </li>
              <li>
                <span class="ev-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="user-plus"></feather-icon>
                  </span>
                </span>
                <div class="d-flex flex-wrap">
                  <div class="chip chip-primary user-chip mb-2 me-2">
                    <span>
                      <span class="avatar">
                        <img :src="avatar11" alt="用户" class="avatar-img" />
                      </span>
                      <span class="chip-text">摩根</span>
                    </span>
                  </div>
                  <div class="chip chip-primary user-chip mb-2 me-2">
                    <span>
                      <span class="avatar">
                        <img :src="avatar12" alt="用户" class="avatar-img" />
                      </span>
                      <span class="chip-text">查理</span>
                    </span>
                  </div>
                  <div class="chip chip-primary user-chip mb-2 me-2">
                    <span>
                      <span class="avatar">
                        <img :src="avatar13" alt="用户" class="avatar-img" />
                      </span>
                      <span class="chip-text">温斯顿</span>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <span class="ev-icon-wrap"
                  ><span class="feather-icon"><feather-icon name="menu"></feather-icon></span
                ></span>
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
          <a
            href="#"
            class="btn btn-sm btn-icon btn-flush-secondary btn-rounded flush-soft-hover me-2"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="external-link"></feather-icon>
              </span>
            </span>
          </a>
          <button
            type="button"
            class="drawer-edit-close btn-close"
            @click="toggleEditable"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
      <div class="drawer-body">
        <simplebar class="nicescroll-bar">
          <div class="drawer-content-wrap">
            <div class="event-head mb-4">
              <span
                class="badge badge-violet badge-indicator badge-indicator-xl flex-shrink-0 me-2"
              ></span>
              <div>
                <div class="event-name" contenteditable="true">{{ eventInfo }}</div>
                <div class="form-group mt-2 mb-0">
                  <div class="form-check form-check-inline ps-0">
                    <div class="form-check">
                      <input
                        type="radio"
                        id="event_1"
                        name="eventSelect"
                        class="form-check-input"
                        checked=""
                      />
                      <label class="form-check-label" for="event_1">日程</label>
                    </div>
                  </div>
                  <div class="form-check form-check-inline ps-0">
                    <div class="form-check">
                      <input
                        type="radio"
                        id="reminder_1"
                        name="eventSelect"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="reminder_1">提醒</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form>
              <div class="form-group">
                <date-range-picker
                  v-model="eventDate"
                  :dateRange="eventDate"
                  :ranges="false"
                  :inputIcon="true"
                  opens="left"
                  append-to-body
                />
              </div>
              <div class="form-group">
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
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <span class="feather-icon">
                        <feather-icon name="map-pin"></feather-icon>
                      </span>
                    </span>
                    <input
                      type="text"
                      class="form-control form-wth-icon"
                      value="加拿大奥斯陆"
                    />
                  </span>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <span class="feather-icon">
                        <feather-icon name="check-square"></feather-icon>
                      </span>
                    </span>
                    <select class="form-select">
                      <option selected="" value="1">全天</option>
                      <option value="2">半天</option>
                      <option value="3">9点至17点</option>
                    </select>
                  </span>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <span class="feather-icon">
                        <feather-icon name="eye"></feather-icon>
                      </span>
                    </span>
                    <select class="form-select">
                      <option selected="">默认可见性</option>
                      <option value="1">私密</option>
                      <option value="2">公开</option>
                    </select>
                  </span>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group color-picker">
                  <span class="input-group-text colorpicker-input-addon">
                    <input
                      v-model="eventColor"
                      type="color"
                      class="form-control-color p-0"
                    />
                  </span>
                  <input type="text" class="form-control" :value="eventColor" />
                </div>
              </div>
              <div class="form-group">
                <div class="d-flex flex-wrap">
                  <div class="chip chip-primary chip-dismissable user-chip mb-2 me-2">
                    <span>
                      <span class="avatar">
                        <img :src="avatar11" alt="用户" class="avatar-img" />
                      </span>
                      <span class="chip-text">摩根</span>
                      <button type="button" class="btn-close"></button>
                    </span>
                  </div>
                  <div class="chip chip-primary chip-dismissable user-chip mb-2 me-2">
                    <span>
                      <span class="avatar">
                        <img :src="avatar12" alt="用户" class="avatar-img" />
                      </span>
                      <span class="chip-text">查理</span>
                      <button type="button" class="btn-close"></button>
                    </span>
                  </div>
                  <div class="chip chip-primary chip-dismissable user-chip mb-2 me-2">
                    <span>
                      <span class="avatar">
                        <img :src="avatar13" alt="用户" class="avatar-img" />
                      </span>
                      <span class="chip-text">温斯顿</span>
                      <button type="button" class="btn-close"></button>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control border-0 p-0 shadow-none flex-1 mb-2 me-2"
                  />
                </div>
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="4">与全球分公司团队及管理层举行的年度会议，讨论增长规划与财年报告</textarea
                >
              </div>
            </form>
          </div>
        </simplebar>
      </div>
      <div class="drawer-footer d-flex justify-content-end">
        <button class="btn btn-outline-secondary drawer-edit-close me-2" @click="confirmDiscard">
          <i class="ri-close-line me-1"></i>放弃
        </button>
        <button class="btn btn-primary drawer-edit-close">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Swal from "sweetalert2";
import "animate.css";
//Images
import avatar11 from "@/assets/img/avatar11.jpg";
import avatar12 from "@/assets/img/avatar12.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";

export default {
  name: "EventDrawer",
  props: {
    show: Boolean,
    eventInfo: Object,
    targetedEvent: Object,
    // ... other props
  },
  data() {
    return {
      avatar11,
      avatar12,
      avatar13,
      // ... other data properties
    };
  },
  setup(props, { emit }) {
    const editable = ref(false);
    const eventName = ref("");
    const eventDate = ref({
      startDate: new Date(),
      endDate: new Date(),
    });
    const eventTime = ref({
      startDate: new Date(),
      endDate: new Date(),
    });
    const eventColor = ref("#009B84");

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

    const confirmDiscard = () => {
      if (eventName.value) {
        Swal.fire({
          title: "放弃修改？",
          text: "未保存的事件数据将丢失",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          cancelButtonColor: "#6c757d",
          confirmButtonText: "确定放弃",
          cancelButtonText: "继续编辑",
        }).then((result) => {
          if (result.isConfirmed) {
            closeDrawer();
          }
        });
      } else {
        closeDrawer();
      }
    };

    return {
      editable,
      eventName,
      toggleEditable,
      closeDrawer,
      saveEvent,
      deleteEvent,
      confirmDiscard,
      eventDate,
      eventTime,
      eventColor,
    };
  },

};
</script>
