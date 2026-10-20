<template>
  <header>
    <div v-if="showContact" class="input-group contact-search-wrap">
      <input
        type="text"
        class="form-control contact-search shadow-none"
        placeholder="搜索联系人"
      />
      <a
        href="javascript:void(0);"
        id="contact_list_close"
        class="btn btn-sm btn-icon btn-dark btn-rounded"
        @click="onHideContact"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="x"></feather-icon>
          </span>
        </span>
      </a>
    </div>
    <div v-else class="media-wrap">
      <div class="media">
        <div class="media-head">
          <div class="avatar avatar-sm avatar-rounded position-relative">
            <img :src="avatar8" alt="user" class="avatar-img" />
            <span
              class="badge badge-success badge-indicator badge-indicator-lg badge-indicator-nobdr position-bottom-end-overflow-1"
            >
            </span>
          </div>
        </div>
        <div class="media-body">
          <div class="user-name">伊芙·小野</div>
          <div class="user-status">助理经理</div>
        </div>
      </div>
    </div>
    <div v-if="!showContact" class="chat-popup-action d-flex">
      <a
        href="javascript:void(0);"
        data-bs-toggle="dropdown"
        class="btn btn-sm btn-icon btn-dark btn-rounded"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </span>
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">
          <i class="dropdown-icon zmdi zmdi-notifications-active"></i>
          <span>发送推送通知</span>
        </a>
        <a class="dropdown-item" href="#">
          <i class="dropdown-icon zmdi zmdi-volume-off"></i>
          <span>静音聊天</span>
        </a>
      </div>
      <a
        href="javascript:void(0);"
        id="user_list"
        class="btn btn-sm btn-icon btn-dark btn-rounded"
        @click="onHideContact"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="users"></feather-icon>
          </span>
        </span>
      </a>
      <a
        href="javascript:void(0);"
        id="close_popup"
        class="btn btn-sm btn-icon btn-dark btn-rounded"
        @click="onClose"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="x"></feather-icon>
          </span>
        </span>
      </a>
    </div>
  </header>
</template>

<script>
import avatar8 from "@/assets/img/avatar8.jpg";

export default {
  props: {
    showContact: Boolean,
  },
  data() {
    return {
      avatar8,
    };
  },
  methods: {
    onHideContact() {
      this.$emit("hideContact"); // Emitting event using $emit
    },
    onClose() {
      this.$emit("close");
    },
  },
};
</script>
