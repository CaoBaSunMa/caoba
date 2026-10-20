<template>
  <header class="fm-header">
    <div class="d-flex align-items-center flex-grow-1">
      <a
        class="fmapp-title dropdown-toggle link-dark"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <h1>{{ fileStore.viewTitle }}</h1>
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="javascript:void(0);" @click="switchView('my-space')">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="hard-drive"></feather-icon>
          </span>
          <span>我的空间</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="switchView('all')">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="file"></feather-icon>
          </span>
          <span>所有文件</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="switchView('docs')">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="upload-cloud"></feather-icon>
          </span>
          <span>云文档</span>
        </a>
      </div>
      <form class="mx-3 flex-grow-1 mw-400p" role="search" @submit.prevent="doSearch">
        <input
          type="text"
          class="form-control"
          placeholder="搜索文件和文件夹"
          v-model.trim="keyword"
          @keyup.enter="doSearch"
        />
      </form>
    </div>
    <div class="fm-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover disabled d-xl-inline-block d-none"
        href="#"
      >
        <span class="icon">
          <feather-icon name="user-plus"></feather-icon>
        </span>
      </a>
      <a
        :class="[
          'btn btn-icon btn-flush-dark btn-rounded flush-soft-hover fmapp-info-toggle',
          { active: showInfo },
        ]"
        href="#"
        @click="toggleInfo"
      >
        <span class="icon">
          <feather-icon name="info"></feather-icon>
        </span>
      </a>
      <div class="v-separator d-xl-inline-block d-none"></div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover ms-0 d-xl-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="上传文件"
        @click="triggerUpload"
      >
        <span class="icon">
          <feather-icon name="folder-plus"></feather-icon>
        </span>
      </a>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded btn-file flush-soft-hover d-md-inline-block d-none"
        href="#"
        v-tooltip
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="上传"
        @click="triggerUpload"
      >
        <span class="icon">
          <feather-icon name="upload-cloud"></feather-icon>
        </span>
      </a>
      <div class="v-separator d-lg-inline-block d-none"></div>
      <a
        class="btn btn-icon btn-flush-dark flush-soft-hover dropdown-toggle no-caret active ms-lg-0 d-sm-inline-block d-none"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span class="icon">
          <feather-icon
            v-if="route.path.match('/apps/file-manager/list-view')"
            name="list"
          ></feather-icon>
          <feather-icon
            v-if="route.path.match('/apps/file-manager/grid-view')"
            name="grid"
          ></feather-icon>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <router-link
          class="dropdown-item"
          to="/apps/file-manager/list-view"
          active-class="active"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="list"></feather-icon>
          </span>
          <span>列表视图</span>
        </router-link>
        <router-link
          class="dropdown-item"
          to="/apps/file-manager/grid-view"
          active-class="active"
        >
          <span class="feather-icon dropdown-icon">
            <feather-icon name="grid"></feather-icon>
          </span>
          <span>网格视图</span>
        </router-link>
      </div>
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
    <div
      :class="['hk-sidebar-togglable', { active: showSidebar }]"
      @click="toggleSidebar"
    ></div>
    <input type="file" ref="fileInput" class="d-none" @change="onUploadChange" />
  </header>
</template>

<script>
import { useRoute } from "vue-router";
import { useLayoutStore } from "@/stores/layout";
import { useFileStore } from "@/stores/fileStore";

export default {
  name: "FmHeader",
  props: {
    showSidebar: Boolean,
    showInfo: Boolean,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const route = useRoute();
    const fileStore = useFileStore();
    return {
      layoutStore,
      route,
      fileStore,
    };
  },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    toggleInfo() {
      this.$emit("toggle-info");
    },
    switchView(mode) {
      this.fileStore.loadView(mode);
    },
    doSearch() {
      this.fileStore.search(this.keyword);
    },
    triggerUpload() {
      this.$refs.fileInput?.click();
    },
    async onUploadChange(event) {
      const input = event.target;
      const file = input.files && input.files[0];
      if (!file) return;
      const fd = new FormData();
      fd.append("file", file);
      try {
        await this.fileStore.uploadFile(fd, this.uploadFolder());
      } catch (err) {
        console.error("[fm] upload failed:", err);
      } finally {
        input.value = "";
      }
    },
    uploadFolder() {
      const mode = this.fileStore.$state.viewMode;
      const map = { images: "/图片", videos: "/视频", audio: "/音频", docs: "/文档" };
      return map[mode] || "/";
    },
  },
};
</script>