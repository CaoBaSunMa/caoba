<template>
  <header class="email-header">
    <a
      id="back_email_list"
      class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover back-user-list"
      href="#"
      @click="backToContactList"
    >
      <span class="icon">
        <span class="feather-icon">
          <feather-icon name="chevron-left"></feather-icon>
        </span>
      </span>
    </a>
    <div class="email-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="添加标记"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="flag"></feather-icon>
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="归档"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="文件夹"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="folder"></feather-icon>
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-xl-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="稍后提醒"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="clock"></feather-icon>
          </span>
        </span>
      </a>
      <div class="v-separator"></div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover ms-0"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="打印"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="printer"></feather-icon>
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="删除"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="trash-2"></feather-icon>
          </span>
        </span>
      </a>
    </div>
    <div class="email-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-xl-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="上一封"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="chevron-left"></feather-icon>
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover emailapp-info-toggle d-xl-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="下一封"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="chevron-right"></feather-icon>
          </span>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#">标为已读</a>
        <a class="dropdown-item" href="#">标为重要</a>
        <a class="dropdown-item" href="#">免打扰</a>
        <a class="dropdown-item" href="#">删除</a>
        <a class="dropdown-item" href="#">屏蔽联系人</a>
      </div>
      <a
        class="btn btn-flush-dark btn-icon btn-rounded flush-soft-hover hk-navbar-togglable"
        @click="layoutStore.toggleTopNav()"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="收起"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="chevron-down" v-if="layoutStore.$state.topNavCollapse" />
            <feather-icon name="chevron-up" v-else />
          </span>
        </span>
      </a>
    </div>
  </header>
</template>

<script>
import { useEmailStore } from "@/stores/emailStore";
import { useLayoutStore } from "@/stores/layout";

export default {
  setup() {
    const emailStore = useEmailStore(); // Using the email store
    const layoutStore = useLayoutStore();

    const backToContactList = () => {
      layoutStore.toggleTopNav();
      emailStore.toggleOpenEmail();
    };

    return {
      backToContactList,
      layoutStore,
    };
  },
};
</script>
