<template>
  <div
    id="create_new_event"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="关闭"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h5 class="mb-4">新建日程</h5>
          <form>
            <div class="row gx-3">
              <div class="col-sm-12 form-group">
                <label class="form-label">名称</label>
                <input v-model="title" class="form-control cal-event-name" type="text" />
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-12 form-group">
                <div class="form-label-group">
                  <label>备注/说明</label>
                  <small class="text-muted">200</small>
                </div>
                <textarea class="form-control" rows="3"></textarea>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">开始日期</label>
                  <date-range-picker
                    v-model="startDate"
                    :date-range="{ startDate: startDate }"
                    :ranges="false"
                    :single-date-picker="true"
                    :show-dropdowns="true"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group time-picker">
                  <label class="form-label">开始时间</label>
                  <date-range-picker
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
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">结束日期</label>
                  <date-range-picker
                    v-model="endDate"
                    :dateRange="{ startDate: endDate }"
                    :ranges="false"
                    :single-date-picker="true"
                    :show-dropdowns="true"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group time-picker">
                  <label class="form-label">结束时间</label>
                  <date-range-picker
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
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-12">
                <label class="form-label">地点</label>
                <div class="form-group">
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-5">
                <div class="form-group">
                  <label class="form-label">分类</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-7">
                <div class="form-group">
                  <label class="form-label">可见性</label>
                  <div class="d-flex">
                    <select class="form-select me-3">
                      <option selected="" value="2">公开</option>
                      <option value="1">私密</option>
                    </select>
                    <div class="input-group color-picker w-auto">
                      <span class="input-group-text colorpicker-input-addon rounded-3">
                        <input
                          v-model="backgroundColor"
                          type="color"
                          class="form-control-color p-0"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-inline">
                  <div class="form-group mt-3">
                    <label class="form-label">设置优先级：</label>
                    <div class="form-check form-check-inline">
                      <div class="form-check">
                        <input
                          type="radio"
                          id="customRadioc1"
                          name="customRadioc2"
                          class="form-check-input"
                          checked=""
                        />
                        <label class="form-check-label" for="customRadioc1">紧急</label>
                      </div>
                    </div>
                    <div class="form-check form-check-inline">
                      <div class="form-check">
                        <input
                          type="radio"
                          id="customRadioc2"
                          name="customRadioc2"
                          class="form-check-input"
                        />
                        <label class="form-check-label" for="customRadioc2">高</label>
                      </div>
                    </div>
                    <div class="form-check form-check-inline">
                      <div class="form-check">
                        <input
                          type="radio"
                          id="customRadioc3"
                          name="customRadioc2"
                          class="form-check-input"
                        />
                        <label class="form-check-label" for="customRadioc3">中</label>
                      </div>
                    </div>
                    <div class="form-check form-check-inline">
                      <div class="form-check">
                        <input
                          type="radio"
                          id="customRadioc4"
                          name="customRadioc2"
                          class="form-check-input"
                        />
                        <label class="form-check-label" for="customRadioc4">低</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer align-items-center">
          <button type="button" class="btn btn-outline-secondary" @click="confirmDiscard">
            <i class="ri-close-line me-1"></i>放弃
          </button>
          <button
            id="add_event"
            type="button"
            class="btn btn-primary fc-addEventButton-button"
            data-bs-dismiss="modal"
            @click="updateEventList"
          >
            添加
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Swal from "sweetalert2";

export default {
  name: "NewEvents",
  props: {
    show: Boolean,
    calendarRef: Object,
    onAddEvent: Function,
  },
  setup(props) {
    const showModal = ref(props.show);
    const title = ref("");
    const startDate = ref(new Date());
    const endDate = ref(new Date());
    const startTime = ref(new Date());
    const endTime = ref(new Date());
    const backgroundColor = ref("#009B84");

    const updateEventList = async () => {
      const start = startDate.value && startDate.value.startDate
        ? startDate.value.startDate
        : startDate.value;
      const end = endDate.value && endDate.value.startDate
        ? endDate.value.startDate
        : endDate.value;
      const startTimeVal = startTime.value && startTime.value.startDate
        ? startTime.value.startDate
        : startTime.value;
      const endTimeVal = endTime.value && endTime.value.startDate
        ? endTime.value.startDate
        : endTime.value;
      const startTimeStr =
        startTimeVal instanceof Date
          ? startTimeVal.getHours() + ":" + String(startTimeVal.getMinutes()).padStart(2, "0")
          : "09:00";
      const endTimeStr =
        endTimeVal instanceof Date
          ? endTimeVal.getHours() + ":" + String(endTimeVal.getMinutes()).padStart(2, "0")
          : "10:00";
      const payload = {
        title: title.value,
        startTime: start instanceof Date ? start.toISOString() : start + "T" + startTimeStr + ":00",
        endTime: end instanceof Date ? end.toISOString() : end + "T" + endTimeStr + ":00",
        allDay: false,
        location: "",
        category: "会议",
        visibility: "公开",
        priority: "中",
      };
      if (props.onAddEvent) {
        try {
          await props.onAddEvent(payload);
        } catch (e) {
          // 失败时仍保留本地渲染
          let calendarApi = props.calendarRef.getApi();
          calendarApi.addEvent({
            backgroundColor: backgroundColor.value,
            borderColor: backgroundColor.value,
            title: title.value,
            start: start,
            end: end,
          });
        }
      } else {
        let calendarApi = props.calendarRef.getApi();
        calendarApi.addEvent({
          backgroundColor: backgroundColor.value,
          borderColor: backgroundColor.value,
          title: title.value,
          start: start,
          end: end,
        });
      }
    };

    const confirmDiscard = () => {
      if (title.value) {
        Swal.fire({
          title: "放弃修改？",
          text: "未保存的日程数据将丢失",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          cancelButtonColor: "#6c757d",
          confirmButtonText: "确定放弃",
          cancelButtonText: "继续编辑",
        }).then((result) => {
          if (result.isConfirmed) {
            title.value = "";
            document.getElementById("create_new_event")?.classList.remove("show");
          }
        });
      } else {
        document.getElementById("create_new_event")?.classList.remove("show");
      }
    };

    return {
      showModal,
      title,
      startDate,
      endDate,
      startTime,
      endTime,
      backgroundColor,
      updateEventList,
      confirmDiscard,
    };
  },
};
</script>
