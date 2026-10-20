<template>
  <div
    id="contact_detail"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-xl contact-detail-modal"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-body p-0">
          <ContactCallModal ref="callModal" />
          <header class="contact-header">
            <div class="d-flex align-items-center">
              <div class="dropify-circle edit-img me-3">
                <HkAvatarUploader :defaultImg="avatarSrc" />
              </div>
              <div>
                <div class="cp-name text-truncate">
                  {{ fullName(current) }}
                  <span v-if="current && current.blocked" class="badge badge-soft-dark ms-2">
                    已屏蔽
                  </span>
                </div>
                <p>无来电，一直忙碌</p>
                <hk-rating :rating="3" readOnly />
              </div>
            </div>
            <div class="contact-options-wrap">
              <ul class="hk-list hk-list-sm justify-content-center d-xl-flex d-none">
                <li>
                  <a
                    class="btn btn-icon btn-soft-primary btn-rounded"
                    :href="mailtoHref"
                    target="_blank"
                  >
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="mail"></feather-icon>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a class="btn btn-icon btn-soft-success btn-rounded" :href="telHref">
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="phone"></feather-icon>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    class="btn btn-icon btn-soft-danger btn-rounded"
                    href="#"
                    @click.prevent="videoCall"
                  >
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="video"></feather-icon>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
              <div class="dropdown mx-3 d-xl-block d-none">
                <button
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  class="btn btn-light dropdown-toggle"
                  type="button"
                >
                  操作
                </button>
                <div role="menu" class="dropdown-menu">
                  <a class="dropdown-item" href="#" @click.prevent="toggleStar">{{
                    current && current.starred ? "取消收藏" : "添加到收藏"
                  }}</a>
                  <a class="dropdown-item" href="#" @click.prevent="share">分享联系人</a>
                  <a class="dropdown-item" href="#" @click.prevent="toggleBlock">{{
                    current && current.blocked ? "解除屏蔽" : "屏蔽内容"
                  }}</a>
                  <a class="dropdown-item" href="#" @click.prevent="openDelegate">委托访问</a>
                  <div class="dropdown-divider"></div>
                  <a
                    class="dropdown-item"
                    href="#"
                    @click.prevent="toggleArchive"
                    >{{ current && current.archived ? "恢复联系人" : "归档联系人" }}</a
                  >
                  <a class="dropdown-item link-danger" href="#" @click.prevent="remove">删除联系人</a>
                  <a class="dropdown-item" href="#" data-bs-dismiss="modal">关闭</a>
                </div>
              </div>
              <div class="align-items-center d-xl-flex d-none">{{ counterText }}</div>
              <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle d-xl-inline-block d-none"
                href="#"
                v-tooltip
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="上一个"
                @click.prevent="moveContact(-1)"
                ><span class="btn-icon-wrap"
                  ><span class="feather-icon"
                    ><feather-icon name="chevron-left"></feather-icon></span></span
              ></a>
              <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle d-xl-inline-block d-none"
                href="#"
                v-tooltip
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="下一个"
                @click.prevent="moveContact(1)"
                ><span class="btn-icon-wrap"
                  ><span class="feather-icon"
                    ><feather-icon name="chevron-right"></feather-icon></span></span
              ></a>
              <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-xl-inline-block d-inline"
                href="#"
                data-bs-toggle="dropdown"
                ><span class="btn-icon-wrap"
                  ><span class="feather-icon"
                    ><feather-icon name="more-vertical"></feather-icon></span></span
              ></a>
              <div class="dropdown-menu dropdown-menu-end">
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="toggleStar"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon name="star"></feather-icon></span
                  ><span>{{ current && current.starred ? "取消星标" : "星标联系人" }}</span></a
                >
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="share"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon name="share-2"></feather-icon></span
                  ><span>分享联系人</span></a
                >
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="toggleBlock"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon :name="current && current.blocked ? 'unlock' : 'slash'"></feather-icon></span
                  ><span>{{ current && current.blocked ? "解除屏蔽" : "屏蔽内容" }}</span></a
                >
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="openDelegate"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon name="users"></feather-icon></span
                  ><span>委托访问</span></a
                >
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="toggleArchive"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon name="archive"></feather-icon></span
                  ><span>{{ current && current.archived ? "恢复联系人" : "归档联系人" }}</span></a
                >
                <a class="dropdown-item link-danger" href="#" @click.prevent="remove"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon name="trash"></feather-icon></span
                  ><span>删除联系人</span></a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-bs-dismiss="modal"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon name="x-square"></feather-icon></span
                  ><span>关闭</span></a
                >
              </div>
            </div>
          </header>
          <div class="contact-body contact-detail-body">
            <div data-simplebar class="nicescroll-bar">
              <div class="d-flex flex-xl-nowrap flex-wrap">
                <div class="contact-info w-xl-35 w-100">
                  <div class="dropdown action-btn">
                    <button
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      class="btn btn-light dropdown-toggle"
                      type="button"
                    >
                      操作
                    </button>
                    <div role="menu" class="dropdown-menu">
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="toggleStar"
                        ><span class="feather-icon dropdown-icon"
                          ><feather-icon name="star"></feather-icon></span
                        ><span>{{ current && current.starred ? "取消收藏" : "添加到收藏" }}</span></a
                      >
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="share"
                        ><span class="feather-icon dropdown-icon"
                          ><feather-icon name="share-2"></feather-icon></span
                        ><span>分享联系人</span></a
                      >
                      <a
                        class="dropdown-item"
                        href="#"
                        @click.prevent="openDelegate"
                        ><span class="feather-icon dropdown-icon"
                          ><feather-icon name="users"></feather-icon></span
                        ><span>委托访问</span></a
                      >
                      <a
                        class="dropdown-item link-danger"
                        href="#"
                        @click.prevent="remove"
                        ><span class="feather-icon dropdown-icon"
                          ><feather-icon name="trash"></feather-icon></span
                        ><span>删除联系人</span></a
                      >
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <a href="#">个人资料信息</a>
                      <button
                        class="btn btn-xs btn-icon btn-rounded btn-light"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="编辑"
                      >
                        <span
                          class="icon"
                          data-bs-toggle="modal"
                          data-bs-target="#editInfo"
                          ><span class="feather-icon"
                            ><feather-icon name="edit-2"></feather-icon></span
                        ></span>
                      </button>
                    </div>
                    <div class="card-body">
                      <ul class="cp-info">
                        <li>
                          <span>名</span>
                          <span>{{ current && current.firstName || "-" }}</span>
                        </li>
                        <li>
                          <span>姓</span>
                          <span>{{ current && current.lastName || "-" }}</span>
                        </li>
                        <li>
                          <span>邮箱</span>
                          <span>{{ current && current.email || "-" }}</span>
                        </li>
                        <li>
                          <span>电话</span>
                          <span>{{ current && current.phone || "-" }}</span>
                        </li>
                        <li>
                          <span>位置</span>
                          <span>{{ current && current.location || "-" }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="separator-full"></div>
                  <div class="card">
                    <div class="card-header">
                      <a href="#">更多信息</a>
                      <button
                        class="btn btn-xs btn-icon btn-rounded btn-light"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="编辑"
                      >
                        <span
                          class="icon"
                          data-bs-toggle="modal"
                          data-bs-target="#moreContact"
                          ><span class="feather-icon"
                            ><feather-icon name="edit-2"></feather-icon></span
                        ></span>
                      </button>
                    </div>
                    <div class="card-body">
                      <ul class="cp-info">
                        <li>
                          <span>职位</span>
                          <span>{{ current && current.position || "-" }}</span>
                        </li>
                        <li>
                          <span>公司</span>
                          <span>{{ current && current.company || "-" }}</span>
                        </li>
                        <li>
                          <span>位置</span>
                          <span>{{ current && current.location || "-" }}</span>
                        </li>
                        <li>
                          <span>创建时间</span>
                          <span>{{ formatDate(current && current.createdAt) }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="separator-full"></div>
                  <div class="card">
                    <div class="card-header">
                      <a href="#">标签</a>
                      <button
                        class="btn btn-xs btn-icon btn-rounded btn-light"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="添加标签"
                      >
                        <span
                          class="icon"
                          data-bs-toggle="modal"
                          data-bs-target="#tagsInput"
                          ><span class="feather-icon"
                            ><feather-icon name="plus"></feather-icon></span
                        ></span>
                      </button>
                    </div>
                    <div class="card-body">
                      <template v-if="labelList.length">
                        <span
                          v-for="label in labelList"
                          :key="label"
                          :class="['badge', 'me-2', labelClass(label)]"
                          >{{ label }}</span
                        >
                      </template>
                      <span v-else class="text-muted">暂无标签</span>
                    </div>
                  </div>
                  <div class="separator-full"></div>
                  <div class="card">
                    <div class="card-header">
                      <a href="#">社交账号</a>
                    </div>
                    <div class="card-body">
                      <ul class="hk-list hk-list-sm">
                        <li>
                          <button class="btn btn-icon btn-rounded btn-primary">
                            <span class="icon">
                              <i class="fa fa-behance"></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button class="btn btn-icon btn-rounded btn-warning">
                            <span class="icon">
                              <FontAwesomeIcon :icon="faGoogleDrive" />
                            </span>
                          </button>
                        </li>
                        <li>
                          <button class="btn btn-icon btn-rounded btn-info">
                            <span class="icon">
                              <i class="fa fa-dropbox"></i>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button class="btn btn-icon btn-rounded btn-dark">
                            <span class="icon">
                              <i class="fa fa-github"></i>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="separator-full"></div>
                  <div class="card">
                    <div class="card-header">
                      <a href="#">个人简介</a>
                      <button
                        class="btn btn-xs btn-icon btn-rounded btn-light"
                        v-tooltip
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="编辑"
                      >
                        <span
                          class="icon"
                          data-bs-toggle="modal"
                          data-bs-target="#addBio"
                          ><span class="feather-icon"
                            ><feather-icon name="edit-2"></feather-icon></span
                        ></span>
                      </button>
                    </div>
                    <div class="card-body">
                      <p class="mb-0">
                        {{ current && current.notes || "暂无个人简介" }}
                      </p>
                    </div>
                  </div>
                  <div class="separator-full"></div>
                  <div class="card">
                    <div class="card-header">
                      <a href="#">设置</a>
                    </div>
                    <div class="card-body">
                      <ul class="cp-action">
                        <li>
                          <a href="javascript:void(0);" @click="share">
                            <span class="cp-icon-wrap"
                              ><span class="feather-icon"
                                ><feather-icon name="upload"></feather-icon></span
                            ></span>
                            分享联系人
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" @click="toggleStar">
                            <span class="cp-icon-wrap"
                              ><span class="feather-icon"
                                ><feather-icon :name="current && current.starred ? 'star' : 'heart'"></feather-icon></span
                            ></span>
                            {{ current && current.starred ? "取消收藏" : "添加到收藏" }}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" @click="toggleBlock">
                            <span class="cp-icon-wrap"
                              ><span class="feather-icon"
                                ><feather-icon :name="current && current.blocked ? 'unlock' : 'slash'"></feather-icon></span
                            ></span>
                            {{ current && current.blocked ? "解除屏蔽" : "屏蔽内容" }}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" @click="openDelegate">
                            <span class="cp-icon-wrap"
                              ><span class="feather-icon"
                                ><feather-icon name="users"></feather-icon></span
                            ></span>
                            委托访问
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="link-danger" @click="remove">
                            <span class="cp-icon-wrap"
                              ><span class="feather-icon"
                                ><feather-icon name="trash"></feather-icon></span
                            ></span>
                            删除联系人
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="contact-more-info">
                  <ul class="nav nav-tabs nav-line nav-icon nav-light">
                    <li class="nav-item">
                      <a class="nav-link active" data-bs-toggle="tab" href="#tab_summery">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="zap"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">摘要</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab_activity">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="activity"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">动态</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab_notes">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="edit-3"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">笔记</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab_email">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="mail"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">邮箱</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab_calls">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="phone"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">通话</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab_tasks">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="check-square"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">任务</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab_schedule">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="clock"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">日程</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#tab_sales">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="shield"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">销售</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content mt-7">
                    <!-- 摘要 -->
                    <div class="tab-pane fade show active" id="tab_summery">
                      <div class="card card-border mb-4">
                        <div class="card-body">
                          <div class="title title-xs title-wth-divider text-primary text-uppercase mb-3">
                            <span>联系人摘要</span>
                          </div>
                          <ul class="cp-info">
                            <li><span>姓名</span><span>{{ fullName(current) }}</span></li>
                            <li><span>邮箱</span><span>{{ current && current.email || "-" }}</span></li>
                            <li><span>电话</span><span>{{ current && current.phone || "-" }}</span></li>
                            <li><span>职位 / 公司</span><span>{{ current && current.position || "-" }} / {{ current && current.company || "-" }}</span></li>
                          </ul>
                          <div class="d-flex flex-wrap gap-2 mt-3">
                            <a class="btn btn-sm btn-soft-primary" :href="mailtoHref">发送邮件</a>
                            <a class="btn btn-sm btn-soft-success" :href="telHref">拨打电话</a>
                            <button class="btn btn-sm btn-soft-danger" @click="videoCall">视频通话</button>
                            <button class="btn btn-sm btn-soft-dark" @click="openDelegate">委托访问</button>
                          </div>
                        </div>
                      </div>
                      <form @submit.prevent="saveNote">
                        <div class="row">
                          <div class="col-md-12 form-group">
                            <div class="form-label-group">
                              <label>写一条笔记</label>
                            </div>
                            <textarea
                              class="form-control"
                              rows="5"
                              placeholder="写下内部备注"
                              v-model="newNote"
                            ></textarea>
                          </div>
                        </div>
                        <button class="btn btn-outline-light mt-2" type="submit">
                          添加笔记
                        </button>
                      </form>
                    </div>
                    <!-- 动态 -->
                    <div class="tab-pane fade" id="tab_activity">
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="title-sm text-primary mb-0">最近动态</div>
                        <button class="btn btn-xs btn-light" @click="clearActivities">清空</button>
                      </div>
                      <template v-if="activityList.length">
                        <ul class="activity-thread">
                          <li v-for="a in activityList" :key="a.id">
                            <div class="media">
                              <div class="media-head">
                                <div
                                  class="avatar avatar-icon avatar-sm avatar-soft-primary avatar-rounded"
                                >
                                  <span class="initial-wrap"
                                    ><span class="feather-icon"
                                      ><feather-icon :name="a.type"></feather-icon></span
                                  ></span>
                                </div>
                              </div>
                              <div class="media-body">
                                <div>
                                  <div class="activity-text">{{ a.text }}</div>
                                  <div class="activity-time">{{ relTime(a.ts) }}</div>
                                </div>
                              </div>
                              <a
                                class="btn btn-xs btn-icon btn-flush-dark btn-rounded flex-shrink-0"
                                href="#"
                                title="删除"
                                @click.prevent="removeActivity(a)"
                              >
                                <span class="feather-icon"><feather-icon name="x"></feather-icon></span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </template>
                      <p v-else class="text-muted text-center py-4">暂无动态</p>
                    </div>
                    <!-- 笔记 -->
                    <div class="tab-pane fade" id="tab_notes">
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="title-sm text-primary mb-0">笔记（{{ noteList.length }}）</div>
                        <button class="btn btn-xs btn-light" @click="clearNotes">清空全部</button>
                      </div>
                      <template v-if="noteList.length">
                        <div class="card card-border mb-3" v-for="(note, idx) in noteList" :key="idx">
                          <div class="card-body py-3">
                            <p class="mb-0" style="white-space: pre-wrap">{{ note }}</p>
                          </div>
                        </div>
                      </template>
                      <p v-else class="text-muted text-center py-4">暂无笔记，请在下方添加</p>
                      <form @submit.prevent="appendNote" class="mt-3">
                        <div class="form-group">
                          <textarea class="form-control" rows="4" placeholder="在底部追加一条笔记" v-model="newNote"></textarea>
                        </div>
                        <button class="btn btn-primary mt-2" type="submit">添加笔记</button>
                      </form>
                    </div>
                    <!-- 邮箱 -->
                    <div class="tab-pane fade" id="tab_email">
                      <div class="title-sm text-primary mb-3">发送邮件</div>
                      <form @submit.prevent="sendEmail">
                        <div class="form-group">
                          <label class="form-label">收件人</label>
                          <input class="form-control" type="email" :value="current && current.email || ''" disabled />
                        </div>
                        <div class="form-group">
                          <label class="form-label">主题</label>
                          <input class="form-control" type="text" placeholder="邮件主题" v-model="mailForm.subject" />
                        </div>
                        <div class="form-group">
                          <label class="form-label">内容</label>
                          <textarea class="form-control" rows="5" placeholder="邮件正文" v-model="mailForm.body"></textarea>
                        </div>
                        <button class="btn btn-primary mt-2" type="submit">发送邮件</button>
                      </form>
                    </div>
                    <!-- 通话 -->
                    <div class="tab-pane fade" id="tab_calls">
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="title-sm text-primary mb-0">通话记录（{{ callList.length }}）</div>
                        <a class="btn btn-sm btn-soft-success" :href="telHref" @click="logDial">
                          <span class="feather-icon me-2"><feather-icon name="phone"></feather-icon></span>
                          拨打电话
                        </a>
                      </div>
                      <template v-if="callList.length">
                        <ul class="list-group list-group-flush">
                          <li
                            class="list-group-item d-flex align-items-center justify-content-between px-0"
                            v-for="call in callList"
                            :key="call.id"
                          >
                            <div class="d-flex align-items-center">
                              <span
                                class="btn btn-icon btn-rounded me-3"
                                :class="call.type === 'video' ? 'btn-soft-danger' : 'btn-soft-success'"
                              >
                                <span class="feather-icon">
                                  <feather-icon :name="call.type === 'video' ? 'video' : 'phone'"></feather-icon>
                                </span>
                              </span>
                              <div>
                                <span class="d-block text-dark">
                                  {{ call.type === "video" ? "视频通话" : "电话通话" }}
                                  <span v-if="call.status === 'completed'" class="fs-7 text-muted ms-2">
                                    {{ call.duration ? formatDuration(call.duration) : "未接通" }}
                                  </span>
                                </span>
                                <span class="fs-7 text-muted d-block">{{ current && current.phone || "-" }} · {{ relTime(call.ts) }}</span>
                              </div>
                            </div>
                            <a
                              class="btn btn-xs btn-icon btn-flush-dark btn-rounded"
                              href="#"
                              title="删除"
                              @click.prevent="removeCall(call)"
                            >
                              <span class="feather-icon"><feather-icon name="x"></feather-icon></span>
                            </a>
                          </li>
                        </ul>
                      </template>
                      <p v-else class="text-muted text-center py-4">暂无通话记录</p>
                    </div>
                    <!-- 任务 -->
                    <div class="tab-pane fade" id="tab_tasks">
                      <form @submit.prevent="addTaskForm" class="mb-3">
                        <div class="d-flex gap-2">
                          <input class="form-control" placeholder="添加任务，例如：发送报价单" v-model="taskForm.title" required />
                          <select class="form-select" style="width: 120px" v-model="taskForm.priority">
                            <option value="LOW">低</option>
                            <option value="MEDIUM">中</option>
                            <option value="HIGH">高</option>
                            <option value="URGENT">紧急</option>
                          </select>
                          <button class="btn btn-primary flex-shrink-0" type="submit">添加</button>
                        </div>
                      </form>
                      <div class="d-flex align-items-center mb-3" v-if="taskList.length">
                        <div class="progress flex-grow-1 me-3" style="height: 6px">
                          <div
                            class="progress-bar bg-success"
                            :style="{ width: taskProgress + '%' }"
                          ></div>
                        </div>
                        <span class="fs-7 text-muted">{{ taskDone }}/{{ taskList.length }} 已完成</span>
                      </div>
                      <template v-if="taskList.length">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item d-flex align-items-center px-0" v-for="t in taskList" :key="t.id">
                            <input
                              class="form-check-input me-3"
                              type="checkbox"
                              :checked="t.done"
                              @change="detailStore.toggleTask(cid, t.id)"
                            />
                            <span class="flex-grow-1" :class="{ 'text-muted text-decoration-line-through': t.done }">
                              {{ t.title }}
                            </span>
                            <span :class="['badge', 'me-2', priorityBadge(t.priority)]">{{ priorityText(t.priority) }}</span>
                            <a class="btn btn-xs btn-icon btn-flush-dark btn-rounded" href="#" title="删除" @click.prevent="detailStore.deleteTask(cid, t.id)">
                              <span class="feather-icon"><feather-icon name="x"></feather-icon></span>
                            </a>
                          </li>
                        </ul>
                      </template>
                      <p v-else class="text-muted text-center py-4">暂无任务，添加一个待办事项吧</p>
                    </div>
                    <!-- 日程 -->
                    <div class="tab-pane fade" id="tab_schedule">
                      <form @submit.prevent="addEventForm" class="mb-3">
                        <div class="d-flex gap-2">
                          <input class="form-control" placeholder="日程标题，例如：项目启动会" v-model="eventForm.title" required />
                          <input class="form-control" style="width: 150px" type="date" v-model="eventForm.date" required />
                          <button class="btn btn-primary flex-shrink-0" type="submit">添加</button>
                        </div>
                      </form>
                      <template v-if="eventList.length">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item d-flex align-items-center justify-content-between px-0" v-for="ev in eventList" :key="ev.id">
                            <div class="d-flex align-items-center">
                              <span class="btn btn-icon btn-rounded btn-soft-primary me-3">
                                <span class="feather-icon"><feather-icon name="calendar"></feather-icon></span>
                              </span>
                              <div>
                                <span class="d-block text-dark">{{ ev.title }}</span>
                                <span class="fs-7 text-muted d-block">{{ formatDate(ev.date) }}</span>
                              </div>
                            </div>
                            <a class="btn btn-xs btn-icon btn-flush-dark btn-rounded" href="#" title="删除" @click.prevent="detailStore.deleteEvent(cid, ev.id)">
                              <span class="feather-icon"><feather-icon name="x"></feather-icon></span>
                            </a>
                          </li>
                        </ul>
                      </template>
                      <p v-else class="text-muted text-center py-4">暂无日程安排</p>
                    </div>
                    <!-- 销售 -->
                    <div class="tab-pane fade" id="tab_sales">
                      <div class="title-sm text-primary mb-3">线索管道状态</div>
                      <ul class="pipeline-stutus">
                        <li
                          v-for="(stage, si) in pipelineStages"
                          :key="si"
                          :class="{
                            completed: pipelineStage > si,
                            active: pipelineStage === si,
                          }"
                          @click="setStage(si)"
                          style="cursor: pointer"
                        >
                          <span>{{ stage }}</span>
                        </li>
                      </ul>
                      <div class="clearfix"></div>
                      <div class="card card-border mt-4">
                        <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="text-dark">当前阶段：<strong>{{ pipelineStages[pipelineStage] }}</strong></span>
                            <button class="btn btn-xs btn-light" @click="setStage(0)">重置</button>
                          </div>
                          <div class="form-group mb-0">
                            <label class="form-label">阶段说明</label>
                            <textarea class="form-control" rows="3" placeholder="记录线索进展" v-model="pipelineNote"></textarea>
                          </div>
                          <button class="btn btn-primary mt-2" @click="savePipeline">保存进展</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCallModal from "./ContactCallModal.vue";
import HkAvatarUploader from "@/hk-components/@hk-avatar-uploader/HkAvatarUploader.vue";
//icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
//image
import avatar2 from "@/assets/img/avatar2.jpg";
import { useContactStore } from "@/stores/contactStore";
import { useContactDetailStore } from "@/stores/contactDetailStore";
import Swal from "sweetalert2";
import { Modal, Tab } from "bootstrap";
import { parseLabels, fullName } from "@/utils/export";

const TAG_CLASS = [
  "badge-soft-primary",
  "badge-soft-success",
  "badge-soft-danger",
  "badge-soft-warning",
  "badge-soft-info",
  "badge-soft-violet",
];

const PIPELINE_STAGES = ["进行中", "跟进中", "已安排服务", "沟通中", "胜/败"];

export default {
  name: "ContactDetails",
  components: {
    ContactCallModal,
    HkAvatarUploader,
    FontAwesomeIcon,
  },
  setup() {
    const contactStore = useContactStore();
    const detailStore = useContactDetailStore();
    return { contactStore, detailStore };
  },
  data() {
    return {
      faGoogleDrive,
      avatar2,
      newNote: "",
      mailForm: { subject: "", body: "" },
      taskForm: { title: "", priority: "MEDIUM" },
      eventForm: { title: "", date: "" },
      pipelineNote: "",
    };
  },
  watch: {
    "contactStore.current"(c) {
      if (c) {
        this.detailStore.seedActivities(c.id, c);
        this.pipelineNote = this.detailStore.extras(c.id).pipeline.note || "";
        this.resetTab();
      }
      this.newNote = "";
      this.mailForm = { subject: "", body: "" };
    },
  },
  computed: {
    current() {
      return this.contactStore.current;
    },
    cid() {
      return this.current && this.current.id;
    },
    labelList() {
      return this.current ? parseLabels(this.current.labels) : [];
    },
    nameText() {
      return this.current ? fullName(this.current) : "";
    },
    initialLetter() {
      const s = (this.current && (this.current.firstName || fullName(this.current))) || "?";
      return s.trim().charAt(0).toUpperCase() || "?";
    },
    avatarSrc() {
      return (this.current && this.current.avatar) || this.avatar2;
    },
    mailtoHref() {
      const email = (this.current && this.current.email) || "";
      return email ? `mailto:${email}` : "#";
    },
    telHref() {
      const phone = (this.current && this.current.phone) || "";
      return phone ? `tel:${phone}` : "#";
    },
    currentIndex() {
      const list = this.contactStore.filteredContacts;
      const idx = list.findIndex((c) => c.id === this.cid);
      return idx === -1 ? 0 : idx;
    },
    totalInView() {
      return this.contactStore.filteredContacts.length;
    },
    counterText() {
      return `${this.currentIndex + 1} - ${this.totalInView}，共 ${this.totalInView} 条`;
    },
    extras() {
      return this.detailStore.extras(this.cid);
    },
    activityList() {
      return this.extras.activities.slice().sort((a, b) => new Date(b.ts) - new Date(a.ts));
    },
    callList() {
      return this.extras.calls.slice().sort((a, b) => new Date(b.ts) - new Date(a.ts));
    },
    taskList() {
      return this.extras.tasks.slice().sort((a, b) => new Date(b.ts) - new Date(a.ts));
    },
    taskDone() {
      return this.taskList.filter((t) => t.done).length;
    },
    taskProgress() {
      if (!this.taskList.length) return 0;
      return Math.round((this.taskDone / this.taskList.length) * 100);
    },
    eventList() {
      return this.extras.events.slice().sort((a, b) => new Date(b.ts) - new Date(a.ts));
    },
    pipelineStage() {
      const p = this.extras.pipeline;
      return typeof p.stage === "number" ? p.stage : 0;
    },
    pipelineStages() {
      return PIPELINE_STAGES;
    },
    noteList() {
      if (!this.current || !this.current.notes) return [];
      return this.current.notes.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
    },
  },
  methods: {
    fullName(c) {
      return c ? fullName(c) : "";
    },
    labelClass(label) {
      const idx = Math.abs(String(label).split("").reduce((s, ch) => s + ch.charCodeAt(0), 0));
      return TAG_CLASS[idx % TAG_CLASS.length];
    },
    formatDate(value) {
      if (!value) return "-";
      if (String(value).length === 10 && /^\d{4}-\d{2}-\d{2}$/.test(String(value))) {
        const p = String(value).split("-");
        return `${p[0]}年${Number(p[1])}月${Number(p[2])}日`;
      }
      const d = new Date(value);
      if (isNaN(d.getTime())) return value;
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    },
    relTime(ts) {
      if (!ts) return "";
      const then = new Date(ts).getTime();
      const diff = Math.max(0, Date.now() - then);
      const min = Math.floor(diff / 60000);
      if (min < 1) return "刚刚";
      if (min < 60) return `${min} 分钟前`;
      const h = Math.floor(min / 60);
      if (h < 24) return `${h} 小时前`;
      const d = Math.floor(h / 24);
      if (d < 7) return `${d} 天前`;
      return this.formatDate(ts);
    },
    formatDuration(sec) {
      const s = Number(sec) || 0;
      return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    },
    resetTab() {
      const link = document.querySelector('#contact_detail .nav-link[data-bs-toggle="tab"]');
      if (link) {
        try {
          Tab.getOrCreateInstance(link).show();
        } catch (e) {}
      }
    },
    hide() {
      const el = document.getElementById("contact_detail");
      const m = Modal.getInstance(el);
      if (m) m.hide();
    },
    moveContact(dir) {
      const list = this.contactStore.filteredContacts;
      if (!list.length || !this.cid) return;
      const idx = list.findIndex((c) => c.id === this.cid);
      const nextIdx = (idx + dir + list.length) % list.length;
      if (list[nextIdx]) this.contactStore.current = list[nextIdx];
    },
    log(title) {
      this.detailStore.logActivity(this.cid, title.icon, title.text);
    },
    toggleStar() {
      if (!this.cid) return;
      this.contactStore
        .toggleStar(this.cid)
        .then(() => {
          this.detailStore.logActivity(
            this.cid,
            "star",
            (this.current && this.current.starred ? "将「" : "取消了「") + this.nameText + (this.current && this.current.starred ? "」标为重要" : "」的重要标记")
          );
          Swal.fire({
            icon: "success",
            title: this.current.starred ? "已加星标" : "已取消星标",
            timer: 1200,
            showConfirmButton: false,
          });
        })
        .catch((err) =>
          Swal.fire({ icon: "error", title: "操作失败", text: err.response?.data?.message || err.message })
        );
    },
    async toggleBlock() {
      if (!this.cid) return;
      const wasBlocked = !!this.current.blocked;
      try {
        if (wasBlocked) {
          await this.contactStore.unblockContact(this.cid);
        } else {
          await this.contactStore.blockContact(this.cid);
        }
        this.detailStore.logActivity(
          this.cid,
          "slash",
          (wasBlocked ? "解除了对「" : "屏蔽了") + this.nameText + (wasBlocked ? "」的屏蔽" : "")
        );
        Swal.fire({ icon: "success", title: wasBlocked ? "已解除屏蔽" : "已屏蔽", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "操作失败", text: err.response?.data?.message || err.message });
      }
    },
    videoCall() {
      if (!this.cid) return;
      if (this.current.blocked) {
        Swal.fire({ icon: "info", title: "已屏蔽", text: "该联系人已被屏蔽，无法发起通话", timer: 1800, showConfirmButton: false });
        return;
      }
      if (this.$refs.callModal) this.$refs.callModal.show();
    },
    async toggleArchive() {
      if (!this.cid) return;
      const isArchived = !!this.current.archived;
      try {
        if (isArchived) {
          await this.contactStore.restoreContact(this.cid);
        } else {
          await this.contactStore.archiveContact(this.cid);
        }
        this.hide();
        this.detailStore.logActivity(this.cid, "archive", (isArchived ? "恢复了「" : "归档了「") + this.nameText + "」");
        Swal.fire({ icon: "success", title: isArchived ? "已恢复" : "已归档", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "操作失败", text: err.response?.data?.message || err.message });
      }
    },
    share() {
      if (this.current && this.current.email) {
        window.location.href = `mailto:${this.current.email}?subject=${encodeURIComponent("来自 caoba 的联系")}`;
        this.detailStore.logActivity(this.cid, "mail", "通过邮件分享了联系人");
      } else {
        Swal.fire({ icon: "info", title: "该联系人暂无邮箱", timer: 1500, showConfirmButton: false });
      }
    },
    openDelegate() {
      const el = document.getElementById("delegate_access");
      if (el) Modal.getOrCreateInstance(el).show();
    },
    async remove() {
      if (!this.cid) return;
      const r = await Swal.fire({
        title: "删除联系人",
        text: `确定删除「${fullName(this.current)}」吗？删除后无法恢复。`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        confirmButtonColor: "#e74c3c",
      });
      if (!r.isConfirmed) return;
      try {
        await this.contactStore.deleteContact(this.cid);
        this.hide();
        Swal.fire({ icon: "success", title: "已删除", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "删除失败", text: err.response?.data?.message || err.message });
      }
    },
    async saveNote() {
      if (!this.cid) return;
      const note = (this.newNote || "").trim();
      if (!note) return;
      try {
        const prevNotes = this.current.notes || "";
        await this.contactStore.updateContact(this.cid, {
          notes: prevNotes ? `${prevNotes}\n${note}` : note,
        });
        this.detailStore.logActivity(this.cid, "edit-3", "添加了一条笔记");
        this.newNote = "";
        Swal.fire({ icon: "success", title: "笔记已保存", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "保存失败", text: err.response?.data?.message || err.message });
      }
    },
    async appendNote() {
      await this.saveNote();
    },
    async clearNotes() {
      if (!this.cid) return;
      const r = await Swal.fire({ title: "清空笔记", text: "确定清空该联系人的全部笔记吗？", icon: "question", showCancelButton: true, confirmButtonText: "清空", cancelButtonText: "取消" });
      if (!r.isConfirmed) return;
      try {
        await this.contactStore.updateContact(this.cid, { notes: "" });
        this.detailStore.logActivity(this.cid, "trash-2", "清空了联系人笔记");
        Swal.fire({ icon: "success", title: "已清空", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "操作失败", text: err.response?.data?.message || err.message });
      }
    },
    async sendEmail() {
      if (!this.cid || !this.current.email) {
        Swal.fire({ icon: "info", title: "该联系人暂无邮箱", timer: 1500, showConfirmButton: false });
        return;
      }
      const subject = (this.mailForm.subject || "").trim();
      const body = (this.mailForm.body || "").trim();
      const href = `mailto:${this.current.email}?subject=${encodeURIComponent(subject || "来自 caoba 的联系")}&body=${encodeURIComponent(body)}`;
      try {
        window.location.href = href;
      } catch (e) {}
      this.detailStore.logActivity(this.cid, "mail", "发送了邮件「" + (subject || "无主题") + "」");
      this.mailForm = { subject: "", body: "" };
      Swal.fire({ icon: "success", title: "邮件已发送", timer: 1200, showConfirmButton: false });
    },
    logDial() {
      if (!this.cid) return;
      this.detailStore.pushCall(this.cid, { type: "voice", duration: 0, status: "completed" });
      this.detailStore.logActivity(this.cid, "phone", `拨打给「${this.nameText}」` + (this.current && this.current.phone ? "（" + this.current.phone + "）" : ""));
    },
    removeCall(call) {
      this.detailStore.removeCall(this.cid, call.id);
    },
    removeActivity(a) {
      this.detailStore.removeActivity(this.cid, a.id);
    },
    clearActivities() {
      this.detailStore.clearActivities(this.cid);
      Swal.fire({ icon: "success", title: "动态已清空", timer: 1000, showConfirmButton: false });
    },
    addTaskForm() {
      const title = (this.taskForm.title || "").trim();
      if (!title || !this.cid) return;
      this.detailStore.addTask(this.cid, title, this.taskForm.priority);
      this.detailStore.logActivity(this.cid, "check-square", "添加了任务「" + title + "」");
      this.taskForm.title = "";
    },
    addEventForm() {
      const title = (this.eventForm.title || "").trim();
      if (!title || !this.cid) return;
      this.detailStore.addEvent(this.cid, { title, date: this.eventForm.date || "" });
      this.detailStore.logActivity(this.cid, "calendar", "安排了日程「" + title + "」");
      this.eventForm = { title: "", date: "" };
    },
    setStage(si) {
      this.detailStore.setPipeline(this.cid, si, this.pipelineNote);
      this.detailStore.logActivity(this.cid, "shield", "更新线索管道为「" + PIPELINE_STAGES[si] + "」");
      Swal.fire({ icon: "success", title: "已更新为「" + PIPELINE_STAGES[si] + "」", timer: 1000, showConfirmButton: false });
    },
    savePipeline() {
      this.detailStore.setPipeline(this.cid, this.pipelineStage, this.pipelineNote);
      this.detailStore.logActivity(this.cid, "shield", "保存了线索管道进展");
      Swal.fire({ icon: "success", title: "已保存", timer: 1000, showConfirmButton: false });
    },
    priorityText(p) {
      return { LOW: "低", MEDIUM: "中", HIGH: "高", URGENT: "紧急" }[p] || "中";
    },
    priorityBadge(p) {
      return { LOW: "badge-soft-info", MEDIUM: "badge-soft-primary", HIGH: "badge-soft-warning", URGENT: "badge-soft-danger" }[p] || "badge-soft-primary";
    },
  },
};
</script>
