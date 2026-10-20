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
                  <BCol xxl="5" xl="7" lg="8" sm="10" class="mx-auto">
                    <div class="text-center mb-7">
                      <NuxtLink to="/" class="navbar-brand me-0">
                        <img
                          class="brand-img d-inline-block"
                          src="@/assets/img/logo-light.png"
                          alt="brand"
                        />
                      </NuxtLink>
                    </div>
                    <BCard no-body class="card-border">
                      <BCardBody>
                        <h4 class="text-center mb-0">注册 caoba</h4>
                        <p class="p-xs mt-2 mb-4 text-center">
                          已有账号？ <a href="#"><u>登录</u></a>
                        </p>
                        <BButton
                          variant="outline-dark"
                          class="btn-rounded btn-block mb-3"
                        >
                          <span>
                            <span class="icon">
                              <font-awesome-icon icon="fab fa-google" />
                            </span>
                            <span>使用 Gmail 注册</span>
                          </span>
                        </BButton>
                        <BButton
                          variant="social"
                          class="btn-social-facebook btn-rounded btn-block"
                        >
                          <span>
                            <span class="icon">
                              <font-awesome-icon icon="fab fa-facebook" />
                            </span>
                            <span>使用 Facebook 注册</span>
                          </span>
                        </BButton>
                        <div class="title-sm title-wth-divider divider-center my-4">
                          <span>或</span>
                        </div>
                        <BRow gutter-x="3">
                          <BCol lg="6">
                            <BFormGroup label="姓名" label-for="name" class="mb-3">
                              <BFormInput
                                id="name"
                                placeholder="请输入您的姓名"
                                type="text"
                              />
                            </BFormGroup>
                          </BCol>
                          <BCol lg="6">
                            <BFormGroup
                              label="用户名"
                              label-for="username"
                              class="mb-3"
                            >
                              <BFormInput
                                id="username"
                                placeholder="请输入用户名"
                                type="text"
                              />
                            </BFormGroup>
                          </BCol>

                          <BCol lg="12">
                            <BFormGroup label="邮箱" label-for="email" class="mb-3">
                              <BFormInput
                                id="email"
                                placeholder="请输入您的邮箱"
                                type="text"
                              />
                            </BFormGroup>
                          </BCol>

                          <BCol lg="12">
                            <BFormGroup class="mb-3">
                              <label class="form-label">密码</label>
                              <div class="input-group password-check">
                                <span class="input-affix-wrapper affix-wth-text">
                                  <BFormInput
                                    placeholder="至少 6 个字符"
                                    :type="showPassword ? 'text' : 'password'"
                                  />
                                  <a
                                    href="#"
                                    class="input-suffix text-primary text-uppercase fs-8 fw-medium"
                                    @click.prevent="toggleShowPassword"
                                  >
                                    <span v-if="showPassword">隐藏</span>
                                    <span v-else>显示</span>
                                  </a>
                                </span>
                              </div>
                            </BFormGroup>
                          </BCol>
                        </BRow>
                        <BFormCheckbox :model-value="true" class="mb-3">
                          <span class="text-muted fs-8">
                            创建账户即表示您已阅读并同意我们的 <a href="#">使用条款</a> 和
                            <a href="#">隐私政策</a>。我们可能会通过默认的
                            <a href="#">通知设置</a>向您告知最新更新。
                          </span>
                        </BFormCheckbox>
                        <BButton
                          to="/"
                          variant="primary"
                          class="btn-rounded btn-uppercase btn-block"
                        >
                          创建账户
                        </BButton>
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
    <AuthFooter />
    <!-- / Page Footer -->
  </div>
</template>

<script setup>
import AuthFooter from "~/components/auth/AuthFooter.vue";

definePageMeta({
  layout: "auth",
});

// Reactive state
const showPassword = ref(false);

// Methods
function toggleShowPassword() {
  showPassword.value = !showPassword.value;
}
</script>