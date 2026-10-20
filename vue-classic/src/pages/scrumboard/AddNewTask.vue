<template>
  <div
    id="add_new_board"
    class="modal fade"
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
          <h5>新建看板</h5>
          <p class="mb-4">
            您仅被授予有限许可，仅用于查看本网站所包含的材料。
          </p>
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
                  <label class="form-label">可见性</label>
                  <select class="form-control form-select">
                    <option selected="">公开</option>
                    <option value="1">私有</option>
                  </select>
                  <small class="form-text text-muted">
                    公开设置将向所有拥有登录信息的用户可见。
                  </small>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">头像</label>
                  <select class="form-control form-select">
                    <option selected="">选择头像文字</option>
                    <option value="1">A</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">头像颜色</label>
                  <div class="input-group color-picker" title="使用横向选项">
                    <span class="input-group-text colorpicker-input-addon">
                      <input
                        class="form-control-color p-0"
                        type="color"
                        v-model="avatarColor"
                      />
                    </span>
                    <input type="text" class="form-control" v-model="avatarColor" />
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <HkDropZone class="dropify-square w-30"> 上传照片 </HkDropZone>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer align-items-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="submit">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HkDropZone from "@/hk-components/@hk-dropzone/HkDropzone.vue";
import { useKanbanStore } from "@/stores/kanban";
import { ref } from "vue";

export default {
  components: {
    HkDropZone,
  },
  props: {
    boardType: { type: String, default: "KANBAN" },
  },
  setup(props) {
    const kanbanStore = useKanbanStore();
    const avatarColor = ref("#009B84");
    const taskName = ref("");

    const submit = async () => {
      const name = String(taskName.value || "").trim();
      if (!name) return;
      try {
        const board = await kanbanStore.createBoard({
          name,
          type: props.boardType,
        });
        // 切到新看板
        await kanbanStore.selectBoard(board.id);
      } catch (e) {
        alert(e.message || "新建看板失败");
      }
    };

    return {
      avatarColor,
      taskName,
      submit,
    };
  },
};
</script>
