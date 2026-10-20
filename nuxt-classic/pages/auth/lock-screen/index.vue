<template>
  <div class="hk-pg-wrapper pt-0 pb-xl-0 pb-5">
    <div class="hk-pg-body pt-0 pb-xl-0">
      <!-- Container -->
      <BContainer fluid="xxl">
        <!-- Row -->
        <BRow>
          <BCol sm="10" class="position-relative mx-auto">
            <div class="auth-content py-8">
              <BForm @submit.prevent="unlock" class="w-100">
                <BRow>
                  <BCol lg="4" md="6" class="mx-auto">
                    <BCard no-body class="card-flush bg-transparent">
                      <BCardBody class="text-center">
                        <div
                          class="avatar avatar-xl avatar-rounded position-relative mb-3"
                        >
                          <img :src="avatar12" alt="user" class="avatar-img" />
                          <div
                            class="badge-icon badge-icon-xxs text-primary position-bottom-end-overflow-1"
                          >
                            <div class="badge-icon-wrap">
                              <i class="ri-lock-fill"></i>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                              <g
                                data-name="Ellipse 302"
                                transform="translate(8 8)"
                                stroke-width="3"
                              >
                                <circle
                                  cx="55.5"
                                  cy="55.5"
                                  r="55.5"
                                  stroke="currentColor"
                                ></circle>
                                <circle
                                  cx="55.5"
                                  cy="55.5"
                                  r="59.5"
                                  fill="currentColor"
                                ></circle>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <h4 class="text-white">Jim Carry</h4>
                        <p class="p-sm mb-4 text-white opacity-55">
                          admistrator@caoba.com
                        </p>
                        <BRow gutter-x="3">
                          <BCol lg="12">
                            <BFormGroup>
                              <span class="input-affix-wrapper">
                                <BFormInput
                                  placeholder="请输入密码"
                                  type="password"
                                  v-model="password"
                                />
                                <a
                                  href="#"
                                  class="input-suffix text-muted"
                                  @click.prevent="unlock"
                                >
                                  <span class="feather-icon">
                                    <feather-icon
                                      class="form-icon"
                                      name="arrow-right"
                                    ></feather-icon>
                                  </span>
                                </a>
                              </span>
                            </BFormGroup>
                          </BCol>
                        </BRow>
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
    <div class="hk-footer border-0 bg-transparent">
      <BContainer fluid="xxl" tag="footer" class="footer">
        <BRow>
          <BCol xl="8" class="text-center">
            <p class="footer-text pb-0">
              <span class="copy-text text-white opacity-55">
                caoba © {{ new Date().getFullYear() }} 保留所有权利。
              </span>
              <a href="#" class="text-white opacity-55" target="_blank">隐私政策</a
              ><span class="footer-link-sep text-white opacity-55">|</span
              ><a href="#" class="text-white opacity-55" target="_blank">条款与条件</a
              ><span class="footer-link-sep text-white opacity-55">|</span
              ><a href="#" class="text-white opacity-55" target="_blank">系统状态</a>
            </p>
          </BCol>
        </BRow>
      </BContainer>
    </div>
    <!-- / Page Footer -->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
//image
import avatar12 from "~/assets/img/avatar12.jpg";

definePageMeta({
  layout: "auth",
});

// Reactive state
const password = ref("");

// Router instance
const router = useRouter();

// Methods
function unlock() {
  if (password.value !== "") {
    // Redirect to the dashboard
    router.push("/");
  } else {
    // Show alert when the password is empty
    alert("密码不能为空。");
  }
}
</script>