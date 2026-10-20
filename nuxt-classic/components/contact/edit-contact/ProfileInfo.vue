<template>
  <div class="modal fade" id="editInfo" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">个人资料信息</h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="关闭"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">名</label>
                  <input
                    class="form-control"
                    type="text"
                    value="曼达琳"
                    placeholder="名"
                    name="name"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">姓</label>
                  <input
                    class="form-control"
                    type="text"
                    value="肖恩"
                    placeholder="姓"
                    name="lastname"
                  />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">邮箱 ID</label>
                  <input
                    class="form-control"
                    type="email"
                    value="contct@caoba.com"
                    placeholder="邮箱 ID"
                    name="emailid"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">电话</label>
                  <input
                    class="form-control"
                    type="text"
                    value="+91-25-4125-2365"
                    placeholder="电话号码"
                    name="phone"
                  />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-12">
                <label class="form-label">位置</label>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    value="Lane 1"
                    placeholder="地址行 1"
                    name="add1"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    value="纽约"
                    placeholder="地址行 2"
                    name="add2"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer align-items-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            放弃
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            更新
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
