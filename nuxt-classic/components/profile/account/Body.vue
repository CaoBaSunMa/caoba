<template>
  <div class="hk-pg-body">
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab_block_1">
        <BRow>
          <BCol xl="8">
            <div class="title-lg fs-5"><span>自定义兴趣</span></div>
            <p class="mb-4">
              自定义兴趣将帮助你获得个性化的体验。
            </p>
            <BRow gutter-x="2" class="filter-block-wrap mt-5">
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" />
                  <BCardImg :src="interest1" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">基础设施</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" checked />
                  <BCardImg :src="interest2" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">科学</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" />
                  <BCardImg :src="interest3" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">国际政治</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" />
                  <BCardImg :src="interest4" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">技术</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" />
                  <BCardImg :src="interest5" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">旅行</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" checked />
                  <BCardImg :src="interest6" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">文学</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" checked />
                  <BCardImg :src="interest7" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">医疗健康</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" />
                  <BCardImg :src="interest8" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">营销</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" />
                  <BCardImg :src="interest9" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">音乐</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" checked />
                  <BCardImg :src="interest10" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">心灵</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" checked />
                  <BCardImg :src="interest11" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">生活方式</BCardTitle>
                  </div>
                </BCard>
              </BCol>
              <BCol sm="3" cols="6">
                <BCard no-body class="text-white filter-block h-120p mb-2">
                  <input class="form-check-input" type="checkbox" />
                  <BCardImg :src="interest12" class="h-100 img-fluid" alt="img-desc" />
                  <div
                    class="card-img-overlay bg-opacity-75 d-flex align-items-center justify-content-center"
                  >
                    <BCardTitle class="text-white">冒险</BCardTitle>
                  </div>
                </BCard>
              </BCol>
            </BRow>
            <div class="text-end mt-5">
              <BButton variant="primary" class="btn-rounded">保存更改</BButton>
            </div>
          </BCol>
        </BRow>
      </div>
      <div class="tab-pane fade" id="tab_block_2">
        <BRow>
          <BCol md="8">
            <div class="title-lg fs-5"><span>社交资料链接</span></div>
            <p class="mb-4">连接你的社交媒体账户，实现一键分享。</p>
            <BForm @submit.prevent>
              <BFormGroup label="Facebook" label-for="facebook" class="mb-3">
                <BInputGroup>
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <span class="avatar avatar-logo avatar-xs">
                        <span class="initial-wrap">
                          <img src="@/assets/img/symbol-avatar-17.png" alt="logo" />
                        </span>
                      </span>
                    </span>
                    <BInput
                      id="facebook"
                      class="ps-8"
                      size="lg"
                      placeholder="用户名"
                      model-value="caoba"
                    />
                    <a href="#" class="input-suffix text-muted">
                      <span class="feather-icon">
                        <feather-icon name="edit-3"></feather-icon>
                      </span>
                    </a>
                  </span>
                </BInputGroup>
                <small class="form-text text-muted"> 一键登录 </small>
              </BFormGroup>
              <BFormGroup label="Twitter" label-for="twitter" class="mb-3">
                <BInputGroup>
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <span class="avatar avatar-logo avatar-xs">
                        <span class="initial-wrap">
                          <img src="@/assets/img/symbol-avatar-18.png" alt="logo" />
                        </span>
                      </span>
                    </span>
                    <BInput
                      id="twitter"
                      size="lg"
                      type="text"
                      class="ps-8"
                      placeholder="用户名"
                    />
                    <a href="#" class="input-suffix text-muted">
                      <span class="feather-icon">
                        <feather-icon name="edit-3"></feather-icon>
                      </span>
                    </a>
                  </span>
                </BInputGroup>
                <small class="form-text text-muted"> 一键登录 </small>
              </BFormGroup>
              <BFormGroup label="Linkedin" label-for="linkedin" class="mb-5">
                <BInputGroup>
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <span class="avatar avatar-logo avatar-xs">
                        <span class="initial-wrap">
                          <img src="@/assets/img/symbol-avatar-19.png" alt="logo" />
                        </span>
                      </span>
                    </span>
                    <BInput
                      id="linkedin"
                      size="lg"
                      type="text"
                      class="ps-8"
                      placeholder="用户名"
                    />
                    <a href="#" class="input-suffix text-muted">
                      <span class="feather-icon">
                        <feather-icon name="edit-3"></feather-icon>
                      </span>
                    </a>
                  </span>
                </BInputGroup>
                <BFormCheckbox size="sm" class="mt-2" :model-value="true">
                  这是公司账户
                </BFormCheckbox>
              </BFormGroup>
              <BFormGroup label="连接" label-for="behance" class="mb-3">
                <BInputGroup class="mb-3">
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <span class="avatar avatar-logo avatar-xs">
                        <span class="initial-wrap">
                          <img src="@/assets/img/symbol-avatar-6.png" alt="logo" />
                        </span>
                      </span>
                    </span>
                    <BInput
                      id="behance"
                      size="lg"
                      type="text"
                      class="ps-8 pe-15"
                      placeholder="Behance"
                    />
                    <span class="input-suffix">
                      <BButton variant="outline-primary" size="sm"> 连接 </BButton>
                    </span>
                  </span>
                </BInputGroup>
                <BInputGroup>
                  <span class="input-affix-wrapper">
                    <span class="input-prefix">
                      <span class="avatar avatar-logo avatar-xs">
                        <span class="initial-wrap">
                          <img src="@/assets/img/symbol-avatar-5.png" alt="logo" />
                        </span>
                      </span>
                    </span>
                    <BInput
                      size="lg"
                      type="text"
                      class="ps-8 pe-15"
                      placeholder="Dribbble"
                    />
                    <span class="input-suffix">
                      <BButton variant="outline-primary" size="sm"> 连接 </BButton>
                    </span>
                  </span>
                </BInputGroup>
              </BFormGroup>
            </BForm>
            <div class="text-end mt-6">
              <BButton variant="primary" class="btn-rounded">保存更改</BButton>
            </div>
          </BCol>
        </BRow>
      </div>
      <div class="tab-pane fade" id="tab_block_3">
        <BRow>
          <BCol md="8">
            <div class="title-lg fs-5"><span>应用集成</span></div>
            <p class="mb-4">
              将合适的应用与你的应用连接，随时随地获取通知
            </p>
            <ul class="advance-list">
              <li class="advance-list-item transform-none shadow-none">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="media align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar">
                        <img
                          src="@/assets/img/symbol-avatar-6.png"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="text-dark fw-medium">Behance</div>
                      <div class="fs-7">设计平台</div>
                    </div>
                  </div>
                  <BButton variant="outline-primary" class="mnw-125p">连接</BButton>
                </div>
              </li>
              <li class="advance-list-item transform-none shadow-none">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="media align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar">
                        <img
                          src="@/assets/img/symbol-avatar-5.png"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="text-dark fw-medium">Dribble</div>
                      <div class="fs-7">作品集</div>
                    </div>
                  </div>
                  <BButton variant="outline-danger" class="mnw-125p">断开连接</BButton>
                </div>
              </li>
              <li class="advance-list-item transform-none shadow-none">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="media align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar">
                        <img
                          src="@/assets/img/symbol-avatar-14.png"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="text-dark fw-medium">Intercom</div>
                      <div class="fs-7">聊天集成</div>
                    </div>
                  </div>
                  <BButton variant="outline-primary" class="mnw-125p">连接</BButton>
                </div>
              </li>
              <li class="advance-list-item transform-none shadow-none">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="media align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar">
                        <img
                          src="@/assets/img/symbol-avatar-16.png"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="text-dark fw-medium">Gitlab</div>
                      <div class="fs-7">开发者平台</div>
                    </div>
                  </div>
                  <BButton variant="outline-primary" class="mnw-125p">连接</BButton>
                </div>
              </li>
            </ul>
            <div class="text-end mt-6">
              <BButton variant="primary" class="btn-rounded">保存更改</BButton>
            </div>
          </BCol>
        </BRow>
      </div>
      <div class="tab-pane fade" id="tab_block_4">
        <BRow>
          <BCol lg="8">
            <div class="title-lg fs-5 justify-content-between mb-5">
              <span>已保存卡片</span>
              <BButton variant="outline-light">+ 添加新卡片</BButton>
            </div>

            <ul class="advance-list">
              <li class="advance-list-item transform-none shadow-none py-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="media align-items-center">
                    <div class="media-head me-5">
                      <img
                        src="@/assets/img/card-visa.png"
                        alt="user"
                        class="img-fluid"
                      />
                    </div>
                    <div class="media-body">
                      <div>
                        <span class="text-dark fw-medium">****4213</span>
                        <HkBadge variant="primary" class="rounded-0 ms-3" soft>
                          主要
                        </HkBadge>
                      </div>
                    </div>
                  </div>
                  <div class="d-lg-inline d-none">
                    <span class="fs-7 text-muted me-5 d-xl-inline d-none"
                      >最后更新：2022年3月12日</span
                    >
                    <BButton variant="outline-danger" class="mnw-100p me-2">
                      删除
                    </BButton>
                    <BButton variant="light" class="mnw-100p">编辑</BButton>
                  </div>
                </div>
              </li>
              <li class="advance-list-item transform-none shadow-none py-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="media align-items-center">
                    <div class="media-head me-5">
                      <img
                        src="@/assets/img/mastercard.png"
                        alt="user"
                        class="img-fluid"
                      />
                    </div>
                    <div class="media-body">
                      <div>
                        <span class="text-dark fw-medium">****1214</span>
                      </div>
                    </div>
                  </div>
                  <div class="d-lg-inline d-none">
                    <span class="fs-7 text-muted me-5 d-xl-inline d-none">
                      最后更新：2022年4月25日
                    </span>
                    <BButton variant="outline-danger" class="mnw-100p me-2">
                      删除
                    </BButton>
                    <BButton variant="light" class="mnw-100p">编辑</BButton>
                  </div>
                </div>
              </li>
            </ul>
            <div class="text-end mt-6">
              <BButton variant="primary" class="btn-rounded">保存更改</BButton>
            </div>
          </BCol>
        </BRow>
      </div>
      <div class="tab-pane fade" id="tab_block_5">
        <BRow>
          <BCol lg="8">
            <div class="title-lg fs-5"><span>我的地址</span></div>
            <BRow gutter-x="3">
              <BCol md="4">
                <BCard no-body class="card-border mnh-250p">
                  <BCardBody>
                    <div class="card-action-wrap">
                      <BButton
                        variant="soft-danger"
                        size="sm"
                        class="btn-icon btn-rounded flush-soft-hover card-close"
                        href="#"
                      >
                        <span class="icon">
                          <feather-icon name="trash-2"></feather-icon>
                        </span>
                      </BButton>
                      <BButton
                        variant="flush-dark"
                        size="sm"
                        class="btn-icon btn-rounded flush-soft-hover"
                      >
                        <span class="icon">
                          <feather-icon name="edit-2"></feather-icon>
                        </span>
                      </BButton>
                    </div>
                    <i class="bi bi-house-door-fill fs-3 d-block mb-1 text-primary"></i>
                    <h5>家</h5>
                    <p class="card-text">
                      3421 Central Ave NE, Albuquerque, New York - 87106
                    </p>
                    <span class="badge badge-soft-primary">主要</span>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol md="4">
                <BCard no-body class="card-border mnh-250p">
                  <BCardBody>
                    <div class="card-action-wrap">
                      <BButton
                        variant="soft-danger"
                        size="sm"
                        class="btn-icon btn-rounded flush-soft-hover card-close"
                        href="#"
                      >
                        <span class="icon">
                          <feather-icon name="trash-2"></feather-icon>
                        </span>
                      </BButton>
                      <BButton
                        variant="flush-dark"
                        size="sm"
                        class="btn-icon btn-rounded flush-soft-hover"
                      >
                        <span class="icon">
                          <feather-icon name="edit-2"></feather-icon>
                        </span>
                      </BButton>
                    </div>
                    <i class="bi bi-shield-fill-check fs-3 d-block mb-1 text-primary"></i>
                    <h5>办公室</h5>
                    <p class="card-text">2035 7th St, Clanton, Alaska, 35045</p>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol md="4">
                <BCard no-body class="card-border border-dashed mnh-250p">
                  <BCardBody class="d-flex align-items-center justify-content-center">
                    <BButton class="btn btn-outline-light btn-block">
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="添加新地址"
                      >
                        <span class="icon">
                          <feather-icon name="plus"></feather-icon>
                        </span>
                      </span>
                    </BButton>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>
            <div class="text-end mt-6">
              <BButton variant="primary" class="btn-rounded">保存更改</BButton>
            </div>
          </BCol>
        </BRow>
      </div>
    </div>
  </div>
</template>

<script setup>
import interest1 from "@/assets/img/interests/interest-1.png";
import interest2 from "@/assets/img/interests/interest-2.png";
import interest3 from "@/assets/img/interests/interest-3.png";
import interest4 from "@/assets/img/interests/interest-4.png";
import interest5 from "@/assets/img/interests/interest-5.png";
import interest6 from "@/assets/img/interests/interest-6.png";
import interest7 from "@/assets/img/interests/interest-7.png";
import interest8 from "@/assets/img/interests/interest-8.png";
import interest9 from "@/assets/img/interests/interest-9.png";
import interest10 from "@/assets/img/interests/interest-10.png";
import interest11 from "@/assets/img/interests/interest-11.png";
import interest12 from "@/assets/img/interests/interest-12.png";
</script>
