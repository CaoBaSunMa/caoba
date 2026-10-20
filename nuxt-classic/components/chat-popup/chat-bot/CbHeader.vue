<template>
  <header>
    <div class="chatbot-head-top">
      <a
        class="btn btn-sm btn-icon btn-dark btn-rounded"
        href="javascript:void(0);"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="more-horizontal"></feather-icon>
          </span>
        </span>
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">
          <i class="dropdown-icon zmdi zmdi-notifications-active"></i>
          <span>发送推送通知</span></a
        >
        <a class="dropdown-item" href="#"
          ><i class="dropdown-icon zmdi zmdi-volume-off"></i><span>静音聊天</span></a
        >
      </div>
      <span class="text-white">与我们聊天</span>
      <a
        id="minimize_chatbot"
        href="javascript:void(0);"
        class="btn btn-sm btn-icon btn-dark btn-rounded"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="minus"></feather-icon>
          </span>
        </span>
      </a>
    </div>
    <div class="separator-full separator-light mt-0 opacity-10"></div>
    <div class="media-wrap">
      <div class="media">
        <div class="media-head">
          <div
            class="avatar avatar-sm avatar-soft-primary avatar-icon avatar-rounded position-relative"
          >
            <span class="initial-wrap">
              <i class="ri-customer-service-2-line"></i>
            </span>
            <span
              class="badge badge-success badge-indicator badge-indicator-lg badge-indicator-nobdr position-bottom-end-overflow-1"
            ></span>
          </div>
        </div>
        <div class="media-body">
          <div class="user-name">聊天机器人</div>
          <div class="user-status">在线</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "CbHeader",
  // Your component's logic goes here
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
