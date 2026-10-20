<script>
  let name = '';
  let email = '';
</script>

<div id="add_new_team" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
          <span aria-hidden="true">×</span>
        </button>
        <h5 class="mb-4">新建成员</h5>
        <form>
          <div class="row gx-3">
            <div class="col-sm-12">
              <div class="form-group">
                <label class="form-label">名称</label>
                <input class="form-control" type="text" bind:value={name} />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label class="form-label">邮箱</label>
                <input class="form-control" type="text" bind:value={email} />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label class="form-label">上传照片</label>
                <div class="dropify-square w-30">
                  <!-- Placeholder for HkDropZone -->
                  <input type="file" class="form-control" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer align-items-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary">添加</button>
      </div>
    </div>
  </div>
</div>

