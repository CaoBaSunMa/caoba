<template>
  <header class="invoice-header">
    <div class="d-flex align-items-center">
      <a
        class="invoiceapp-title dropdown-toggle link-dark"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <h1>{{ draftStore.draft.template }}模板</h1>
      </a>
      <div class="dropdown-menu dropdown-menu-right">
        <a
          class="dropdown-item"
          href="javascript:void(0);"
          v-for="t in templates"
          :key="t"
          :class="{ active: draftStore.draft.template === t }"
          @click="pickTemplate(t)"
        >
          {{ t }}模板
        </a>
      </div>
    </div>
    <div class="invoice-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover invoiceapp-setting-toggle"
        href="javascript:void(0);"
        @click="toggleSettingPannel"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="sliders"></feather-icon>
          </span>
        </span>
      </a>
      <a
        href="javascript:void(0);"
        class="btn btn-outline-secondary flex-shrink-0 d-md-inline-block d-none"
        @click="$emit('preview')"
        >预览</a
      >
      <a
        href="javascript:void(0);"
        class="btn btn-primary ms-2 d-sm-inline-block d-none"
        :class="{ disabled: saving }"
        @click="$emit('save')"
      >
        <span v-if="saving" class="spinner-border spinner-border-sm me-1"></span>
        {{ draftStore.isEstimate ? "保存估算单" : "保存" }}
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-md-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="折叠"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="icon">
          <feather-icon name="chevron-down" v-if="layoutStore.$state.topNavCollapse" />
          <feather-icon name="chevron-up" v-else />
        </span>
      </a>
    </div>
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script>
import { useLayoutStore } from "@/stores/layout";
import { useInvoiceDraftStore } from "@/stores/invoiceDraftStore";

export default {
  name: "InvoiceHeader",
  props: {
    showSidebar: Boolean,
    saving: Boolean,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const draftStore = useInvoiceDraftStore();
    return {
      layoutStore,
      draftStore,
    };
  },
  emits: ["toggle-sidebar", "toggle-setting-pannel", "save", "preview", "template-change"],
  data() {
    return {
      templates: ["标准", "简约", "基础", "经典", "形式发票", "贸易", "临时", "主要", "马特·奥佩尔", "自由职业者", "设计师", "服务"],
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    toggleSettingPannel() {
      this.$emit("toggle-setting-pannel");
    },
    pickTemplate(t) {
      this.draftStore.patch({ template: t });
      this.$emit("template-change", t);
    },
  },
};
</script>