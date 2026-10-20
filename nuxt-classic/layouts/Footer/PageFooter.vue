<template>
  <div class="hk-footer">
    <BContainer fluid="xxl" tag="footer" class="footer">
      <BRow>
        <BCol xl="8">
          <p class="footer-text">
            <span class="copy-text"
              >caoba © {{ currentYear }} 保留所有权利。</span
            >
            <a href="#" class="" target="_blank">隐私政策</a
            ><span class="footer-link-sep">|</span
            ><a href="#" class="" target="_blank">条款与条件</a
            ><span class="footer-link-sep">|</span
            ><a href="#" class="" target="_blank">系统状态</a>
          </p>
        </BCol>
        <BCol xl="4">
          <a href="#" class="footer-extr-link link-default"
            ><span class="feather-icon"
              ><feather-icon name="external-link"></feather-icon></span
            ><u>向我们的帮助论坛发送反馈</u></a
          >
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup>
// Reactive state for the current year
const currentYear = ref(new Date().getFullYear());
</script>
