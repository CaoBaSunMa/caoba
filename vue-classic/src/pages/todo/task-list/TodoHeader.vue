<template>
  <header class="todo-header">
    <div class="d-flex align-items-center">
      <a
        class="todoapp-title dropdown-toggle link-dark"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <h1>{{ headerTitle }}</h1>
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="javascript:void(0);" @click="setFilter('all')">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="align-center"></feather-icon>
          </span>
          <span>所有任务</span></a
        >
        <a class="dropdown-item" href="javascript:void(0);" @click="setFilter('in-progress')">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="clock"></feather-icon>
          </span>
          <span>进行中任务</span></a
        >
        <a class="dropdown-item" href="javascript:void(0);" @click="setFilter('done')">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="check-circle"></feather-icon>
          </span>
          <span>已完成任务</span></a
        >
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="javascript:void(0);" @click="setFilter('urgent')">紧急优先级</a>
        <a class="dropdown-item" href="javascript:void(0);" @click="setFilter('high')">高优先级</a>
        <a class="dropdown-item" href="javascript:void(0);" @click="setFilter('low')">低优先级</a>
      </div>
    </div>
    <div class="todo-options-wrap">
      <form class="d-sm-block d-none" role="search" @submit.prevent="doSearch">
        <input
          type="text"
          class="form-control"
          placeholder="搜索任务"
          v-model.trim="keyword"
          @keyup.enter="doSearch"
        />
      </form>
      <a
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable"
        href="#"
        @click="todoStore.changeVm(todoStore.$state.vm === 'Week' ? 'Month' : 'Week')"
      >
        <span class="icon">
          <feather-icon name="refresh-cw"></feather-icon>
        </span>
      </a>
    </div>
  </header>
</template>

<script>
import { useTodoStore } from "@/stores/todoStore";

export default {
  name: "TodoHeader",
  setup() {
    const todoStore = useTodoStore();
    return { todoStore };
  },
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    headerTitle() {
      const f = this.todoStore.$state.filter;
      const map = {
        all: "所有任务",
        todo: "待办任务",
        "in-progress": "进行中任务",
        done: "已完成任务",
        urgent: "紧急优先级",
        high: "高优先级",
        medium: "中优先级",
        low: "低优先级",
      };
      if (this.todoStore.$state.keyword) return `搜索：${this.todoStore.$state.keyword}`;
      return map[f] || "所有任务";
    },
  },
  methods: {
    setFilter(filter) {
      this.todoStore.setFilter(filter);
      this.keyword = "";
    },
    doSearch() {
      this.todoStore.setKeyword(this.keyword);
    },
  },
};
</script>