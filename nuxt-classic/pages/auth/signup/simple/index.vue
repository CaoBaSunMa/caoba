<template>
  <AuthHeader />
  <div class="hk-pg-wrapper">
    <!-- Page Body -->
    <div class="hk-pg-body">
      <!-- Container -->
      <BContainer fluid="xxl">
        <!-- Row -->
        <BRow>
          <BCol xl="7" lg="6" class="d-lg-block d-none v-separator">
            <div class="auth-content py-md-0 py-8">
              <BRow>
                <BCol xxl="9" xl="8" lg="11" class="mx-auto">
                  <div class="text-center">
                    <h3 class="mb-2">
                      为您下一个 Web 项目准备的高质量 Bootstrap 模板。
                    </h3>
                    <p>立即开始您的 <mark>14 天免费</mark> 试用。</p>
                  </div>
                  <ul class="list-icon mt-4">
                    <li class="mb-1">
                      <p>
                        <i class="ri-check-fill text-success"></i>
                        <span>
                          这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。
                        </span>
                      </p>
                    </li>
                    <li class="mb-1">
                      <p>
                        <i class="ri-check-fill text-success"></i
                        ><span
                          >这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。</span
                        >
                      </p>
                    </li>
                  </ul>
                  <BRow gutter-x="3" class="mt-7">
                    <BCol lg="6">
                      <BCard no-body class="card-shadow">
                        <BCardImg :src="slide3" alt="Card image cap" />
                        <BCardBody>
                          <h5 class="card-title text-uppercase">帮助中心</h5>
                          <BCardText>
                            这是一张更宽的卡片，附有辅助文本。
                          </BCardText>
                        </BCardBody>
                      </BCard>
                    </BCol>
                    <BCol lg="6">
                      <BCard no-body class="card-shadow">
                        <BCardImg :src="slide4" alt="Card image cap" />
                        <BCardBody>
                          <h5 class="card-title text-uppercase">研究中心</h5>
                          <BCardText>
                            这是一张更宽的卡片，附有辅助文本。
                          </BCardText>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                  <p class="mt-5 p-xs credit-text text-center text-light">
                    所有插画均由
                    <a href="https://icons8.com/ouch/" target="_blank" class="text-light"
                      ><u>OUCH</u></a
                    >
                  </p>
                </BCol>
              </BRow>
            </div>
          </BCol>
          <BCol xl="5" lg="6" md="7" sm="10" class="position-relative mx-auto">
            <div class="auth-content py-md-0 py-8">
              <BForm @submit.prevent class="w-100">
                <BRow>
                  <BCol lg="10" class="mx-auto">
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
                        <BFormGroup label="用户名" label-for="username" class="mb-3">
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

                    <BFormCheckbox size="sm" :model-value="true" class="mb-3">
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
                    <p class="p-xs mt-2 text-center">
                      已有账号？ <a href="#"><u>登录</u></a>
                    </p>
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
    <PageFooter />
    <!-- / Page Footer -->
  </div>
</template>

<script setup>
import AuthHeader from "~/components/auth/AuthHeader.vue";
import PageFooter from "~/layouts/Footer/PageFooter.vue";
//images
import slide3 from "@/assets/img/slide3.jpg";
import slide4 from "@/assets/img/slide4.jpg";

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