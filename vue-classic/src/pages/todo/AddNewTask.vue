<template>
  <div
    id="add_new_task"
    class="modal fade add-new-contact"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="关闭"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h5 class="mb-4">{{ isEditing ? "编辑任务" : "新建任务" }}</h5>
          <form @submit.prevent="submitTask">
            <div
              class="title title-xs title-wth-divider text-primary text-uppercase mt-1 mb-4"
            >
              <span>基本信息</span>
            </div>
            <div class="row gx-3">
              <div class="col-sm-8">
                <div class="form-group">
                  <label class="form-label">名称</label>
                  <input class="form-control" type="text" v-model.trim="form.title" required />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="form-label">编码</label>
                  <input class="form-control" type="text" v-model.trim="form.code" />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-md-12">
                <div class="form-group">
                  <div class="form-label-group">
                    <label class="form-label">备注/描述</label>
                    <small class="text-muted">{{ (form.description || "").length }}/200</small>
                  </div>
                  <textarea
                    class="form-control"
                    rows="3"
                    v-model="form.description"
                    maxlength="200"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">开始日期</label>
                  <input type="date" class="form-control" v-model="form.startDate" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">结束日期</label>
                  <input type="date" class="form-control" v-model="form.endDate" />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">状态</label>
                  <select class="form-control custom-select" v-model="form.status">
                    <option value="TODO">待办</option>
                    <option value="IN_PROGRESS">进行中</option>
                    <option value="DONE">已完成</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">优先级</label>
                  <select class="form-control custom-select" v-model="form.priority">
                    <option value="LOW">低</option>
                    <option value="MEDIUM">中</option>
                    <option value="HIGH">高</option>
                    <option value="URGENT">紧急</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end gap-2 mt-4">
              <button type="button" class="btn btn-outline-secondary" @click="confirmDiscard">
                <i class="ri-close-line me-1"></i>放弃
              </button>
              <button type="submit" class="btn btn-primary">
                {{ isEditing ? "保存修改" : "添加" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTodoStore } from "@/stores/todoStore";
import Swal from "sweetalert2";

export default {
  name: "AddNewTask",
  setup() {
    const todoStore = useTodoStore();
    return { todoStore };
  },
  data() {
    return {
      form: {
        title: "",
        code: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "TODO",
        priority: "MEDIUM",
      },
      isEditing: false,
    };
  },
  watch: {
    "todoStore.$state.editingTask": {
      immediate: true,
      handler(task) {
        if (task) {
          this.isEditing = true;
          this.form = {
            title: task.title || "",
            code: "",
            description: task.description || "",
            startDate: task.startDate || "",
            endDate: task.dueDate || "",
            status: task.status || "TODO",
            priority: task.priority || "MEDIUM",
          };
        }
      },
    },
  },
  methods: {
    resetForm() {
      this.form = {
        title: "",
        code: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "TODO",
        priority: "MEDIUM",
      };
      this.isEditing = false;
      this.todoStore.$state.editingTask = null;
    },
    confirmDiscard() {
      const hasData = this.form.title || this.form.description;
      if (hasData) {
        Swal.fire({
          title: "放弃修改？",
          text: "未保存的任务数据将丢失",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          cancelButtonColor: "#6c757d",
          confirmButtonText: "确定放弃",
          cancelButtonText: "继续编辑",
        }).then((result) => {
          if (result.isConfirmed) {
            this.resetForm();
            this.closeModal();
          }
        });
      } else {
        this.resetForm();
        this.closeModal();
      }
    },
    closeModal() {
      const modal = document.getElementById("add_new_task");
      if (modal && window.bootstrap?.Modal) {
        const inst = window.bootstrap.Modal.getInstance(modal);
        inst?.hide();
      } else if (modal) {
        modal.classList.remove("show");
        modal.style.display = "none";
        document.querySelector(".modal-backdrop")?.remove();
      }
    },
    async submitTask() {
      if (!this.form.title) return;
      const payload = {
        title: this.form.title,
        description: this.form.description || "",
        status: this.form.status,
        priority: this.form.priority,
        startDate: this.form.startDate || null,
        dueDate: this.form.endDate || null,
      };
      try {
        if (this.isEditing) {
          await this.todoStore.updateTask(this.editingId, payload);
        } else {
          await this.todoStore.createTask(payload);
        }
        this.resetForm();
        this.closeModal();
      } catch (err) {
        console.error("[todo] save task failed:", err);
        window.alert("保存失败：" + (err.response?.data?.message || err.message));
      }
    },
  },
  computed: {
    editingId() {
      return this.todoStore.$state.editingTask?.id;
    },
  },
};
</script>