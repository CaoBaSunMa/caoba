<template>
    <div id="add_new_contact" class="modal fade add-new-contact" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h5 class="mb-5">新建联系人</h5>
                    <form>
                        <div class="row gx-3">
                            <div class="col-sm-2 form-group">
                                <div class="dropify-square">
                                    <input type="file" class="dropify-1" />
                                </div>
                            </div>
                            <div class="col-sm-10 form-group">
                                <textarea class="form-control mnh-100p" rows="4" placeholder="添加个人简介"></textarea>
                            </div>
                        </div>
                        <div class="title title-xs title-wth-divider text-primary text-uppercase my-4">
                            <span>基本信息</span>
                        </div>
                        <div class="row gx-3">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="form-label">名</label>
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="form-label">中间名</label>
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="form-label">姓</label>
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="row gx-3">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">邮箱 ID</label>
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">电话</label>
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="row gx-3">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="form-label">城市</label>
                                    <select class="form-select">
                                        <option selected="">--</option>
                                        <option value="1">一</option>
                                        <option value="2">二</option>
                                        <option value="3">三</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="form-label">州/省</label>
                                    <select class="form-select">
                                        <option selected="">--</option>
                                        <option value="1">一</option>
                                        <option value="2">二</option>
                                        <option value="3">三</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="form-label">国家</label>
                                    <select class="form-select">
                                        <option selected="">--</option>
                                        <option value="1">一</option>
                                        <option value="2">二</option>
                                        <option value="3">三</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="title title-xs title-wth-divider text-primary text-uppercase my-4">
                            <span>公司信息</span>
                        </div>
                        <div class="row gx-3">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">公司名称</label>
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">职位</label>
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">网站</label>
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">工作电话</label>
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="title title-xs title-wth-divider text-primary text-uppercase my-4">
                            <span>补充信息</span>
                        </div>
                        <div class="row gx-3">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="form-label">标签</label>
                                    <select id="input_tags_2" class="form-control" multiple="multiple">
                                    </select>
                                    <small class="form-text text-muted">
                                        每个联系人最多可添加 4 个标签
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-3">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Facebook" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Twitter" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="LinkedIn" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input class="form-control" type="text" placeholder="Gmail" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer align-items-center">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                      <i class="ri-close-line me-1"></i>放弃
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">新建联系人</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditInfo',
    // Your component's logic goes here
}
</script>

<style scoped>
/* Your component's styles go here */
</style>