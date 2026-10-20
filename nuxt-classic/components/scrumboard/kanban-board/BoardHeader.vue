<template>
  <header class="taskboard-header">
    <div class="d-flex align-items-center flex-1">
      <div class="d-flex">
        <a class="taskboardapp-title link-dark" href="#">
          <h1>
            caoba
            <span class="task-star marked">
              <feather-icon name="star"></feather-icon>
            </span>
          </h1>
        </a>
        <div class="ms-3">
          <BInputGroup>
            <span class="input-affix-wrapper">
              <span class="input-prefix"><i class="ri-lock-line"></i></span>
              <BFormSelect model-value="1">
                <BFormSelectOption value="1">私有看板</BFormSelectOption>
                <BFormSelectOption value="2">公开看板</BFormSelectOption>
              </BFormSelect>
            </span>
          </BInputGroup>
        </div>
      </div>
    </div>
    <BFormSelect class="d-xxl-none flex-1 mx-3" model-value="1">
      <BFormSelectOption value="1">任务看板</BFormSelectOption>
      <BFormSelectOption value="2">会话</BFormSelectOption>
      <BFormSelectOption value="3">待办列表</BFormSelectOption>
      <BFormSelectOption value="3">文件</BFormSelectOption>
      <BFormSelectOption value="3">链接</BFormSelectOption>
    </BFormSelect>
    <BNav
      pills
      class="nav-pills-rounded active-theme nav-light px-2 flex-shrink-0 d-xxl-flex d-none"
    >
      <BNavItem active>
        <span class="nav-link-text">任务看板</span>
      </BNavItem>
      <BNavItem>
        <span class="nav-link-text">会话</span>
      </BNavItem>
      <BNavItem>
        <span class="nav-link-text">待办列表</span>
      </BNavItem>
      <BNavItem>
        <span class="nav-link-text">文件</span>
      </BNavItem>
      <BNavItem>
        <span class="nav-link-text">链接</span>
      </BNavItem>
    </BNav>
    <div class="taskboard-options-wrap flex-1">
      <div class="d-flex ms-auto">
        <div class="avatar-group avatar-group-overlapped d-xl-flex d-none me-3">
          <div
            class="avatar avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="凯瑟琳"
          >
            <img :src="avatar8" alt="user" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="迪恩"
          >
            <img :src="avatar13" alt="user" class="avatar-img" />
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
            <img :src="avatar2" alt="user" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-icon avatar-primary avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="添加"
          >
            <span class="initial-wrap">
              <feather-icon name="plus"></feather-icon>
            </span>
          </div>
        </div>
        <div class="v-separator d-xl-flex d-none"></div>
        <BButton
          variant="flush-dark"
          class="btn-icon btn-rounded flush-soft-hover taskboardapp-info-toggle ms-xl-0"
          :active="showInfo"
          href="#"
          @click="toggleInfo"
        >
          <span
            class="icon"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="信息"
          >
            <feather-icon name="info"></feather-icon>
          </span>
        </BButton>
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
    </div>
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script setup>
import { useLayoutStore } from "@/stores/layout";
//Images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";

// Props
const props = defineProps({
  showSidebar: Boolean,
  showInfo: Boolean,
});

// Emits
const emit = defineEmits(["toggle-sidebar", "toggle-info"]);

// Store
const layoutStore = useLayoutStore();

// Methods
const toggleSidebar = () => {
  emit("toggle-sidebar");
};

const toggleInfo = () => {
  emit("toggle-info");
};

// export default {
//   data() {
//     return {
//       avatar2,
//       avatar8,
//       avatar13,
//     };
//   },
//   props: {
//     showSidebar: Boolean,
//     showInfo: Boolean,
//   },
//   setup() {
//     const layoutStore = useLayoutStore();
//     return {
//       layoutStore,
//     };
//   },
//   methods: {
//     toggleSidebar() {
//       this.$emit("toggle-sidebar");
//     },

//     toggleInfo() {
//       this.$emit("toggle-info");
//     },
//   },
// };
</script>
