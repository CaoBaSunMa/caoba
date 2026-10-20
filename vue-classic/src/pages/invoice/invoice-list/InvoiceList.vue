<template>
  <div class="invoice-body">
    <simplebar class="nicescroll-bar">
      <div class="invoice-list-view">
        <div class="row mb-3">
          <div class="col-7 mb-3">
            <div class="invoice-toolbar-left">
              <select
                class="form-select form-select-sm d-flex align-items-center w-130p"
                v-model="exportAction"
                @change="onExport"
                aria-label="导出与操作"
              >
                <option value="" disabled>操作</option>
                <option value="csv">导出为 CSV</option>
                <option value="pdf">导出为 PDF</option>
                <option value="mail">发送消息</option>
                <option value="delegate">授权访问</option>
              </select>
            </div>
          </div>
          <div class="col-5 mb-3">
            <div class="invoice-toolbar-right">
              <div class="dataTables_filter">
                <label>
                  <input
                    class="form-control form-control-sm"
                    type="search"
                    placeholder="搜索"
                    v-model="searchTerm"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="table-responsive">
          <HkDataTable
            :columns="columns"
            :data="tableData"
            :selectable="true"
            :searchQuery="searchTerm"
            showPagination
            classes="nowrap w-100 mb-5"
            @selection-change="onSelectionChange"
          >
            <!-- 发票编号 -->
            <template v-slot:invoice="{ row }">
              <a href="javascript:void(0);" class="table-link-text link-high-em" @click="editRow(row)">
                {{ row.invoiceNumber }}
              </a>
            </template>

            <!-- 收票方 -->
            <template v-slot:reciplent="{ row }">
              <div class="text-dark">{{ row.clientName }}</div>
              <div class="fs-7">{{ row.clientEmail }}</div>
            </template>

            <!-- 状态 -->
            <template v-slot:status="{ row }">
              <span :class="['badge', row.statusInfo.bg]" :style="row.statusInfo.color ? { color: '#212529' } : null">
                {{ row.statusInfo.title }}
              </span>
              <span v-if="row.statusInfo.text" class="fs-7 text-muted d-block">{{ row.statusInfo.text }}</span>
            </template>

            <!-- 操作 -->
            <template v-slot:actions="{ row }">
              <div class="d-flex align-items-center">
                <div class="btn-group selectable-split-dropdown" v-if="row.filter !== 'deleted'">
                  <button type="button" class="btn btn-outline-light btn-dyn-text w-100p" @click="editRow(row)">
                    编辑
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="sr-only">切换下拉菜单</span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0);" @click="remindRow(row)">提醒</a>
                    <a class="dropdown-item" href="javascript:void(0);" @click="markSent(row)">已发送</a>
                    <a class="dropdown-item" href="javascript:void(0);" @click="markPaid(row)">已支付</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="javascript:void(0);" @click="editRow(row)">编辑</a>
                    <a class="dropdown-item" href="javascript:void(0);" @click="archiveRow(row)">
                      {{ row.archived ? "取消归档" : "归档" }}
                    </a>
                  </div>
                </div>
                <div class="btn-group selectable-split-dropdown" v-else>
                  <button type="button" class="btn btn-outline-light btn-dyn-text w-100p" @click="restoreRow(row)">
                    恢复
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-light dropdown-toggle dropdown-toggle-split me-3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="sr-only">切换下拉菜单</span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0);" @click="restoreRow(row)">从回收站恢复</a>
                    <a class="dropdown-item" href="javascript:void(0);" @click="permanentDeleteRow(row)">永久删除</a>
                  </div>
                </div>
                <div class="d-flex">
                  <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    :data-bs-original-title="row.filter === 'deleted' ? '恢复' : row.archived ? '取消归档' : '归档'"
                    href="javascript:void(0);"
                    @click="row.filter === 'deleted' ? restoreRow(row) : archiveRow(row)"
                  >
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon :name="row.filter === 'deleted' ? 'rotate-ccw' : 'archive'"></feather-icon>
                      </span>
                    </span>
                  </a>
                  <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="编辑"
                    href="javascript:void(0);"
                    @click="editRow(row)"
                  >
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="edit"></feather-icon>
                      </span>
                    </span>
                  </a>
                  <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="删除"
                    href="javascript:void(0);"
                    @click="row.filter === 'deleted' ? permanentDeleteRow(row) : deleteRow(row)"
                  >
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="trash-2"></feather-icon>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </template>
          </HkDataTable>
        </div>

        <div v-if="!tableData.length && !invoiceStore.loading" class="text-center text-muted py-5">
          该视图暂无发票
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import HkDataTable from "@/hk-components/@hkDataTable/HkDataTable.vue";
import { useInvoiceStore } from "@/stores/invoiceStore";
import { exportInvoicesCSV, printPage, statusInfo, activityText, formatMoney, formatDateStr } from "@/utils/invoiceExport";
import Swal from "sweetalert2";

