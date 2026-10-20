<template>
  <div
    id="add_new_label"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
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
          <h6 class="text-uppercase fw-bold mb-3">添加标签</h6>
          <form @submit.prevent="addLabel">
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="标签名称"
                    v-model="labelName"
                  />
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary float-end">添加</button>
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
      labelName: "",
    };
  },
  methods: {
    addLabel() {
      const name = (this.labelName || "").trim();
      if (!name) {
        Swal.fire({ icon: "warning", title: "请输入标签名称", timer: 1500, showConfirmButton: false });
        return;
      }
      this.contactStore.addLabelName(name);
      this.labelName = "";
      const el = document.getElementById("add_new_label");
      const modal = Modal.getInstance(el);
      if (modal) modal.hide();
      Swal.fire({ icon: "success", title: "已添加标签", text: name, timer: 1200, showConfirmButton: false });
    },
  },
};
</script>