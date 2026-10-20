<template>
  <div class="modal fade" id="tagsInput" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">标签</h6>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="关闭"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <hk-tag
                    :option="multiSelectOpt"
                    :selected-value="selectedTags"
                  ></hk-tag>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer align-items-center">
          <button type="button" class="btn btn-secondary">放弃</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            更新
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HkTag from "@/hk-components/@hk-tag/HkTag.vue";

export default {
  components: {
    HkTag,
  },
  data() {
    return {
      multiSelectOpt: [
        "协作者",
        "设计师",
        "React 开发",
        "促销",
        "广告",
      ],
      selectedTags: ["协作者", "React 开发"],
    };
  },
  mounted() {
    // Initialize selectedTags with some default values
    this.selectedTags = [
      this.multiSelectOpt[0],
      this.multiSelectOpt[1],
      this.multiSelectOpt[2],
      this.multiSelectOpt[3],
    ];
  },
};
</script>

<style scoped>
.modal-content{
    overflow: visible;
}
</style>
