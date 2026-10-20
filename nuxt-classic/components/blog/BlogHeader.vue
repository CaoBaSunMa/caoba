<template>
  <header class="blog-header">
    <div class="d-flex align-items-center">
      <a class="blogapp-title link-dark" href="#">
        <h1 v-if="postRoute">文章</h1>
        <h1 v-if="addNewPostRoute">新建文章</h1>
        <h1 v-if="postDetailRoute">编辑文章</h1>
      </a>
      <NuxtLink
        v-if="postDetailRoute"
        to="/apps/blog/add-new-post"
        class="btn btn-soft-primary ms-3"
      >
        新建
      </NuxtLink>
    </div>

    <div class="blog-options-wrap">
      <template v-if="postRoute">
        <BDropdown
          variant="outline-light"
          text="管理"
          toggle-class="d-sm-inline-block d-none"
          end
        >
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="flag"></feather-icon>
            </span>
            <span>管理文章</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="grid"></feather-icon>
            </span>
            <span>管理分类</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="tag"></feather-icon>
            </span>
            <span>管理标签</span>
          </BDropdownItem>
        </BDropdown>

        <BButton
          variant="flush-dark"
          class="btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0 d-lg-inline-block d-none"
          href="#"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="刷新"
        >
          <span class="icon">
            <feather-icon name="refresh-cw"></feather-icon>
          </span>
        </BButton>
        <div class="v-separator d-lg-inline-block d-none"></div>
      </template>

      <BDropdown
        variant="flush-dark"
        toggle-class="btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0 ms-0"
        end
      >
        <template #button-content>
          <span class="icon">
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </template>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="users"></feather-icon>
          </span>
          <span>文章</span>
        </BDropdownItem>
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

      <BButton
        variant="flush-dark"
        class="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-none d-xl-block"
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
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLayoutStore } from "@/stores/layout";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  showSidebar: Boolean,
  showInfo: Boolean,
});
const emit = defineEmits(["toggle-sidebar"]);

// Store and route setup
const layoutStore = useLayoutStore();
const route = useRoute();

// Computed properties to check the route paths
const postRoute = computed(() => route.path.includes("/blog/posts"));
const addNewPostRoute = computed(() => route.path.includes("/blog/add-new-post"));
const postDetailRoute = computed(() => route.path.includes("/blog/post-detail"));

// Emit function to toggle sidebar
const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>