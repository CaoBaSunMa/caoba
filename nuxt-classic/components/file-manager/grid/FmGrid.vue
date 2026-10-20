<template>
  <div class="fm-body">
    <simplebar class="nicescroll-bar">
      <div class="file-card-view">
        <BAlert variant="warning" class="alert-wth-icon" :model-value="true" dismissible>
          <span class="alert-icon-wrap">
            <i class="ri-alert-line"></i>
          </span>
          <div class="d-flex align-items-center flex-wrap flex-sm-nowrap">
            请填写账户名称。
            <BButton
              variant="warning"
              size="sm"
              href="#"
              class="ms-sm-auto mt-sm-0 mt-2 flex-shrink-0"
            >
              升级存储
            </BButton>
          </div>
        </BAlert>

        <div class="collapse-simple mt-4">
          <BCard no-body>
            <BCardHeader>
              <a role="button" v-b-toggle.fm_collapse_1>
                <h5 class="mb-0">快速访问</h5>
              </a>
            </BCardHeader>
            <BCollapse id="fm_collapse_1" visible>
              <BRow
                gutter-x="3"
                cols-xxl="6"
                cols-xl="4"
                cols-lg="3"
                cols-md="2"
                cols="1"
                class="mt-3"
              >
                <BCol>
                  <BCard no-body class="file-card card-border">
                    <BCardBody class="fmapp-info-trigger" @click="toggleInfo">
                      <i class="ri-file-excel-2-fill text-blue"></i>
                    </BCardBody>
                    <BCardFooter>
                      <div class="d-flex justify-content-between align-items-start">
                        <div>
                          <div class="file-name">网站内容.exl</div>
                          <div class="text-truncate fs-8 mb-2">2,637 KB</div>
                        </div>
                        <div class="d-flex">
                          <span class="file-star marked">
                            <feather-icon name="star"></feather-icon>
                          </span>

                          <BDropdown
                            variant="flush-dark"
                            size="xs"
                            toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                          >
                            <template #button-content>
                              <span class="icon">
                                <feather-icon name="more-horizontal"></feather-icon>
                              </span>
                            </template>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="eye"></feather-icon>
                              </span>
                              <span>预览</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="copy"></feather-icon>
                              </span>
                              <span>创建副本</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="skip-forward"></feather-icon>
                              </span>
                              <span>移动</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="user-plus"></feather-icon>
                              </span>
                              <span>邀请</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="link-2"></feather-icon>
                              </span>
                              <span>共享链接</span>
                            </BDropdownItem>
                            <div class="dropdown-divider"></div>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="info"></feather-icon>
                              </span>
                              <span>查看详情</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="download"></feather-icon>
                              </span>
                              <span>下载</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="trash-2"></feather-icon>
                              </span>
                              <span>删除</span>
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                      <p class="text-truncate p-xs">最后访问：2小时前</p>
                    </BCardFooter>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-card card-border">
                    <BCardBody class="fmapp-info-trigger" @click="toggleInfo">
                      <i class="ri-file-pdf-fill text-danger"></i>
                    </BCardBody>
                    <BCardFooter>
                      <div class="d-flex justify-content-between align-items-start">
                        <div>
                          <div class="file-name">网站内容.exl</div>
                          <div class="text-truncate fs-8 mb-2">21.73 MB</div>
                        </div>
                        <div class="d-flex">
                          <span class="file-star">
                            <feather-icon name="star"></feather-icon>
                          </span>
                          <BDropdown
                            variant="flush-dark"
                            size="xs"
                            toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                          >
                            <template #button-content>
                              <span class="icon">
                                <feather-icon name="more-horizontal"></feather-icon>
                              </span>
                            </template>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="eye"></feather-icon>
                              </span>
                              <span>预览</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="copy"></feather-icon>
                              </span>
                              <span>创建副本</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="skip-forward"></feather-icon>
                              </span>
                              <span>移动</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="user-plus"></feather-icon>
                              </span>
                              <span>邀请</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="link-2"></feather-icon>
                              </span>
                              <span>共享链接</span>
                            </BDropdownItem>
                            <div class="dropdown-divider"></div>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="info"></feather-icon>
                              </span>
                              <span>查看详情</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="download"></feather-icon>
                              </span>
                              <span>下载</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="trash-2"></feather-icon>
                              </span>
                              <span>删除</span>
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                      <p class="text-truncate p-xs">最后访问：2小时前</p>
                    </BCardFooter>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-card card-border">
                    <BCardBody class="fmapp-info-trigger" @click="toggleInfo">
                      <i class="ri-file-word-2-fill text-blue"></i>
                    </BCardBody>
                    <BCardFooter>
                      <div class="d-flex justify-content-between align-items-start">
                        <div>
                          <div class="file-name">caoba.doc</div>
                          <div class="text-truncate fs-8 mb-2">951 KB</div>
                        </div>
                        <div class="d-flex">
                          <span class="file-star">
                            <feather-icon name="star"></feather-icon>
                          </span>
                          <BDropdown
                            variant="flush-dark"
                            size="xs"
                            toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                          >
                            <template #button-content>
                              <span class="icon">
                                <feather-icon name="more-horizontal"></feather-icon>
                              </span>
                            </template>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="eye"></feather-icon>
                              </span>
                              <span>预览</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="copy"></feather-icon>
                              </span>
                              <span>创建副本</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="skip-forward"></feather-icon>
                              </span>
                              <span>移动</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="user-plus"></feather-icon>
                              </span>
                              <span>邀请</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="link-2"></feather-icon>
                              </span>
                              <span>共享链接</span>
                            </BDropdownItem>
                            <div class="dropdown-divider"></div>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="info"></feather-icon>
                              </span>
                              <span>查看详情</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="download"></feather-icon>
                              </span>
                              <span>下载</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="trash-2"></feather-icon>
                              </span>
                              <span>删除</span>
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                      <p class="text-truncate p-xs">最后访问：2小时前</p>
                    </BCardFooter>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-card card-border">
                    <BCardBody class="fmapp-info-trigger" @click="toggleInfo">
                      <i class="ri-folder-2-fill text-warning"></i>
                    </BCardBody>
                    <BCardFooter>
                      <div class="d-flex justify-content-between align-items-start">
                        <div>
                          <div class="file-name">caoba - html - v1.0</div>
                          <div class="text-truncate fs-8 mb-2">1.6 GB</div>
                        </div>
                        <div class="d-flex">
                          <span class="file-star">
                            <feather-icon name="star"></feather-icon>
                          </span>
                          <BDropdown
                            variant="flush-dark"
                            size="xs"
                            toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                          >
                            <template #button-content>
                              <span class="icon">
                                <feather-icon name="more-horizontal"></feather-icon>
                              </span>
                            </template>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="eye"></feather-icon>
                              </span>
                              <span>预览</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="copy"></feather-icon>
                              </span>
                              <span>创建副本</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="skip-forward"></feather-icon>
                              </span>
                              <span>移动</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="user-plus"></feather-icon>
                              </span>
                              <span>邀请</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="link-2"></feather-icon>
                              </span>
                              <span>共享链接</span>
                            </BDropdownItem>
                            <div class="dropdown-divider"></div>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="info"></feather-icon>
                              </span>
                              <span>查看详情</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="download"></feather-icon>
                              </span>
                              <span>下载</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="trash-2"></feather-icon>
                              </span>
                              <span>删除</span>
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                      <p class="text-truncate p-xs">最后访问：2小时前</p>
                    </BCardFooter>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-card card-border">
                    <BCardBody class="fmapp-info-trigger" @click="toggleInfo">
                      <i class="ri-folder-2-fill text-warning"></i>
                    </BCardBody>
                    <BCardFooter>
                      <div class="d-flex justify-content-between align-items-start">
                        <div>
                          <div class="file-name">caoba - Angular</div>
                          <div class="text-truncate fs-8 mb-2">2,637 KB</div>
                        </div>
                        <div class="d-flex">
                          <span class="file-star">
                            <feather-icon name="star"></feather-icon>
                          </span>
                          <BDropdown
                            variant="flush-dark"
                            size="xs"
                            toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                          >
                            <template #button-content>
                              <span class="icon">
                                <feather-icon name="more-horizontal"></feather-icon>
                              </span>
                            </template>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="eye"></feather-icon>
                              </span>
                              <span>预览</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="copy"></feather-icon>
                              </span>
                              <span>创建副本</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="skip-forward"></feather-icon>
                              </span>
                              <span>移动</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="user-plus"></feather-icon>
                              </span>
                              <span>邀请</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="link-2"></feather-icon>
                              </span>
                              <span>共享链接</span>
                            </BDropdownItem>
                            <div class="dropdown-divider"></div>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="info"></feather-icon>
                              </span>
                              <span>查看详情</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="download"></feather-icon>
                              </span>
                              <span>下载</span>
                            </BDropdownItem>
                            <BDropdownItem href="#">
                              <span class="feather-icon dropdown-icon">
                                <feather-icon name="trash-2"></feather-icon>
                              </span>
                              <span>删除</span>
                            </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                      <p class="text-truncate p-xs">最后访问：2小时前</p>
                    </BCardFooter>
                  </BCard>
                </BCol>
              </BRow>
            </BCollapse>
          </BCard>
        </div>

        <div class="collapse-simple mt-4">
          <BCard no-body>
            <BCardHeader>
              <a role="button" v-b-toggle.fm_collapse_2>
                <h5 class="mb-0">文件夹</h5>
              </a>
            </BCardHeader>
            <BCollapse id="fm_collapse_2" visible>
              <BRow
                gutter-x="3"
                cols-xxl="5"
                cols-xl="4"
                cols-lg="3"
                cols-md="2"
                cols="1"
                class="mt-4"
              >
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-sm avatar-soft-warning">
                            <span class="initial-wrap"
                              ><i class="ri-folder-2-fill"></i
                            ></span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">caoba - HTML - v1.0</div>
                          <div class="text-truncate fs-8 mb-2">1.6 GB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star marked">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-sm avatar-soft-warning">
                            <span class="initial-wrap"
                              ><i class="ri-folder-2-fill"></i
                            ></span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">caoba - Angular</div>
                          <div class="text-truncate fs-8 mb-2">2,635 KB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star marked">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-sm avatar-soft-warning">
                            <span class="initial-wrap"
                              ><i class="ri-folder-2-fill"></i
                            ></span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">设计</div>
                          <div class="text-truncate fs-8 mb-2">1.48 GB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-sm avatar-soft-warning">
                            <span class="initial-wrap"
                              ><i class="ri-folder-2-fill"></i
                            ></span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">灵感</div>
                          <div class="text-truncate fs-8 mb-2">3.5 GB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
              </BRow>
            </BCollapse>
          </BCard>
        </div>

        <div class="collapse-simple mt-4">
          <BCard no-body>
            <BCardHeader>
              <a role="button" v-b-toggle.fm_collapse_3>
                <h5 class="mb-0">文件</h5>
              </a>
            </BCardHeader>
            <BCollapse id="fm_collapse_3" visible>
              <BRow
                gutter-x="3"
                cols-xxl="5"
                cols-xl="4"
                cols-lg="3"
                cols-md="2"
                cols="1"
                class="mt-4"
              >
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-soft-blue avatar-sm">
                            <span class="initial-wrap">
                              <i class="ri-file-excel-2-fill"></i>
                            </span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">网站内容.exl</div>
                          <div class="text-truncate fs-8 mb-2">2,635 KB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-soft-danger avatar-sm">
                            <span class="initial-wrap">
                              <i class="ri-file-pdf-fill"></i>
                            </span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">caoba.pdf</div>
                          <div class="text-truncate fs-8 mb-2">21.73 MB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star marked">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <img
                            src="@/assets/img/gallery/mock7.jpg"
                            alt="用户"
                            class="d-block img-fluid h-50p"
                          />
                        </div>
                        <div class="media-body">
                          <div class="file-name">jonas-kakaroto-KIPqvvTxl</div>
                          <div class="text-truncate fs-8 mb-2">4,178 KB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-soft-blue avatar-sm">
                            <span class="initial-wrap">
                              <i class="ri-folder-zip-fill"></i>
                            </span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">caoba.zip</div>
                          <div class="text-truncate fs-8 mb-2">2.45 GB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-soft-light avatar-sm">
                            <span class="initial-wrap">
                              <i class="ri-keynote-fill"></i>
                            </span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">演示文稿.keynote</div>
                          <div class="text-truncate fs-8 mb-2">20 KB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <img
                            src="@/assets/img/gallery/mock5.jpg"
                            alt="用户"
                            class="d-block img-fluid h-50p"
                          />
                        </div>
                        <div class="media-body">
                          <div class="file-name">joel-mott-LaK153ghdig</div>
                          <div class="text-truncate fs-8 mb-2">2,635 KB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-soft-blue avatar-sm">
                            <span class="initial-wrap">
                              <i class="ri-file-text-fill"></i>
                            </span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">开支明细.doc</div>
                          <div class="text-truncate fs-8 mb-2">2,635 KB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-soft-blue avatar-sm">
                            <span class="initial-wrap">
                              <i class="ri-file-text-fill"></i>
                            </span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">会议纪要.doc</div>
                          <div class="text-truncate fs-8 mb-2">2,635 KB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
                <BCol>
                  <BCard no-body class="file-compact-card card-border">
                    <BCardBody class="d-flex justify-content-between">
                      <div class="media fmapp-info-trigger" @click="toggleInfo">
                        <div class="media-head me-3">
                          <div class="avatar avatar-icon avatar-sm avatar-soft-blue">
                            <span class="initial-wrap">
                              <i class="ri-file-word-2-fill"></i>
                            </span>
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="file-name">提案.doc</div>
                          <div class="text-truncate fs-8 mb-2">951 KB</div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <span class="file-star marked">
                          <feather-icon name="star"></feather-icon>
                        </span>
                        <BDropdown
                          variant="flush-dark"
                          size="xs"
                          toggle-class="btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret"
                        >
                          <template #button-content>
                            <span class="icon">
                              <feather-icon name="more-horizontal"></feather-icon>
                            </span>
                          </template>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="eye"></feather-icon>
                            </span>
                            <span>预览</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="copy"></feather-icon>
                            </span>
                            <span>创建副本</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="skip-forward"></feather-icon>
                            </span>
                            <span>移动</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="user-plus"></feather-icon>
                            </span>
                            <span>邀请</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="link-2"></feather-icon>
                            </span>
                            <span>共享链接</span>
                          </BDropdownItem>
                          <div class="dropdown-divider"></div>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="info"></feather-icon>
                            </span>
                            <span>查看详情</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="download"></feather-icon>
                            </span>
                            <span>下载</span>
                          </BDropdownItem>
                          <BDropdownItem href="#">
                            <span class="feather-icon dropdown-icon">
                              <feather-icon name="trash-2"></feather-icon>
                            </span>
                            <span>删除</span>
                          </BDropdownItem>
                        </BDropdown>
                      </div>
                    </BCardBody>
                  </BCard>
                </BCol>
              </BRow>
            </BCollapse>
          </BCard>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script setup>
import { BButton } from "bootstrap-vue-next";
import { defineEmits } from "vue";

// Emits
const emit = defineEmits(["toggle-info"]);

// Methods
const toggleInfo = () => {
  emit("toggle-info");
};
</script>
