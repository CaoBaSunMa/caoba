<template>
  <div class="contact-body">
    <simplebar class="nicescroll-bar">
      <div class="collapse" id="collapseQuick">
        <div class="quick-access-form-wrap">
          <BForm class="quick-access-form border">
            <BRow gutter-x="3">
              <BCol xxl="10">
                <div class="position-relative">
                  <div class="dropify-square">
                    <input type="file" class="dropify-1" />
                  </div>
                  <BCol md="12">
                    <BRow gutter-x="3">
                      <BCol lg="4">
                        <BFormGroup class="mb-3">
                          <BFormInput placeholder="名*" value="" type="text" />
                        </BFormGroup>
                        <BFormGroup class="mb-3">
                          <BFormInput placeholder="姓*" value="" type="text" />
                        </BFormGroup>
                      </BCol>
                      <BCol lg="4">
                        <BFormGroup class="mb-3">
                          <BFormInput placeholder="邮箱 ID*" value="" type="text" />
                        </BFormGroup>
                        <BFormGroup class="mb-3">
                          <BFormInput placeholder="电话" value="" type="text" />
                        </BFormGroup>
                      </BCol>
                      <BCol lg="4">
                        <BFormGroup class="mb-3">
                          <BFormInput placeholder="部门" value="" type="text" />
                        </BFormGroup>
                        <BFormGroup class="mb-3">
                          <BFormSelect multiple model-value="selected">
                            <BFormSelectOption value="selected"
                              >协作者</BFormSelectOption
                            >
                            <BFormSelectOption value="1">设计师</BFormSelectOption>
                            <BFormSelectOption value="2">开发</BFormSelectOption>
                          </BFormSelect>
                        </BFormGroup>
                      </BCol>
                    </BRow>
                  </BCol>
                </div>
              </BCol>
              <BCol xxl="2">
                <BFormGroup class="mb-3">
                  <BButton
                    variant="primary"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    class="btn-block"
                  >
                    新建
                  </BButton>
                </BFormGroup>
                <BFormGroup class="mb-3">
                  <BButton
                    variant="secondary"
                    data-bs-toggle="collapse"
                    disabled
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    class="btn-block"
                  >
                    放弃
                  </BButton>
                </BFormGroup>
              </BCol>
            </BRow>
          </BForm>
        </div>
      </div>
      <div :class="['contact-card-view', { 'select-multiple': multipleSelection }]">
        <BRow>
          <BCol cols="7" class="mb-3">
            <div class="contact-toolbar-left">
              <div class="d-xxl-flex d-none align-items-center mb-0">
                <BFormSelect size="sm" class="w-120p" model-value="1">
                  <BFormSelectOption value="1">批量操作</BFormSelectOption>
                  <BFormSelectOption value="2">编辑</BFormSelectOption>
                  <BFormSelectOption value="3">移至回收站</BFormSelectOption>
                </BFormSelect>
                <BButton variant="light" size="sm" class="ms-2">应用</BButton>
              </div>
              <div class="d-xxl-flex d-none align-items-center mb-0">
                <label class="flex-shrink-0 mb-0 me-2">排序方式：</label>
                <BFormSelect size="sm" class="w-130p" model-value="1">
                  <BFormSelectOption value="1">创建日期</BFormSelectOption>
                  <BFormSelectOption value="2">编辑日期</BFormSelectOption>
                  <BFormSelectOption value="3">常联系人</BFormSelectOption>
                  <BFormSelectOption value="4">最近添加</BFormSelectOption>
                </BFormSelect>
              </div>
              <BFormSelect size="sm" class="align-items-center w-130p" model-value="1">
                <BFormSelectOption value="1">导出 CSV</BFormSelectOption>
                <BFormSelectOption value="2">导出 PDF</BFormSelectOption>
                <BFormSelectOption value="3">发送消息</BFormSelectOption>
                <BFormSelectOption value="4">委托访问</BFormSelectOption>
              </BFormSelect>
            </div>
          </BCol>
          <BCol cols="5" class="mb-3">
            <div class="contact-toolbar-right">
              <div id="datable_1_filter" class="dataTables_filter">
                <label>
                  <BFormInput size="sm" type="search" placeholder="搜索" />
                </label>
              </div>
              <div class="dataTables_length" id="datable_1_length">
                <label>
                  查看
                  <BFormSelect size="sm" model-value="selected">
                    <BFormSelectOption value="selected">选择</BFormSelectOption>
                    <BFormSelectOption value="10">10</BFormSelectOption>
                    <BFormSelectOption value="25">25</BFormSelectOption>
                    <BFormSelectOption value="50">50</BFormSelectOption>
                    <BFormSelectOption value="100">100</BFormSelectOption>
                  </BFormSelect>
                </label>
              </div>
              <div
                class="dataTables_info"
                id="datable_1_info"
                role="status"
                aria-live="polite"
              >
                1 - 10，共 11 条
              </div>
              <div
                class="dataTables_paginate paging_simple_numbers"
                id="datable_1_paginate"
              >
                <ul class="pagination custom-pagination pagination-simple m-0">
                  <li
                    class="paginate_button page-item previous disabled"
                    id="datable_1_previous"
                  >
                    <a href="#" data-dt-idx="0" tabindex="0" class="page-link"
                      ><i class="ri-arrow-left-s-line"></i
                    ></a>
                  </li>
                  <li class="paginate_button page-item active">
                    <a href="#" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                  </li>
                  <li class="paginate_button page-item">
                    <a href="#" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                  </li>
                  <li class="paginate_button page-item next" id="datable_1_next">
                    <a href="#" data-dt-idx="3" tabindex="0" class="page-link"
                      ><i class="ri-arrow-right-s-line"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </BCol>
        </BRow>

        <BRow
          gutter-x="3"
          cols-xxl="5"
          cols-xl="4"
          cols-lg="3"
          cols-md="2"
          cols="1"
          class="mb-5"
        >
          <BCol v-for="(contact, index) in contacts" :key="contact.id">
            <BCard no-body class="card-border contact-card">
              <BCardBody class="text-center">
                <BFormCheckbox
                  name="select-contact"
                  class="form-check form-check-lg"
                  :modal-value="contact.checked"
                  @change="toggleCheck(index)"
                />

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
                        <feather-icon name="more-vertical" />
                      </span>
                    </template>
                    <BDropdownItem href="#">
                      <i class="icon wb-reply" aria-hidden="true"></i>
                      回复
                    </BDropdownItem>
                    <BDropdownItem href="#">
                      <i class="icon wb-share" aria-hidden="true"></i>
                      转发
                    </BDropdownItem>
                    <BDropdownItem href="#">
                      <i class="icon wb-trash" aria-hidden="true"></i>
                      删除
                    </BDropdownItem>
                  </BDropdown>
                </div>
                <div v-if="contact.avatar" class="avatar avatar-xl avatar-rounded">
                  <img :src="contact.avatar" alt="用户" class="avatar-img" />
                </div>
                <div
                  v-if="contact.initAvatar"
                  v-for="(avt, index) in contact.initAvatar"
                  :key="index"
                  :class="['avatar avatar-xl avatar-rounded', avt.variant]"
                >
                  <span class="initial-wrap">{{ avt.name }}</span>
                </div>
                <div class="user-name">
                  <span :class="['contact-star', { marked: contact.stared === true }]">
                    <feather-icon name="star"></feather-icon>
                  </span>
                  {{ contact.name }}
                </div>
                <div class="user-email">{{ contact.mail }}</div>
                <div class="user-contact">{{ contact.phone }}</div>
                <div class="user-desg">
                  <HkBadge
                    :variant="contact.badge"
                    indicator-size="lg"
                    indicator
                    class="me-2"
                  />
                  {{ contact.position }}
                </div>
              </BCardBody>
              <BCardFooter class="text-muted position-relative">
                <a href="#" class="d-flex align-items-center">
                  <span class="me-2">
                    <feather-icon name="inbox"></feather-icon>
                  </span>
                  <span class="fs-7 lh-1">消息</span>
                </a>
                <div class="v-separator-full m-0"></div>
                <a
                  href="#"
                  class="d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#contact_detail"
                >
                  <span class="feather-icon me-2">
                    <feather-icon name="user-check"></feather-icon>
                  </span>
                  <span class="fs-7 lh-1">个人资料</span>
                </a>
              </BCardFooter>
            </BCard>
          </BCol>
        </BRow>

        <BRow>
          <BCol
            sm="12"
            md="5"
            class="d-flex align-items-center justify-content-center justify-content-md-start"
          >
            <div class="dataTables_info">1 - 10，共 30 条</div>
          </BCol>
          <BCol sm="12" md="7">
            <ul
              class="pagination custom-pagination pagination-simple mb-0 justify-content-center justify-content-md-end"
            >
              <li class="paginate_button page-item previous disabled">
                <a href="#" data-dt-idx="0" tabindex="0" class="page-link"
                  ><i class="ri-arrow-left-s-line"></i
                ></a>
              </li>
              <li class="paginate_button page-item active">
                <a href="#" data-dt-idx="1" tabindex="0" class="page-link">1</a>
              </li>
              <li class="paginate_button page-item">
                <a href="#" data-dt-idx="2" tabindex="0" class="page-link">2</a>
              </li>
              <li class="paginate_button page-item next">
                <a href="#" data-dt-idx="4" tabindex="0" class="page-link"
                  ><i class="ri-arrow-right-s-line"></i
                ></a>
              </li>
            </ul>
          </BCol>
        </BRow>
      </div>
    </simplebar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

