<template>
  <div class="todo-body">
    <simplebar class="nicescroll-bar">
      <div class="container">
        <div class="todo-toolbar">
          <div>
            <select class="form-select form-select-sm" v-model="batchAction">
              <option value="">批量操作</option>
              <option value="done">标记完成</option>
              <option value="delete">删除</option>
            </select>
            <button class="btn btn-sm btn-light ms-2" @click="applyBatch">应用</button>
            <select class="d-xxl-inline-block d-none form-select form-select-sm mx-2" v-model="sortBy">
              <option value="date">按日期排序</option>
              <option value="time">按时间排序</option>
              <option value="priority">按优先级排序</option>
              <option value="title">按标题排序</option>
              <option value="status">按状态排序</option>
            </select>
          </div>
          <div>
            <div class="paging-info d-xxl-inline-block d-none">
              共 {{ todoStore.countTasks }} 条（{{ todoStore.activeCount }} 进行中 / {{ todoStore.doneCount }} 已完成）
            </div>
          </div>
        </div>

        <div v-if="todoStore.$state.loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
        </div>

        <div v-else-if="!todoStore.visibleTasks.length" class="text-center py-5">
          <i class="ri-checkbox-multiple-line fs-1 text-secondary"></i>
          <p class="mt-2 text-secondary">暂无任务{{ emptyHint }}</p>
        </div>

        <div v-else class="collapse-simple mt-4">
          <div v-for="(data, index) in todoStore.groups" :key="index" class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                :href="[`#${data.id}`]"
                aria-expanded="true"
              >
                <h5 class="mb-0">{{ data.title }}（{{ data.tasks.length }}）</h5>
              </a>
            </div>
            <div :id="data.id" class="collapse show">
              <div class="card-body">
                <draggable
                  :list="data.tasks"
                  :animation="200"
                  ghost-class="ghost-card"
                  group="tasks"
                >
                  <ul
                    v-for="task in data.tasks"
                    :key="task.id"
                    id="todo_list"
                    class="advance-list"
                  >
                    <li class="advance-list-item single-task-list" :class="{ 'active-todo': task.checked }">
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                          <div class="form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              :checked="task.checked"
                              @change="toggleComplete(task)"
                            />
                            <label class="form-check-label"></label>
                          </div>

                          <div>
                            <span
                              :class="['todo-star', { marked: task.stared }]"
                              @click="toggleStar(task)"
                            >
                              <feather-icon name="star"></feather-icon>
                            </span>

                            <span
                              :class="[
                                'badge badge-indicator badge-indicator-xl',
                                task.indicator,
                              ]"
                            ></span>
                            <span
                              class="todo-text text-dark text-truncate"
                              @click="viewTask(task)"
                              >{{ task.task_name }}</span
                            >

                            <span
                              v-if="task.priority"
                              :class="[
                                'badge badge-sm badge-outline badge-wth-indicator badge-wth-icon ms-3 d-lg-inline-block d-none',
                                {
                                  'badge-danger':
                                    task.priority === 'High' ||
                                    task.priority === 'Urgent',
                                },
                                { 'badge-warning': task.priority === 'Low' },
                                { 'badge-orange': task.priority === 'Medium' },
                              ]"
                            >
                              <span>
                                <i class="badge-dot ri-checkbox-blank-circle-fill"></i>
                                {{ task.priority }}
                              </span>
                            </span>
                          </div>
                        </div>

                        <div class="d-flex flex-shrink-0 align-items-center ms-3">
                          <span
                            v-for="(elem, index) in task.task_time"
                            :key="index"
                            :class="[
                              'todo-time d-lg-inline-block d-none me-3',
                              elem.textClass,
                            ]"
                            >{{ elem.time }}</span
                          >
                          <span
                            v-if="task.badge"
                            v-for="(status, indx) in task.badge"
                            :key="indx"
                            :class="['badge ms-3 d-md-inline-block d-none', status.bg]"
                            >{{ status.text }}</span
                          >
                          <div class="dropdown">
                            <button
                              class="btn btn-icon btn-rounded btn-flush-light flush-soft-hover dropdown-toggle no-caret"
                              aria-expanded="false"
                              data-bs-toggle="dropdown"
                            >
                              <span class="icon">
                                <feather-icon name="more-vertical"></feather-icon>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="javascript:void(0);" @click="editTask(task)">编辑任务</a>
                              <a class="dropdown-item" href="javascript:void(0);" @click="viewTask(task)">查看任务</a>
                              <a class="dropdown-item" href="javascript:void(0);" @click="deleteTask(task)">删除任务</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </draggable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import { useTodoStore } from "@/stores/todoStore";

export default {
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const todoStore = useTodoStore();
    return { todoStore };
  },
  data() {
    return {
      batchAction: "",
      sortBy: "date",
      starredIds: new Set(),
    };
  },
  computed: {
    emptyHint() {
      return this.todoStore.$state.keyword ? "，未找到匹配任务" : "";
    },
  },
  mounted() {
    if (!this.todoStore.$state.tasks.length) {
      this.todoStore.fetchTasks({});
    }
  },
  methods: {
    viewTask(task) {
      this.todoStore.selectTask(task._src);
      this.$emit("open-info");
    },
    editTask(task) {
      this.todoStore.selectTask(task._src);
      this.todoStore.$state.editingTask = task._src;
      this.$nextTick(() => {
        const modal = document.getElementById("add_new_task");
        if (!modal) return;
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
      });
    },
    async deleteTask(task) {
      if (!window.confirm(`确定删除任务「${task.task_name}」吗？`)) return;
      try {
        await this.todoStore.deleteTask(task._src.id);
      } catch (err) {
        console.error("[todo] delete failed:", err);
      }
    },
    async toggleComplete(task) {
      const src = task._src;
      const target = src.status === "DONE" ? "TODO" : "DONE";
      try {
        await this.todoStore.updateStatus(src.id, target);
      } catch (err) {
        console.error("[todo] toggle status failed:", err);
      }
    },
    toggleStar(task) {
      if (this.starredIds.has(task.id)) {
        this.starredIds.delete(task.id);
        task.stared = false;
      } else {
        this.starredIds.add(task.id);
        task.stared = true;
      }
    },
    async applyBatch() {
      const act = this.batchAction;
      if (!act) return;
      const selected = this.todoStore.visibleTasks.filter((t) => {
        const item = this.todoStore.mapTask(t);
        return item.checked;
      });
      const targets = selected.length ? selected : this.todoStore.visibleTasks;
      if (!targets.length) return;
      if (act === "done") {
        for (const t of targets) {
          if (t.status !== "DONE") {
            await this.todoStore.updateStatus(t.id, "DONE").catch(() => {});
          }
        }
      } else if (act === "delete") {
        if (!window.confirm(`确定删除选中的 ${targets.length} 个任务吗？`)) return;
        for (const t of targets) {
          await this.todoStore.deleteTask(t.id).catch(() => {});
        }
      }
      this.batchAction = "";
    },
  },
};
</script>