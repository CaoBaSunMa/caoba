<template>
  <div class="modal fade" id="editInfo" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">个人资料信息</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveProfile">
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">名</label>
                  <input class="form-control" type="text" placeholder="名" name="name" v-model="form.firstName" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">姓</label>
                  <input class="form-control" type="text" placeholder="姓" name="lastname" v-model="form.lastName" />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">邮箱 ID</label>
                  <input class="form-control" type="email" placeholder="邮箱 ID" name="emailid" v-model="form.email" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">电话</label>
                  <input class="form-control" type="text" placeholder="电话号码" name="phone" v-model="form.phone" />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-12">
                <label class="form-label">位置</label>
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="地址行 1" name="add1" v-model="form.location1" />
                </div>
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="地址行 2" name="add2" v-model="form.location2" />
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
      form: { firstName: "", lastName: "", email: "", phone: "", location1: "", location2: "" },
    };
  },
  watch: {
    "contactStore.current": {
      immediate: true,
      handler(c) {
        if (!c) return;
        const parts = (c.location || "").split(", ");
        this.form = {
          firstName: c.firstName || "",
          lastName: c.lastName || "",
          email: c.email || "",
          phone: c.phone || "",
          location1: parts[0] || "",
          location2: parts.slice(1).join(", "),
        };
      },
    },
  },
  methods: {
    hide() {
      const el = document.getElementById("editInfo");
      const m = Modal.getInstance(el);
      if (m) m.hide();
    },
    async saveProfile() {
      const c = this.contactStore.current;
      if (!c) return;
      const location = [this.form.location1, this.form.location2]
        .map((v) => (v || "").trim())
        .filter(Boolean)
        .join(", ");
      try {
        await this.contactStore.updateContact(c.id, {
          firstName: this.form.firstName.trim(),
          lastName: this.form.lastName.trim(),
          email: this.form.email.trim(),
          phone: this.form.phone.trim(),
          location,
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