//Images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar3 from "@/assets/img/avatar3.jpg";
import avatar5 from "@/assets/img/avatar5.jpg";
import avatar7 from "@/assets/img/avatar7.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar9 from "@/assets/img/avatar9.jpg";
import avatar10 from "@/assets/img/avatar10.jpg";
import avatar11 from "@/assets/img/avatar11.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";
import avatar14 from "@/assets/img/avatar14.jpg";
import avatar15 from "@/assets/img/avatar15.jpg";
import { BButton, BForm, BRow } from "bootstrap-vue-next";

const contacts = ref([
  {
    id: 1,
    name: "摩根·弗里曼",
    mail: "morgan@caoba.com",
    phone: "+145 52 5689",
    position: "设计",
    badge: "primary",
    avatar: avatar2,
    checked: false,
    stared: false,
  },
  {
    id: 2,
    name: "乌玛·瑟曼",
    mail: "huma@clariesup.au",
    phone: "+234 48 2365",
    position: "开发",
    badge: "primary",
    avatar: avatar9,
    checked: false,
    stared: false,
  },
  {
    id: 3,
    name: "查理·卓别林",
    mail: "charlie@leernoca.monster",
    phone: "+741 56 1916",
    position: "库存",
    badge: "danger",
    initAvatar: [{ name: "C", variant: "avatar-soft-primary" }],
    checked: false,
    stared: true,
  },
  {
    id: 4,
    name: "温斯顿·丘吉尔",
    mail: "winston@worthniza.ga",
    phone: "+145 52 5463",
    position: "人力资源",
    badge: "danger",
    avatar: avatar10,
    checked: false,
    stared: false,
  },
  {
    id: 5,
    name: "杰奎琳·乔克",
    mail: "contact@caoba.com",
    phone: "+91-34-2636-1916",
    position: "设计",
    badge: "primary",
    avatar: avatar3,
    checked: false,
    stared: true,
  },
  {
    id: 6,
    name: "汤姆·克鲁斯",
    mail: "tomcz@caoba.com",
    phone: "+456 52 4862",
    position: "开发",
    badge: "primary",
    avatar: avatar7,
    checked: false,
    stared: false,
  },
  {
    id: 7,
    name: "丹尼尔·克雷格",
    mail: "danialc@caoba.com",
    phone: "+145 52 1916",
    position: "设计",
    badge: "success",
    initAvatar: [{ name: "D", variant: "avatar-soft-danger" }],
    checked: false,
    stared: true,
  },
  {
    id: 8,
    name: "凯瑟琳·琼斯",
    mail: "joneskath@caoba.com",
    phone: "+741 56 1916",
    position: "库存",
    badge: "danger",
    avatar: avatar8,
    checked: false,
    stared: true,
  },
  {
    id: 9,
    name: "caoba",
    mail: "contact@caoba.com",
    phone: "+145 52 5478",
    position: "设计",
    badge: "primary",
    initAvatar: [{ name: "H", variant: "avatar-primary" }],
    checked: false,
    stared: false,
  },
  {
    id: 10,
    name: "丹尼尔·雷诺兹",
    mail: "danialraynolds@caoba.com",
    phone: "+145 36 1916",
    position: "设计",
    badge: "primary",
    avatar: avatar13,
    checked: false,
    stared: false,
  },
  {
    id: 11,
    name: "约翰·布拉泽",
    mail: "john@cryodrakan.info",
    phone: "+456 52 1916",
    position: "人力资源",
    badge: "danger",
    initAvatar: [{ name: "J", variant: "avatar-light" }],
    checked: false,
    stared: false,
  },
  {
    id: 12,
    name: "迪恩·肖",
    mail: "dean-shaw@pown.me",
    phone: "+234 48 1916",
    position: "设计",
    badge: "primary",
    avatar: avatar15,
    checked: false,
    stared: true,
  },
  {
    id: 13,
    name: "卡文·斯潘西",
    mail: "cavins11@budgequot.press",
    phone: "+234 48 1916",
    position: "设计",
    badge: "primary",
    avatar: avatar11,
    checked: false,
    stared: true,
  },
  {
    id: 14,
    name: "贾斯汀·比伯",
    mail: "justin@tulberga.ga",
    phone: "+745 56 1916",
    position: "库存",
    badge: "danger",
    avatar: avatar14,
    checked: false,
    stared: false,
  },
  {
    id: 15,
    name: "奥斯汀·库彻",
    mail: "auston@cutcher.com",
    phone: "+145 52 1916",
    position: "人力资源",
    badge: "warning",
    avatar: avatar5,
    checked: false,
    stared: false,
  },
]);
const multipleSelection = ref(false);

const toggleCheck = (index) => {
  contacts.value[index].checked = !contacts.value[index].checked;
};

watch(
  contacts,
  (newContacts) => {
    // Set multipleSelection to true if any contact is checked
    multipleSelection.value = newContacts.some((contact) => contact.checked);
  },
  { deep: true }
);
</script>
