<template>
  <div class="hk-pg-body">
    <div class="container-xxl">
      <div class="profile-wrap">
        <div class="profile-img-wrap">
          <img
            class="img-fluid rounded-5"
            src="@/assets/img/profile-bg.jpg"
            alt="图片描述"
          />
        </div>
        <ProfileIntro />
        <Header />

        <Body />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileIntro from "./ProfileIntro.vue";
import Header from "./Header.vue";
import Body from "./Body.vue";

export default {
  components: {
    ProfileIntro,
    Header,
    Body,
  },
};
</script>
