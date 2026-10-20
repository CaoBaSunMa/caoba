<template>
  <header class="email-header">
    <BButton
      id="back_email_list"
      variant="flush-dark"
      size="sm"
      class="btn-icon btn-rounded flush-soft-hover back-user-list"
      href="#"
      @click="backToContactList"
    >
      <span class="icon">
        <feather-icon name="chevron-left"></feather-icon>
      </span>
    </BButton>
    <div class="email-options-wrap">
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="添加标记"
      >
        <span class="icon">
          <feather-icon name="flag"></feather-icon>
        </span>
      </BButton>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="归档"
      >
        <span class="icon">
          <feather-icon name="archive"></feather-icon>
        </span>
      </BButton>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="文件夹"
      >
        <span class="icon">
          <feather-icon name="folder"></feather-icon>
        </span>
      </BButton>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="稍后提醒"
      >
        <span class="icon">
          <feather-icon name="clock"></feather-icon>
        </span>
      </BButton>
      <div class="v-separator"></div>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover ms-0"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="打印"
      >
        <span class="icon">
          <feather-icon name="printer"></feather-icon>
        </span>
      </BButton>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="删除"
      >
        <span class="icon">
          <feather-icon name="trash-2"></feather-icon>
        </span>
      </BButton>
    </div>
    <div class="email-options-wrap">
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover no-caret d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="上一封"
      >
        <span class="icon">
          <feather-icon name="chevron-left"></feather-icon>
        </span>
      </BButton>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="下一封"
      >
        <span class="icon">
          <feather-icon name="chevron-right"></feather-icon>
        </span>
      </BButton>

      <BDropdown
        toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
        variant="flush-dark"
      >
        <template #button-content>
          <span class="icon">
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </template>
        <BDropdownItem href="#"> 标为已读 </BDropdownItem>
        <BDropdownItem href="#"> 标为重要 </BDropdownItem>
        <BDropdownItem href="#"> 免打扰 </BDropdownItem>
        <BDropdownItem href="#"> 删除 </BDropdownItem>
        <BDropdownItem href="#">屏蔽联系人 </BDropdownItem>
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
  </header>
</template>

<script setup>
import { useEmailStore } from "@/stores/emailStore";
import { useLayoutStore } from "@/stores/layout";

const emailStore = useEmailStore(); // Using the email store
const layoutStore = useLayoutStore();

const backToContactList = () => {
  layoutStore.toggleTopNav();
  emailStore.toggleOpenEmail();
};
</script>
