<template>
  <nav class="todoapp-sidebar">
    <div data-simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <button
          class="btn btn-primary btn-rounded btn-block mb-4"
          data-bs-toggle="modal"
          data-bs-target="#add_new_task"
          @click="startNew"
        >
          添加任务
        </button>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item" :class="{ active: todoStore.$state.filter === 'all' && !todoStore.$state.keyword }">
              <a class="nav-link" href="javascript:void(0);" @click="setFilter('all')">
                <span class="nav-icon-wrap">
                  <feather-icon name="layout"></feather-icon>
                </span>
                <span class="nav-link-text">概览</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="setFilter('all')">
                <span class="nav-icon-wrap">
                  <feather-icon name="list"></feather-icon>
                </span>
                <span class="nav-link-text">我的任务</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: todoStore.$state.filter === 'in-progress' }">
              <a class="nav-link" href="javascript:void(0);" @click="setFilter('in-progress')">
                <span class="nav-icon-wrap">
                  <feather-icon name="clock"></feather-icon>
                </span>
                <span class="nav-link-text">进行中</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: todoStore.$state.filter === 'done' }">
              <a class="nav-link" href="javascript:void(0);" @click="setFilter('done')">
                <span class="nav-icon-wrap">
                  <feather-icon name="check-circle"></feather-icon>
                </span>
                <span class="nav-link-text">已完成</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="title-sm text-primary">优先级</div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item" :class="{ active: todoStore.$state.filter === 'urgent' }">
              <a class="nav-link link-with-badge" href="javascript:void(0);" @click="setFilter('urgent')">
                <span
                  class="badge badge-danger badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">紧急</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: todoStore.$state.filter === 'high' }">
              <a class="nav-link link-with-badge" href="javascript:void(0);" @click="setFilter('high')">
                <span
                  class="badge badge-orange badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">高</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: todoStore.$state.filter === 'medium' }">
              <a class="nav-link link-with-badge" href="javascript:void(0);" @click="setFilter('medium')">
                <span
                  class="badge badge-yellow badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">中</span>
              </a>
            </li>
            <li class="nav-item" :class="{ active: todoStore.$state.filter === 'low' }">
              <a class="nav-link link-with-badge" href="javascript:void(0);" @click="setFilter('low')">
                <span
                  class="badge badge-gold badge-indicator badge-indicator-lg me-2"
                ></span>
                <span class="nav-link-text">低</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--Sidebar Fixnav-->
    <div class="todoapp-fixednav">
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
              @click="setFilter('done')"
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
import { useTodoStore } from "@/stores/todoStore";

export default {
  name: "TodoSidebar",
  setup() {
    const todoStore = useTodoStore();
    return { todoStore };
  },
  methods: {
    startNew() {
      this.todoStore.$state.editingTask = null;
    },
    setFilter(filter) {
      this.todoStore.setFilter(filter);
    },
  },
};
</script>