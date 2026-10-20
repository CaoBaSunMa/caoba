<template>
  <nav class="fmapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <div class="btn btn-primary btn-rounded btn-block btn-file mb-4" @click="triggerUpload">
          上传
          <input type="file" ref="fileInput" class="upload" @change="onUploadChange" />
        </div>

        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li
              v-for="item in primaryNav"
              :key="item.mode"
              class="nav-item"
              :class="{ active: fileStore.$state.viewMode === item.mode }"
            >
              <a class="nav-link" href="javascript:void(0);" @click="switchView(item.mode)">
                <span class="nav-icon-wrap">
                  <feather-icon :name="item.icon"></feather-icon>
                </span>
                <span class="nav-link-text">{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li
              v-for="item in typeNav"
              :key="item.mode"
              class="nav-item"
              :class="{ active: fileStore.$state.viewMode === item.mode }"
            >
              <a class="nav-link" href="javascript:void(0);" @click="switchView(item.mode)">
                <span class="nav-icon-wrap">
                  <feather-icon :name="item.icon"></feather-icon>
                </span>
                <span class="nav-link-text">{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </simplebar>
    <div class="fmapp-storage">
      <p class="p-sm">
        存储空间已使用 85%。1 TB 中已使用 78.5 GB，您可以购买更多空间。
      </p>
      <div class="progress-lb-wrap my-2">
        <label class="progress-label text-uppercase fs-8 fw-medium"
          >已使用 78.5 GB / 共 1 TB</label
        >
        <div class="progress progress-bar-rounded progress-bar-xs">
          <div
            class="progress-bar bg-danger w-85"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <a href="#" class="fs-7"><u>购买存储空间</u></a>
    </div>
    <!--Sidebar Fixnav-->
    <div class="fmapp-fixednav">
      <div class="hk-toolbar">
        <ul class="nav nav-light">
          <li class="nav-item nav-link">
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="设置"
              href="#"
            >
              <span class="icon">
                <feather-icon name="settings"></feather-icon>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="归档"
              @click="switchView('trash')"
            >
              <span class="icon">
                <feather-icon name="archive"></feather-icon>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="帮助"
            >
              <span class="icon">
                <feather-icon name="book"></feather-icon>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--/ Sidebar Fixnav-->
  </nav>
</template>

<script>
import { useFileStore } from "@/stores/fileStore";

export default {
  name: "FmSidebar",
  setup() {
    const fileStore = useFileStore();
    return { fileStore };
  },
  data() {
    return {
      primaryNav: [
        { mode: "my-space", label: "我的空间", icon: "hard-drive" },
        { mode: "all", label: "所有文件", icon: "file" },
        { mode: "folders", label: "文件夹", icon: "folder" },
        { mode: "shared", label: "共享", icon: "upload" },
        { mode: "starred", label: "星标", icon: "star" },
        { mode: "trash", label: "回收站", icon: "trash-2" },
      ],
      typeNav: [
        { mode: "images", label: "图片", icon: "image" },
        { mode: "videos", label: "视频", icon: "video" },
        { mode: "audio", label: "音频", icon: "play" },
        { mode: "docs", label: "文档", icon: "file-text" },
      ],
    };
  },
  methods: {
    switchView(mode) {
      this.fileStore.loadView(mode);
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
        this.fileStore.error && console.error("[fm] upload failed:", err);
      } finally {
        input.value = "";
      }
    },
    uploadFolder() {
      return "/";
    },
  },
};
</script>