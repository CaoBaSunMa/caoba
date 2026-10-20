<template>
  <nav class="blogapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <router-link
          to="/apps/blog/add-new-post"
          class="btn btn-primary btn-rounded btn-block mb-4"
        >
          新建文章
        </router-link>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item" :class="{ active: blogStore.$state.activeTab === 'all' }">
              <a class="nav-link" href="javascript:void(0);" @click="setTab('all')">
                <span class="nav-icon-wrap">
                  <feather-icon name="users"></feather-icon>
                </span>
                <span class="nav-link-text">文章</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: blogStore.$state.activeTab === 'published' }">
              <a class="nav-link" href="javascript:void(0);" @click="setTab('published')">
                <span class="nav-icon-wrap">
                  <feather-icon name="star"></feather-icon>
                </span>
                <span class="nav-link-text">已发布</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: blogStore.$state.activeTab === 'archived' }">
              <a class="nav-link" href="javascript:void(0);" @click="setTab('archived')">
                <span class="nav-icon-wrap">
                  <feather-icon name="archive"></feather-icon>
                </span>
                <span class="nav-link-text">已归档</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: blogStore.$state.activeTab === 'draft' }">
              <a class="nav-link" href="javascript:void(0);" @click="setTab('draft')">
                <span class="nav-icon-wrap">
                  <feather-icon name="edit"></feather-icon>
                </span>
                <span class="nav-link-text">草稿</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="setTab('all')">
                <span class="nav-icon-wrap">
                  <feather-icon name="trash-2"></feather-icon>
                </span>
                <span class="nav-link-text">已删除</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-gap"></div>
        <div class="nav-header">
          <span>管理</span>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <router-link to="/apps/blog/posts" class="nav-link">
                <span class="nav-icon-wrap">
                  <feather-icon name="flag"></feather-icon>
                </span>
                <span class="nav-link-text">管理文章</span>
              </router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="javascript:void(0);"
                @click="openCategoryModal"
              >
                <span class="nav-icon-wrap">
                  <feather-icon name="grid"></feather-icon>
                </span>
                <span class="nav-link-text">管理分类</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="openTagModal">
                <span class="nav-icon-wrap">
                  <feather-icon name="tag"></feather-icon>
                </span>
                <span class="nav-link-text">管理标签</span>
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
            @click="openCategoryModal"
          >
            <span class="icon">
              <feather-icon name="plus"></feather-icon>
            </span>
          </a>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li
              class="nav-item"
              v-for="cat in blogStore.allCategories"
              :key="cat.name"
            >
              <a
                class="nav-link link-badge-right"
                href="javascript:void(0);"
                :class="{ 'text-primary': blogStore.$state.activeCategory === cat.name }"
                @click="filterCategory(cat.name)"
              >
                <span class="nav-link-text">{{ cat.name }}</span>
                <span class="badge badge-pill badge-sm badge-soft-primary ms-auto">{{
                  cat.count
                }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-4">
          <div class="title-sm text-primary mb-0">标签</div>
          <a
            href="#"
            class="btn btn-xs btn-icon btn-rounded btn-light"
            data-bs-toggle="modal"
            data-bs-target="#add_new_tag"
            @click="openTagModal"
          >
            <span class="icon">
              <feather-icon name="plus"></feather-icon>
            </span>
          </a>
        </div>
        <div class="menu-group">
          <div class="tag-cloud">
            <a
              v-for="tag in blogStore.allTags"
              :key="tag"
              href="javascript:void(0);"
              class="badge"
              :class="[
                blogStore.$state.activeTag === tag
                  ? 'badge-soft-primary'
                  : 'badge-outline badge-light',
              ]"
              @click="filterTag(tag)"
              >{{ tag }}</a
            >
          </div>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="blogapp-fixednav">
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
              @click="setTab('archived')"
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
import { useBlogStore } from "@/stores/blogStore";

export default {
  name: "BlogSidebar",
  setup() {
    const blogStore = useBlogStore();
    return { blogStore };
  },
  methods: {
    setTab(tab) {
      this.blogStore.$state.activeTab = tab;
      // 「文章/全部文章」与其它 tab 都清空分类、标签过滤，
      // 避免之前点选过的分类/标签残留导致列表数量异常
      this.blogStore.$state.activeCategory = null;
      this.blogStore.$state.activeTag = null;
    },
    filterCategory(name) {
      this.blogStore.$state.activeCategory =
        this.blogStore.$state.activeCategory === name ? null : name;
      if (this.blogStore.$state.activeCategory) {
        this.blogStore.$state.activeTab = "all";
        this.blogStore.$state.activeTag = null;
      }
    },
    filterTag(tag) {
      this.blogStore.$state.activeTag =
        this.blogStore.$state.activeTag === tag ? null : tag;
      if (this.blogStore.$state.activeTag) {
        this.blogStore.$state.activeTab = "all";
        this.blogStore.$state.activeCategory = null;
      }
    },
    openCategoryModal() {
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
    openTagModal() {
      const modal = document.getElementById("add_new_tag");
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