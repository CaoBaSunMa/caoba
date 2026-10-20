<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'invoiceapp-wrap',
        { 'invoiceapp-sidebar-toggle': showSidebar },
        { 'invoiceapp-setting-active': showSettingPannel },
      ]"
    >
      <InvoiceSidebar
        @recurring="openRecurring"
        @edit-info="openEditInfo"
      />
      <div class="invoiceapp-content">
        <RouterView v-slot="{ Component }">
          <component
            :is="Component"
            :showSidebar="showSidebar"
            @toggle-sidebar="toggleSidebar"
            @toggle-setting-pannel="toggleSettingPannel"
          />
        </RouterView>
      </div>

      <!-- Edit Info for create-invoice page -->
      <EditInfo />
      <!-- /Edit Info -->

      <!-- Billed Edit Info for create-invoice page -->
      <BilledTo />
      <!-- /Billed Edit Info -->
    </div>
  </div>
</template>

<script>
import InvoiceSidebar from "./InvoiceSidebar.vue";
import EditInfo from "./create-invoice/EditInfo.vue";
import BilledTo from "./create-invoice/BilledTo.vue";
import { useInvoiceStore } from "@/stores/invoiceStore";
import Swal from "sweetalert2";
import { Modal } from "bootstrap";

export default {
  components: {
    InvoiceSidebar,
    EditInfo,
    BilledTo,
  },
  setup() {
    const invoiceStore = useInvoiceStore();
    return { invoiceStore };
  },
  data() {
    return {
      showSidebar: false,
      showSettingPannel: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    toggleSettingPannel() {
      this.showSettingPannel = !this.showSettingPannel;
    },
    openEditInfo() {
      const el = document.getElementById("edit_info");
      if (el && window.bootstrap) {
        Modal.getOrCreateInstance(el).show();
      } else if (el) {
        import("bootstrap").then(({ Modal: M }) => M.getOrCreateInstance(el).show());
      }
    },
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