<script>
  let boardName = '';
</script>

<div class="modal fade" id="add_fav_board" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered mw-400p" role="document">
    <div class="modal-content">
      <div class="modal-header header-wth-bg-inv">
        <h5 class="modal-title">新建看板</h5>
        <button type="button" class="btn-close text-white" data-bs-dismiss="modal" aria-label="关闭">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body p-0">
        <div>
          <div class="nicescroll-bar h-350p" style="overflow-y: auto; max-height: 350px;">
            <ul class="p-3 pb-0">
              {#each [
                { name: 'caoba', initial: 'J', color: 'primary', checked: true },
                { name: 'caoba', initial: 'H', color: 'danger', checked: true },
                { name: '格里芬', initial: 'G', color: 'info', checked: false },
                { name: 'React - caoba', initial: 'R', color: 'warning', checked: true },
                { name: '班公湖', initial: 'P', color: 'primary', checked: true },
                { name: 'Angular - caoba', initial: 'A', color: 'success', checked: true },
                { name: 'React - caoba', initial: 'R', color: 'warning', checked: false },
                { name: '班公湖', initial: 'P', color: 'primary', checked: false },
                { name: 'Angular - caoba', initial: 'A', color: 'success', checked: false }
              ] as board, index}
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-{board.color} avatar-rounded">
                        <span class="initial-wrap">{board.initial}</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">{board.name}</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="customCheck{index + 2}" checked={board.checked} />
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn flex-fill btn-light flex-1" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn flex-fill btn-primary flex-1" data-bs-dismiss="modal">新建看板</button>
      </div>
    </div>
  </div>
</div>

