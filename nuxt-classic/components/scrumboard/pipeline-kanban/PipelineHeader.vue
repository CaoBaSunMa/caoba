<template>
  <header class="taskboard-header">
    <div class="d-flex align-items-center flex-1">
      <a class="taskboardapp-title link-dark" href="#">
        <h1>销售流程</h1>
      </a>
      <BButton
        variant="primary"
        class="ms-3 d-xxl-inline-block d-none flex-shrink-0"
        v-b-modal.add_task_list
      >
        新建交易
      </BButton>
      <BButtonGroup class="d-xxl-inline-flex d-none mx-3">
        <BButton variant="outline-light" class="btn-icon">
          <span class="icon">
            <feather-icon name="trello"></feather-icon>
          </span>
        </BButton>
        <BButton variant="outline-light" class="btn-icon">
          <span class="icon">
            <feather-icon name="list"></feather-icon>
          </span>
        </BButton>
        <BButton variant="outline-light" class="btn-icon">
          <span class="icon">
            <feather-icon name="calendar"></feather-icon>
          </span>
        </BButton>
      </BButtonGroup>
    </div>
    <div class="d-md-flex flex-shrink-0 mx-3 d-none">
      <div class="d-flex align-items-center">
        <span class="d-md-inline d-none">流程价值：</span>
        <span class="text-dark fs-5 fw-medium ps-2">$23,706</span>
      </div>
      <div class="v-separator"></div>
      <div class="d-flex align-items-center">
        <span class="d-md-inline d-none">总价值：</span>
        <span class="text-dark fs-5 fw-medium ps-2">$100,000</span>
      </div>
    </div>
    <div class="taskboard-options-wrap flex-1 justify-content-end">
      <BForm @submit.prevent class="leave-search d-lg-inline-block d-none" role="search">
        <BFormInput type="text" placeholder="搜索卡片" />
      </BForm>
      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none"
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
      </BButton>
    </div>
  </header>
</template>

<script setup>
import { useLayoutStore } from "@/stores/layout";

const layoutStore = useLayoutStore();
</script>
