<template>
    <div class="modal fade" id="addBio" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">个人简介</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row gx-3">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <textarea class="form-control" rows="4" placeholder="添加个人简介"
                                        value="你好，摩根·弗里曼是一名全栈前端开发工程师，在压力下工作是他的特质。"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer align-items-center">
                    <button type="button" class="btn btn-secondary">放弃</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">更新</button>
                </div>
            </div>
        </div>
    </div>
</template>
