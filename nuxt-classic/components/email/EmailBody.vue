<template>
  <div class="email-body">
    <simplebar class="nicescroll-bar">
      <div class="single-email-subject">
        <div>
          <h4 class="fw-light">您购买的商品有可用更新。</h4>
          <HkBadge variant="orange" class="flex-shrink-0 ms-3" sm pill>更新</HkBadge>
        </div>
        <div class="email-options-wrap">
          <a
            class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="打印"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="printer"></feather-icon>
              </span>
            </span>
          </a>
          <a
            class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="回复"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="corner-up-left"></feather-icon>
              </span>
            </span>
          </a>
          <a
            class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="转发"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="arrow-right"></feather-icon>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div
        id="accordionSimpleExample"
        class="accordion accordion-simple single-email-thread"
      >
        <div class="accordion-item">
          <div id="simple-headingOne" class="accordion-header">
            <div>
              <div class="email-head">
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#simple-collapseOne"
                  role="button"
                  aria-expanded="false"
                ></div>
                <div class="media">
                  <div class="media-head">
                    <div class="avatar d-8">
                      <img :src="avatar2" alt="用户" class="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div class="media-body">
                    <div>摩根·弗里曼</div>
                    <div class="fs-7">
                      <span>发给</span>
                      <div class="mail-desc-dropdown">
                        <a
                          href="#"
                          class="dropdown-toggle link-dark ms-1"
                          data-bs-toggle="dropdown"
                          >我</a
                        >
                        <div class="dropdown-menu">
                          <div>
                            <span>发件人：</span
                            ><span
                              >摩根 <span>&lt;morganfreeman@caoba.com&gt;</span></span
                            >
                          </div>
                          <div>
                            <span>收件人：</span
                            ><span
                              >caoba <span>&lt;contact@caoba.com&gt;</span></span
                            >
                          </div>
                          <div><span>日期：</span><span>12月30日 16:22</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="email-head-action">
                  <div class="email-time">12月30日 16:22</div>
                  <span class="email-star marked">
                    <feather-icon name="star"></feather-icon>
                  </span>
                  <BButton
                    variant="flush-dark"
                    size="sm"
                    class="btn-icon btn-rounded flush-soft-hover"
                    href="#"
                  >
                    <span class="icon">
                      <feather-icon name="corner-up-left"></feather-icon>
                    </span>
                  </BButton>
                  <BDropdown
                    variant="flush-dark"
                    size="sm"
                    toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                    tag="a"
                    href="#"
                    end
                  >
                    <template #button-content>
                      <span class="icon">
                        <feather-icon name="more-vertical" />
                      </span>
                    </template>
                    <BDropdownItem href="#">转发</BDropdownItem>
                    <BDropdownItem href="#">删除</BDropdownItem>
                    <BDropdownItem href="#">举报垃圾邮件</BDropdownItem>
                  </BDropdown>
                </div>
              </div>
            </div>
          </div>
          <div id="simple-collapseOne" class="accordion-collapse collapse">
            <div class="accordion-body">
              <p>嗨，caoba，</p>
              <p>
                我们想通知您，您的商品 caoba - caoba 管理后台模板，更新现已可在您的
                下载页面获取。
              </p>
              <p>提醒：您需要登录后才能下载更新。</p>
              <p class="mt-3 mb-4">
                您可以在以下页面管理您商品的通知：
                <a href="#"><u>您的下载页面。</u></a>
              </p>
              <p>此致，<br />caoba 团队</p>
              <img class="d-block mt-2 mb-3" :src="sign" alt="签名" />
              <div class="separator separator-light"></div>
              <div class="text-end">
                <a href="#" class="link-theme fs-7"><u>全部下载</u></a>
              </div>
              <div class="email-attachment-wrap">
                <div class="attachment-box">
                  <div>
                    <div class="media">
                      <div class="avatar avatar-icon avatar-sm avatar-blue">
                        <span class="initial-wrap fs-3">
                          <i class="ri-file-excel-2-fill"></i>
                        </span>
                      </div>
                      <div class="media-body">
                        <p class="file-name">Website_content.xls</p>
                        <p class="file-size">2,635 KB</p>
                      </div>
                    </div>
                    <div class="file-overlay">
                      <button class="btn btn-sm btn-icon btn-rounded btn-primary">
                        <span class="icon">
                          <feather-icon name="arrow-down"></feather-icon>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="attachment-box">
                  <div>
                    <div class="media">
                      <div class="avatar avatar-icon avatar-sm avatar-warning">
                        <span class="initial-wrap fs-3">
                          <i class="ri-file-zip-fill"></i>
                        </span>
                      </div>
                      <div class="media-body">
                        <p class="file-name">caoba.zip</p>
                        <p class="file-size">2.45 GB</p>
                      </div>
                    </div>
                    <div class="file-overlay">
                      <button class="btn btn-sm btn-icon btn-rounded btn-primary">
                        <span class="icon"
                          ><feather-icon name="arrow-down"></feather-icon
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div id="simple-headingTwo" class="accordion-header">
            <div>
              <div class="email-head">
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#simple-collapseTwo"
                  role="button"
                  aria-expanded="true"
                ></div>
                <div class="media">
                  <div class="media-head">
                    <div class="avatar d-8">
                      <img :src="avatar2" alt="用户" class="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div class="media-body">
                    <div>摩根·弗里曼</div>
                    <div class="fs-7">
                      <span>发给</span>
                      <div class="mail-desc-dropdown">
                        <a
                          href="#"
                          class="dropdown-toggle link-dark ms-1"
                          data-bs-toggle="dropdown"
                          >我</a
                        >
                        <div class="dropdown-menu">
                          <div>
                            <span>发件人：</span
                            ><span
                              >摩根 <span>&lt;morganfreeman@caoba.com&gt;</span></span
                            >
                          </div>
                          <div>
                            <span>收件人：</span
                            ><span
                              >caoba <span>&lt;contact@caoba.com&gt;</span></span
                            >
                          </div>
                          <div><span>日期：</span><span>1月1日 09:30</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="email-head-action">
                  <div class="email-time">1月1日 09:30</div>
                  <span class="email-star marked">
                    <feather-icon name="star"></feather-icon>
                  </span>
                  <BButton
                    variant="flush-dark"
                    size="sm"
                    class="btn-icon btn-rounded flush-soft-hover"
                    href="#"
                  >
                    <span class="icon">
                      <feather-icon name="corner-up-left"></feather-icon>
                    </span>
                  </BButton>
                  <BDropdown
                    variant="flush-dark"
                    size="sm"
                    toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                    tag="a"
                    href="#"
                    end
                  >
                    <template #button-content>
                      <span class="icon">
                        <feather-icon name="more-vertical" />
                      </span>
                    </template>
                    <BDropdownItem href="#">转发</BDropdownItem>
                    <BDropdownItem href="#">删除</BDropdownItem>
                    <BDropdownItem href="#">举报垃圾邮件</BDropdownItem>
                  </BDropdown>
                </div>
              </div>
            </div>
          </div>
          <div id="simple-collapseTwo" class="collapse show">
            <div class="accordion-body">
              <p>
                您好，我购买了这套管理后台模板，请帮我安装并部署，我希望网站能够正常运行。
                提醒：您需要登录后才能下载更新。
              </p>
              <p class="mb-4">
                提醒：您需要登录后才能下载更新。
              </p>
              <p>此致，<br />caoba 团队</p>
              <img class="d-block mt-2 mb-3" :src="sign" alt="签名" />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div id="simple-headingThree" class="accordion-header">
            <div>
              <div class="email-head">
                <div
                  data-bs-toggle="collapse"
                  data-bs-target="#simple-collapseThree"
                  role="button"
                  aria-expanded="true"
                ></div>
                <div class="media">
                  <div class="media-head">
                    <div class="avatar d-8">
                      <img :src="avatar10" alt="用户" class="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div class="media-body">
                    <div>管理员</div>
                    <div class="fs-7">
                      <span>发给</span>
                      <div class="mail-desc-dropdown">
                        <a
                          href="#"
                          class="dropdown-toggle link-dark ms-1"
                          data-bs-toggle="dropdown"
                          >摩根</a
                        >
                        <div class="dropdown-menu">
                          <div>
                            <span>发件人：</span
                            ><span>管理员 <span>&lt;admin@caoba.com&gt;</span></span>
                          </div>
                          <div>
                            <span>收件人：</span
                            ><span
                              >摩根 <span>&lt;morganfreeman@caoba.com&gt;</span></span
                            >
                          </div>
                          <div><span>日期：</span><span>1月2日 10:21</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="email-head-action">
                  <div class="email-time">1月2日 10:21</div>
                  <span class="email-star">
                    <feather-icon name="star"></feather-icon>
                  </span>
                  <BButton
                    variant="flush-dark"
                    size="sm"
                    class="btn-icon btn-rounded flush-soft-hover"
                    href="#"
                  >
                    <span class="icon">
                      <feather-icon name="corner-up-left"></feather-icon>
                    </span>
                  </BButton>
                  <BDropdown
                    variant="flush-dark"
                    size="sm"
                    toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                    tag="a"
                    href="#"
                    end
                  >
                    <template #button-content>
                      <span class="icon">
                        <feather-icon name="more-vertical" />
                      </span>
                    </template>
                    <BDropdownItem href="#">转发</BDropdownItem>
                    <BDropdownItem href="#">删除</BDropdownItem>
                    <BDropdownItem href="#">举报垃圾邮件</BDropdownItem>
                  </BDropdown>
                </div>
              </div>
            </div>
          </div>
          <div id="simple-collapseThree" class="collapse show">
            <div class="accordion-body">
              <p>您好，</p>
              <p>能否请您指出哪些页面出现了错误？</p>
              <div class="my-5">
                <BButton variant="outline-light" class="me-2" v-b-toggle.compose_email>
                  <span>
                    <span class="icon">
                      <feather-icon name="corner-up-left"></feather-icon>
                    </span>
                    <span>回复</span>
                  </span>
                </BButton>
                <BButton variant="outline-light" v-b-toggle.compose_email>
                  <span>
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="arrow-right"></feather-icon>
                      </span>
                    </span>
                    <span>转发</span>
                  </span>
                </BButton>
              </div>
              <!-- Compose email -->
              <BCollapse id="compose_email" class="mt-7">
                <div class="d-flex">
                  <div class="media">
                    <div class="media-head me-3">
                      <div
                        class="avatar avatar-icon avatar-soft-light avatar-rounded d-8"
                      >
                        <span class="initial-wrap">
                          <i class="ri-user-fill"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <BForm @submit.prevent class="w-100">
                    <BCard class="card-shadow" no-body>
                      <BCardBody>
                        <BFormGroup class="mb-3">
                          <div class="d-flex flex-wrap">
                            <HkChip
                              class="mb-2 me-2"
                              variant="primary"
                              :src="avatar11"
                              dismissable
                            >
                              摩根
                            </HkChip>

                            <HkChip
                              class="mb-2 me-2"
                              variant="primary"
                              :src="avatar12"
                              dismissable
                            >
                              查理
                            </HkChip>

                            <HkChip
                              class="mb-2 me-2"
                              variant="primary"
                              :src="avatar13"
                              dismissable
                            >
                              温斯顿
                            </HkChip>
                            <HkChip
                              v-for="(recipient, index) in recipients"
                              :key="index"
                              class="mb-2 me-2"
                              variant="primary"
                              dismissable
                            >
                              {{ recipient }}
                            </HkChip>
                            <BFormInput
                              type="text"
                              class="border-0 p-0 shadow-none flex-1 mb-2 me-2"
                              placeholder="添加收件人"
                              v-model="newRecipient"
                              @keyup.enter="addRecipient"
                            />
                          </div>
                        </BFormGroup>
                        <BFormGroup class="mb-3">
                          <BFormTextarea rows="8" placeholder="输入内容" />
                        </BFormGroup>
                        <BFormGroup>
                          <div class="d-flex justify-content-between">
                            <div>
                              <BButton variant="primary" class="me-2"> 发送 </BButton>
                              <BButton
                                variant="flush-dark"
                                class="btn-icon btn-rounded flush-soft-hover"
                              >
                                <span
                                  class="icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="添加标记"
                                  data-bs-original-title="添加标记"
                                >
                                  <span class="feather-icon">
                                    <feather-icon name="paperclip"></feather-icon>
                                  </span>
                                </span>
                              </BButton>
                            </div>
                            <div>
                              <BButton
                                variant="flush-dark"
                                class="btn-icon btn-rounded flush-soft-hover"
                              >
                                <span
                                  class="icon"
                                  data-bs-toggle="Save Draft"
                                  data-bs-placement="top"
                                  title="保存草稿"
                                  data-bs-original-title="保存草稿"
                                >
                                  <span class="feather-icon">
                                    <feather-icon name="edit"></feather-icon>
                                  </span>
                                </span>
                              </BButton>
                              <BButton
                                variant="flush-dark"
                                class="btn-icon btn-rounded flush-soft-hover"
                                type="button"
                              >
                                <span
                                  class="icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="删除"
                                  data-bs-original-title="删除"
                                >
                                  <span class="feather-icon">
                                    <feather-icon name="trash-2"></feather-icon>
                                  </span>
                                </span>
                              </BButton>
                            </div>
                          </div>
                        </BFormGroup>
                      </BCardBody>
                    </BCard>
                  </BForm>
                </div>
              </BCollapse>
              <!-- /Compose email -->
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script setup>
//Images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar10 from "@/assets/img/avatar10.jpg";
import avatar11 from "@/assets/img/avatar11.jpg";
import avatar12 from "@/assets/img/avatar12.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";
import sign from "@/assets/img/caoba.svg";

const recipients = ref([]);
const newRecipient = ref("");

const addRecipient = () => {
  if (newRecipient.value) {
    recipients.value.push(newRecipient.value);
    newRecipient.value = "";
  }
};
</script>
