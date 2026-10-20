<template>
    <div class="modal fade" id="moreContact" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">更多信息</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row gx-3">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">职位</label>
                                    <input class="form-control" type="text" value="曼达琳" placeholder="名"
                                        name="name1" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">公司</label>
                                    <input class="form-control" type="text" value="肖恩" placeholder="姓"
                                        name="lastname1" />
                                </div>
                            </div>
                        </div>
                        <div class="row gx-3">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">语言</label>
                                    <input class="form-control" type="email" value="contct@caoba.com"
                                        placeholder="邮箱 ID" name="emailid1" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">生日</label>
                                    <input class="form-control" type="text" value="10/24/1984" placeholder="电话号码"
                                        name="birthday1" />
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
