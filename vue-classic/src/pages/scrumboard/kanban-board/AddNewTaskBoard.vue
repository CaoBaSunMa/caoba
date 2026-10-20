<template>
  <div
    id="add_task_list"
    class="modal fade add-tasklist-modal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
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
          <h5 class="mb-4">新建任务列表</h5>
          <form>
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">名称</label>
                  <input class="form-control" type="text" v-model="boardName" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer align-items-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary btn-add-tasklist"
            @click="submit"
            data-bs-dismiss="modal"
          >
            添加
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useKanbanStore } from "@/stores/kanban";

export default {
  name: "AddNewTaskBoard",
  setup() {
    const kanbanStore = useKanbanStore();
    const boardName = ref("");

    const submit = async () => {
      const name = String(boardName.value || "").trim();
      if (!name) return;
      try {
        await kanbanStore.createColumn(name);
        boardName.value = "";
      } catch (e) {
        alert(e.message || "新建列表失败");
      }
    };

    return {
      kanbanStore,
      boardName,
      submit,
    };
  },
};
</script>
