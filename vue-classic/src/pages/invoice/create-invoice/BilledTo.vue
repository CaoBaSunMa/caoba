<template>
  <div id="billed_info" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
            <span aria-hidden="true">×</span>
          </button>
          <h5 class="mb-5">编辑开票对象</h5>
          <form @submit.prevent="save">
            <div class="row gx-3">
              <div class="col-sm-12 form-group">
                <label class="form-label">公司名称</label>
                <input class="form-control" type="text" v-model="form.company" />
              </div>
              <div class="col-sm-12 form-group">
                <label class="form-label">邮箱地址</label>
                <input class="form-control" type="email" v-model="form.email" />
              </div>
              <div class="col-sm-12 form-group">
                <label class="form-label">地址第一行</label>
                <input class="form-control" type="text" v-model="form.address1" />
              </div>
              <div class="col-sm-12 form-group">
                <label class="form-label">地址第二行</label>
                <input class="form-control" type="text" v-model="form.address2" />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer align-items-center">
          <button type="button" class="btn btn-outline-secondary" @click="discard">
            <i class="ri-close-line me-1"></i>放弃
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="save">
            保存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useInvoiceDraftStore } from "@/stores/invoiceDraftStore";
import { Modal } from "bootstrap";
import Swal from "sweetalert2";

export default {
  name: "BilledTo",
  setup() {
    const draftStore = useInvoiceDraftStore();
    return { draftStore };
  },
  data() {
    return {
      form: { company: "", email: "", address1: "", address2: "" },
    };
  },
  mounted() {
    const el = document.getElementById("billed_info");
    if (!el) return;
    el.addEventListener("shown.bs.modal", () => {
      this.form = { ...this.draftStore.draft.client };
    });
  },
  methods: {
    discard() {
      this.form = { ...this.draftStore.draft.client };
      const el = document.getElementById("billed_info");
      const m = Modal.getInstance(el);
      if (m) m.hide();
    },
    save() {
      this.draftStore.draft.client = { ...this.form };
      this.draftStore.persist();
      const el = document.getElementById("billed_info");
      const m = Modal.getInstance(el);
      if (m) m.hide();
      Swal.fire({ icon: "success", title: "开票对象已更新", timer: 1200, showConfirmButton: false });
    },
  },
};
</script>