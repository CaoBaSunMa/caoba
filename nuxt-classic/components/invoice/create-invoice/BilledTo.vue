<template>
  <div id="billed_info" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
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
          <h5 class="mb-5">开票对象</h5>
          <form>
            <div class="row gx-3">
              <div class="col-sm-12 form-group">
                <label class="form-label">公司名称</label>
                <input class="form-control" type="text" value="Supernova Consultants" />
              </div>
              <div class="col-sm-12 form-group">
                <label class="form-label">邮箱地址</label>
                <input
                  class="form-control"
                  type="email"
                  Value="thompson_peter@super.co"
                />
              </div>
              <div class="col-sm-12 form-group">
                <label class="form-label">地址第一行</label>
                <input class="form-control" type="text" Value="Sycamore Street" />
              </div>
              <div class="col-sm-12 form-group">
                <label class="form-label">地址第二行</label>
                <input
                  class="form-control"
                  type="text"
                  Value="San Antonio Valley, CA 34668"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer align-items-center">
          <button type="button" class="btn btn-secondary">放弃</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            添加
          </button>
        </div>
      </div>
    </div>
  </div>
</template>