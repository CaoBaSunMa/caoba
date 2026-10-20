<template>
  <div class="hk-pg-wrapper py-0">
    <div class="hk-pg-body py-0">
      <!-- Container -->
      <BContainer fluid>
        <!-- Row -->
        <BRow class="auth-split">
          <BCol xl="5" lg="6" md="7" class="position-relative mx-auto">
            <div class="auth-content flex-column pt-8 pb-md-8 pb-13">
              <div class="text-center mb-7">
                <NuxtLink class="navbar-brand me-0" to="/">
                  <img
                    class="brand-img d-inline-block"
                    src="@/assets/img/logo-light.png"
                    alt="brand"
                  />
                </NuxtLink>
              </div>
              <BForm @submit.prevent="login" class="w-100">
                <BRow>
                  <BCol xl="7" sm="10" class="mx-auto">
                    <div class="text-center mb-4">
                      <h4>登录您的账户</h4>
                      <p>
                        这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。
                      </p>
                    </div>
                    <BRow gutter-x="3">
                      <BCol lg="12">
                        <BFormGroup label="用户名" label-for="user_name" class="mb-3">
                          <BFormInput
                            id="user_name"
                            placeholder="请输入用户名或邮箱"
                            v-model="email"
                            type="text"
                          />
                        </BFormGroup>
                      </BCol>
                      <BCol lg="12">
                        <BFormGroup class="mb-3">
                          <div class="form-label-group">
                            <label>密码</label>
                            <a href="#" class="fs-7 fw-medium">忘记密码？</a>
                          </div>
                          <div class="input-group password-check">
                            <span class="input-affix-wrapper affix-wth-text">
                              <BFormInput
                                id="pass"
                                placeholder="请输入密码"
                                v-model="password"
                                :type="showPassword ? 'text' : 'password'"
                              />
                              <a
                                href="#"
                                @click.prevent="toggleShowPassword"
                                class="input-suffix text-primary text-uppercase fs-8 fw-medium"
                              >
                                <span v-if="showPassword">隐藏</span>
                                <span v-else>显示</span>
                              </a>
                            </span>
                          </div>
                        </BFormGroup>
                      </BCol>
                    </BRow>
                    <div class="d-flex justify-content-center">
                      <BFormCheckbox size="sm" class="mb-3" :model-value="true">
                        <span class="text-muted fs-7"> 保持登录 </span>
                      </BFormCheckbox>
                    </div>
                    <NuxtLink to="/" class="btn btn-primary btn-uppercase btn-block">
                      登录
                    </NuxtLink>

                    <p class="p-xs mt-2 text-center">
                      caoba 新用户？ <a href="#"><u>创建新账户</u></a>
                    </p>
                    <a href="#" class="d-block extr-link text-center mt-4">
                      <span class="feather-icon">
                        <feather-icon name="external-link"></feather-icon>
                      </span>
                      <u class="text-muted">向我们的帮助论坛发送反馈</u></a
                    >
                  </BCol>
                </BRow>
              </BForm>
            </div>
            <!-- Page Footer -->
            <div class="hk-footer border-0">
              <footer class="container-xxl footer">
                <BRow>
                  <BCol xl="8" class="text-center">
                    <p class="footer-text pb-0">
                      <span class="copy-text">caoba © 2022 保留所有权利。</span>
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
            <!-- / Page Footer -->
          </BCol>
          <BCol
            xl="7"
            lg="6"
            md="5"
            sm="10"
            class="d-md-block d-none position-relative bg-primary-light-5"
          >
            <div class="auth-content flex-column text-center py-8">
              <BRow>
                <BCol xxl="7" xl="8" lg="11" class="mx-auto">
                  <h2 class="mb-4">认识全新 Pro caoba 2.0</h2>
                  <p>
                    这里有许多可用的 Lorem Ipsum 段落变体，以某种形式，通过注入方式呈现。
                  </p>
                  <BButton variant="flush-primary" class="btn-uppercase mt-2">
                    开始导览
                  </BButton>
                </BCol>
              </BRow>
              <img
                src="@/assets/img/macaroni-logged-out.png"
                class="img-fluid w-sm-50 mt-7"
                alt="login"
              />
            </div>
            <p class="p-xs credit-text opacity-55">
              所有插画均由
              <a href="https://icons8.com/ouch/" target="_blank" class="text-light"
                ><u>Icons8</u></a
              >
            </p>
          </BCol>
        </BRow>
        <!-- /Row -->
      </BContainer>
      <!-- /Container -->
    </div>
    <!-- /Page Body -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

// Reactive state
const email = ref("");
const password = ref("");
const showPassword = ref(false);

// Methods
function toggleShowPassword() {
  showPassword.value = !showPassword.value;
}
</script>