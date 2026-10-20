<template>
  <div
    id="add_new_deal"
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
          <h5 class="mb-4">新建交易</h5>
          <form>
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">名称</label>
                  <input class="form-control task-name" type="text" v-model="leadName" />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">开始日期</label>
                  <date-range-picker
                    v-model="startDate"
                    :dateRange="{ startDate: startDate }"
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
                  />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">加入交易到</label>
                  <select class="form-control custom-select">
                    <option selected="">选择类别</option>
                    <option value="1">线索引入</option>
                    <option value="2">机会</option>
                    <option value="3">已提案</option>
                    <option value="4">跟进</option>
                    <option value="5">转化</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">备注/描述</label>
                  <textarea class="form-control" rows="3" v-model="description"></textarea>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <HkDropZone class="dropify-square w-30"> 上传照片 </HkDropZone>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-inline">
                  <div class="form-group mt-3">
                    <label class="form-label">设置优先级：</label>
                    <div class="form-check form-check-inline">
                      <div class="form-check form-check-primary">
                        <input
                          type="radio"
                          id="customRadioc2"
                          name="customRadioc2"
                          class="form-check-input"
                          checked
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
                        />
                        <label class="form-check-label" for="customRadioc4">低</label>
                      </div>
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
import { usePipelineStore } from "@/stores/pipeline";
import { ref } from "vue";
import HkDropZone from "@/hk-components/@hk-dropzone/HkDropzone.vue";

export default {
  name: "AddNewDeal",
  components: {
    HkDropZone,
  },
  setup() {
    const pipelineStore = usePipelineStore();
    const leadName = ref("");
    const description = ref("");
    const startDate = ref(new Date());
    const endDate = ref(new Date());

    const submit = async () => {
      const title = String(leadName.value || "").trim();
      if (!title) return;
      const col = pipelineStore.boardColumns[pipelineStore.$state.columnIndex];
      if (!col) return;
      try {
        await pipelineStore.createCard(col.id, {
          title,
          description: description.value,
          priority: "MEDIUM",
        });
        leadName.value = "";
        description.value = "";
      } catch (e) {
        alert(e.message || "新建交易失败");
      }
    };

    return {
      pipelineStore,
      leadName,
      description,
      startDate,
      endDate,
      submit,
    };
  },
};
</script>
