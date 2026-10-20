<template>
  <div class="task-info">
    <simplebar class="nicescroll-bar">
      <header class="task-header">
        <div class="d-flex align-items-center">
          <client-only>
            <apexchart
              type="radialBar"
              height="50"
              width="50"
              :options="chartOptions"
              :series="series"
            />
          </client-only>
          <BFormCheckbox
            id="customCheckcTask"
            :model-value="true"
            class="mx-lg-3 ms-3 d-lg-inline d-none"
          >
            标记为已完成
          </BFormCheckbox>

          <BButton
            variant="flush-light"
            class="flush-outline-hover d-lg-inline-block d-none"
          >
            <span>
              <span class="icon">
                <feather-icon name="link"></feather-icon>
              </span>
              <span>复制链接</span>
            </span>
          </BButton>
          <BButton
            variant="light"
            class="btn-icon btn-rounded d-lg-none d-lg-inline-block ms-1"
          >
            <span class="icon">
              <feather-icon name="link"></feather-icon>
            </span>
          </BButton>
        </div>
        <div class="task-options-wrap">
          <span class="task-star marked">
            <feather-icon name="star"></feather-icon>
          </span>
          <BDropdown
            variant="flush-dark"
            toggle-class="btn-icon btn-rounded flush-soft-hover no-caret ms-1"
            end
          >
            <template #button-content>
              <span class="icon">
                <feather-icon name="more-vertical"></feather-icon>
              </span>
            </template>
            <h6 class="dropdown-header">操作</h6>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="edit"></feather-icon>
              </span>
              <span>分配给</span>
            </BDropdownItem>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="user"></feather-icon>
              </span>
              <span>附加文件</span>
            </BDropdownItem>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="paperclip"></feather-icon>
              </span>
              <span>应用标签</span>
            </BDropdownItem>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="tag"></feather-icon>
              </span>
              <span>设置截止日期</span>
            </BDropdownItem>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="calendar"></feather-icon>
              </span>
              <span>关注任务</span>
            </BDropdownItem>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="bookmark"></feather-icon>
              </span>
              <span>设置截止日期</span>
            </BDropdownItem>
            <div class="dropdown-divider"></div>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="arrow-up"></feather-icon>
              </span>
              <span>设为最高优先级</span>
            </BDropdownItem>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="repeat"></feather-icon>
              </span>
              <span>更改状态</span>
            </BDropdownItem>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="pocket"></feather-icon>
              </span>
              <span>保存为模板</span>
            </BDropdownItem>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="archive"></feather-icon>
              </span>
              <span>移到归档</span>
            </BDropdownItem>
            <BDropdownItem href="#">
              <span class="dropdown-icon">
                <feather-icon name="trash-2"></feather-icon>
              </span>
              <span>删除</span>
            </BDropdownItem>
          </BDropdown>

          <BButton
            variant="flush-dark"
            class="btn-icon btn-rounded flush-soft-hover close-task-info"
            href="#"
            @click="closeInfo"
          >
            <span class="icon">
              <feather-icon name="x"></feather-icon>
            </span>
          </BButton>
        </div>
      </header>
      <div class="task-detail-body">
        <BAlert variant="primary" :model-value="true" class="alert-wth-icon mb-4">
          <span class="alert-icon-wrap">
            <span class="feather-icon">
              <i class="zmdi zmdi-lock"></i>
            </span>
          </span>
          此任务仅对 caoba 团队可见
        </BAlert>

        <HkInlineEdit
          as="h4"
          id="edit1"
          className="fw-bold mb-0"
          value="框架构建"
        />
        <HkInlineEdit
          as="p"
          id="edit2"
          className="mb-0"
          value="开发期间即时重建资源"
        />

        <div class="avatar-group avatar-group avatar-group-overlapped mt-3">
          <div
            class="avatar avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="凯瑟琳"
          >
            <img src="@/assets/img/avatar8.jpg" alt="用户" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="迪恩"
          >
            <img src="@/assets/img/avatar13.jpg" alt="用户" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-xs avatar-soft-danger avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="汤姆"
          >
            <span class="initial-wrap">T</span>
          </div>
          <div
            class="avatar avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="摩根"
          >
            <img src="@/assets/img/avatar2.jpg" alt="用户" class="avatar-img" />
          </div>
          <div
            class="avatar avatar-icon avatar-primary avatar-rounded"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="添加"
          >
            <span class="initial-wrap">
              <feather-icon name="plus"></feather-icon>
            </span>
          </div>
        </div>
        <BForm @submit.prevent>
          <BRow>
            <BCol md="6">
              <div class="title title-wth-divider my-4"><span>截止日期</span></div>
              <date-range-picker
                :date-range="{ startDate: dueDate }"
                :locale-data="{ format: 'mm/dd/yyyy hh:mm TT' }"
                :ranges="false"
                :single-date-picker="true"
                :time-picker="true"
                :time-picker24-hour="false"
                :show-dropdowns="true"
              />
            </BCol>
            <BCol md="6">
              <div class="title title-wth-divider my-4"><span>状态</span></div>
              <BDropdown variant="warning" text="进行中" toggle-class="btn-rounded">
                <BDropdownItem>操作</BDropdownItem>
                <BDropdownItem>其他操作</BDropdownItem>
                <BDropdownItem>其他选项</BDropdownItem>
                <BDropdownDivider />
                <BDropdownItem>分隔链接</BDropdownItem>
              </BDropdown>
            </BCol>
            <BCol md="12">
              <div class="title title-wth-divider my-4"><span>标签</span></div>
              <div class="d-flex flex-wrap">
                <HkChip
                  v-for="(data, index) in recipients"
                  :key="index"
                  class="mb-2 me-2"
                  variant="outline-secondary"
                  dismissable
                >
                  {{ data }}
                </HkChip>
                <input
                  type="text"
                  class="border-0 p-0 shadow-none flex-1 mb-2 me-2"
                  name="tag-3"
                  v-model="newRecipient"
                  @keyup.enter="handleRecipients"
                  style="outline: none"
                  placeholder="添加标签"
                />
              </div>
            </BCol>
          </BRow>
        </BForm>
        <ul
          class="nav nav-justified nav-light nav-tabs nav-segmented-tabs active-theme mt-4"
        >
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#tab_checklist">
              <span class="nav-link-text">清单</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab_comments">
              <span class="nav-link-text badge-on-text">评论</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab_files">
              <span class="nav-link-text badge-on-text">文件</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab_activity">
              <span class="nav-link-text badge-on-text">动态</span>
            </a>
          </li>
        </ul>
        <div class="tab-content mt-7">
          <div class="tab-pane fade show active" id="tab_checklist">
            <!-- ****************************** start ****************************** -->

            <div class="d-flex align-items-center justify-content-between mb-2">
              <div class="title title-lg mb-0">
                <span>清单</span>
              </div>
              <a
                href="#"
                class="btn btn-xs btn-icon btn-rounded btn-light"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="添加分类"
                @click="addItem('list-1')"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="plus"></feather-icon>
                  </span>
                </span>
              </a>
            </div>
            <div class="hk-checklist">
              <div v-for="(item, index) in checkList" :key="index" class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :checked="item.checked"
                  @change="handleCheck('list1', index)"
                />
                <label class="form-check-label" v-if="!item.editable">
                  {{ item.label }}
                  <span class="done-strikethrough"></span>
                </label>
                <input
                  class="form-control checklist-input"
                  type="text"
                  v-else
                  v-model="newListLabel1"
                  @keypress.enter="updateCheckList('label1', index)"
                  @blur="updateCheckList('label1', index)"
                  placeholder="添加新条目"
                  autofocus
                />
                <a
                  href="#"
                  class="btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist"
                  @click="deleteItem('list1', index)"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="trash-2"></feather-icon>
                    </span>
                  </span>
                </a>
              </div>
              <a
                href="#"
                class="d-flex align-items-center add-new-checklist"
                @click="addItem('list-1')"
              >
                <span class="feather-icon fe-x me-2">
                  <feather-icon name="plus-square"></feather-icon>
                </span>
                <span>新条目</span>
              </a>
            </div>

            <div class="d-flex align-items-center justify-content-between">
              <div class="title title-wth-divider flex-grow-1 my-4 me-2">
                <span>加拿大团队任务</span>
              </div>
              <div>
                <a
                  href="#"
                  class="btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="编辑"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="edit-2"></feather-icon>
                    </span>
                  </span>
                </a>
                <a
                  href="#"
                  class="btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="trash-2"></feather-icon>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="hk-checklist">
              <div v-for="(item, index) in teamCheckList" :key="index" class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :checked="item.checked"
                  @change="handleCheck('list2', index)"
                />
                <label
                  v-if="!item.editable"
                  class="form-check-label"
                  for="customCheckList5"
                >
                  {{ item.label }}
                  <span class="done-strikethrough"></span>
                </label>
                <input
                  v-else
                  class="form-control checklist-input"
                  type="text"
                  v-model="newListLabel2"
                  @keypress.enter="updateCheckList('label2', index)"
                  @blur="updateCheckList('label2', index)"
                  placeholder="添加新条目"
                  autofocus
                />

                <a
                  href="#"
                  class="btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist"
                  @click="deleteItem('list2', index)"
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="trash-2"></feather-icon>
                    </span>
                  </span>
                </a>
              </div>
              <a
                href="#"
                class="d-flex align-items-center add-new-checklist"
                @click="addItem('list-2')"
              >
                <span class="feather-icon fe-x me-2">
                  <feather-icon name="plus-square"></feather-icon>
                </span>
                <span>新条目</span>
              </a>
            </div>

            <!-- ****************************** end ****************************** -->

            <div class="d-flex align-items-center justify-content-between mt-5 mb-2">
              <div class="title title-lg mb-0">
                <span>备注</span>
              </div>
              <a
                href="#"
                class="btn btn-xs btn-icon btn-rounded btn-light"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="添加分类"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="plus"></feather-icon>
                  </span>
                </span>
              </a>
            </div>
            <div class="card card-border note-block bg-orange-light-5">
              <div class="card-body">
                <div class="card-action-wrap">
                  <button
                    class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="more-vertical"></feather-icon>
                      </span>
                    </span>
                  </button>
                  <div role="menu" class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">操作</a>
                    <a class="dropdown-item" href="#">其他操作</a>
                    <a class="dropdown-item" href="#">其他选项</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">分隔链接</a>
                  </div>
                </div>
                <div class="media align-items-center">
                  <div class="media-head">
                    <div class="avatar avatar-sm avatar-rounded">
                      <img src="@/assets/img/avatar2.jpg" alt="用户" class="avatar-img" />
                    </div>
                  </div>
                  <div class="media-body">
                    <div>马丁·路德</div>
                    <div>2020年4月9日 7:14</div>
                  </div>
                </div>
                <p>
                  @<a href="#" class="fw-medium">查理·达尔文</a> 从这里开始，你可以运行
                  grunt compile、grunt migrate 和 grunt test 来编译合约、将这些合约部署到网络，并运行
                  相关的单元测试。
                </p>
              </div>
            </div>
            <div class="card card-border note-block bg-orange-light-5">
              <div class="card-body">
                <div class="card-action-wrap">
                  <button
                    class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="more-vertical"></feather-icon>
                      </span>
                    </span>
                  </button>
                  <div role="menu" class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">操作</a>
                    <a class="dropdown-item" href="#">其他操作</a>
                    <a class="dropdown-item" href="#">其他选项</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">分隔链接</a>
                  </div>
                </div>
                <div class="media align-items-center">
                  <div class="media-head">
                    <div class="avatar avatar-sm avatar-rounded">
                      <img src="@/assets/img/avatar3.jpg" alt="用户" class="avatar-img" />
                    </div>
                  </div>
                  <div class="media-body">
                    <div>凯瑟琳·琼斯</div>
                    <div>2020年4月8日 17:30</div>
                  </div>
                </div>
                <p>
                  @<a href="#" class="fw-medium">马丁·路德</a> “Appear view”
                  链接文本的对比度为 3.7:1，低于要求
                </p>
              </div>
            </div>
            <a href="#" class="btn btn-outline-light btn-block">查看更多</a>
          </div>
          <div class="tab-pane fade" id="tab_comments">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <div class="title title-lg mb-0">
                <span>3 条回复</span>
              </div>
              <a
                href="#"
                class="btn btn-xs btn-icon btn-rounded btn-light"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="添加看板"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="plus"></feather-icon>
                  </span>
                </span>
              </a>
            </div>
            <div class="comment-block">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-xs avatar-rounded">
                    <img src="@/assets/img/avatar4.jpg" alt="用户" class="avatar-img" />
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <span class="cm-name">马丁·路德</span>
                    <span class="badge badge-soft-violet">经理</span>
                  </div>
                  <p>
                    @<a href="#" class="fw-medium">查理·达尔文</a> 从这里开始，你可以运行
                    truffle compile、truffle migrate 和 truffle test 来编译合约、将这些合约部署到网络，并运行
                    相关的单元测试。
                  </p>
                  <div class="comment-action-wrap mt-3">
                    <span>3 小时前</span>
                    <span class="comment-dot-sep">●</span>
                    <a href="#">回复</a>
                    <span class="comment-dot-sep">●</span>
                    <a href="#">点赞</a>
                  </div>
                </div>
              </div>
              <div class="separator separator-light"></div>
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-xs avatar-rounded">
                    <img src="@/assets/img/avatar2.jpg" alt="用户" class="avatar-img" />
                  </div>
                </div>
                <div class="media-body">
                  <div>
                    <span class="cm-name">凯瑟琳·琼斯</span>
                  </div>
                  <p>
                    精美的动态作品由 @<a href="#" class="fw-medium"
                      >艾什顿·库彻</a
                    > 完成
                  </p>
                  <div class="comment-action-wrap mt-3">
                    <span>3 小时前</span>
                    <span class="comment-dot-sep">●</span>
                    <a href="#">回复</a>
                    <span class="comment-dot-sep">●</span>
                    <a href="#">点赞</a>
                  </div>
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-xs avatar-rounded">
                        <img
                          src="@/assets/img/avatar3.jpg"
                          alt="用户"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <div>
                        <span class="cm-name">艾什顿·库彻</span>
                        <span class="badge badge-soft-danger">设计师</span>
                      </div>
                      <p>
                        @<a href="#" class="fw-medium">凯瑟琳·琼斯</a> 谢谢 :)
                      </p>
                      <div class="comment-action-wrap mt-3">
                        <span>3 小时前</span>
                        <span class="comment-dot-sep">●</span>
                        <a href="#">回复</a>
                        <span class="comment-dot-sep">●</span>
                        <a href="#">点赞</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="separator separator-light"></div>
              <form>
                <div class="form-group">
                  <label class="form-label">添加评论</label>
                  <textarea class="form-control" rows="5"></textarea>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <button class="btn btn-primary">发送</button>
                  <small class="form-text text-muted mt-0">支持基础 HTML 语法</small>
                </div>
              </form>
            </div>
          </div>
          <div class="tab-pane fade" id="tab_files">
            <div class="row">
              <div class="col-sm">
                <!-- <form action="#" class="dropzone" id="remove_link">
                                    <div class="fallback">
                                        <input name="file" type="file" multiple />
                                    </div>
                                </form> -->
                <HkDropzone class="dropzone"> 将文件拖放到此处上传 </HkDropzone>
              </div>
            </div>
            <div class="mt-5 mb-2">
              <div class="title title-lg mb-0"><span>共享文件</span></div>
            </div>
            <div class="file-block">
              <div class="collapse-simple">
                <div class="card">
                  <div class="card-header">
                    <a
                      role="button"
                      data-bs-toggle="collapse"
                      href="#files_collapse"
                      aria-expanded="true"
                      >昨天</a
                    >
                  </div>
                  <div id="files_collapse" class="collapse show">
                    <div class="card-body">
                      <ul class="sh-files">
                        <li>
                          <div class="media">
                            <div class="media-head">
                              <div class="avatar avatar-icon avatar-sm avatar-soft-blue">
                                <span class="initial-wrap fs-3">
                                  <i class="ri-file-excel-2-fill"></i>
                                </span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div>
                                <p class="file-name">website_content.exl</p>
                                <p class="file-size">2,635 KB</p>
                              </div>
                              <div>
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                  <img
                                    src="@/assets/img/avatar2.jpg"
                                    alt="用户"
                                    class="avatar-img"
                                  />
                                </div>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                                  data-bs-toggle="dropdown"
                                >
                                  <span class="icon">
                                    <span class="feather-icon">
                                      <feather-icon name="more-vertical"></feather-icon>
                                    </span>
                                  </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item ms-0" href="#">下载</a>
                                  <a class="dropdown-item ms-0 link-danger" href="#"
                                    >删除</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media">
                            <div class="media-head">
                              <div class="avatar avatar-icon avatar-sm avatar-soft-light">
                                <span class="initial-wrap fs-3">
                                  <i class="ri-file-text-fill"></i>
                                </span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div>
                                <p class="file-name">caoba.pdf</p>
                                <p class="file-size">1.3 GB</p>
                              </div>
                              <div>
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                  <img
                                    src="@/assets/img/avatar3.jpg"
                                    alt="用户"
                                    class="avatar-img"
                                  />
                                </div>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                                  data-bs-toggle="dropdown"
                                >
                                  <span class="icon">
                                    <span class="feather-icon">
                                      <feather-icon name="more-vertical"></feather-icon>
                                    </span>
                                  </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item ms-0" href="#">下载</a>
                                  <a class="dropdown-item ms-0 link-danger" href="#"
                                    >删除</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media">
                            <div class="media-head">
                              <div
                                class="avatar avatar-icon avatar-sm avatar-soft-warning"
                              >
                                <span class="initial-wrap fs-3">
                                  <i class="ri-file-zip-fill"></i>
                                </span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div>
                                <p class="file-name">caoba.zip</p>
                                <p class="file-size">2.45 GB</p>
                              </div>
                              <div>
                                <div
                                  class="avatar avatar-xs avatar-soft-danger avatar-rounded me-2"
                                >
                                  <span class="initial-wrap">Cb</span>
                                </div>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                                  data-bs-toggle="dropdown"
                                >
                                  <span class="icon">
                                    <span class="feather-icon">
                                      <feather-icon name="more-vertical"></feather-icon>
                                    </span>
                                  </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item ms-0" href="#">下载</a>
                                  <a class="dropdown-item ms-0 link-danger" href="#"
                                    >删除</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media">
                            <div class="media-head">
                              <div class="avatar avatar-logo avatar-sm">
                                <span class="initial-wrap">
                                  <img src="@/assets/img/6image.png" alt="用户" />
                                </span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div>
                                <p class="file-name">bruce-mars-fiEG-Pk6ZASFPk6ZASF</p>
                                <p class="file-size">4,178 KB</p>
                              </div>
                              <div>
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                  <img
                                    src="@/assets/img/avatar5.jpg"
                                    alt="用户"
                                    class="avatar-img"
                                  />
                                </div>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                                  data-bs-toggle="dropdown"
                                >
                                  <span class="icon">
                                    <span class="feather-icon">
                                      <feather-icon name="more-vertical"></feather-icon>
                                    </span>
                                  </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item ms-0" href="#">下载</a>
                                  <a class="dropdown-item ms-0 link-danger" href="#"
                                    >删除</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media">
                            <div class="media-head">
                              <div class="avatar avatar-logo avatar-sm">
                                <span class="initial-wrap">
                                  <img src="@/assets/img/2image.png" alt="用户" />
                                </span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div>
                                <p class="file-name">jonas-kakaroto-KIPqvvTKIPqvvT</p>
                                <p class="file-size">951 KB</p>
                              </div>
                              <div>
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                  <img
                                    src="@/assets/img/avatar6.jpg"
                                    alt="用户"
                                    class="avatar-img"
                                  />
                                </div>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                                  data-bs-toggle="dropdown"
                                >
                                  <span class="icon">
                                    <span class="feather-icon">
                                      <feather-icon name="more-vertical"></feather-icon>
                                    </span>
                                  </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item ms-0" href="#">下载</a>
                                  <a class="dropdown-item ms-0 link-danger" href="#"
                                    >删除</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a
                      role="button"
                      data-bs-toggle="collapse"
                      href="#files_collapse_1"
                      aria-expanded="true"
                      >4月23日</a
                    >
                  </div>
                  <div id="files_collapse_1" class="collapse show">
                    <div class="card-body">
                      <ul class="sh-files">
                        <li>
                          <div class="media">
                            <div class="media-head">
                              <div class="avatar avatar-icon avatar-sm avatar-soft-light">
                                <span class="initial-wrap fs-3">
                                  <i class="ri-keynote-fill"></i>
                                </span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div>
                                <p class="file-name">presentation.keynote</p>
                                <p class="file-size">20 KB</p>
                              </div>
                              <div>
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                  <img
                                    src="@/assets/img/avatar5.jpg"
                                    alt="用户"
                                    class="avatar-img"
                                  />
                                </div>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                                  data-bs-toggle="dropdown"
                                >
                                  <span class="icon">
                                    <span class="feather-icon">
                                      <feather-icon name="more-vertical"></feather-icon>
                                    </span>
                                  </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item ms-0" href="#">下载</a>
                                  <a class="dropdown-item ms-0 link-danger" href="#"
                                    >删除</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media">
                            <div class="media-head">
                              <div
                                class="avatar avatar-icon avatar-sm avatar-soft-warning"
                              >
                                <span class="initial-wrap fs-3">
                                  <i class="ri-file-zip-fill"></i>
                                </span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div>
                                <p class="file-name">PACK-TRIAL.zip</p>
                                <p class="file-size">2.45 GB</p>
                              </div>
                              <div>
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                  <img
                                    src="@/assets/img/avatar2.jpg"
                                    alt="用户"
                                    class="avatar-img"
                                  />
                                </div>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                                  data-bs-toggle="dropdown"
                                >
                                  <span class="icon">
                                    <span class="feather-icon">
                                      <feather-icon name="more-vertical"></feather-icon>
                                    </span>
                                  </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item ms-0" href="#">下载</a>
                                  <a class="dropdown-item ms-0" href="#">删除</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media">
                            <div class="media-head">
                              <div class="avatar avatar-sm">
                                <img
                                  src="@/assets/img/img-thumb1.jpg"
                                  alt="用户"
                                  class="avatar-img"
                                />
                              </div>
                            </div>
                            <div class="media-body">
                              <div>
                                <p class="file-name">joel-mott-LaK153ghdigaghdi</p>
                                <p class="file-size">3,028 KB</p>
                              </div>
                              <div>
                                <div class="avatar avatar-xs avatar-rounded me-2">
                                  <img
                                    src="@/assets/img/avatar8.jpg"
                                    alt="用户"
                                    class="avatar-img"
                                  />
                                </div>
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                                  data-bs-toggle="dropdown"
                                >
                                  <span class="icon">
                                    <span class="feather-icon">
                                      <feather-icon name="more-vertical"></feather-icon>
                                    </span>
                                  </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item ms-0" href="#">下载</a>
                                  <a class="dropdown-item ms-0" href="#">删除</a>
                                </div>
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
          <div class="tab-pane fade" id="tab_activity">
            <div class="mt-5 mb-2">
              <div class="title title-lg mb-0"><span>最新动态</span></div>
            </div>
            <div class="collapse-simple">
              <div class="card">
                <div class="card-header">
                  <a
                    role="button"
                    data-bs-toggle="collapse"
                    href="#activity_1"
                    aria-expanded="true"
                    >今天</a
                  >
                </div>
                <div id="activity_1" class="collapse show">
                  <div class="card-body">
                    <ul class="activity-list list-group list-group-flush">
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-primary avatar-rounded">
                              <span class="initial-wrap">Cb</span>
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">caoba</span>
                              文档链接现在可以正常访问了 -
                              <a href="#" class="link-url"
                                ><u>ttps://caoba.com/theme/jampa</u></a
                              >
                            </p>
                            <div class="last-activity-time">2021年10月15日 12:34</div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-rounded">
                              <img
                                src="@/assets/img/avatar2.jpg"
                                alt="用户"
                                class="avatar-img"
                              />
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">摩根·弗里曼</span> 完成了
                              <a href="#" class="link-default"><u>组件</u></a> 的
                              react 转换
                            </p>
                            <div class="last-activity-time">2021年9月16日 16:54</div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-rounded">
                              <img
                                src="@/assets/img/avatar13.jpg"
                                alt="用户"
                                class="avatar-img"
                              />
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">吉米·凯瑞</span>完成了
                              <a href="#" class="link-default"><u>元素</u></a> 页面的侧边栏
                              菜单
                            </p>
                            <div class="last-activity-time">2021年9月10日 10:13</div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-rounded">
                              <img
                                src="@/assets/img/avatar7.jpg"
                                alt="用户"
                                class="avatar-img"
                              />
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">查理·卓别林</span> 删除了
                              <a href="#" class="link-default"><u>已完成</u></a> 中的空卡片
                            </p>
                            <div class="last-activity-time">2021年9月10日 10:13</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <a
                    role="button"
                    data-bs-toggle="collapse"
                    href="#activity_2"
                    aria-expanded="true"
                    >昨天</a
                  >
                </div>
                <div id="activity_2" class="collapse show">
                  <div class="card-body">
                    <ul class="activity-list list-group list-group-flush">
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div
                              class="avatar avatar-sm avatar-soft-danger avatar-rounded"
                            >
                              <span class="initial-wrap">W</span>
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">温斯顿·丘吉尔</span> 在 UI 组件任务列表中
                              创建了一条备注
                            </p>
                            <div class="last-activity-time">2021年9月2日 9:23</div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-rounded">
                              <img
                                src="@/assets/img/avatar2.jpg"
                                alt="用户"
                                class="avatar-img"
                              />
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">摩根·弗里曼</span> 完成了
                              <a href="#" class="link-default"><u>组件</u></a> 的
                              react 转换
                            </p>
                            <div class="last-activity-time">2021年9月16日 16:54</div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-rounded">
                              <img
                                src="@/assets/img/avatar13.jpg"
                                alt="用户"
                                class="avatar-img"
                              />
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">吉米·凯瑞</span>将共享组件添加到了
                              <a href="#" class="link-default"><u>基础结构</u></a>
                            </p>
                            <div class="last-activity-time">2021年9月10日 10:13</div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-primary avatar-rounded">
                              <span class="initial-wrap">Cb</span>
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">caoba</span> 在
                              <a href="#" class="link-default"><u>基础结构</u></a> 上发表了评论
                            </p>
                            <div class="last-activity-time">2021年9月10日 10:13</div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-rounded">
                              <img
                                src="@/assets/img/avatar7.jpg"
                                alt="用户"
                                class="avatar-img"
                              />
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">查理·卓别林</span> 将组件从所有模块移动到
                              进行中
                            </p>
                            <div class="last-activity-time">2021年9月10日 10:13</div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-head">
                            <div
                              class="avatar avatar-sm avatar-soft-danger avatar-rounded"
                            >
                              <span class="initial-wrap">W</span>
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">温斯顿·丘吉尔</span> 在 UI 组件任务列表中
                              创建了一条备注
                            </p>
                            <div class="last-activity-time">2021年9月10日 10:13</div>
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
    </simplebar>
  </div>
