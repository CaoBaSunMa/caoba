<template>
  <header class="invoice-header">
    <div class="d-flex align-items-center">
      <BDropdown variant="link" toggle-class="invoiceapp-title text-dark p-0 ">
        <template #button-content>
          <h1>全部发票</h1>
        </template>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="users"></feather-icon>
          </span>
          <span>全部发票</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="star"></feather-icon>
          </span>
          <span>已发送</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>归档</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="edit"></feather-icon>
          </span>
          <span>待处理</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="trash-2"></feather-icon>
          </span>
          <span>已删除</span>
        </BDropdownItem>
      </BDropdown>
    </div>
    <div class="invoice-options-wrap">
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover no-caret d-lg-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="刷新"
      >
        <span class="btn-icon-wrap">
          <feather-icon name="refresh-cw"></feather-icon>
        </span>
      </BButton>
      <div class="v-separator d-lg-inline-block d-none"></div>
      <BDropdown
        variant="flush-dark"
        toggle-class="btn-icon btn-rounded flush-soft-hover no-caret ms-0 d-sm-inline-block d-none"
        end
      >
        <template #button-content>
          <span class="btn-icon-wrap">
            <feather-icon name="settings"></feather-icon>
          </span>
        </template>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="upload"></feather-icon>
          </span>
          <span>管理发票</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="download"></feather-icon>
          </span>
          <span>周期性发票</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="layers"></feather-icon>
          </span>
          <span>管理估算单</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="save"></feather-icon>
          </span>
          <span>已保存模板</span>
        </BDropdownItem>
      </BDropdown>

      <BDropdown
        variant="flush-dark"
        toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
        end
      >
        <template #button-content>
          <span class="btn-icon-wrap">
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </template>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="settings"></feather-icon>
          </span>
          <span>设置</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="slash"></feather-icon>
          </span>
          <span>屏蔽内容</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="external-link"></feather-icon>
          </span>
          <span>反馈</span>
        </BDropdownItem>
      </BDropdown>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-lg-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="折叠"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="btn-icon-wrap">
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
const emit = defineEmits(["toggle-sidebar"]);

// Store reference
const layoutStore = useLayoutStore();

// Toggle sidebar function
const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>
