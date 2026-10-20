<template>
  <div class="modal fade" id="addBio" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">个人简介</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveBio">
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="添加个人简介"
                    v-model="bio"
                  ></textarea>
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
import { useContactStore } from "@/stores/contactStore";
import Swal from "sweetalert2";
import { Modal } from "bootstrap";

export default {
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
  data() {
    return {
      bio: "",
    };
  },
  watch: {
    "contactStore.current": {
      immediate: true,
      handler(c) {
        this.bio = c ? c.notes || "" : "";
      },
    },
  },
  methods: {
    hide() {
      const el = document.getElementById("addBio");
      const m = Modal.getInstance(el);
      if (m) m.hide();
    },
    async saveBio() {
      const c = this.contactStore.current;
      if (!c) return;
      try {
        await this.contactStore.updateContact(c.id, { notes: this.bio });
        this.hide();
        Swal.fire({ icon: "success", title: "已更新", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "更新失败", text: err.response?.data?.message || err.message });
      }
    },
  },
};
</script>