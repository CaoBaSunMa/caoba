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
          <header class="contact-header">
            <div class="d-flex align-items-center">
              <div class="dropify-circle edit-img me-3">
                <HkAvatarUploader :defaultImg="avatar2" />
              </div>
              <div>
                <div class="cp-name text-truncate">曼达琳·肖恩</div>
                <p>无来电，一直忙碌</p>
                <hk-rating :rating="3" readOnly />
              </div>
            </div>
            <div class="contact-options-wrap">
              <ul class="hk-list hk-list-sm justify-content-center d-xl-flex d-none">
                <li>
                  <a class="btn btn-icon btn-soft-primary btn-rounded" href="#">
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="mail"></feather-icon>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a class="btn btn-icon btn-soft-success btn-rounded" href="#">
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="phone"></feather-icon>
                      </span> </span
                  ></a>
                </li>
                <li>
                  <a class="btn btn-icon btn-soft-danger btn-rounded" href="#">
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <feather-icon name="video"></feather-icon>
                      </span> </span
                  ></a>
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
                  <a class="dropdown-item" href="#">操作</a>
                  <a class="dropdown-item" href="#">另一个操作</a>
                  <a class="dropdown-item" href="#">其他选项</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">分隔链接</a>
                </div>
              </div>
              <div class="align-items-center d-xl-flex d-none">1 - 10，共 30 条</div>
              <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle d-xl-inline-block d-none"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="上一个"
                ><span class="btn-icon-wrap"
                  ><span class="feather-icon"
                    ><feather-icon name="chevron-left"></feather-icon></span></span
              ></a>
              <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle d-xl-inline-block d-none"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="下一个"
                ><span class="btn-icon-wrap"
                  ><span class="feather-icon"
                    ><feather-icon name="chevron-right"></feather-icon></span></span
              ></a>
              <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-xl-inline-block d-nonet"
                href="#"
                data-bs-toggle="dropdown"
                ><span class="btn-icon-wrap"
                  ><span class="feather-icon"
                    ><feather-icon name="more-vertical"></feather-icon></span></span
              ></a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="profile.html"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon name="star"></feather-icon></span
                  ><span>星标消息</span></a
                >
                <a class="dropdown-item" href="#"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon name="archive"></feather-icon></span
                  ><span>归档消息</span></a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="email.html"
                  ><span class="feather-icon dropdown-icon"
                    ><feather-icon name="slash"></feather-icon></span
                  ><span>屏蔽内容</span></a
                >
                <a class="dropdown-item" href="email.html" data-bs-dismiss="modal"
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
                      <a class="dropdown-item" href="#">操作</a>
                      <a class="dropdown-item" href="#">另一个操作</a>
                      <a class="dropdown-item" href="#">其他选项</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">分隔链接</a>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <a href="#">个人资料信息</a>
                      <button
                        class="btn btn-xs btn-icon btn-rounded btn-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="编辑"
                      >
                        <span class="icon"
                          ><span class="feather-icon"
                            ><feather-icon name="edit-2"></feather-icon></span
                        ></span>
                      </button>
                    </div>
                    <div class="card-body">
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
                    </div>
                  </div>
                  <div class="separator-full"></div>
                  <div class="card">
                    <div class="card-header">
                      <a href="#">更多信息</a>
                      <button
                        class="btn btn-xs btn-icon btn-rounded btn-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="编辑"
                      >
                        <span class="icon"
                          ><span class="feather-icon"
                            ><feather-icon name="edit-2"></feather-icon></span
                        ></span>
                      </button>
                    </div>
                    <div class="card-body">
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
                    </div>
                  </div>
                  <div class="separator-full"></div>
                  <div class="card">
                    <div class="card-header">
                      <a href="#">标签</a>
                      <button
                        class="btn btn-xs btn-icon btn-rounded btn-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="添加标签"
                      >
                        <span class="icon"
                          ><span class="feather-icon"
                            ><feather-icon name="plus"></feather-icon></span
                        ></span>
                      </button>
                    </div>
                    <div class="card-body">
                      <span class="badge badge-soft-violet">协作</span>
                      <span class="badge badge-soft-danger">React 开发</span>
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
                              <!-- <i class="fa fa-google-drive"></i> -->
                              <font-awesome-icon icon="fab fa-google-drive" />
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
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="编辑"
                      >
                        <span class="icon"
                          ><span class="feather-icon"
                            ><feather-icon name="edit-2"></feather-icon></span
                        ></span>
                      </button>
                    </div>
                    <div class="card-body">
                      <p>
                        你好，摩根·弗里曼是一名全栈前端开发工程师，在压力下工作是他的特质。
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
                          <a href="javascript:void(0);">
                            <span class="cp-icon-wrap"
                              ><span class="feather-icon"
                                ><feather-icon name="upload"></feather-icon></span
                            ></span>
                            分享联系人
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <span class="cp-icon-wrap"
                              ><span class="feather-icon"
                                ><feather-icon name="heart"></feather-icon></span
                            ></span>
                            添加到收藏
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="link-danger">
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
                      <a class="nav-link" data-bs-toggle="tab" href="#">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="activity"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">动态</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="edit-3"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">笔记</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="mail"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">邮箱</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="phone"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">通话</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="check-square"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">任务</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="clock"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">日程</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#">
                        <span class="nav-icon-wrap"
                          ><span class="feather-icon"
                            ><feather-icon name="shield"></feather-icon></span
                        ></span>
                        <span class="nav-link-text">销售</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content mt-7">
                    <div class="tab-pane fade show active" id="tab_summery">
                      <form>
                        <div class="row">
                          <div class="col-md-12 form-group">
                            <div class="form-label-group">
                              <label>写一条笔记</label>
                              <small class="text-muted">1200</small>
                            </div>
                            <textarea
                              class="form-control"
                              rows="8"
                              placeholder="写下内部备注"
                            ></textarea>
                          </div>
                        </div>
                        <button class="btn btn-outline-light mt-2">添加笔记</button>
                      </form>
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
                      <select class="form-select mw-150p">
                        <option selected="">全部动态</option>
                        <option value="1">一</option>
                        <option value="2">二</option>
                        <option value="3">三</option>
                      </select>
                    </div>
                    <div class="title-sm text-primary mb-3">6月24日</div>
                    <ul class="activity-thread">
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div
                              class="avatar avatar-icon avatar-sm avatar-primary avatar-rounded"
                            >
                              <span class="initial-wrap"
                                ><span class="feather-icon"
                                  ><feather-icon name="mail"></feather-icon></span
                              ></span>
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
                            <div
                              class="avatar avatar-sm avatar-soft-danger avatar-rounded"
                            >
                              <span class="initial-wrap">M</span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <div class="activity-text">
                                <span class="text-dark text-capitalize"
                                  >摩根·弗里曼</span
                                >
                                有时也被这样称呼，是用于排版印刷、平面或网页设计的占位文本。这段话出自 15 世纪一位不知名的排字工人之手，据信是他打乱的文字。
                              </div>
                              <div class="activity-time">22:00</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="media">
                          <div class="media-head">
                            <div
                              class="avatar avatar-icon avatar-sm avatar-info avatar-rounded"
                            >
                              <span class="initial-wrap"
                                ><span class="feather-icon"
                                  ><feather-icon name="shield"></feather-icon></span
                              ></span>
                            </div>
                          </div>
                          <div class="media-body">
                            <div>
                              <div class="activity-text">
                                您的交易金额 <span class="text-dark">$208.15</span> 已于
                                <span class="text-dark">02.12.18</span>（<span class="text-dark">周一</span>）15:30
                                通过 PayU Money 在线支付。
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
                            <div
                              class="avatar avatar-sm avatar-soft-danger avatar-rounded"
                            >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//image
import avatar2 from "@/assets/img/avatar2.jpg";
</script>
