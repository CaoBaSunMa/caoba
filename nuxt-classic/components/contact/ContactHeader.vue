<template>
  <header class="contact-header">
    <div class="d-flex align-items-center">
      <div class="dropdown">
        <a
          class="contactapp-title dropdown-toggle link-dark"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <h1>联系人</h1>
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            <span class="dropdown-icon">
              <feather-icon name="users"></feather-icon>
            </span>
            <span>全部联系人</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="dropdown-icon">
              <feather-icon name="star"></feather-icon>
            </span>
            <span>重要</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="dropdown-icon">
              <feather-icon name="archive"></feather-icon>
            </span>
            <span>归档</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="dropdown-icon">
              <feather-icon name="edit"></feather-icon>
            </span>
            <span>待处理</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="dropdown-icon">
              <feather-icon name="trash-2"></feather-icon>
            </span>
            <span>已删除</span>
          </a>
        </div>
      </div>

      <BDropdown
        text="新建"
        variant="outline-secondary"
        size="sm"
        class="ms-3"
        toggle-class="flex-shrink-0 d-lg-inline-block d-none"
      >
        <BDropdownItem href="#">新建联系人</BDropdownItem>
        <BDropdownItem href="#">新建部门</BDropdownItem>
        <BDropdownItem href="#">添加类别</BDropdownItem>
        <BDropdownItem href="#">添加标签</BDropdownItem>
      </BDropdown>
    </div>
    <div class="contact-options-wrap">
      <BDropdown
        variant="flush-dark"
        class="action-drp"
        toggle-class="btn-icon flush-soft-hover no-caret active"
        end
      >
        <template #button-content>
          <span class="icon">
            <feather-icon
              v-if="route.path.match('/apps/contact/contact-list')"
              name="list"
            ></feather-icon>
            <feather-icon
              v-if="route.path.match('/apps/contact/contact-cards')"
              name="grid"
            ></feather-icon>
          </span>
        </template>
        <BDropdownItem class="dropdown-icon" to="/apps/contact/contact-list">
          <span class="dropdown-icon">
            <feather-icon name="list"></feather-icon>
          </span>
          <span>列表视图</span>
        </BDropdownItem>
        <BDropdownItem class="dropdown-icon" to="/apps/contact/contact-cards">
          <span class="dropdown-icon">
            <feather-icon name="grid"></feather-icon>
          </span>
          <span>网格视图</span>
        </BDropdownItem>
        <BDropdownItem class="dropdown-icon" href="#">
          <span class="dropdown-icon">
            <feather-icon name="server"></feather-icon>
          </span>
          <span>紧凑视图</span>
        </BDropdownItem>
      </BDropdown>

      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover d-sm-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-placement="top"
        title=""
        data-bs-original-title="刷新"
      >
        <span class="icon">
          <feather-icon name="refresh-cw"></feather-icon>
        </span>
      </BButton>
      <div class="v-separator d-lg-block d-none"></div>
      <BDropdown
        variant="flush-dark"
        toggle-class="btn-icon btn-rounded flush-soft-hover no-caret d-lg-inline-block d-none ms-sm-0"
        tag="a"
        href="#"
        end
      >
        <template #button-content>
          <span
            class="icon"
            data-bs-toggle="tooltip"
            data-placement="top"
            title=""
            data-bs-original-title="管理联系人"
          >
            <feather-icon name="settings"></feather-icon>
          </span>
        </template>
        <BDropdownItem href="#">管理联系人</BDropdownItem>
        <BDropdownItem href="#">导入</BDropdownItem>
        <BDropdownItem href="#">导出</BDropdownItem>
        <BDropdownDivider class="dropdown-divider"></BDropdownDivider>
        <BDropdownItem href="#">发送消息</BDropdownItem>
        <BDropdownItem href="#">委托访问</BDropdownItem>
      </BDropdown>

      <BDropdown
        variant="flush-dark"
        toggle-class="btn-icon btn-rounded flush-soft-hover no-caret d-lg-inline-block d-none"
        tag="a"
        href="#"
        end
      >
        <template #button-content>
          <span
            class="icon"
            data-bs-toggle="tooltip"
            data-placement="top"
            title=""
            data-bs-original-title="更多"
          >
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </template>
        <BDropdownItem to="/profile">
          <span class="dropdown-icon">
            <feather-icon name="star"></feather-icon>
          </span>
          <span>星标联系人</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>归档联系人</span>
        </BDropdownItem>
        <div class="dropdown-divider"></div>
        <BDropdownItem to="/apps/email">
          <span class="dropdown-icon">
            <feather-icon name="slash"></feather-icon>
          </span>
          <span>屏蔽内容</span>
        </BDropdownItem>
        <BDropdownItem to="/apps/email">
          <span class="dropdown-icon">
            <feather-icon name="external-link"></feather-icon>
          </span>
          <span>反馈</span>
        </BDropdownItem>
      </BDropdown>

      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-none d-xl-block"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="收起"
        @click="layoutStore.toggleTopNav()"
      >
        <span class="icon">
          <feather-icon
            :name="layoutStore.$state.topNavCollapse ? 'chevron-down' : 'chevron-up'"
          />
        </span>
      </BButton>
    </div>
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    />
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useLayoutStore } from "@/stores/layout";
import { useRoute } from "vue-router";

// Props
const props = defineProps({
  showSidebar: Boolean,
});

// Emits
const emit = defineEmits(["toggle-sidebar"]);

// Store and Route
const layoutStore = useLayoutStore();
const route = useRoute();

// Methods
const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>
