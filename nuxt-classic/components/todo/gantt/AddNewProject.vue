<template>
  <BModal
    id="add_proj_board"
    ref="favBoardModal"
    dialog-class="mw-400p"
    header-class="header-wth-bg-inv"
    centered
  >
    <template #header>
      <h5 class="modal-title">添加看板</h5>
      <BCloseButton class="text-white" aria-label="关闭" @click="closeModal">
        <span aria-hidden="true">×</span>
      </BCloseButton>
    </template>
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
              <BFormCheckbox id="customCheck2" :model-value="true" />
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
              <BFormCheckbox id="customCheck3" :model-value="true" />
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
              <BFormCheckbox id="customCheck4" :model-value="false" />
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
              <BFormCheckbox id="customCheck5" :model-value="true" />
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
              <BFormCheckbox id="customCheck6" :model-value="true" />
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
              <BFormCheckbox id="customCheck7" :model-value="true" />
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
              <BFormCheckbox id="customCheck8" :model-value="false" />
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
              <BFormCheckbox id="customCheck9" :model-value="false" />
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
              <BFormCheckbox id="customCheck10" :model-value="false" />
            </div>
          </li>
        </ul>
      </simplebar>
    </div>
    <template #footer>
      <BButton variant="light" class="flex-fill flex-1" @click="closeModal">
        取消
      </BButton>
      <BButton variant="primary" class="flex-fill flex-1" @click="closeModal">
        添加看板
      </BButton>
    </template>
  </BModal>
</template>

<script setup>
// Modal reference
const favBoardModal = ref(null);

// Function to close the modal
const closeModal = () => {
  favBoardModal.value.hide(); // Close the modal programmatically
};
</script>
