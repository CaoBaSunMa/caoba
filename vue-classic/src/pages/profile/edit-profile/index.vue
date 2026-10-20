<template>
  <div class="container-xxl">
    <!-- Page Header -->
    <div class="hk-pg-header pt-7 pb-4">
      <h1 class="pg-title">编辑个人资料</h1>
      <p>
        头像组件用于代表用户，显示个人照片、姓名首字母或备用图标。
      </p>
    </div>
    <!-- /Page Header -->

    <!-- Page Body -->
    <div class="hk-pg-body">
      <div class="row edit-profile-wrap">
        <div class="col-lg-2 col-sm-3 col-4">
          <div class="nav-profile mt-4">
            <div class="nav-header">
              <span>账户</span>
            </div>
            <ul class="nav nav-light nav-vertical nav-tabs">
              <li class="nav-item">
                <a data-bs-toggle="tab" href="#tab_block_1" class="nav-link active">
                  <span class="nav-link-text">公开资料</span>
                </a>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="tab" href="#tab_block_2" class="nav-link">
                  <span class="nav-link-text">账户设置</span>
                </a>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="tab" href="#tab_block_3" class="nav-link">
                  <span class="nav-link-text">隐私设置</span>
                </a>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="tab" href="#tab_block_4" class="nav-link">
                  <span class="nav-link-text">登录与安全</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <span class="nav-link-text">通知</span>
                </a>
              </li>
              <li class="nav-item">
                <a data-scroll="" href="#" class="nav-link">
                  <span class="nav-link-text">人脉</span>
                </a>
              </li>
              <li class="nav-item">
                <a data-scroll="" href="#" class="nav-link">
                  <span class="nav-link-text">账单信息</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-10 col-sm-9 col-8">
          <div class="tab-content">
            <div class="tab-pane fade show active" id="tab_block_1">
              <form>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <div class="media align-items-center">
                        <div class="media-head me-5">
                          <div class="avatar avatar-rounded avatar-xxl">
                            <img
                              src="@/assets/img/avatar3.jpg"
                              alt="user"
                              class="avatar-img"
                            />
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="btn btn-soft-primary btn-file mb-1">
                            上传照片
                            <input type="file" class="upload" />
                          </div>
                          <div class="form-text text-muted">
                            建议上传 450×450 像素的图片以获得更好的预览效果，最大不超过
                            5MB。
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="title title-xs title-wth-divider text-primary text-uppercase my-4"
                >
                  <span>个人信息</span>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="form-label">名字</label>
                      <input class="form-control" type="text" value="凯特" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="form-label">姓氏</label>
                      <input class="form-control" type="text" value="琼斯" />
                    </div>
                  </div>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">所在地</label>
                      <input
                        class="form-control"
                        type="text"
                        value="纽约一号巷"
                      />
                    </div>
                  </div>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <div class="form-label-group">
                        <label class="form-label">简介</label>
                        <small class="text-muted">1200</small>
                      </div>
                      <textarea
                        class="form-control"
                        rows="8"
                        placeholder="写一条内部备注"
                      ></textarea>
                      <small class="form-text text-muted">
                        简单介绍一下自己，这将会显示在你的个人资料页面。
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  class="title title-xs title-wth-divider text-primary text-uppercase my-4"
                >
                  <span>其他信息</span>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">个人网站</label>
                      <input class="form-control" type="text" value="caoba.com" />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">电话</label>
                      <input class="form-control" type="text" value="xxxxxxx987" />
                    </div>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheckList4"
                      />
                      <label class="form-check-label" for="customCheckList4">
                        对我的号码保密
                      </label>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-primary mt-5">保存更改</button>
              </form>
            </div>
            <div class="tab-pane fade" id="tab_block_2">
              <div class="title-lg fs-4"><span>账户设置</span></div>
              <p class="mb-4">
                头像组件用于代表用户，显示个人照片、姓名首字母或备用图标。
              </p>
              <form>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">用户名</label>
                      <input class="form-control" type="text" value="凯特" />
                    </div>
                  </div>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">邮箱</label>
                      <input
                        class="form-control"
                        type="text"
                        value="纽约一号巷"
                      />
                    </div>
                  </div>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">URL</label>
                      <input class="form-control" type="text" value="caoba.com" />
                    </div>
                  </div>
                </div>
                <div
                  class="title title-xs title-wth-divider text-primary text-uppercase my-4"
                >
                  <span>跟踪代码</span>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">Google Analytics 跟踪代码</label>
                      <input class="form-control" type="text" value="UA-1387652-1" />
                      <small class="form-text text-muted">
                        在你的 Google Analytics 账户中跟踪浏览量和个人资料访问量，例如
                        UA-0000000-0
                      </small>
                    </div>
                  </div>
                </div>
                <div
                  class="title title-xs title-wth-divider text-primary text-uppercase my-4"
                >
                  <span>账户变更</span>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <a href="#" class="h5 d-block mb-0">删除账户</a>
                      <small class="form-text text-muted">
                        删除账户及你的所有数据
                      </small>
                    </div>
                  </div>
                  <div class="col-sm-6 text-end">
                    <div class="form-group">
                      <button type="button" class="btn btn-danger">关闭账户</button>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-primary mt-5">保存更改</button>
              </form>
            </div>
            <div class="tab-pane fade" id="tab_block_3">
              <div class="title-lg fs-4 mb-4"><span>隐私设置</span></div>
              <form>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-check form-check-lg">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customChecks1"
                      />
                      <label class="form-check-label mt-0" for="customChecks1"
                        >允许他人通过邮箱地址找到我</label
                      >
                      <small class="form-text text-muted d-block"
                        >拥有你邮箱地址的人可以通过 caoba 联系到你</small
                      >
                    </div>
                    <div class="separator"></div>
                    <div class="form-check form-check-lg">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customChecks2"
                      />
                      <label class="form-check-label mt-0" for="customChecks2"
                        >对我的手机号码保密</label
                      >
                      <small class="form-text text-muted d-block"
                        >任何人都无法通过你的手机号码找到你。你的手机号码将不再与你的联系人共享。</small
                      >
                    </div>
                    <div class="separator"></div>
                    <div class="form-check form-check-lg">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customChecks3"
                      />
                      <label class="form-check-label mt-0" for="customChecks3"
                        >保持我的位置共享开启</label
                      >
                      <small class="form-text text-muted d-block"
                        >Jmapack Web 应用会随时随地共享你的位置</small
                      >
                    </div>
                    <div class="separator"></div>
                    <div class="form-check form-check-lg">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customChecks4"
                      />
                      <label class="form-check-label mt-0" for="customChecks4"
                        >通过精选合作伙伴共享数据</label
                      >
                      <small class="form-text text-muted d-block"
                        >这是一段用于演示的占位文本，仅用于填充界面版式，正式发布时会被真实内容替换。</small
                      >
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-primary mt-5">保存更改</button>
              </form>
            </div>
            <div class="tab-pane fade" id="tab_block_4">
              <div class="title-lg fs-4"><span>登录与安全</span></div>
              <p class="mb-4">
                头像组件用于代表用户，显示个人照片、姓名首字母或备用图标。
              </p>
              <form>
                <div
                  class="title title-xs title-wth-divider text-primary text-uppercase my-4"
                >
                  <span>密码设置</span>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">密码</label>
                      <input class="form-control" type="password" value="Katervewe" />
                      <button type="button" class="btn btn-primary mt-3">
                        修改密码
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="title title-xs title-wth-divider text-primary text-uppercase my-4"
                >
                  <span>其他安全设置</span>
                </div>
                <div class="row gx-3">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label class="form-label">两步验证 (2FA)</label>
                      <small class="form-text text-muted d-block">
                        两步验证能大幅降低你 Google 账户中的个人信息被盗用的风险。为什么？因为黑客不仅要拿到你的密码和用户名，还得拿到你的手机。系统可能会向<strong>你之前预留的号码</strong>发送一个<a href="#" class="text-primary">6 位数字</a>验证码。验证码可以通过短信（SMS）或语音电话发送，具体取决于你选择的设置。为确认是你本人，请在登录界面输入该验证码。
                      </small>
                      <button type="button" class="btn btn-primary mt-3">
                        添加身份验证
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Body -->
  </div>
</template>

<script>
export default {
  name: "EditProfile",
};
</script>
