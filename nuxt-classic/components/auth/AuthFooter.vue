<template>
  <div class="hk-footer border-0">
    <footer class="container-xxl footer">
      <BRow>
        <BCol xl="8" class="text-center">
          <p class="footer-text pb-0">
            <span class="copy-text">
              caoba © {{ currentYear }} 保留所有权利。
            </span>
            <a href="#" class="" target="_blank">隐私政策</a
            ><span class="footer-link-sep">|</span
            ><a href="#" class="" target="_blank">条款与条件</a
            ><span class="footer-link-sep">|</span
            ><a href="#" class="" target="_blank">系统状态</a>
          </p>
        </BCol>
      </BRow>
    </footer>
  </div>
</template>

<script setup>
const currentYear = ref(new Date().getFullYear());
</script>