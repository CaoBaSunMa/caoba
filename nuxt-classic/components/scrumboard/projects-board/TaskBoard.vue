<template>
  <div class="taskboardapp-content">
    <div class="taskboardapp-detail-wrap">
      <header class="taskboard-header">
        <ul
          class="nav nav-justified nav-light nav-tabs nav-segmented-tabs active-theme mx-auto w-350p"
        >
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#tab_boards">
              <span class="nav-link-text">看板</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab_team">
              <span class="nav-link-text badge-on-text">团队</span>
            </a>
          </li>
        </ul>
        <div
          :class="['hk-sidebar-togglable', { active: !showSidebar }]"
          @click="toggleSidebar"
        ></div>
      </header>
      <div class="taskboard-body">
        <simplebar class="nicescroll-bar">
          <BContainer fluid>
            <BRow class="justify-content-center board-team-wrap">
              <BCol md="8" sm="12">
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="tab_boards">
                    <h5 class="mb-5">常用看板</h5>
                    <BRow>
                      <BCol lg="6">
                        <BCard no-body class="board-card card-border">
                          <BCardBody>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-sm avatar-pink">
                                  <span class="initial-wrap">J</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <span>caoba</span>
                              </div>
                            </div>
                          </BCardBody>
                          <BCardFooter class="text-muted justify-content-between">
                            <div>
                              <div
                                class="avatar-group avatar-group-sm avatar-group-overlapped me-3"
                              >
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Katharine"
                                  data-bs-original-title="凯瑟琳"
                                >
                                  <img :src="avatar8" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="迪恩"
                                >
                                  <img :src="avatar13" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="摩根"
                                >
                                  <img :src="avatar2" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-soft-danger avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="提示文本"
                                >
                                  <span class="initial-wrap">3+</span>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <p class="p-xs me-2">25 分钟前更新</p>
                              <div class="flex-shrink-0">
                                <BButton
                                  variant="flush-primary"
                                  size="xs"
                                  class="btn-icon btn-rounded flush-soft-hover"
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="公开"
                                >
                                  <span class="icon">
                                    <feather-icon name="globe"></feather-icon>
                                  </span>
                                </BButton>
                                <BDropdown
                                  variant="flush-dark"
                                  size="xs"
                                  toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                  tag="a"
                                  href="#"
                                  end
                                >
                                  <template #button-content>
                                    <span class="icon">
                                      <feather-icon name="more-horizontal" />
                                    </span>
                                  </template>
                                  <BDropdownItem href="#">编辑</BDropdownItem>
                                  <BDropdownItem href="#">复制链接</BDropdownItem>
                                  <BDropdownItem href="#">删除</BDropdownItem>
                                </BDropdown>
                              </div>
                            </div>
                          </BCardFooter>
                        </BCard>
                      </BCol>
                      <BCol lg="6">
                        <BCard no-body class="board-card card-border">
                          <BCardBody>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-sm avatar-pumpkin">
                                  <span class="initial-wrap">A</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <span>Angular - caoba</span>
                              </div>
                            </div>
                          </BCardBody>
                          <BCardFooter class="text-muted justify-content-between">
                            <div>
                              <div
                                class="avatar-group avatar-group-sm avatar-group-overlapped me-3"
                              >
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="凯瑟琳"
                                >
                                  <img :src="avatar9" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="迪恩"
                                >
                                  <img :src="avatar13" alt="user" class="avatar-img" />
                                </div>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <p class="p-xs me-2">5 分钟前更新</p>
                              <div class="flex-shrink-0">
                                <BButton
                                  variant="flush-primary"
                                  size="xs"
                                  class="btn-icon btn-rounded flush-soft-hover"
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="公开"
                                >
                                  <span class="icon">
                                    <feather-icon name="globe"></feather-icon>
                                  </span>
                                </BButton>
                                <BDropdown
                                  variant="flush-dark"
                                  size="xs"
                                  toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                  tag="a"
                                  href="#"
                                  end
                                >
                                  <template #button-content>
                                    <span class="icon">
                                      <feather-icon name="more-horizontal" />
                                    </span>
                                  </template>
                                  <BDropdownItem href="#">编辑</BDropdownItem>
                                  <BDropdownItem href="#">复制链接</BDropdownItem>
                                  <BDropdownItem href="#">删除</BDropdownItem>
                                </BDropdown>
                              </div>
                            </div>
                          </BCardFooter>
                        </BCard>
                      </BCol>
                    </BRow>
                    <div class="d-flex justify-content-between align-items-center mb-5">
                      <h5 class="mb-0">所有看板</h5>
                      <button class="btn btn-light btn-icon">
                        <span class="icon">
                          <span class="feather-icon">
                            <feather-icon name="plus"></feather-icon>
                          </span>
                        </span>
                      </button>
                    </div>
                    <BRow>
                      <BCol lg="6">
                        <BCard no-body class="board-card card-border">
                          <BCardBody>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-sm avatar-violet">
                                  <span class="initial-wrap">R</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <span>React - caoba</span>
                              </div>
                            </div>
                          </BCardBody>
                          <BCardFooter class="text-muted justify-content-between">
                            <div>
                              <div
                                class="avatar-group avatar-group-sm avatar-group-overlapped me-3"
                              >
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="凯瑟琳"
                                >
                                  <img :src="avatar10" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="迪恩"
                                >
                                  <img :src="avatar13" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="摩根"
                                >
                                  <img :src="avatar2" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-soft-danger avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="提示文本"
                                >
                                  <span class="initial-wrap">4+</span>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <p class="p-xs me-2">昨天更新</p>
                              <div class="flex-shrink-0">
                                <BButton
                                  variant="flush-primary"
                                  size="xs"
                                  class="btn-icon btn-rounded flush-soft-hover"
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="公开"
                                >
                                  <span class="icon">
                                    <feather-icon name="globe"></feather-icon>
                                  </span>
                                </BButton>
                                <BDropdown
                                  variant="flush-dark"
                                  size="xs"
                                  toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                  tag="a"
                                  href="#"
                                  end
                                >
                                  <template #button-content>
                                    <span class="icon">
                                      <feather-icon name="more-horizontal" />
                                    </span>
                                  </template>
                                  <BDropdownItem href="#">编辑</BDropdownItem>
                                  <BDropdownItem href="#">复制链接</BDropdownItem>
                                  <BDropdownItem href="#">删除</BDropdownItem>
                                </BDropdown>
                              </div>
                            </div>
                          </BCardFooter>
                        </BCard>
                      </BCol>
                      <BCol lg="6">
                        <BCard no-body class="board-card card-border">
                          <BCardBody>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-sm avatar-orange">
                                  <span class="initial-wrap">G</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <span>格里芬</span>
                              </div>
                            </div>
                          </BCardBody>
                          <BCardFooter class="text-muted justify-content-between">
                            <div>
                              <div
                                class="avatar-group avatar-group-sm avatar-group-overlapped me-3"
                              >
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="凯瑟琳"
                                >
                                  <img :src="avatar11" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="迪恩"
                                >
                                  <img :src="avatar8" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="摩根"
                                >
                                  <img :src="avatar7" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-soft-danger avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="提示文本"
                                >
                                  <span class="initial-wrap">W</span>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <p class="p-xs me-2">10 分钟前更新</p>
                              <div class="flex-shrink-0">
                                <BButton
                                  variant="flush-primary"
                                  size="xs"
                                  class="btn-icon btn-rounded flush-soft-hover"
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="公开"
                                >
                                  <span class="icon">
                                    <feather-icon name="globe"></feather-icon>
                                  </span>
                                </BButton>
                                <BDropdown
                                  variant="flush-dark"
                                  size="xs"
                                  toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                  tag="a"
                                  href="#"
                                  end
                                >
                                  <template #button-content>
                                    <span class="icon">
                                      <feather-icon name="more-horizontal" />
                                    </span>
                                  </template>
                                  <BDropdownItem href="#">编辑</BDropdownItem>
                                  <BDropdownItem href="#">复制链接</BDropdownItem>
                                  <BDropdownItem href="#">删除</BDropdownItem>
                                </BDropdown>
                              </div>
                            </div>
                          </BCardFooter>
                        </BCard>
                      </BCol>
                      <BCol lg="6">
                        <BCard no-body class="board-card card-border">
                          <BCardBody>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-sm avatar-primary">
                                  <span class="initial-wrap">P</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <span>班公湖</span>
                              </div>
                            </div>
                          </BCardBody>
                          <BCardFooter class="text-muted justify-content-between">
                            <div>
                              <div
                                class="avatar-group avatar-group-sm avatar-group-overlapped me-3"
                              >
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="凯瑟琳"
                                >
                                  <img :src="avatar8" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="迪恩"
                                >
                                  <img :src="avatar13" alt="user" class="avatar-img" />
                                </div>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <p class="p-xs me-2">1 小时前更新</p>
                              <div class="flex-shrink-0">
                                <BButton
                                  variant="flush-primary"
                                  size="xs"
                                  class="btn-icon btn-rounded flush-soft-hover"
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="公开"
                                >
                                  <span class="icon">
                                    <feather-icon name="globe"></feather-icon>
                                  </span>
                                </BButton>
                                <BDropdown
                                  variant="flush-dark"
                                  size="xs"
                                  toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                  tag="a"
                                  href="#"
                                  end
                                >
                                  <template #button-content>
                                    <span class="icon">
                                      <feather-icon name="more-horizontal" />
                                    </span>
                                  </template>
                                  <BDropdownItem href="#">编辑</BDropdownItem>
                                  <BDropdownItem href="#">复制链接</BDropdownItem>
                                  <BDropdownItem href="#">删除</BDropdownItem>
                                </BDropdown>
                              </div>
                            </div>
                          </BCardFooter>
                        </BCard>
                      </BCol>
                      <BCol lg="6">
                        <BCard no-body class="board-card card-border">
                          <BCardBody>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-sm avatar-info">
                                  <span class="initial-wrap">D</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <span>涂鸦</span>
                              </div>
                            </div>
                          </BCardBody>
                          <BCardFooter class="text-muted justify-content-between">
                            <div>
                              <div
                                class="avatar-group avatar-group-sm avatar-group-overlapped me-3"
                              >
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="凯瑟琳"
                                >
                                  <img :src="avatar9" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="迪恩"
                                >
                                  <img :src="avatar10" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="摩根"
                                >
                                  <img :src="avatar11" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-soft-danger avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="提示文本"
                                >
                                  <span class="initial-wrap">3+</span>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <p class="p-xs me-2">20 分钟前更新</p>
                              <div class="flex-shrink-0">
                                <BButton
                                  variant="flush-primary"
                                  size="xs"
                                  class="btn-icon btn-rounded flush-soft-hover"
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="公开"
                                >
                                  <span class="icon">
                                    <feather-icon name="globe"></feather-icon>
                                  </span>
                                </BButton>
                                <BDropdown
                                  variant="flush-dark"
                                  size="xs"
                                  toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                  tag="a"
                                  href="#"
                                  end
                                >
                                  <template #button-content>
                                    <span class="icon">
                                      <feather-icon name="more-horizontal" />
                                    </span>
                                  </template>
                                  <BDropdownItem href="#">编辑</BDropdownItem>
                                  <BDropdownItem href="#">复制链接</BDropdownItem>
                                  <BDropdownItem href="#">删除</BDropdownItem>
                                </BDropdown>
                              </div>
                            </div>
                          </BCardFooter>
                        </BCard>
                      </BCol>
                      <BCol lg="6">
                        <BCard no-body class="board-card card-border">
                          <BCardBody>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-sm avatar-pink">
                                  <span class="initial-wrap">P</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <span>波戈迪</span>
                              </div>
                            </div>
                          </BCardBody>
                          <BCardFooter class="text-muted justify-content-between">
                            <div>
                              <div
                                class="avatar-group avatar-group-sm avatar-group-overlapped me-3"
                              >
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="凯瑟琳"
                                >
                                  <img :src="avatar5" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="迪恩"
                                >
                                  <img :src="avatar6" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="摩根"
                                >
                                  <img :src="avatar7" alt="user" class="avatar-img" />
                                </div>
                                <div
                                  class="avatar avatar-soft-danger avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="提示文本"
                                >
                                  <span class="initial-wrap">5+</span>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <p class="p-xs me-2">2 天前更新</p>
                              <div class="flex-shrink-0">
                                <BButton
                                  variant="flush-primary"
                                  size="xs"
                                  class="btn-icon btn-rounded flush-soft-hover"
                                  href="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="公开"
                                >
                                  <span class="icon">
                                    <feather-icon name="globe"></feather-icon>
                                  </span>
                                </BButton>
                                <BDropdown
                                  variant="flush-dark"
                                  size="xs"
                                  toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                  tag="a"
                                  href="#"
                                  end
                                >
                                  <template #button-content>
                                    <span class="icon">
                                      <feather-icon name="more-horizontal" />
                                    </span>
                                  </template>
                                  <BDropdownItem href="#">编辑</BDropdownItem>
                                  <BDropdownItem href="#">复制链接</BDropdownItem>
                                  <BDropdownItem href="#">删除</BDropdownItem>
                                </BDropdown>
                              </div>
                            </div>
                          </BCardFooter>
                        </BCard>
                      </BCol>
                      <BCol lg="6">
                        <BCard no-body class="card-border border-dashed h-100">
                          <BCardBody
                            class="d-flex align-items-center justify-content-center"
                          >
                            <BButton
                              variant="outline-light"
                              class="btn-block"
                              v-b-modal.add_new_board
                            >
                              <span
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="新建看板"
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
                  </div>

                  <div class="tab-pane fade" id="tab_team">
                    <div class="d-flex justify-content-between align-items-center mb-5">
                      <div class="d-flex align-items-center form-group mb-0">
                        <h5 class="mb-0 me-4">成员</h5>
                        <label class="flex-shrink-0 mb-0 me-2">排序方式：</label>
                        <BFormSelect size="sm" model-value="1" class="w-130p">
                          <BFormSelectOption value="1">创建日期</BFormSelectOption>
                          <BFormSelectOption value="2">A - Z</BFormSelectOption>
                          <BFormSelectOption value="3">Z - A</BFormSelectOption>
                        </BFormSelect>
                      </div>
                      <BButton variant="light" class="btn-icon" v-b-modal.add_new_team>
                        <span
                          class="icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="新建成员"
                        >
                          <feather-icon name="plus"></feather-icon>
                        </span>
                      </BButton>
                    </div>

                    <BRow>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-rounded">
                                  <img :src="avatar2" alt="user" class="avatar-img" />
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="设计师"
                                >
                                  <span>摩根·弗里曼</span>
                                  <HkBadge variant="primary" indicator borderless />
                                </div>
                                <div class="text-truncate">morgan@caoba.com</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-rounded">
                                  <img :src="avatar9" alt="user" class="avatar-img" />
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="设计师"
                                >
                                  <span>乌玛·瑟曼</span>
                                  <HkBadge variant="primary" indicator borderless />
                                </div>
                                <div class="text-truncate">huma@clariesup.au</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-rounded">
                                  <img :src="avatar7" alt="user" class="avatar-img" />
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="开发者"
                                >
                                  <span>汤姆·克鲁斯</span>
                                  <HkBadge variant="danger" indicator borderless />
                                </div>
                                <div class="text-truncate">tomcz@caoba.com</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-soft-danger avatar-rounded">
                                  <span class="initial-wrap">D</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="设计师"
                                >
                                  <span>丹尼尔·克雷格</span>
                                  <HkBadge variant="primary" indicator borderless />
                                </div>
                                <div class="text-truncate">danialc@caoba.com</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-rounded">
                                  <img :src="avatar10" alt="user" class="avatar-img" />
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="库存"
                                >
                                  <span>温斯顿·丘吉尔</span>
                                  <HkBadge variant="primary" indicator borderless />
                                </div>
                                <div class="text-truncate">winston@worthniza.ga</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="media-head">
                                  <div class="avatar avatar-rounded">
                                    <img :src="avatar8" alt="user" class="avatar-img" />
                                  </div>
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="开发者"
                                >
                                  <span>凯瑟琳·琼斯</span>
                                  <HkBadge variant="danger" indicator borderless />
                                </div>
                                <div class="text-truncate">joneskath@caoba.com</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-rounded">
                                  <img :src="avatar3" alt="user" class="avatar-img" />
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="人事经理"
                                >
                                  <span>杰奎琳·乔克</span>
                                  <HkBadge variant="danger" indicator borderless />
                                </div>
                                <div class="text-truncate">jaquljoker@caoba.com</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-light avatar-rounded">
                                  <span class="initial-wrap">J</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="设计师"
                                >
                                  <span>约翰·布拉泽</span>
                                  <HkBadge variant="primary" indicator borderless />
                                </div>
                                <div class="text-truncate">john@cryodrakon.info</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-rounded">
                                  <img :src="avatar14" alt="user" class="avatar-img" />
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="设计师"
                                >
                                  <span>约翰·布拉泽</span>
                                  <HkBadge variant="primary" indicator borderless />
                                </div>
                                <div class="text-truncate">john@cryodrakon.info</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="team-card card-border">
                          <BCardBody>
                            <div class="card-action-wrap">
                              <BDropdown
                                variant="flush-dark"
                                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                                tag="a"
                                href="#"
                                end
                              >
                                <template #button-content>
                                  <span class="icon">
                                    <feather-icon name="more-horizontal" />
                                  </span>
                                </template>
                                <BDropdownItem href="#">邀请参与项目</BDropdownItem>
                                <BDropdownItem href="#">复制链接</BDropdownItem>
                                <BDropdownItem href="#">邮件偏好</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-soft-success avatar-rounded">
                                  <span class="initial-wrap">C</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <div
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="开发者"
                                >
                                  <span>查理·卓别林</span>
                                  <HkBadge variant="danger" indicator borderless />
                                </div>
                                <div class="text-truncate">charlie@leernoca.monster</div>
                              </div>
                            </div>
                          </BCardBody>
                        </BCard>
                      </BCol>
                      <BCol xl="6" md="12">
                        <BCard no-body class="card-border border-dashed h-100">
                          <BCardBody
                            class="d-flex align-items-center justify-content-center"
                          >
                            <BButton
                              variant="outline-light"
                              class="btn-icon"
                              v-b-modal.add_new_team
                            >
                              <span
                                class="icon"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="新建成员"
                              >
                                <feather-icon name="plus"></feather-icon>
                              </span>
                            </BButton>
                          </BCardBody>
                        </BCard>
                      </BCol>
                    </BRow>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BContainer>
        </simplebar>
      </div>
    </div>

    <!-- Add New Task -->
    <AddNewTask />
    <!-- /Add New Task -->

    <!-- 新建成员 -->
    <AddNewMember />
    <!-- /新建成员 -->

    <!-- Add Fav Board -->
    <AddFavBoard />
    <!-- /Add Fav Board -->
  </div>
</template>

<script setup>
import AddNewTask from "@/components/scrumboard/AddNewTask.vue";
import AddFavBoard from "@/components/scrumboard/AddFavBoard.vue";
import AddNewMember from "@/components/scrumboard/AddNewMember.vue";
//Images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar3 from "@/assets/img/avatar3.jpg";
import avatar5 from "@/assets/img/avatar5.jpg";
import avatar6 from "@/assets/img/avatar6.jpg";
import avatar7 from "@/assets/img/avatar7.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar9 from "@/assets/img/avatar9.jpg";
import avatar10 from "@/assets/img/avatar10.jpg";
import avatar11 from "@/assets/img/avatar11.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";
import avatar14 from "@/assets/img/avatar14.jpg";

// Props
const props = defineProps({
  showSidebar: Boolean,
});

// Emits
const emit = defineEmits(["toggle-sidebar"]);

// Methods
const toggleSidebar = () => {
  emit("toggle-sidebar");
};
</script>
