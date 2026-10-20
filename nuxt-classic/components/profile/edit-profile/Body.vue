<template>
  <div class="hk-pg-body">
    <BRow class="edit-profile-wrap">
      <BCol lg="2" sm="3" cols="4">
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
      </BCol>
      <BCol lg="10" sm="9" cols="8">
        <div class="tab-content">
          <div class="tab-pane fade show active" id="tab_block_1">
            <BForm @submit.prevent>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup>
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
                        <BButton variant="soft-primary" class="btn-file mb-1">
                          上传照片
                          <BFormFile />
                        </BButton>
                        <div class="form-text text-muted">
                          建议上传 450×450 像素的图片以获得更好的预览效果，最大不超过
                          5MB。
                        </div>
                      </div>
                    </div>
                  </BFormGroup>
                </BCol>
              </BRow>
              <div
                class="title title-xs title-wth-divider text-primary text-uppercase my-4"
              >
                <span>个人信息</span>
              </div>
              <BRow gutter-x="3">
                <BCol sm="6">
                  <BFormGroup label="名字" label-for="first_name" class="mb-3">
                    <BFormInput id="first_name" type="text" model-value="凯特" />
                  </BFormGroup>
                </BCol>
                <BCol sm="6">
                  <BFormGroup label="姓氏" label-for="last_name" class="mb-3">
                    <BFormInput id="last_name" type="text" model-value="琼斯" />
                  </BFormGroup>
                </BCol>
              </BRow>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup label="所在地" label-for="location" class="mb-3">
                    <BFormInput
                      id="location"
                      type="text"
                      model-value="纽约一号巷"
                    />
                  </BFormGroup>
                </BCol>
              </BRow>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup class="mb-3">
                    <div class="form-label-group">
                      <label class="form-label">简介</label>
                      <small class="text-muted">1200</small>
                    </div>
                    <BFormTextarea
                      class="form-control"
                      rows="8"
                      placeholder="写一条内部备注"
                    />
                    <small class="form-text text-muted">
                      简单介绍一下自己，这将会显示在你的个人资料页面。
                    </small>
                  </BFormGroup>
                </BCol>
              </BRow>
              <div
                class="title title-xs title-wth-divider text-primary text-uppercase my-4"
              >
                <span>其他信息</span>
              </div>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup
                    label="个人网站"
                    label-for="personal_web"
                    class="mb-3"
                  >
                    <BFormInput
                      id="personal_web"
                      type="text"
                      model-value="caoba.com"
                    />
                  </BFormGroup>
                </BCol>
                <BCol sm="12">
                  <BFormGroup label="电话" label-for="phone" class="mb-3">
                    <BFormInput id="phone" type="text" model-value="xxxxxxx987" />
                  </BFormGroup>
                  <BFormCheckbox>对我的号码保密</BFormCheckbox>
                </BCol>
              </BRow>
              <BButton variant="primary" class="mt-5">保存更改</BButton>
            </BForm>
          </div>
          <div class="tab-pane fade" id="tab_block_2">
            <div class="title-lg fs-4"><span>账户设置</span></div>
            <p class="mb-4">
              头像组件用于代表用户，显示个人照片、姓名首字母或备用图标。
            </p>
            <BForm @submit.prevent>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup label="用户名" label-for="username" class="mb-3">
                    <BFormInput id="username" type="text" model-value="凯特" />
                  </BFormGroup>
                </BCol>
              </BRow>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup label="邮箱" label-for="email" class="mb-3">
                    <BFormInput id="email" type="text" model-value="demomail.com" />
                  </BFormGroup>
                </BCol>
              </BRow>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup label="URL" label-for="url" class="mb-3">
                    <BFormInput id="url" type="text" model-value="caoba.com" />
                  </BFormGroup>
                </BCol>
              </BRow>
              <div
                class="title title-xs title-wth-divider text-primary text-uppercase my-4"
              >
                <span>跟踪代码</span>
              </div>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup
                    label="Google Analytics 跟踪代码"
                    label-for="tracking_code"
                    class="mb-3"
                  >
                    <BFormInput
                      id="tracking_code"
                      type="text"
                      model-value="UA-1387652-1"
                    />
                    <small class="form-text text-muted">
                      在你的 Google Analytics 账户中跟踪浏览量和个人资料访问量，例如
                      UA-0000000-0
                    </small>
                  </BFormGroup>
                </BCol>
              </BRow>
              <div
                class="title title-xs title-wth-divider text-primary text-uppercase my-4"
              >
                <span>账户变更</span>
              </div>
              <BRow gutter-x="3">
                <BCol sm="6">
                  <BFormGroup class="mb-3">
                    <a href="#" class="h5 d-block mb-0">删除账户</a>
                    <small class="form-text text-muted">
                      删除账户及你的所有数据
                    </small>
                  </BFormGroup>
                </BCol>
                <BCol sm="6" class="text-end">
                  <BFormGroup class="mb-3">
                    <BButton variant="danger">关闭账户</BButton>
                  </BFormGroup>
                </BCol>
              </BRow>
              <BButton variant="primary" class="mt-5">保存更改</BButton>
            </BForm>
          </div>
          <div class="tab-pane fade" id="tab_block_3">
            <div class="title-lg fs-4 mb-4"><span>隐私设置</span></div>
            <BForm @submit.prevent>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormCheckbox size="lg">
                    允许他人通过邮箱地址找到我
                    <small class="form-text text-muted d-block">
                      拥有你邮箱地址的人可以通过 caoba 联系到你
                    </small>
                  </BFormCheckbox>
                  <div class="separator"></div>
                  <BFormCheckbox size="lg">
                    对我的手机号码保密
                    <small class="form-text text-muted d-block">
                      任何人都无法通过你的手机号码找到你。你的手机号码将不再与你的联系人共享。
                    </small>
                  </BFormCheckbox>
                  <div class="separator"></div>
                  <BFormCheckbox size="lg">
                    保持我的位置共享开启
                    <small class="form-text text-muted d-block">
                      Jmapack Web 应用会随时随地共享你的位置
                    </small>
                  </BFormCheckbox>
                  <div class="separator"></div>
                  <BFormCheckbox size="lg">
                    通过精选合作伙伴共享数据
                    <small class="form-text text-muted d-block">
                      这是一段用于演示的占位文本，仅用于填充界面版式，正式发布时会被真实内容替换。
                    </small>
                  </BFormCheckbox>
                </BCol>
              </BRow>
              <BButton variant="primary" class="mt-5">保存更改</BButton>
            </BForm>
          </div>
          <div class="tab-pane fade" id="tab_block_4">
            <div class="title-lg fs-4"><span>登录与安全</span></div>
            <p class="mb-4">
              头像组件用于代表用户，显示个人照片、姓名首字母或备用图标。
            </p>
            <BForm @submit.prevent>
              <div
                class="title title-xs title-wth-divider text-primary text-uppercase my-4"
              >
                <span>密码设置</span>
              </div>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup label="密码" label-for="password" class="mb-3">
                    <BFormInput id="password" type="password" model-value="Katervewe" />
                    <BButton variant="primary" class="mt-3"> 修改密码 </BButton>
                  </BFormGroup>
                </BCol>
              </BRow>
              <div
                class="title title-xs title-wth-divider text-primary text-uppercase my-4"
              >
                <span>其他安全设置</span>
              </div>
              <BRow gutter-x="3">
                <BCol sm="12">
                  <BFormGroup
                    label="两步验证 (2FA)"
                    label-for="2fa"
                    class="mb-3"
                  >
                    <small id="2fa" class="form-text text-muted d-block">
                      两步验证能大幅降低你 Google 账户中的个人信息被盗用的风险。为什么？因为黑客不仅要拿到你的密码和用户名，还得拿到你的手机。系统可能会向你之前预留的号码发送一个
                      <a href="#" class="text-primary">6 位数字</a>
                      验证码。验证码可以通过短信（SMS）或语音电话发送，具体取决于你选择的设置。为确认是你本人，请在登录界面输入该验证码。
                    </small>
                    <BButton variant="primary" class="mt-3"> 添加身份验证 </BButton>
                  </BFormGroup>
                </BCol>
              </BRow>
            </BForm>
          </div>
        </div>
      </BCol>
    </BRow>
  </div>
</template>

<script setup></script>
