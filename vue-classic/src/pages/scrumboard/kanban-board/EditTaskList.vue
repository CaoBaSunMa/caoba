<template>
  <div
    id="edit_task_list"
    class="modal fade edit-tasklist-modal"
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
          <h5 class="mb-4">编辑任务列表</h5>
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
            class="btn btn-primary btn-edit-tasklist"
            @click="save"
            data-bs-dismiss="modal"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useKanbanStore } from "@/stores/kanban";
import { computed, ref } from "vue";

export default {
  name: "EditTaskList",
  setup() {
    const kanbanStore = useKanbanStore();
    const boardName = computed({
      get: () => kanbanStore.$state.boardName,
      set: (value) => {
        kanbanStore.setBoardName(value);
      },
    });

    const save = async () => {
      const name = String(boardName.value || "").trim();
      const oldName = kanbanStore.$state.oldBoardName;
      const col = (kanbanStore.boardColumns || []).find((c) => c.title === oldName);
      if (!name || !col) return;
      try {
        await kanbanStore.updateColumn(col.id, name);
      } catch (e) {
        alert(e.message || "编辑列表失败");
      }
    };

    return {
      kanbanStore,
      boardName,
      save,
    };
  },
};
</script>
