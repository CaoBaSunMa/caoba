<template>
  <div class="modal fade" id="tagsInput" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">标签</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveTags">
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <hk-tag
                    :key="tagKey"
                    :option="contactStore.allLabels"
                    :selected-value="tags"
                    @change="tags = $event"
                  ></hk-tag>
                </div>
              </div>
            </div>
            <div class="modal-footer align-items-center p-0 pt-3">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                <i class="ri-close-line me-1"></i>放弃
              </button>
              <button type="submit" class="btn btn-primary">更新</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HkTag from "@/hk-components/@hk-tag/HkTag.vue";
import { useContactStore } from "@/stores/contactStore";
import Swal from "sweetalert2";
import { Modal } from "bootstrap";
import { parseLabels } from "@/utils/export";

export default {
  components: {
    HkTag,
  },
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
  data() {
    return {
      tags: [],
      tagKey: 0,
    };
  },
  watch: {
    "contactStore.current": {
      immediate: true,
      handler(c) {
        this.tags = c ? parseLabels(c.labels) : [];
        this.tagKey += 1;
      },
    },
  },
  methods: {
    hide() {
      const el = document.getElementById("tagsInput");
      const m = Modal.getInstance(el);
      if (m) m.hide();
    },
    async saveTags() {
      const c = this.contactStore.current;
      if (!c) return;
      try {
        await this.contactStore.updateContact(c.id, {
          labels: JSON.stringify(Array.isArray(this.tags) ? this.tags : []),
        });
        for (const label of this.tags) {
          this.contactStore.addLabelName(label);
        }
        this.hide();
        Swal.fire({ icon: "success", title: "标签已更新", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "更新失败", text: err.response?.data?.message || err.message });
      }
    },
  },
};
</script>

<style scoped>
.modal-content {
  overflow: visible;
}
</style>