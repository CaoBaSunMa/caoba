<template>
  <div class="invoiceapp-detail-wrap">
    <InvoiceListHeader
      :showSidebar="showSidebar"
      @toggle-sidebar="toggleSidebar"
      @recurring="openRecurring"
      @open-settings="openSettings"
    />
    <InvoiceList @delegate="openDelegate" />
    <InvoiceDelegateAccess ref="delegateModal" />
  </div>
</template>

<script>
import InvoiceList from "./InvoiceList.vue";
import InvoiceListHeader from "./InvoiceListHeader.vue";
import InvoiceDelegateAccess from "./InvoiceDelegateAccess.vue";
import { useInvoiceStore } from "@/stores/invoiceStore";
import Swal from "sweetalert2";

export default {
  components: {
    InvoiceListHeader,
    InvoiceList,
    InvoiceDelegateAccess,
  },
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const invoiceStore = useInvoiceStore();
    return { invoiceStore };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    openDelegate(context) {
      if (this.$refs.delegateModal) this.$refs.delegateModal.show(context);
    },
    openSettings() {
      const el = document.getElementById("edit_info");
      if (el) {
        import("bootstrap").then(({ Modal }) => Modal.getOrCreateInstance(el).show());
      }
    },
    /* 周期性发票：以首条发票为模板生成连续草稿 */
    openRecurring() {
      if (!this.invoiceStore.invoices.length) {
        Swal.fire({ icon: "info", title: "暂无发票", text: "请先创建一张发票后再生成周期性发票。", confirmButtonText: "知道了" });
        return;
      }
      Swal.fire({
        title: "生成周期性发票",
        html:
          '<div class="text-start"><label class="form-label">重复频率</label>' +
          '<select id="swal-freq" class="form-select mb-3">' +
          "<option>每周</option><option>每月</option><option>每季度</option></select>" +
          '<label class="form-label">生成期数</label>' +
          '<input id="swal-months" class="form-control" type="number" min="1" max="12" value="3" />' +
          "</div>",
        showCancelButton: true,
        confirmButtonText: "生成",
        cancelButtonText: "取消",
        preConfirm: async () => {
          const freq = document.getElementById("swal-freq").value;
          const months = parseInt(document.getElementById("swal-months").value, 10) || 3;
          try {
            const created = await this.invoiceStore.createRecurring(freq, months);
            Swal.fire({
              icon: "success",
              title: `已生成 ${created.length} 张周期性发票（草稿）`,
              timer: 1800,
              showConfirmButton: false,
            });
            this.invoiceStore.fetchInvoices();
          } catch (e) {
            Swal.showValidationMessage("生成失败：" + (e.response?.data?.message || e.message || "未知错误"));
          }
        },
      });
    },
  },
};
</script>