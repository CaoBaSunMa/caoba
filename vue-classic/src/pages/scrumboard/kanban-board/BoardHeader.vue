<template>
  <header class="taskboard-header">
    <div class="d-flex align-items-center flex-1">
      <div class="d-flex">
        <a class="taskboardapp-title link-dark" href="#">
          <h1>
            {{ boardName }}
            <span class="task-star marked">
              <feather-icon name="star"></feather-icon>
            </span>
          </h1>
        </a>
        <div class="ms-3">
          <div class="input-group">
            <span class="input-affix-wrapper">
              <span class="input-prefix"><i class="ri-lock-line"></i></span>
              <select class="form-select">
                <option selected="" value="1">私有看板</option>
                <option value="2">公开看板</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>
    <select class="form-select d-xxl-none flex-1 mx-3">
      <option selected="" value="1">任务看板</option>
      <option value="2">会话</option>
      <option value="3">待办列表</option>
      <option value="4">文件</option>
      <option value="5">链接</option>
    </select>
    <ul
      class="nav nav-pills nav-pills-rounded active-theme nav-light px-2 flex-shrink-0 d-xxl-flex d-none"
    >
      <li class="nav-item">
        <a class="nav-link active" href="javascript:void(0);">
          <span class="nav-link-text">任务看板</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0);">
          <span class="nav-link-text">会话</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0);">
          <span class="nav-link-text">待办列表</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0);">
          <span class="nav-link-text">文件</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="javascript:void(0);">
          <span class="nav-link-text">链接</span>
        </a>
      </li>
    </ul>
    <div class="taskboard-options-wrap flex-1">
      <div class="d-flex ms-auto">
        <div class="avatar-group avatar-group-overlapped d-xl-flex d-none me-3">
          <div
            class="avatar avatar-rounded"
            v-tooltip
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="凯瑟琳"
          >
            <img :src="avatar8" alt="user" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-rounded"
            v-tooltip
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="迪恩"
          >
            <img :src="avatar13" alt="user" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-xs avatar-soft-danger avatar-rounded"
            v-tooltip
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="汤姆"
          >
            <span class="initial-wrap">T</span>
          </div>
          <div
            class="avatar avatar-rounded"
            v-tooltip
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="摩根"
          >
            <img :src="avatar2" alt="user" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-icon avatar-primary avatar-rounded"
            v-tooltip
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="提示文本"
          >
            <span class="initial-wrap">
              <span class="feather-icon">
                <feather-icon name="plus"></feather-icon>
              </span>
            </span>
          </div>
        </div>
        <div class="v-separator d-xl-flex d-none"></div>
        <a
          :class="[
            'btn btn-icon btn-flush-dark btn-rounded flush-soft-hover taskboardapp-info-toggle ms-xl-0',
            { active: showInfo },
          ]"
          href="#"
          @click="toggleInfo"
        >
          <span
            class="icon"
            v-tooltip
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="信息"
          >
            <span class="feather-icon">
              <feather-icon name="info"></feather-icon>
            </span>
          </span>
        </a>
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
    </div>
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script>
import { useLayoutStore } from "@/stores/layout";
import { useKanbanStore } from "@/stores/kanban";
import { computed } from "vue";
//Images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";

export default {
  data() {
    return {
      avatar2,
      avatar8,
      avatar13,
    };
  },
  props: {
    showSidebar: Boolean,
    showInfo: Boolean,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const kanbanStore = useKanbanStore();
    const boardName = computed(
      () => kanbanStore.selectedBoard?.name || "任务看板"
    );
    return {
      layoutStore,
      kanbanStore,
      boardName,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },

    toggleInfo() {
      this.$emit("toggle-info");
    },
  },
};
</script>
