<template>
  <div class="hk-pg-body">
    <BContainer fluid="xxl">
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
    </BContainer>
  </div>
</template>

<script setup>
import ProfileIntro from "@/components/profile/ProfileIntro.vue";
import Header from "@/components/profile/Header.vue";
import Body from "@/components/profile/Body.vue";
</script>
