<template>
  <BModal
    id="invite_people"
    ref="invitePeople"
    title="邀请成员"
    dialog-class="mw-400p"
    body-class="p-0"
    header-class="header-wth-bg-inv"
    header-close-class="text-white"
    centered
  >
    <BForm class="m-3" role="search">
      <BFormInput
        type="text"
        class="rounded-input user-search"
        placeholder="搜索用户"
      />
    </BForm>
    <div class="h-350p">
      <simplebar class="nicescroll-bar">
        <ul class="invite-user-list">
          <li>
            <div class="media d-flex align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img :src="avatar2" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <div class="user-name">摩根·弗里曼</div>
              </div>
            </div>
            <div>
              <BFormCheckbox id="customCheck2" />
            </div>
          </li>
          <li>
            <div class="media d-flex align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img :src="avatar7" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <div class="user-name">乌玛·瑟曼</div>
              </div>
            </div>
            <div>
              <BFormCheckbox id="customCheck3" />
            </div>
          </li>
          <li>
            <div class="media d-flex align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img :src="avatar3" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <div class="user-name">查理·卓别林</div>
              </div>
            </div>
            <div>
              <BFormCheckbox id="customCheck4" />
            </div>
          </li>
          <li>
            <div class="media d-flex align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-soft-danger avatar-rounded">
                  <span class="initial-wrap">W</span>
                </div>
              </div>
              <div class="media-body">
                <div class="user-name">温斯顿·丘吉尔</div>
              </div>
            </div>
            <div>
              <BFormCheckbox id="customCheck5" />
            </div>
          </li>
          <li>
            <div class="media d-flex align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img :src="avatar1" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <div class="user-name">办公看板</div>
              </div>
            </div>
            <div>
              <BFormCheckbox id="customCheck6" />
            </div>
          </li>
          <li>
            <div class="media d-flex align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img :src="avatar6" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <div class="user-name">宝贝老板</div>
              </div>
            </div>
            <div>
              <BFormCheckbox id="customCheck7" />
            </div>
          </li>
          <li>
            <div class="media d-flex align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img :src="avatar5" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <div class="user-name">杰奎琳·乔克</div>
              </div>
            </div>
            <div>
              <BFormCheckbox id="customCheck8" />
            </div>
          </li>
        </ul>
      </simplebar>
    </div>
    <template #footer>
      <BButton variant="light" type="button" class="flex-fill flex-1" @click="closeModal">
        取消
      </BButton>
      <BButton variant="primary" type="button" class="flex-fill flex-1">
        邀请聊天
      </BButton>
    </template>
  </BModal>
</template>

<script setup>
//Images
import avatar1 from "@/assets/img/avatar1.jpg";
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar3 from "@/assets/img/avatar3.jpg";
import avatar5 from "@/assets/img/avatar5.jpg";
import avatar6 from "@/assets/img/avatar6.jpg";
import avatar7 from "@/assets/img/avatar7.jpg";

// Modal reference
const invitePeople = ref(null);

// Function to close the modal
const closeModal = () => {
  invitePeople.value.hide(); // Close the modal programmatically
};
</script>
