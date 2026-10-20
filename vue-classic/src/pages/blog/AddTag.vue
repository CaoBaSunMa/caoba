<template>
    <div id="add_new_tag" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h6 class="text-uppercase fw-bold mb-3">添加标签</h6>
                    <form>
                        <div class="row gx-3">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <select id="input_tags" class="form-control" multiple="multiple">
                                        <option selected="selected">协作者</option>
                                        <option selected="selected">设计师</option>
                                        <option selected="selected">React 开发</option>
                                        <option selected="selected">促销</option>
                                        <option selected="selected">广告</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary float-end" data-bs-dismiss="modal">添加</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tag: ''
        };
    },
    methods: {
        addTag() {
            // Add your logic to handle adding the tag here
            console.log('Tag:', this.tag);
            // Reset the input field
            this.tag = '';
        }
    }
};
</script>
