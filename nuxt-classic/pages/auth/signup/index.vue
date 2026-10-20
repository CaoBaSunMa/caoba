<template>
  <div class="hk-pg-wrapper py-0">
    <div class="hk-pg-body py-0">
      <!-- Container -->
      <BContainer fluid>
        <!-- Row -->
        <BRow class="auth-split">
          <BCol
            xl="5"
            lg="6"
            md="5"
            class="d-md-block d-none bg-primary-dark-3 bg-opacity-85 position-relative"
          >
            <img class="bg-img" src="@/assets/img/signup-bg.jpg" alt="bg-img" />
            <div class="auth-content py-8">
              <BRow>
                <BCol xxl="8" class="mx-auto">
                  <div class="text-center">
                    <h3 class="text-white mb-2">
                      为您下一个 Web 项目准备的高质量 Bootstrap 模板。
                    </h3>
                    <p class="text-white">立即开始您的 <u>14 天免费</u> 试用。</p>
                  </div>
                  <ul class="list-icon text-white mt-4">
                    <li class="mb-1">
                      <p>
                        <i class="ri-check-fill"></i>
                        <span
                          >这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。</span
                        >
                      </p>
                    </li>
                    <li class="mb-1">
                      <p>
                        <i class="ri-check-fill"></i>
                        <span
                          >这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。</span
                        >
                      </p>
                    </li>
                  </ul>
                  <BRow gutter-x="3" class="mt-7">
                    <BCol lg="6">
                      <BCard no-body class="card-shadow">
                        <img
                          class="card-img-top"
                          src="@/assets/img/slide1.jpg"
                          alt="Card image cap"
                        />
                        <BCardBody>
                          <h5 class="card-title text-uppercase">帮助中心</h5>
                          <p class="card-text">
                            这是一张更宽的卡片，附有辅助文本。
                          </p>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol lg="6">
                      <BCard no-body class="card-shadow">
                        <img
                          class="card-img-top"
                          src="@/assets/img/slide2.jpg"
                          alt="Card image cap"
                        />
                        <BCardBody>
                          <h5 class="card-title text-uppercase">研究中心</h5>
                          <p class="card-text">
                            这是一张更宽的卡片，附有辅助文本。
                          </p>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </BCol>
              </BRow>
            </div>
            <p class="p-xs text-white credit-text opacity-55">
              所有插画均由
              <a href="https://icons8.com/ouch/" target="_blank" class="link-white"
                ><u>OUCH</u></a
              >
            </p>
          </BCol>
          <BCol xl="7" lg="6" md="7" sm="10" class="position-relative mx-auto">
            <div class="auth-content flex-column pt-8 pb-md-8 pb-13">
              <div class="text-center mb-7">
                <NuxtLink to="/" class="navbar-brand me-0">
                  <img
                    class="brand-img d-inline-block"
                    src="@/assets/img/logo-light.png"
                    alt="brand"
                  />
                </NuxtLink>
              </div>
              <BForm @submit.prevent class="w-100">
                <BRow>
                  <BCol xxl="5" xl="7" lg="10" class="mx-auto">
                    <h4 class="text-center mb-4">注册 caoba</h4>
                    <BButton variant="outline-dark" class="btn-rounded btn-block mb-3">
                      <span>
                        <span class="icon">
                          <font-awesome-icon icon="fab fa-google" />
                        </span>
                        <span>使用 Gmail 注册</span>
                      </span>
                    </BButton>
                    <BButton
                      class="btn btn-social btn-social-facebook btn-rounded btn-block"
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
                        <BFormGroup label="用户名" label-for="usr_name" class="mb-3">
                          <BFormInput
                            id="usr_name"
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
                        <BFormGroup label="密码" label-for="password" class="mb-3">
                          <div class="input-group password-check">
                            <span class="input-affix-wrapper affix-wth-text">
                              <BFormInput
                                id="password"
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

                    <NuxtLink
                      to="/auth/login"
                      class="btn btn-primary btn-rounded btn-uppercase btn-block"
                    >
                      创建账户
                    </NuxtLink>
                    <p class="p-xs mt-2 text-center">
                      已有账号？ <a href="#"><u>登录</u></a>
                    </p>
                  </BCol>
                </BRow>
              </BForm>
            </div>
            <!-- Page Footer -->
            <auth-footer />
            <!-- / Page Footer -->
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
import AuthFooter from "~/components/auth/AuthFooter.vue";
//icons

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