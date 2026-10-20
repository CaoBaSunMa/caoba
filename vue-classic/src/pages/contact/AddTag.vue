<template>
  <div id="add_new_tag" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div
      class="modal-dialog modal-dialog-centered modal-sm"
      role="document"
      style="width: auto"
    >
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
          <h6 class="text-uppercase fw-bold mb-3">添加标签</h6>
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
            <button
              type="button"
              class="btn btn-primary float-end"
              data-bs-dismiss="modal"
            >
              添加
            </button>
          </form>
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
      selectedTags: ["协作者", "设计师", "React 开发"],
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
