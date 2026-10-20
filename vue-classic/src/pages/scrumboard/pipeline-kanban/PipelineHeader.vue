<template>
  <header class="taskboard-header">
    <div class="d-flex align-items-center flex-1">
      <a class="taskboardapp-title link-dark" href="#">
        <h1>销售流程</h1>
      </a>
      <button
        type="button"
        class="btn btn-primary ms-3 d-xxl-inline-block d-none flex-shrink-0"
        data-bs-toggle="modal"
        data-bs-target="#add_task_list"
      >
        新建交易
      </button>
      <div class="btn-group d-xxl-inline-flex d-none mx-3">
        <button type="button" class="btn btn-icon btn-outline-light">
          <span class="icon">
            <span class="feather-icon">
              <feather-icon name="trello"></feather-icon>
            </span>
          </span>
        </button>
        <button type="button" class="btn btn-icon btn-outline-light">
          <span class="icon">
            <span class="feather-icon">
              <feather-icon name="list"></feather-icon>
            </span>
          </span>
        </button>
        <button type="button" class="btn btn-icon btn-outline-light">
          <span class="icon">
            <span class="feather-icon">
              <feather-icon name="calendar"></feather-icon>
            </span>
          </span>
        </button>
      </div>
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
      <form class="leave-search d-lg-inline-block d-none" role="search">
        <input type="text" class="form-control" placeholder="搜索卡片" />
      </form>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none"
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
  </header>
</template>

<script>
import { useLayoutStore } from "@/stores/layout";
export default {
  name: "PipelineHeader",
  setup() {
    const layoutStore = useLayoutStore();
    return {
      layoutStore,
    };
  },
};
</script>
