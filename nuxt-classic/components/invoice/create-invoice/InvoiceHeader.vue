<template>
  <header class="invoice-header">
    <div class="d-flex align-items-center">
      <BDropdown variant="link" toggle-class="invoiceapp-title text-dark p-0 ">
        <template #button-content>
          <h1>标准模板</h1>
        </template>
        <BDropdownItem href="#">简约模板</BDropdownItem>
        <BDropdownItem href="#">基础模板</BDropdownItem>
        <BDropdownItem href="#">经典模板</BDropdownItem>
        <BDropdownItem href="#">形式发票模板</BDropdownItem>
        <BDropdownItem href="#">贸易模板</BDropdownItem>
        <BDropdownItem href="#">临时模板</BDropdownItem>
        <BDropdownItem href="#">主要模板</BDropdownItem>
        <BDropdownItem href="#">马特·奥佩尔模板</BDropdownItem>
        <BDropdownItem href="#">自由职业者模板</BDropdownItem>
      </BDropdown>
    </div>
    <div class="invoice-options-wrap">
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover invoiceapp-setting-toggle"
        href="#"
        @click="toggleSettingPannel"
      >
        <span class="icon">
          <feather-icon name="sliders"></feather-icon>
        </span>
      </BButton>
      <BButton
        variant="outline-secondary"
        to="/apps/invoice/preview"
        class="flex-shrink-0 d-md-inline-block d-none"
      >
        预览
      </BButton>

      <BButton variant="primary" href="#" class="ms-2 d-sm-inline-block d-none">
        保存
      </BButton>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-md-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="折叠"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="icon">
          <feather-icon
            :name="layoutStore.$state.topNavCollapse ? 'chevron-down' : 'chevron-up'"
          />
        </span>
      </a>
    </div>
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script setup>
import { useLayoutStore } from "@/stores/layout";

// Define props and emits
const props = defineProps({
  showSidebar: Boolean,
});
const emit = defineEmits(["toggle-sidebar", "toggle-setting-pannel"]);

// Store reference
const layoutStore = useLayoutStore();

// Method to emit toggle-sidebar event
const toggleSidebar = () => {
  emit("toggle-sidebar");
};

// Method to emit toggle-setting-pannel event
const toggleSettingPannel = () => {
  emit("toggle-setting-pannel");
};
</script>
