<template>
  <header class="gallery-header">
    <div class="d-flex align-items-center flex-grow-1">
      <a
        class="galleryapp-title dropdown-toggle link-dark"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <h1>{{ title }}</h1>
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="javascript:void(0);" @click="setView('gallery')">
          <span class="dropdown-icon">
            <feather-icon name="hard-drive"></feather-icon>
          </span>
          <span>图库</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="setView('collections')">
          <span class="dropdown-icon">
            <feather-icon name="folder"></feather-icon>
          </span>
          <span>合集</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="setView('shared')">
          <span class="dropdown-icon">
            <feather-icon name="upload"></feather-icon>
          </span>
          <span>共享给我的</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="setView('starred')">
          <span class="dropdown-icon"> <feather-icon name="star"></feather-icon> </span
          ><span>收藏</span>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="javascript:void(0);" @click="setView('trash')">
          <span class="dropdown-icon"> <feather-icon name="trash-2"></feather-icon> </span
          ><span>回收站</span>
        </a>
      </div>
      <form class="mx-3 flex-grow-1 mw-400p" role="search" @submit.prevent="doSearch">
        <input
          type="text"
          class="form-control"
          placeholder="按名称搜索媒体"
          v-model.trim="keyword"
          @keyup.enter="doSearch"
        />
      </form>
    </div>
    <div class="gallery-options-wrap">
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover btn-file-download disabled d-xl-inline-block d-none"
        href="#"
      >
        <span class="icon">
          <feather-icon name="download"></feather-icon>
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
        data-bs-original-title="添加新分类"
        @click="openCategoryModal"
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
        @click="openUpload"
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
          <feather-icon name="list"></feather-icon>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="javascript:void(0);" @click="setType('all')">
          <span class="dropdown-icon">
            <feather-icon name="list"></feather-icon>
          </span>
          <span>全部类型</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="setType('image')">
          <span class="dropdown-icon">
            <feather-icon name="grid"></feather-icon>
          </span>
          <span>仅图片</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="setType('video')">
          <span class="dropdown-icon">
            <feather-icon name="server"></feather-icon>
          </span>
          <span>仅视频</span>
        </a>
        <a class="dropdown-item" href="javascript:void(0);" @click="setType('audio')">
          <span class="dropdown-icon">
            <feather-icon name="server"></feather-icon>
          </span>
          <span>仅音频</span>
        </a>
      </div>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable"
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
      :class="['hk-sidebar-togglable', { active: !showSidebar }]"
      @click="toggleSidebar"
    ></div>
  </header>
</template>

<script>
import { useLayoutStore } from "@/stores/layout";
import { useGalleryStore } from "@/stores/galleryStore";

export default {
  name: "GalleryHeader",
  props: {
    showSidebar: Boolean,
    showInfo: Boolean,
  },
  setup() {
    const layoutStore = useLayoutStore();
    const galleryStore = useGalleryStore();
    return {
      layoutStore,
      galleryStore,
    };
  },
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    title() {
      const map = {
        gallery: "媒体图库",
        collections: "合集",
        shared: "共享给我的",
        starred: "收藏",
        trash: "回收站",
      };
      if (this.galleryStore.$state.keyword) return `搜索：${this.galleryStore.$state.keyword}`;
      return map[this.galleryStore.$state.activeView] || "媒体图库";
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    toggleInfo() {
      this.$emit("toggle-info");
    },
    setView(v) {
      this.galleryStore.setView(v);
      this.keyword = "";
    },
    setType(t) {
      this.galleryStore.setTypeFilter(t);
    },
    doSearch() {
      this.galleryStore.setKeyword(this.keyword);
    },
    openUpload() {
      const btn = document.querySelector(".galleryapp-sidebar .btn-file input[type=file]");
      if (btn) btn.click();
    },
    openCategoryModal() {
      this.galleryStore.$state.editingCategory = null;
      const modal = document.getElementById("add_new_cat");
      if (modal) {
        if (window.bootstrap?.Modal) {
          window.bootstrap.Modal.getOrCreateInstance(modal).show();
        } else {
          modal.classList.add("show");
          modal.style.display = "block";
          if (!document.querySelector(".modal-backdrop")) {
            const b = document.createElement("div");
            b.className = "modal-backdrop fade show";
            document.body.appendChild(b);
          }
        }
      }
    },
  },
};
</script>