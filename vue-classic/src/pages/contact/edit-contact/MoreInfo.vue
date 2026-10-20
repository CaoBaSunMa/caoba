<template>
  <div class="modal fade" id="moreContact" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">更多信息</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveMore">
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">职位</label>
                  <input class="form-control" type="text" placeholder="职位" name="position" v-model="form.position" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">公司</label>
                  <input class="form-control" type="text" placeholder="公司" name="company" v-model="form.company" />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">位置</label>
                  <input class="form-control" type="text" placeholder="位置" name="location" v-model="form.location" />
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
      form: { position: "", company: "", location: "" },
    };
  },
  watch: {
    "contactStore.current": {
      immediate: true,
      handler(c) {
        if (!c) return;
        this.form = {
          position: c.position || "",
          company: c.company || "",
          location: c.location || "",
        };
      },
    },
  },
  methods: {
    hide() {
      const el = document.getElementById("moreContact");
      const m = Modal.getInstance(el);
      if (m) m.hide();
    },
    async saveMore() {
      const c = this.contactStore.current;
      if (!c) return;
      try {
        await this.contactStore.updateContact(c.id, {
          position: this.form.position.trim(),
          company: this.form.company.trim(),
          location: this.form.location.trim(),
        });
        this.hide();
        Swal.fire({ icon: "success", title: "已更新", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "更新失败", text: err.response?.data?.message || err.message });
      }
    },
  },
};
</script>