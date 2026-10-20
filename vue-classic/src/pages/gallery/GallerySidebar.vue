<template>
  <nav class="galleryapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <div class="btn btn-primary btn-rounded btn-block btn-file mb-4">
          上传图片
          <input type="file" class="upload" @change="onUpload" />
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item" :class="{ active: isView('gallery') }">
              <a class="nav-link" href="javascript:void(0);" @click="setView('gallery')">
                <span class="nav-icon-wrap">
                  <feather-icon name="hard-drive"></feather-icon>
                </span>
                <span class="nav-link-text">图库</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: isView('collections') }">
              <a class="nav-link" href="javascript:void(0);" @click="setView('collections')">
                <span class="nav-icon-wrap">
                  <feather-icon name="folder"></feather-icon>
                </span>
                <span class="nav-link-text">合集</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: isView('shared') }">
              <a class="nav-link" href="javascript:void(0);" @click="setView('shared')">
                <span class="nav-icon-wrap">
                  <feather-icon name="upload"></feather-icon>
                </span>
                <span class="nav-link-text">共享给我的</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: isView('starred') }">
              <a class="nav-link" href="javascript:void(0);" @click="setView('starred')">
                <span class="nav-icon-wrap">
                  <feather-icon name="star"></feather-icon>
                </span>
                <span class="nav-link-text">收藏</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: isView('trash') }">
              <a class="nav-link" href="javascript:void(0);" @click="setView('trash')">
                <span class="nav-icon-wrap">
                  <feather-icon name="trash-2"></feather-icon>
                </span>
                <span class="nav-link-text">回收站</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">分类</div>
          <a
            href="#"
            class="btn btn-xs btn-icon btn-rounded btn-light"
            data-bs-toggle="modal"
            data-bs-target="#add_new_cat"
            @click="startNewCategory"
          >
            <span
              class="icon"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="新建分类"
            >
              <feather-icon name="plus"></feather-icon>
            </span>
          </a>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item" v-if="!galleryStore.$state.categories.length">
              <span class="nav-link-text text-secondary fs-8 ms-1">暂无分类</span>
            </li>
            <li
              class="nav-item"
              :class="{ active: galleryStore.$state.categoryId === cat.id }"
              v-for="cat in galleryStore.$state.categories"
              :key="cat.id"
            >
              <a
                class="nav-link d-flex justify-content-between align-items-center"
                href="javascript:void(0);"
                @click="selectCategory(cat.id)"
              >
                <span class="nav-link-text">{{ cat.name }}</span>
                <span class="ms-1 d-inline-flex align-items-center">
                  <i
                    class="ri-delete-bin-6-line text-danger fs-8"
                    role="button"
                    @click.stop="deleteCategory(cat)"
                  ></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="title-sm text-primary">媒体类型</div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item" :class="{ active: galleryStore.$state.typeFilter === 'image' }">
              <a class="nav-link" href="javascript:void(0);" @click="setType('image')">
                <span class="nav-link-text">图片</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: galleryStore.$state.typeFilter === 'video' }">
              <a class="nav-link" href="javascript:void(0);" @click="setType('video')">
                <span class="nav-link-text">视频</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: galleryStore.$state.typeFilter === 'audio' }">
              <a class="nav-link" href="javascript:void(0);" @click="setType('audio')">
                <span class="nav-link-text">音频</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: galleryStore.$state.typeFilter === 'all' }">
              <a class="nav-link" href="javascript:void(0);" @click="setType('all')">
                <span class="nav-link-text">全部类型</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="galleryapp-fixednav">
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
              @click="setView('trash')"
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
import { useGalleryStore } from "@/stores/galleryStore";

export default {
  name: "GallerySidebar",
  setup() {
    const galleryStore = useGalleryStore();
    return { galleryStore };
  },
  methods: {
    isView(v) {
      return this.galleryStore.$state.activeView === v;
    },
    setView(v) {
      this.galleryStore.setView(v);
    },
    selectCategory(id) {
      this.galleryStore.selectCategory(id);
    },
    setType(t) {
      this.galleryStore.setTypeFilter(t);
    },
    startNewCategory() {
      this.galleryStore.$state.editingCategory = null;
    },
    async deleteCategory(cat) {
      if (!window.confirm(`确定删除分类「${cat.name}」吗？关联媒体将解除。`)) return;
      try {
        await this.galleryStore.deleteCategory(cat.id);
      } catch (err) {
        console.error("[gallery] delete category failed:", err);
      }
    },
    async onUpload(e) {
      const files = e.target.files;
      if (!files || !files.length) return;
      try {
        await this.galleryStore.uploadMedia(files[0]);
        window.alert("上传成功，已加入图库");
      } catch (err) {
        console.error("[gallery] upload failed:", err);
        window.alert("上传失败：" + (err.response?.data?.message || err.message));
      } finally {
        e.target.value = "";
      }
    },
  },
};
</script>