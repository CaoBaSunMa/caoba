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
          <BInputGroup>
            <span class="input-affix-wrapper">
              <span class="input-prefix">
                <i class="ri-lock-line"></i>
              </span>
              <BFormSelect model-value="1">
                <BFormSelectOption value="1">私有看板</BFormSelectOption>
                <BFormSelectOption value="2">公共看板</BFormSelectOption>
              </BFormSelect>
            </span>
          </BInputGroup>
        </div>
      </div>
    </div>

    <BButtonGroup class="d-md-inline-flex d-none" role="group" id="modes-filter">
      <BButton
        variant="outline-light"
        name="modes"
        id="qday"
        @click="changeViewMode('Quarter Day')"
        :active="todoStore.$state.vm === 'Quarter Day'"
      >
        四分之一天
      </BButton>
      <BButton
        variant="outline-light"
        name="modes"
        id="hday"
        @click="changeViewMode('Half Day')"
        :active="todoStore.$state.vm === 'Half Day'"
      >
        半天
      </BButton>
      <BButton
        variant="outline-light"
        name="modes"
        id="day"
        @click="changeViewMode('Day')"
        :active="todoStore.$state.vm === 'Day'"
      >
        天
      </BButton>
      <BButton
        variant="outline-light"
        name="modes"
        id="week"
        @click="changeViewMode('Week')"
        :active="todoStore.$state.vm === 'Week'"
      >
        周
      </BButton>
      <BButton
        variant="outline-light"
        name="modes"
        id="month"
        @click="changeViewMode('Month')"
        :active="todoStore.$state.vm === 'Month'"
      >
        月
      </BButton>
    </BButtonGroup>

    <div class="todo-options-wrap flex-lg-grow-1 flex-lg-shrink-1 flex-basis-0">
      <div class="d-flex ms-auto">
        <div class="avatar-group avatar-group-overlapped d-xl-flex d-none me-3">
          <div
            class="avatar avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="凯瑟琳"
          >
            <img src="@/assets/img/avatar8.jpg" alt="用户" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="迪恩"
          >
            <img src="@/assets/img/avatar13.jpg" alt="用户" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-xs avatar-soft-danger avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="汤姆"
          >
            <span class="initial-wrap">T</span>
          </div>
          <div
            class="avatar avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="摩根"
          >
            <img src="@/assets/img/avatar2.jpg" alt="用户" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-icon avatar-primary avatar-rounded"
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

        <BDropdown
          variant="flush-dark"
          toggle-class="btn-icon flush-soft-hover no-caret active ms-0 d-lg-inline-block d-none"
          menu-class="mnw-0"
          end
        >
          <template #button-content>
            <span class="icon">
              <feather-icon name="columns"></feather-icon>
            </span>
          </template>
          <BDropdownItem href="#">
            <span class="dropdown-icon me-0">
              <feather-icon name="sidebar"></feather-icon>
            </span>
          </BDropdownItem>
          <BDropdownItem href="#" active>
            <span class="dropdown-icon me-0">
              <feather-icon name="columns"></feather-icon>
            </span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="dropdown-icon me-0 icon-flip-y">
              <feather-icon name="sidebar"></feather-icon>
            </span>
          </BDropdownItem>
        </BDropdown>

        <BButton
          variant="flush-dark"
          class="btn-icon btn-rounded flush-soft-hover full-screenapp"
          href="#"
          @click="toggleFullScreen"
        >
          <span class="icon">
            <span
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              :data-bs-original-title="isFullScreen ? '最小化' : '最大化'"
            >
              <feather-icon :name="isFullScreen ? 'minimize' : 'maximize'" />
            </span>
          </span>
        </BButton>
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
    </div>

    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineEmits } from "vue";
import { useLayoutStore } from "@/stores/layout";
import { useTodoStore } from "@/stores/todoStore";
import { BButton, BInputGroup } from "bootstrap-vue-next";

// Emits
const emit = defineEmits(["toggle-sidebar"]);

// Props：父组件 pages/apps/todo/gantt/index.vue 传了 :showSidebar，
// 但这里之前没有声明，模板里读 showSidebar 会报
// "Property 'showSidebar' was accessed during render but is not defined on instance"
const props = defineProps({
  showSidebar: Boolean,
});

// Stores
const layoutStore = useLayoutStore();
const todoStore = useTodoStore();

// Reactive state
const isFullScreen = ref(false);

// Methods
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

const onFullscreenChange = () => {
  isFullScreen.value = document.fullscreenElement !== null;
};

// Lifecycle hooks
onMounted(() => {
  document.addEventListener("fullscreenchange", onFullscreenChange);
});

onBeforeUnmount(() => {
  document.removeEventListener("fullscreenchange", onFullscreenChange);
});

// Toggle sidebar
const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>
