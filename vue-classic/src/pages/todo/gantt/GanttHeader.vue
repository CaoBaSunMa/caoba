<template>
  <header class="todo-header">
    <div class="d-flex align-items-center flex-1">
      <div class="d-flex">
        <a class="todoapp-title link-dark" href="#">
          <h1>
            caoba
            <span class="task-star marked">
              <feather-icon name="star"></feather-icon>
            </span>
          </h1>
        </a>
        <div class="mx-3">
          <div class="input-group">
            <span class="input-affix-wrapper">
              <span class="input-prefix">
                <i class="ri-lock-line"></i>
              </span>
              <select class="form-select">
                <option selected="" value="1">私有看板</option>
                <option value="2">公共看板</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-group d-md-inline-flex d-none" role="group" id="modes-filter">
      <button
        type="button"
        class="btn btn-outline-light"
        name="modes"
        id="qday"
        @click="changeViewMode('Quarter Day')"
        :class="{ active: todoStore.$state.vm === 'Quarter Day' }"
      >
        四分之一天
      </button>
      <button
        type="button"
        class="btn btn-outline-light"
        name="modes"
        id="hday"
        @click="changeViewMode('Half Day')"
        :class="{ active: todoStore.$state.vm === 'Half Day' }"
      >
        半天
      </button>
      <button
        type="button"
        class="btn btn-outline-light"
        name="modes"
        id="day"
        @click="changeViewMode('Day')"
        :class="{ active: todoStore.$state.vm === 'Day' }"
      >
        天
      </button>
      <button
        type="button"
        class="btn btn-outline-light"
        name="modes"
        id="week"
        @click="changeViewMode('Week')"
        :class="{ active: todoStore.$state.vm === 'Week' }"
      >
        周
      </button>
      <button
        type="button"
        class="btn btn-outline-light"
        name="modes"
        id="month"
        @click="changeViewMode('Month')"
        :class="{ active: todoStore.$state.vm === 'Month' }"
      >
        月
      </button>
    </div>

    <div class="todo-options-wrap flex-lg-grow-1 flex-lg-shrink-1 flex-basis-0">
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
            <img src="@/assets/img/avatar8.jpg" alt="用户" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-rounded"
            v-tooltip
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="迪恩"
          >
            <img src="@/assets/img/avatar13.jpg" alt="用户" class="avatar-img" />
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
            <img src="@/assets/img/avatar2.jpg" alt="用户" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-icon avatar-primary avatar-rounded"
            v-tooltip
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="添加"
          >
            <span class="initial-wrap"
              ><span class="feather-icon"><feather-icon name="plus"></feather-icon></span
            ></span>
          </div>
        </div>
        <div class="v-separator d-lg-inline-block d-none"></div>
        <a
          class="btn btn-icon btn-flush-dark flush-soft-hover dropdown-toggle no-caret active ms-0 d-lg-inline-block d-none"
          href="#"
          data-bs-toggle="dropdown"
        >
          <span class="icon">
            <feather-icon name="columns"></feather-icon>
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-end mnw-0">
          <a class="dropdown-item" href="#">
            <span class="dropdown-icon me-0">
              <feather-icon name="sidebar"></feather-icon>
            </span>
          </a>
          <a class="dropdown-item active" href="#">
            <span class="dropdown-icon me-0">
              <feather-icon name="columns"></feather-icon>
            </span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="dropdown-icon me-0 icon-flip-y">
              <feather-icon name="sidebar"></feather-icon>
            </span>
          </a>
        </div>
        <a
          class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover full-screenapp"
          href="#"
          @click="toggleFullScreen"
        >
          <span class="icon">
            <span
              v-if="isFullScreen"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="最小化"
            >
              <feather-icon name="minimize"></feather-icon>
            </span>
            <span
              v-else
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="最大化"
            >
              <feather-icon name="maximize"></feather-icon>
            </span>
          </span>
        </a>
        <a
          class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-lg-inline-block d-none"
          href="#"
          v-tooltip
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="收起"
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
import { useTodoStore } from "@/stores/todoStore";
import { onBeforeUnmount } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";

export default {
  name: "GanttHeader",
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const todoStore = useTodoStore();
    const isFullScreen = ref(false);

    const changeViewMode = (mode) => {
      todoStore.changeVm(mode);
      console.log("view mode:", todoStore.$state.vm);
    };

    const toggleFullScreen = () => {
      if (isFullScreen.value) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen().catch(() => {
          console.error("Failed to enter fullscreen mode");
        });
      }
      isFullScreen.value = !isFullScreen.value;
    };

    // Define the fullscreen change handler function
    const onFullscreenChange = () => {
      isFullScreen.value = document.fullscreenElement !== null;
    };

    onMounted(() => {
      // Add the event listener when the component is mounted
      document.addEventListener("fullscreenchange", onFullscreenChange);
    });

    onBeforeUnmount(() => {
      // Remove the event listener before the component is unmounted
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    });

    return {
      layoutStore,
      todoStore,
      changeViewMode,
      isFullScreen,
      toggleFullScreen,
    };
  },

  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>
