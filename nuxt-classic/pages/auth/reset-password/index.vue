<template>
  <div class="hk-pg-wrapper pt-0 pb-xl-0 pb-5">
    <div class="hk-pg-body pt-0 pb-xl-0">
      <!-- Container -->
      <BContainer fluid="xxl">
        <!-- Row -->
        <BRow>
          <BCol sm="10" class="position-relative mx-auto">
            <div class="auth-content py-8">
              <BForm @submit.prevent class="w-100">
                <BRow>
                  <BCol lg="5" md="7" sm="10" class="mx-auto">
                    <div class="text-center mb-7">
                      <NuxtLink to="/" class="navbar-brand me-0">
                        <img
                          class="brand-img d-inline-block"
                          src="@/assets/img/logo-light.png"
                          alt="brand"
                        />
                      </NuxtLink>
                    </div>
                    <BCard no-body class="card-flush">
                      <BCardBody class="text-center">
                        <h4>重置您的密码</h4>
                        <p class="mb-4">
                          别担心，我们会向您的恢复邮箱发送 6 位验证码，用于重置您的密码。
                        </p>
                        <BRow gutter-x="3">
                          <BCol lg="12"></BCol>
                          <BFormGroup class="mb-3">
                            <div class="form-label-group">
                              <label for="userName">邮箱</label>
                              <a href="#" class="fs-7 fw-medium">忘记用户名？</a>
                            </div>
                            <BFormInput placeholder="恢复邮箱" type="email" />
                          </BFormGroup>
                        </BRow>
                        <BButton
                          variant="primary"
                          href="#"
                          class="btn-uppercase btn-block"
                        >
                          发送验证码
                        </BButton>
                        <p class="p-xs mt-2 text-center">
                          未收到验证码？ <a href="#"><u>重新发送</u></a>
                        </p>
                      </BCardBody>
                    </BCard>
                  </BCol>
                </BRow>
              </BForm>
            </div>
          </BCol>
        </BRow>
        <!-- /Row -->
      </BContainer>
      <!-- /Container -->
    </div>
    <!-- /Page Body -->

    <!-- Page Footer -->
    <div class="hk-footer border-0">
      <BContainer fluid="xxl" tag="footer" class="footer">
        <BRow>
          <BCol xl="8" class="text-center">
            <p class="footer-text pb-0">
              <span class="copy-text"
                >caoba © {{ new Date().getFullYear() }} 保留所有权利。</span
              >
              <a href="#" class="" target="_blank">隐私政策</a
              ><span class="footer-link-sep">|</span
              ><a href="#" class="" target="_blank">条款与条件</a
              ><span class="footer-link-sep">|</span
              ><a href="#" class="" target="_blank">系统状态</a>
            </p>
          </BCol>
        </BRow>
      </BContainer>
    </div>
    <!-- / Page Footer -->
  </div>
</template>

<script setup>
//auth layout
definePageMeta({
  layout: "auth",
});
</script>