export default {
  name: "InvoiceList",
  components: {
    HkDataTable,
  },
  setup() {
    const invoiceStore = useInvoiceStore();
    return { invoiceStore };
  },
  data() {
    return {
      searchTerm: "",
      exportAction: "",
      selectedIds: [],
      columns: [
        { accessor: "invoiceNumber", title: "发票编号", sort: true, cellFormatter: "invoice" },
        { accessor: "dateText", title: "日期", sort: true },
        { accessor: "reciplent", title: "收票方", sort: true, cellFormatter: "reciplent" },
        { accessor: "status", title: "状态", sort: false, cellFormatter: "status" },
        { accessor: "activity", title: "活动", sort: true },
        { accessor: "amountText", title: "金额", sort: true },
        { accessor: "actions", title: "操作", cellFormatter: "actions" },
      ],
    };
  },
  computed: {
    tableData() {
      return this.invoiceStore.invoices.map((inv) => ({
        ...inv,
        dateText: formatDateStr(inv.issueDate || inv.createdAt),
        amountText: formatMoney(inv.total, inv.currency),
        statusInfo: statusInfo(inv),
        activity: activityText(inv),
        filter: this.invoiceStore.filter,
      }));
    },
    selectedRows() {
      return this.tableData.filter((r) => this.selectedIds.includes(r.id));
    },
  },
  watch: {
    "invoiceStore.filter"() {
      this.fetch();
    },
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.invoiceStore.fetchInvoices();
    },
    onSelectionChange(ids) {
      this.selectedIds = ids || [];
    },
    toastSuccess(title) {
      Swal.fire({ icon: "success", title, timer: 1500, showConfirmButton: false });
    },
    actionList() {
      return this.selectedIds.length ? this.selectedRows : this.tableData;
    },

    /* 工具栏导出/消息/授权 */
    onExport() {
      const action = this.exportAction;
      if (!action) return;
      const list = this.actionList();
      if (action === "csv") {
        if (!list.length) {
          Swal.fire({ icon: "info", title: "暂无发票", timer: 1500, showConfirmButton: false });
        } else {
          exportInvoicesCSV(list);
        }
      } else if (action === "pdf") {
        printPage();
      } else if (action === "mail") {
        if (!list.length) {
          Swal.fire({ icon: "info", title: "暂无发票", timer: 1500, showConfirmButton: false });
        } else {
          const emails = list.map((i) => i.clientEmail).filter(Boolean);
          const no = list.length === 1 ? list[0].invoiceNumber : `${list.length} 张发票`;
          window.location.href = `mailto:${emails.join(";")}?subject=${encodeURIComponent("发票通知 - " + no)}`;
        }
      } else if (action === "delegate") {
        this.$emit("delegate", this.selectedIds.length ? `所选 ${this.selectedIds.length} 张发票` : this.invoiceStore.filterLabel);
      }
      this.exportAction = "";
    },

    /* 行动作 */
    editRow(row) {
      this.$router.push(`/apps/invoice/create-invoice?edit=${row.id}`);
    },
    remindRow(row) {
      const due = row.dueDate ? formatDateStr(row.dueDate) : "未设置到期日";
      Swal.fire({
        icon: "info",
        title: `提醒发送给 ${row.clientName || "客户"}`,
        html: `发票 <b>${row.invoiceNumber}</b> 将于 <b>${due}</b> 到期，金额 <b>${formatMoney(row.total, row.currency)}</b>。`,
        confirmButtonText: "知道了",
      });
    },
    async markSent(row) {
      await this.invoiceStore.updateStatus(row.id, "SENT");
      this.toastSuccess("已标记为已发送");
    },
    async markPaid(row) {
      await this.invoiceStore.updateStatus(row.id, "PAID");
      this.toastSuccess("已标记为已支付");
    },
    async archiveRow(row) {
      await this.invoiceStore.toggleArchive(row);
      this.toastSuccess(row.archived ? "已取消归档" : "已归档");
    },
    deleteRow(row) {
      Swal.fire({
        title: "移入回收站",
        text: `确定将发票 ${row.invoiceNumber} 移入回收站吗？`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "移入回收站",
        cancelButtonText: "取消",
      }).then(async (r) => {
        if (!r.isConfirmed) return;
        await this.invoiceStore.softDelete(row);
        this.toastSuccess("已移入回收站");
      });
    },
    restoreRow(row) {
      this.invoiceStore.restoreFromTrash(row);
      this.toastSuccess("已恢复");
    },
    permanentDeleteRow(row) {
      Swal.fire({
        title: "永久删除",
        text: `确定永久删除发票 ${row.invoiceNumber} 吗？此操作不可撤销。`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "永久删除",
        cancelButtonText: "取消",
        confirmButtonColor: "#e74c3c",
      }).then(async (r) => {
        if (!r.isConfirmed) return;
        await this.invoiceStore.permanentDelete(row);
        this.toastSuccess("已永久删除");
      });
    },
  },
};
</script>