<template>
  <div
    id="invoice_delegate_access"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">授权发票访问</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="text-muted mb-4">
            把“{{ contextText }}”的访问权委托给同事，对方将通过邮件收到授权链接。
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
                  <div class="fs-7 text-muted">{{ formatDate(d.ts) }} · {{ d.context }}</div>
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
import { Modal } from "bootstrap";
import Swal from "sweetalert2";

const KEY = "caoba.invoice-delegations.v1";

function loadList() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch (e) {
    return [];
  }
}

export default {
  name: "InvoiceDelegateAccess",
  data() {
    return {
      form: { email: "", access: "view", message: "" },
      context: "发票",
    };
  },
  computed: {
    delegationList() {
      return loadList();
    },
    contextText() {
      return this.context || "发票";
    },
  },
  methods: {
    show(context) {
      this.context = context || "所选发票";
      this.form = { email: "", access: "view", message: "" };
      const el = document.getElementById("invoice_delegate_access");
      if (el && window.bootstrap) {
        Modal.getOrCreateInstance(el).show();
      } else if (el) {
        import("bootstrap").then(({ Modal: M }) => M.getOrCreateInstance(el).show());
      }
    },
    hide() {
      const el = document.getElementById("invoice_delegate_access");
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
    grant() {
      const email = (this.form.email || "").trim();
      if (!email) return;
      const list = loadList();
      list.unshift({
        id: "dg" + Date.now() + Math.random().toString(36).slice(2, 6),
        email,
        access: this.form.access,
        message: (this.form.message || "").trim(),
        context: this.context,
        ts: new Date().toISOString(),
      });
      localStorage.setItem(KEY, JSON.stringify(list));
      const link = `${location.origin}/apps/invoice/invoice-list`;
      const body = `你好，\n\n同事将发票「${this.context}」的访问权（${this.accessText(this.form.access)}）委托给你。\n打开以下链接查看：\n${link}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("发票访问权委托 - " + this.context)}&body=${encodeURIComponent(body)}`;
      this.hide();
      Swal.fire({ icon: "success", title: "授权已发送", timer: 1500, showConfirmButton: false });
    },
    revoke(d) {
      const list = loadList().filter((x) => x.id !== d.id);
      localStorage.setItem(KEY, JSON.stringify(list));
      Swal.fire({ icon: "success", title: "已撤销授权", timer: 1200, showConfirmButton: false });
    },
  },
};
</script>