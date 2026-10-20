<template>
    <div class="hk-footer">
        <footer class="container-xxl footer">
            <div class="row">
                <div class="col-xl-8">
                    <p class="footer-text"><span class="copy-text">caoba © {{ currentYear }} 保留所有权利</span> <a href="#" class="" target="_blank">隐私政策</a><span  class="footer-link-sep">|</span><a href="#" class="" target="_blank">条款与条件</a><span class="footer-link-sep">|</span><a href="#" class="" target="_blank">系统状态</a>
                    </p>
                </div>
                <div class="col-xl-4">
                    <a href="#" class="footer-extr-link link-default"><span class="feather-icon"><feather-icon name="external-link"></feather-icon></span><u>前往帮助论坛反馈</u></a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
};
</script>