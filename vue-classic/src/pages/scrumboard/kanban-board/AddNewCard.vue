<template>
  <div
    id="add_new_card"
    class="modal fade add-new-task"
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
          <h5 class="mb-4">新建卡片</h5>
          <form>
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">名称</label>
                  <input class="form-control task-name" type="text" v-model="taskName" />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">开始日期</label>
                  <date-range-picker
                    v-model="startDate"
                    :date-range="{ startDate: startDate }"
                    :ranges="false"
                    :single-date-picker="true"
                    :show-dropdowns="true"
                  />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">结束日期</label>
                  <date-range-picker
                    v-model="endDate"
                    :dateRange="{ startDate: endDate }"
                    :ranges="false"
                    :single-date-picker="true"
                    :show-dropdowns="true"
                    append-to-body
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="form-label">备注/描述</label>
                  <textarea class="form-control" rows="3" v-model="description"></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group mt-3">
                  <label class="form-label">设置优先级：</label>
                  <div class="form-check form-check-inline">
                    <div class="form-check form-check-primary">
                      <input
                        type="radio"
                        id="customRadioc2"
                        name="customRadioc2"
                        class="form-check-input"
                        value="HIGH"
                        v-model="priority"
                      />
                      <label class="form-check-label" for="customRadioc2">高</label>
                    </div>
                  </div>
                  <div class="form-check form-check-inline">
                    <div class="form-check form-check-primary">
                      <input
                        type="radio"
                        id="customRadioc3"
                        name="customRadioc2"
                        class="form-check-input"
                        value="MEDIUM"
                        v-model="priority"
                      />
                      <label class="form-check-label" for="customRadioc3">中</label>
                    </div>
                  </div>
                  <div class="form-check form-check-inline">
                    <div class="form-check form-check-primary">
                      <input
                        type="radio"
                        id="customRadioc4"
                        name="customRadioc2"
                        class="form-check-input"
                        value="LOW"
                        v-model="priority"
                      />
                      <label class="form-check-label" for="customRadioc4">低</label>
                    </div>
                  </div>
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
            class="btn btn-primary btn-add-task"
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
import { useKanbanStore } from "@/stores/kanban";
import { ref } from "vue";

export default {
  name: "AddNewCard",
  setup() {
    const kanbanStore = useKanbanStore();
    const taskName = ref("");
    const description = ref("");
    const priority = ref("MEDIUM");
    const startDate = ref(new Date());
    const endDate = ref(new Date());

    const submit = async () => {
      const title = String(taskName.value || "").trim();
      if (!title) return;
      const col = kanbanStore.boardColumns[kanbanStore.$state.columnIndex];
      if (!col) return;
      try {
        await kanbanStore.createCard(col.id, {
          title,
          description: description.value,
          priority: priority.value,
        });
        taskName.value = "";
        description.value = "";
      } catch (e) {
        alert(e.message || "新建卡片失败");
      }
    };

    return {
      kanbanStore,
      taskName,
      description,
      priority,
      startDate,
      endDate,
      submit,
    };
  },
};
</script>
