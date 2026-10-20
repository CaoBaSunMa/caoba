<template>
  <div
    id="delegate_access"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">委托访问权</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="text-muted mb-4">
            把「{{ nameText }}」的访问权委托给同事，对方将通过邮件收到授权链接。
          </p>
          <form @submit.prevent="grant">
            <div class="row gx-3">
              <div class="col-sm-6 form-group">
                <label class="form-label">授权邮箱</label>
                <input
                  class="form-control"
                  type="email"
                  placeholder="同事的邮箱"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="col-sm-6 form-group">
                <label class="form-label">访问权限</label>
                <select class="form-select" v-model="form.access">
                  <option value="view">仅查看</option>
                  <option value="edit">协作编辑</option>
                  <option value="manage">完全管理</option>
                </select>
              </div>
              <div class="col-sm-12 form-group">
                <label class="form-label">留言（可选）</label>
                <textarea class="form-control" rows="2" placeholder="附加说明" v-model="form.message"></textarea>
              </div>
            </div>
            <div class="d-flex gap-2">
              <button type="submit" class="btn btn-primary">发送授权</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            </div>
          </form>

          <div v-if="delegationList.length" class="mt-4">
            <div class="title title-xs title-wth-divider text-primary text-uppercase my-3">
              <span>已授权（{{ delegationList.length }}）</span>
            </div>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex align-items-center justify-content-between px-0"
                v-for="d in delegationList"
                :key="d.id"
              >
                <div>
                  <span class="text-dark">{{ d.email }}</span>
                  <span class="badge badge-soft-primary ms-2">{{ accessText(d.access) }}</span>
                  <div class="fs-7 text-muted">{{ formatDate(d.ts) }}</div>
                </div>
                <button class="btn btn-xs btn-icon btn-flush-dark btn-rounded" title="撤销授权" @click="revoke(d)">
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="x"></feather-icon>
                    </span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useContactStore } from "@/stores/contactStore";
import { useContactDetailStore } from "@/stores/contactDetailStore";
import { fullName } from "@/utils/export";
import Swal from "sweetalert2";
import { Modal } from "bootstrap";

export default {
  name: "DelegateAccess",
  setup() {
    const contactStore = useContactStore();
    const detailStore = useContactDetailStore();
    return { contactStore, detailStore };
  },
  data() {
    return {
      form: { email: "", access: "view", message: "" },
    };
  },
  computed: {
    current() {
      return this.contactStore.current;
    },
    nameText() {
      return this.current ? fullName(this.current) : "";
    },
    delegationList() {
      if (!this.current) return [];
      return this.detailStore.extras(this.current.id).delegations;
    },
  },
  methods: {
    show() {
      this.form = { email: "", access: "view", message: "" };
      const el = document.getElementById("delegate_access");
      if (el) Modal.getOrCreateInstance(el).show();
    },
    hide() {
      const el = document.getElementById("delegate_access");
      const m = Modal.getInstance(el);
      if (m) m.hide();
    },
    accessText(a) {
      return { view: "仅查看", edit: "协作编辑", manage: "完全管理" }[a] || "仅查看";
    },
    formatDate(ts) {
      if (!ts) return "";
      const d = new Date(ts);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
    },
    async grant() {
      const email = (this.form.email || "").trim();
      if (!email || !this.current) return;
      this.detailStore.addDelegation(this.current.id, {
        email,
        access: this.form.access,
        message: (this.form.message || "").trim(),
      });
      this.detailStore.logActivity(this.current.id, "share-2", `将「${this.nameText}」的访问权委托给 ${email}`);
      const link = `${location.origin}/apps/contact/contact-card`;
      const body = `你好，\n\n${email} 已将联系人「${this.nameText}」的访问权（${this.accessText(this.form.access)}）委托给你。\n打开以下链接查看：\n${link}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("联系人访问权委托 - " + this.nameText)}&body=${encodeURIComponent(body)}`;
      this.hide();
      Swal.fire({ icon: "success", title: "授权已发送", timer: 1500, showConfirmButton: false });
    },
    async revoke(d) {
      if (!this.current) return;
      this.detailStore.removeDelegation(this.current.id, d.id);
      this.detailStore.logActivity(this.current.id, "x-circle", `撤销了 ${d.email} 的访问权`);
      Swal.fire({ icon: "success", title: "已撤销授权", timer: 1200, showConfirmButton: false });
    },
  },
};
</script>