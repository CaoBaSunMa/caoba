<template>
  <div
    id="set_new_reminder"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
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
          <h5 class="mb-4">新建提醒</h5>
          <form>
            <div class="row gx-3">
              <div class="col-sm-12 form-group">
                <label class="form-label">名称</label>
                <input class="form-control" type="text" />
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
                    append-to-body
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
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
                    append-to-body
                  />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">提醒频率</label>
                  <select class="form-control form-select me-20">
                    <option selected="">每天</option>
                    <option value="1">每月</option>
                    <option value="2">每周</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer align-items-center">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            <i class="ri-close-line me-1"></i>放弃
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            添加
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ReminderModal",
  setup() {
    const startDate = ref(new Date());
    const startTime = ref(new Date());

    return {
      startDate,
      startTime,
    };
  },
};
</script>