</template>

<script>
import HkChip from "@/hk-components/@hk-chip/HkChip.vue";
import { ref } from "vue";
import HkInlineEdit from "@/hk-components/@hk-inline-editor/HkInlineEdit.vue";
import HkDropzone from "@/hk-components/@hk-dropzone/HkDropzone.vue";
import { nanoid } from "nanoid";

export default {
  name: "TaskDetails",
  components: {
    HkChip,
    HkInlineEdit,
    HkDropzone,
  },
  data() {
    return {
      series: [85],
      chartOptions: {
        chart: {
          type: "radialBar",
          width: 50,
          height: 50,
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#007D88"],
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "80%",
            },
            track: {
              margin: 0,
              strokeWidth: "97%",
            },
          },
        },
        labels: ["8/12"],
      },
    };
  },

  setup() {
    const recipients = ref(["框架", "HTML"]);
    const newRecipient = ref("");
    const dueDate = ref(new Date());
    const checkList = ref([
      { label: "与加拿大团队进行视频会议", checked: true, editable: false },
      { label: "客户目标会议", checked: true, editable: false },
      { label: "邀请杰奎琳参加视频会议", checked: false, editable: false },
    ]);
    const teamCheckList = ref([
      { label: "升级资源依赖", checked: true, editable: false },
      { label: "邀请杰奎琳参加视频会议", checked: false, editable: false },
    ]);

    const newListLabel1 = ref("");
    const newListLabel2 = ref("");
    const showAddButton = ref(true);

    const handleRecipients = () => {
      recipients.value.push(newRecipient.value);
      newRecipient.value = "";
    };

    const handleCheck = (id, index) => {
      if (id === "list1") {
        checkList.value[index].checked = !checkList.value[index].checked;
      } else if (id === "list2") {
        teamCheckList.value[index].checked = !teamCheckList.value[index].checked;
      }
    };

    const updateCheckList = (id, index) => {
      if (id === "label1" && newListLabel1.value !== "") {
        checkList.value[index].label = newListLabel1.value;
        checkList.value[index].editable = false;
        newListLabel1.value = "";
      } else if (id === "label2" && newListLabel2.value !== "") {
        teamCheckList.value[index].label = newListLabel2.value;
        teamCheckList.value[index].editable = false;
        newListLabel2.value = "";
      }
      showAddButton.value = !showAddButton.value;
    };

    const addItem = (id) => {
      if (id === "list-1") {
        // Check if there's any item with an empty label
        const hasEmptyLabel = checkList.value.some((item) => item.label === "");
        if (hasEmptyLabel) return; // Prevent adding a new item

        // Proceed to add a new item if there's no empty label
        if (newListLabel1.value === "") {
          const newItem = {
            id: nanoid(),
            label: "",
            checked: false,
            editable: true,
          };
          checkList.value.push(newItem);
        }
      } else if (id === "list-2") {
        // Check if there's any item with an empty label
        const hasEmptyLabel = teamCheckList.value.some((item) => item.label === "");
        if (hasEmptyLabel) return; // Prevent adding a new item

        // Proceed to add a new item if there's no empty label
        if (newListLabel2.value === "") {
          const newItem = {
            id: nanoid(),
            label: "",
            checked: false,
            editable: true,
          };
          teamCheckList.value.push(newItem);
        }
      }
      showAddButton.value = !showAddButton.value;
    };

    const deleteItem = (id, index) => {
      if (id === "list1") {
        checkList.value.splice(index, 1);
      } else if (id === "list2") {
        teamCheckList.value.splice(index, 1);
      }
    };

    return {
      recipients,
      newRecipient,
      handleRecipients,
      dueDate,
      checkList,
      teamCheckList,
      newListLabel1,
      newListLabel2,
      showAddButton,
      handleCheck,
      updateCheckList,
      addItem,
      deleteItem,
    };
  },
  methods: {
    closeInfo() {
      this.$emit("close-info");
    },
  },
};
</script>
