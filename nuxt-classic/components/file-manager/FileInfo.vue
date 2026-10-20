<template>
  <div class="file-info">
    <simplebar class="nicescroll-bar">
      <BCloseButton class="info-close" @click="toggleInfo">
        <span aria-hidden="true">×</span>
      </BCloseButton>
      <div class="file-name">bruce-mars-fiEG-PkjG</div>
      <span>JPG 文件</span>
      <img
        src="@/assets/img/gallery/mock2.jpg"
        alt="user"
        class="d-block img-fluid my-4 w-250p"
      />

      <BTabs
        justified
        nav-class="nav nav-light nav-tabs nav-segmented-tabs active-theme mt-5"
      >
        <BTab title="详情">
          <div class="mt-5">
            <div class="collapse-simple">
              <BCard no-body>
                <BCardHeader>
                  <a role="button" v-b-toggle.fl_info>规格信息</a>
                </BCardHeader>
                <BCollapse id="fl_info" visible>
                  <BCardBody>
                    <ul class="fm-info">
                      <li>
                        <span>修改时间</span>
                        <span>2020年11月20日</span>
                      </li>
                      <li>
                        <span>大小</span>
                        <span>15.2 GB</span>
                      </li>
                      <li>
                        <span>创建者</span>
                        <span>摩根·弗里曼</span>
                      </li>
                      <li>
                        <span>创建时间</span>
                        <span>2020年11月12日</span>
                      </li>
                      <li>
                        <span>尺寸</span>
                        <span>1950 x 1245</span>
                      </li>
                    </ul>
                  </BCardBody>
                </BCollapse>
              </BCard>
              <BCard no-body>
                <BCardHeader>
                  <a role="button" v-b-toggle.shared_with>共享成员 </a>
                </BCardHeader>
                <BCollapse id="shared_with" visible>
                  <BCardBody>
                    <ul class="hk-list">
                      <li>
                        <div
                          class="avatar avatar-sm avatar-primary position-relative avatar-rounded"
                        >
                          <img
                            src="@/assets/img/avatar9.jpg"
                            alt="user"
                            class="avatar-img"
                          />
                          <div
                            class="badge-icon badge-circle text-blue badge-icon-xxs position-bottom-end-overflow-1"
                          >
                            <div class="badge-icon-wrap">
                              <i class="ri-upload-2-fill"></i>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                              <g
                                data-name="Ellipse 302"
                                transform="translate(8 8)"
                                stroke-width="3"
                              >
                                <circle
                                  cx="55.5"
                                  cy="55.5"
                                  r="55.5"
                                  stroke="currentColor"
                                ></circle>
                                <circle
                                  cx="55.5"
                                  cy="55.5"
                                  r="59.5"
                                  fill="currentColor"
                                ></circle>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="avatar avatar-sm avatar-rounded">
                          <img
                            src="@/assets/img/avatar10.jpg"
                            alt="user"
                            class="avatar-img"
                          />
                        </div>
                      </li>
                      <li>
                        <div
                          class="avatar avatar-sm avatar-soft-danger avatar-rounded"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="温斯顿"
                        >
                          <span class="initial-wrap">W</span>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded"
                          data-bs-toggle="modal"
                          data-bs-target="#invite_people"
                        >
                          <span
                            class="initial-wrap"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-bs-original-title="添加"
                          >
                            <feather-icon name="plus"></feather-icon>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </BCardBody>
                </BCollapse>
              </BCard>
              <BCard no-body>
                <BCardHeader>
                  <a role="button" v-b-toggle.settings>设置 </a>
                </BCardHeader>
                <BCollapse id="settings" visible>
                  <BCardBody>
                    <ul class="fm-action">
                      <li>
                        <a href="#">
                          <span class="text-danger">删除文件</span>
                        </a>
                      </li>
                      <li>
                        <a href="#"> 出现问题 </a>
                      </li>
                    </ul>
                    <a href="#" class="d-block text-dark fs-7 mb-2">
                      提交反馈并举报会话
                    </a>
                  </BCardBody>
                </BCollapse>
              </BCard>
            </div>
          </div>
        </BTab>
        <BTab title="动态">
          <div class="mt-5">
            <div class="collapse-simple">
              <BCard no-body>
                <BCardHeader>
                  <a role="button" v-b-toggle.act_info1>昨天</a>
                </BCardHeader>
                <BCollapse id="act_info1" visible>
                  <BCardBody>
                    <BListGroup flush class="activity-list">
                      <BListGroupItem>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-primary avatar-rounded">
                              <span class="initial-wrap">Cb</span>
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">caoba</span> 正在处理
                              <a href="#" class="link-url">
                                <u>
                                  https://assets.adobe.com/id/urn:aaid:sc:AP:5cebaf53-ca19-420a-aeeb-1517b04ab8c0?view=file
                                </u>
                              </a>
                            </p>
                            <div class="last-activity-time">15:15</div>
                          </div>
                        </div>
                      </BListGroupItem>
                      <BListGroupItem>
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
                              <span class="text-dark">摩根·弗雷格曼</span> 完成了
                              <a href="#" class="link-default"><u>组件</u></a>
                              的 React 转换
                            </p>
                            <div class="last-activity-time">15:15</div>
                          </div>
                        </div>
                      </BListGroupItem>
                    </BListGroup>
                  </BCardBody>
                </BCollapse>
              </BCard>
              <BCard no-body>
                <BCardHeader>
                  <a role="button" v-b-toggle.act_info2>4月23日</a>
                </BCardHeader>
                <BCollapse id="act_info2" visible>
                  <BCardBody>
                    <BListGroup flush class="activity-list">
                      <BListGroupItem>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-rounded">
                              <img
                                src="@/assets/img/avatar15.jpg"
                                alt="user"
                                class="avatar-img"
                              />
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">caoba</span> 正在处理
                              <a href="#" class="link-url"
                                ><u
                                  >https://assets.adobe.com/id/urn:aaid:sc:AP:5cebaf53-ca19-420a-aeeb-1517b04ab8c0?view=file</u
                                ></a
                              >
                            </p>
                            <div class="last-activity-time">15:15</div>
                          </div>
                        </div>
                      </BListGroupItem>
                      <BListGroupItem>
                        <div class="media">
                          <div class="media-head">
                            <div class="avatar avatar-sm avatar-rounded">
                              <img
                                src="@/assets/img/avatar12.jpg"
                                alt="user"
                                class="avatar-img"
                              />
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <span class="text-dark">摩根·弗雷格曼</span> 完成了
                              <a href="#" class="link-default"><u>组件</u></a>
                              的 React 转换
                            </p>
                            <div class="last-activity-time">15:15</div>
                          </div>
                        </div>
                      </BListGroupItem>
                    </BListGroup>
                  </BCardBody>
                </BCollapse>
              </BCard>
            </div>
          </div>
        </BTab>
      </BTabs>
    </simplebar>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

// Emits
const emit = defineEmits(["toggle-info"]);

// Methods
const toggleInfo = () => {
  emit("toggle-info");
};
</script>
