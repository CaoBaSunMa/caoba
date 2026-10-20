<script>
    let startDate = new Date();
    let startTime = new Date();
  </script>
  
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
            <!-- Placeholder for date-range-picker -->
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">开始日期</label>
                  <input type="text" class="form-control" bind:value={startDate} />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">开始时间</label>
                  <input type="text" class="form-control" bind:value={startTime} />
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
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            添加
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    /* Add your CSS here */
  </style>