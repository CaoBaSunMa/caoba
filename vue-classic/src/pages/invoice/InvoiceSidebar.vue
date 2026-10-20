<template>
  <nav class="invoiceapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <button
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          class="btn btn-primary btn-rounded btn-block mb-4 dropdown-toggle"
        >
          创建
        </button>
        <div role="menu" class="dropdown-menu">
          <router-link class="dropdown-item" to="/apps/invoice/create-invoice"
            >创建发票</router-link
          >
          <router-link class="dropdown-item" to="/apps/invoice/create-invoice?kind=estimate"
            >创建估算单</router-link
          >
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item" v-for="item in filterItems" :key="item.key">
              <a
                class="nav-link"
                :class="{ active: invoiceStore.filter === item.key }"
                href="javascript:void(0);"
                @click="setFilter(item.key)"
              >
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon :name="item.icon"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">{{ item.label }}</span>
                <span v-if="item.count != null" class="badge badge-soft-primary ms-auto">{{ item.count }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-gap"></div>
        <div class="nav-header">
          <span>管理</span>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="goManage">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="upload"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">管理发票</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="goRecurring">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="download"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">周期性发票</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="goEstimateList">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="layers"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">管理估算单</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="goContacts">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="book"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">管理联系人</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="goTemplates">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="save"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">已保存模板</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-gap"></div>
        <div class="nav-header">
          <span>信息</span>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="openMerchantInfo">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="users"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">商家信息</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="openTaxInfo">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="star"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">税务信息</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="invoiceapp-fixednav">
      <div class="hk-toolbar">
        <ul class="nav nav-light">
          <li class="nav-item nav-link">
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="设置"
              href="javascript:void(0);"
              @click="openMerchantInfo"
              ><span class="icon">
                <span class="feather-icon">
                  <feather-icon name="settings"></feather-icon>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="javascript:void(0);"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="归档"
              @click="setFilter('archived')"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="archive"></feather-icon>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="javascript:void(0);"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="帮助"
              @click="openHelp"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="book"></feather-icon>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--/ Sidebar Fixnav-->
  </nav>
</template>

<script>
import { useInvoiceStore } from "@/stores/invoiceStore";
import { useInvoiceDraftStore } from "@/stores/invoiceDraftStore";
import Swal from "sweetalert2";

export default {
  name: "InvoiceSidebar",
  setup() {
    const invoiceStore = useInvoiceStore();
    const draftStore = useInvoiceDraftStore();
    return { invoiceStore, draftStore };
  },
  data() {
    return {
      filterItems: [
        { key: "all", label: "全部发票", icon: "users" },
        { key: "sent", label: "已发送", icon: "star" },
        { key: "archived", label: "已归档", icon: "archive" },
        { key: "pending", label: "待处理", icon: "edit" },
        { key: "deleted", label: "已删除", icon: "trash-2" },
      ],
    };
  },
  computed: {},
  methods: {
    setFilter(f) {
      this.invoiceStore.setFilter(f);
      this.$router.push("/apps/invoice/invoice-list");
    },
    goManage() {
      this.invoiceStore.setFilter("all");
      this.$router.push("/apps/invoice/invoice-list");
    },
    goRecurring() {
      this.$emit("recurring");
    },
    goEstimateList() {
      Swal.fire({
        icon: "info",
        title: "估算单入口",
        text: "估算单与发票共用创建流程：请点击「创建 → 创建估算单」新建，并可在发票列表中通过「估算」徽标识别。",
        confirmButtonText: "去创建估算单",
      }).then((r) => {
        if (r.isConfirmed) {
          this.$router.push("/apps/invoice/create-invoice?kind=estimate");
        }
      });
    },
    goContacts() {
      window.location.href = "/apps/contact/contact-list";
      this.$router.push("/apps/contact/contact-list");
    },
    goTemplates() {
      this.$router.push("/apps/invoice/invoice-templates");
    },
    openMerchantInfo() {
      this.$emit("edit-info");
    },
    openTaxInfo() {
      const currency = this.draftStore.draft.settings.currency;
      Swal.fire({
        icon: "info",
        title: "税务信息",
        html:
          "<div class='text-start'>" +
          "<p class='mb-2'><b>纳税人识别号：</b>TIN-88-527-210</p>" +
          "<p class='mb-2'><b>注册地址：</b>4747, Pearl Street, Washington DC 42156</p>" +
          `<p class='mb-2'><b>默认币种：</b>${currency === "USD" ? "美元（$ USD）" : currency === "INR" ? "印度卢比（₹）" : "人民币（¥ CNY）"}</p>` +
          "<p class='mb-0'><b>税率设定：</b>可在创建发票时调整</p>" +
          "</div>",
        confirmButtonText: "知道了",
      });
    },
    openHelp() {
      Swal.fire({
        icon: "info",
        title: "发票模块帮助",
        html:
          "<div class='text-start'>" +
          "<p class='mb-1'>· <b>创建</b>：新建发票或估算单</p>" +
          "<p class='mb-1'>· <b>列表</b>：支持搜索、筛选、导出、消息、授权</p>" +
          "<p class='mb-1'>· <b>模板</b>：选择起始模板开始创建</p>" +
          "<p class='mb-1'>· <b>预览</b>：预览当前草稿并打印/下载</p>" +
          "</div>",
        confirmButtonText: "知道了",
      });
    },
  },
};
</script>