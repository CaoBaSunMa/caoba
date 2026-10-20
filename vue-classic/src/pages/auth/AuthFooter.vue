<template>
  <div class="hk-footer border-0">
    <footer class="container-xxl footer">
      <div class="row">
        <div class="col-xl-8 text-center">
          <p class="footer-text pb-0">
            <span class="copy-text"
              >caoba © {{ currentYear }} 保留所有权利。</span
            >
            <a href="#" class="" target="_blank">隐私政策</a
            ><span class="footer-link-sep">|</span
            ><a href="#" class="" target="_blank">条款与条件</a
            ><span class="footer-link-sep">|</span
            ><a href="#" class="" target="_blank">系统状态</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AuthFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
