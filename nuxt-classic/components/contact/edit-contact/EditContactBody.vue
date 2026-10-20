<template>
  <div class="contact-body contact-detail-body">
    <simplebar class="nicescroll-bar">
      <div class="d-flex flex-xxl-nowrap flex-wrap">
        <div class="contact-info w-xxl-30 w-100">
          <BDropdown variant="light" text="操作" class="action-btn">
            <BDropdownItem href="#">操作</BDropdownItem>
            <BDropdownItem href="#">另一个操作</BDropdownItem>
            <BDropdownItem href="#">其他选项</BDropdownItem>
            <BDropdownDivider />
            <BDropdownItem href="#">分隔链接</BDropdownItem>
          </BDropdown>
          <div class="text-center mt-5">
            <div class="dropify-circle edit-img">
              <HkAvatarUploader :defaultImg="avatar2" />
            </div>
            <div class="cp-name text-truncate mt-3">曼达琳·肖恩</div>
            <p>无来电，一直忙碌</p>
            <hk-rating :rating="3" readOnly></hk-rating>
            <ul class="hk-list hk-list-sm justify-content-center mt-2">
              <li>
                <BButton variant="soft-primary" class="btn-icon btn-rounded" href="#">
                  <span class="icon">
                    <feather-icon name="mail"></feather-icon>
                  </span>
                </BButton>
              </li>
              <li>
                <BButton variant="soft-success" class="btn-icon btn-rounded" href="#">
                  <span class="icon">
                    <feather-icon name="phone"></feather-icon>
                  </span>
                </BButton>
              </li>
              <li>
                <BButton variant="soft-danger" class="btn-icon btn-rounded" href="#">
                  <span class="icon">
                    <feather-icon name="video"></feather-icon>
                  </span>
                </BButton>
              </li>
            </ul>
          </div>
          <BCard no-body>
            <BCardHeader>
              <a href="#">个人资料信息</a>
              <BButton
                variant="light"
                size="xs"
                class="btn-icon btn-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="编辑"
              >
                <span class="icon" data-bs-toggle="modal" data-bs-target="#editInfo">
                  <feather-icon name="edit-2"></feather-icon>
                </span>
              </BButton>
            </BCardHeader>
            <BCardBody>
              <ul class="cp-info">
                <li>
                  <span>名</span>
                  <span>摩根</span>
                </li>
                <li>
                  <span>姓</span>
                  <span>弗里曼</span>
                </li>
                <li>
                  <span>邮箱</span>
                  <span>morgan@flights.com</span>
                </li>
                <li>
                  <span>电话</span>
                  <span>+912-4532-1234</span>
                </li>
                <li>
                  <span>位置</span>
                  <span>纽约</span>
                </li>
              </ul>
            </BCardBody>
          </BCard>
          <div class="separator-full"></div>
          <BCard no-body>
            <BCardHeader>
              <a href="#">更多信息</a>
              <BButton
                variant="light"
                size="xs"
                class="btn-icon btn-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="编辑"
              >
                <span class="icon" data-bs-toggle="modal" data-bs-target="#moreContact">
                  <feather-icon name="edit-2"></feather-icon>
                </span>
              </BButton>
            </BCardHeader>
            <BCardBody>
              <ul class="cp-info">
                <li>
                  <span>职位</span>
                  <span>摩根</span>
                </li>
                <li>
                  <span>公司</span>
                  <span>弗里曼</span>
                </li>
                <li>
                  <span>语言</span>
                  <span>morgan@flights.com</span>
                </li>
                <li>
                  <span>生日</span>
                  <span>-</span>
                </li>
                <li>
                  <span>位置</span>
                  <span>纽约</span>
                </li>
              </ul>
            </BCardBody>
          </BCard>
          <div class="separator-full"></div>
          <BCard no-body>
            <BCardHeader>
              <a href="#">标签</a>
              <BButton
                variant="light"
                size="xs"
                class="btn-icon btn-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="添加标签"
              >
                <span class="icon" data-bs-toggle="modal" data-bs-target="#tagsInput">
                  <feather-icon name="plus"></feather-icon>
                </span>
              </BButton>
            </BCardHeader>
            <BCardBody>
              <HkBadge class="me-1" variant="violet" soft>协作</HkBadge>
              <HkBadge class="me-1" variant="danger" soft>React 开发</HkBadge>
            </BCardBody>
          </BCard>
          <div class="separator-full"></div>
          <BCard no-body>
            <BCardHeader>
              <a href="#">社交账号</a>
            </BCardHeader>
            <BCardBody>
              <ul class="hk-list hk-list-sm">
                <li>
                  <BButton variant="primary" class="btn-icon btn-rounded">
                    <span class="icon">
                      <FontAwesomeIcon icon="fab fa-behance" />
                    </span>
                  </BButton>
                </li>
                <li>
                  <BButton variant="warning" class="btn-icon btn-rounded">
                    <span class="icon">
                      <FontAwesomeIcon icon="fab fa-google-drive" />
                    </span>
                  </BButton>
                </li>
                <li>
                  <BButton variant="info" class="btn-icon btn-rounded">
                    <span class="icon">
                      <FontAwesomeIcon icon="fab fa-dropbox" />
                    </span>
                  </BButton>
                </li>
                <li>
                  <BButton variant="dark" class="btn-icon btn-rounded">
                    <span class="icon">
                      <FontAwesomeIcon icon="fab fa-github" />
                    </span>
                  </BButton>
                </li>
              </ul>
            </BCardBody>
          </BCard>
          <div class="separator-full"></div>
          <BCard no-body>
            <BCardHeader>
              <a href="#">个人简介</a>
              <BButton
                variant="light"
                size="xs"
                class="btn-icon btn-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="编辑"
              >
                <span class="icon" data-bs-toggle="modal" data-bs-target="#addBio">
                  <feather-icon name="edit-2"></feather-icon>
                </span>
              </BButton>
            </BCardHeader>
            <BCardBody>
              <p>
                你好，摩根·弗里曼是一名全栈前端开发工程师，在压力下工作是他的特质。
              </p>
            </BCardBody>
          </BCard>
          <div class="separator-full"></div>
          <BCard no-body>
            <BCardHeader>
              <a href="#">设置</a>
            </BCardHeader>
            <BCardBody>
              <ul class="cp-action">
                <li>
                  <a href="#">
                    <span class="cp-icon-wrap">
                      <feather-icon name="upload"></feather-icon>
                    </span>
                    分享联系人
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="cp-icon-wrap">
                      <feather-icon name="heart"></feather-icon>
                    </span>
                    添加到收藏
                  </a>
                </li>
                <li>
                  <a href="#" class="link-danger">
                    <span class="cp-icon-wrap">
                      <feather-icon name="trash"></feather-icon>
                    </span>
                    删除联系人
                  </a>
                </li>
              </ul>
            </BCardBody>
          </BCard>
        </div>

        <div class="contact-more-info">
          <ul class="nav nav-tabs nav-line nav-icon nav-light">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#tab_summery">
                <span class="nav-icon-wrap">
                  <feather-icon name="zap"></feather-icon>
                </span>
                <span class="nav-link-text">摘要</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="activity"></feather-icon>
                </span>
                <span class="nav-link-text">动态</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="edit-3"></feather-icon>
                </span>
                <span class="nav-link-text">笔记</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="mail"></feather-icon>
                </span>
                <span class="nav-link-text">邮箱</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="phone"></feather-icon>
                </span>
                <span class="nav-link-text">通话</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="check-square"></feather-icon>
                </span>
                <span class="nav-link-text">任务</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="clock"></feather-icon>
                </span>
                <span class="nav-link-text">日程</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="shield"></feather-icon>
                </span>
                <span class="nav-link-text">销售</span>
              </a>
            </li>
          </ul>
          <div class="tab-content mt-7">
            <div class="tab-pane fade show active" id="tab_summery">
              <BForm @submit.prevent>
                <BRow>
                  <BCol md="12">
                    <BFormGroup class="mb-3">
                      <div class="form-label-group">
                        <label>写一条笔记</label>
                        <small class="text-muted">1200</small>
                      </div>
                      <BFormTextarea placeholder="写下内部备注" rows="8" />
                    </BFormGroup>
                  </BCol>
                </BRow>
                <BButton variant="outline-light" class="mt-2">添加笔记</BButton>
              </BForm>
            </div>
          </div>
          <div class="pipeline-status-wrap mt-7">
            <div class="title-lg mb-3">线索管道状态</div>
            <ul class="pipeline-stutus">
              <li class="completed"><span>进行中</span></li>
              <li class="active"><span>跟进中</span></li>
              <li><span>已安排服务</span></li>
              <li><span>沟通中</span></li>
              <li><span>胜/败</span></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="activity-wrap mt-7">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="title-lg mb-0">动态</div>
              <BFormSelect class="mw-150p" model-value="selected">
                <BFormSelectOption value="selected">全部动态</BFormSelectOption>
                <BFormSelectOption value="1">一</BFormSelectOption>
                <BFormSelectOption value="2">二</BFormSelectOption>
                <BFormSelectOption value="3">三</BFormSelectOption>
              </BFormSelect>
            </div>
            <div class="title-sm text-primary mb-3">6月24日</div>
            <ul class="activity-thread">
              <li>
                <div class="media">
                  <div class="media-head">
                    <div
                      class="avatar avatar-icon avatar-sm avatar-primary avatar-rounded"
                    >
                      <span class="initial-wrap">
                        <feather-icon name="mail"></feather-icon>
                      </span>
                    </div>
                  </div>
                  <div class="media-body">
                    <div>
                      <div class="activity-text">
                        你向该联系人发送了
                        <span class="text-dark text-capitalize">1 条消息</span>。
                      </div>
                      <div class="activity-time">22:00</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <div class="media-head">
                    <div class="avatar avatar-sm avatar-soft-danger avatar-rounded">
                      <span class="initial-wrap">M</span>
                    </div>
                  </div>
                  <div class="media-body">
                    <div>
                      <div class="activity-text">
                        <span class="text-dark text-capitalize">摩根·弗里曼</span> 有时也被这样称呼，是用于排版印刷、平面或网页设计的占位文本。这段话出自 15 世纪一位不知名的排字工人之手，据信是他打乱的文字。
                      </div>
                      <div class="activity-time">22:00</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <div class="media-head">
                    <div class="avatar avatar-icon avatar-sm avatar-info avatar-rounded">
                      <span class="initial-wrap">
                        <feather-icon name="shield"></feather-icon>
                      </span>
                    </div>
                  </div>
                  <div class="media-body">
                    <div>
                      <div class="activity-text">
                        您的交易金额 <span class="text-dark">$208.15</span> 已于
                        02.12.18（<span class="text-dark">周一</span>）15:30 通过 PayU
                        Money 在线支付。
                      </div>
                      <div class="activity-time">22:00</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="title-sm text-primary mt-5 mb-3">6月25日</div>
            <ul class="activity-thread">
              <li>
                <div class="media">
                  <div class="media-head">
                    <div class="avatar avatar-sm avatar-soft-danger avatar-rounded">
                      <span class="initial-wrap">M</span>
                    </div>
                  </div>
                  <div class="media-body">
                    <div>
                      <div class="activity-text">
                        <span class="text-dark">摩根·弗里曼</span> 回复了您关于预约日程的提问。
                      </div>
                      <div class="activity-time">22:00</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script setup>
//image
import avatar2 from "@/assets/img/avatar2.jpg";
</script>
