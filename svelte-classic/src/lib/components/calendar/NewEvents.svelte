<script>
// @ts-nocheck

import { DatePicker } from "@svelte-plugins/datepicker";
  import { format } from 'date-fns';

    export let calendarRef;
    let title = '';
    let startDate = new Date();
    let endDate = new Date();
    let startTime = new Date();
    let endTime = new Date();
    let backgroundColor = '#009B84';
  
    function updateEventList() {
      let calendarApi = calendarRef.getAPI();
      calendarApi.addEvent({
        backgroundColor,
        borderColor: backgroundColor,
        title:title,
        start: startDate,
        end: endDate
      });
    }

  let dateFormat = 'MM/dd/yy';
  let isOpen = false;

  const toggleDatePicker = () => (isOpen = !isOpen);

  const formatDate = (dateString) => {
    if (isNaN(new Date(dateString))) {
      return '';
    }

    return dateString && format(new Date(dateString), dateFormat) || '';
  };


  let formattedStartDate = formatDate(startDate);

  const onChange = () => {
    startDate = new Date(formattedStartDate);
  };

  $: formattedStartDate = formatDate(startDate);
  </script>
  
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
                <input class="form-control cal-event-name" type="text" bind:value={title} />
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
            <!-- Placeholder for date-range-picker -->
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">开始日期</label>
                  <!-- <input type="date" class="form-control" bind:value={startDate} /> -->
                  <DatePicker bind:isOpen bind:startDate>
                    <input type="text" class="form-control" placeholder="选择日期" bind:value={formattedStartDate} on:click={toggleDatePicker} />
                  </DatePicker>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group time-picker">
                  <label class="form-label">开始时间</label>
                  <input type="text" class="form-control" bind:value={startTime} />
                </div>
              </div>
            </div>

            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">结束日期</label>
                  <input type="date" class="form-control" bind:value={endDate} />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group time-picker">
                  <label class="form-label">结束时间</label>
                  <input type="date" class="form-control" bind:value={endTime} />
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
            <!-- Other form fields -->
          </form>
        </div>
        <div class="modal-footer align-items-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            放弃
          </button>
          <button
            id="add_event"
            type="button"
            class="btn btn-primary fc-addEventButton-button"
            data-bs-dismiss="modal"
            on:click={updateEventList}
          >
            添加
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    /* Add your CSS here */
  </style>