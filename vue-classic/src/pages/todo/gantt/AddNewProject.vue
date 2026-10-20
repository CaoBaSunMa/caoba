<template>
  <div class="modal fade" id="add_proj_board" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered mw-400p" role="document">
      <div class="modal-content">
        <div class="modal-header header-wth-bg-inv">
          <h5 class="modal-title">添加看板</h5>
          <button
            type="button"
            class="btn-close text-white"
            data-bs-dismiss="modal"
            aria-label="关闭"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body p-0">
          <div>
            <simplebar class="nicescroll-bar h-350p">
              <ul class="p-3 pb-0">
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-primary avatar-rounded">
                        <span class="initial-wrap">J</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">caoba</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck2"
                      checked
                    />
                  </div>
                </li>
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-danger avatar-rounded">
                        <span class="initial-wrap">Cb</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">caoba</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck3"
                      checked
                    />
                  </div>
                </li>
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-info avatar-rounded">
                        <span class="initial-wrap">G</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">格里芬</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="customCheck4" />
                  </div>
                </li>
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-warning avatar-rounded">
                        <span class="initial-wrap">R</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">React - caoba</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck5"
                      checked
                    />
                  </div>
                </li>
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-primary avatar-rounded">
                        <span class="initial-wrap">P</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">班公湖</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck6"
                      checked
                    />
                  </div>
                </li>
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-success avatar-rounded">
                        <span class="initial-wrap">A</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">Angular - caoba</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck7"
                      checked
                    />
                  </div>
                </li>
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-warning avatar-rounded">
                        <span class="initial-wrap">R</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">React - caoba</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="customCheck8" />
                  </div>
                </li>
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-primary avatar-rounded">
                        <span class="initial-wrap">P</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">班公湖</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="customCheck9" />
                  </div>
                </li>
                <li class="d-flex align-items-center justify-content-between mb-3">
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-2">
                      <div class="avatar avatar-xs avatar-success avatar-rounded">
                        <span class="initial-wrap">A</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="name">Angular - caoba</div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="customCheck10" />
                  </div>
                </li>
              </ul>
            </simplebar>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn flex-fill btn-light flex-1"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn flex-fill btn-primary flex-1"
            data-bs-dismiss="modal"
          >
            添加看板
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
