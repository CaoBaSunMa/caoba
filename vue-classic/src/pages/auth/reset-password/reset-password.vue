<template>
  <div class="hk-pg-wrapper pt-0 pb-xl-0 pb-5">
    <div class="hk-pg-body pt-0 pb-xl-0">
      <!-- Container -->
      <div class="container-xxl">
        <!-- Row -->
        <div class="row">
          <div class="col-sm-10 position-relative mx-auto">
            <div class="auth-content py-8">
              <form class="w-100">
                <div class="row">
                  <div class="col-lg-5 col-md-7 col-sm-10 mx-auto">
                    <div class="text-center mb-7">
                      <router-link to="/" class="navbar-brand me-0">
                        <img
                          class="brand-img d-inline-block"
                          src="@/assets/img/logo-light.png"
                          alt="brand"
                        />
                      </router-link>
                    </div>
                    <div class="card card-flush">
                      <div class="card-body text-center">
                        <h4>重置您的密码</h4>
                        <p class="mb-4">
                          别担心，我们会向您的恢复邮箱发送 6 位验证码，用于重置您的密码。
                        </p>
                        <div class="row gx-3">
                          <div class="form-group col-lg-12">
                            <div class="form-label-group">
                              <label for="userName">邮箱</label>
                              <a href="#" class="fs-7 fw-medium">忘记用户名？</a>
                            </div>
                            <input
                              class="form-control"
                              placeholder="恢复邮箱"
                              value=""
                              type="email"
                            />
                          </div>
                        </div>
                        <a href="#" class="btn btn-primary btn-uppercase btn-block"
                          >发送验证码</a
                        >
                        <p class="p-xs mt-2 text-center">
                          未收到验证码？ <a href="#"><u>重新发送</u></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /Row -->
      </div>
      <!-- /Container -->
    </div>
    <!-- /Page Body -->

    <!-- Page Footer -->
    <div class="hk-footer border-0">
      <footer class="container-xxl footer">
        <div class="row">
          <div class="col-xl-8 text-center">
            <p class="footer-text pb-0">
              <span class="copy-text">caoba © 2022 保留所有权利。</span>
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
    <!-- / Page Footer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>
