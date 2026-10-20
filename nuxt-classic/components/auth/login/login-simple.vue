<template>
  <auth-header />
  <div class="hk-pg-wrapper">
    <!-- Page Body -->
    <div class="hk-pg-body">
      <!-- Container -->
      <div class="container-xxl">
        <!-- Row -->
        <div class="row">
          <div class="col-xl-7 col-lg-6 d-lg-block d-none v-separator separator-sm">
            <div class="auth-content py-md-0 py-8">
              <div class="row">
                <div class="col-xxl-9 col-xl-8 col-lg-11 text-center mx-auto">
                  <img
                    src="@/assets/img/macaroni-logged-out.png"
                    class="img-fluid w-sm-40 w-50 mb-3"
                    alt="login"
                  />
                  <h3 class="mb-2">开启节日优惠，立即升级 Premium</h3>
                  <p class="w-xxl-65 w-100 mx-auto">
                    使用促销代码 "caoba20"，高级会员计划可节省 20%
                  </p>
                  <a href="#" class="btn btn-sm btn-primary btn-uppercase mt-4"
                    >立即升级</a
                  >
                  <p class="p-xs mt-5 text-light">
                    所有插画均由
                    <a href="https://icons8.com/ouch/" target="_blank" class="text-light"
                      ><u>Icons8</u></a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 col-md-7 col-sm-10 position-relative mx-auto">
            <div class="auth-content py-md-0 py-8">
              <form class="w-100">
                <div class="row">
                  <div class="col-lg-10 mx-auto">
                    <h4 class="mb-4">登录您的账户</h4>
                    <div class="row gx-3">
                      <div class="form-group col-lg-12">
                        <div class="form-label-group">
                          <label>用户名</label>
                        </div>
                        <input
                          class="form-control"
                          placeholder="请输入用户名或邮箱"
                          v-model="email"
                          type="text"
                        />
                      </div>
                      <div class="form-group col-lg-12">
                        <div class="form-label-group">
                          <label>密码</label>
                          <a href="#" class="fs-7 fw-medium">忘记密码？</a>
                        </div>
                        <div class="input-group password-check">
                          <span class="input-affix-wrapper">
                            <input
                              class="form-control"
                              placeholder="请输入密码"
                              v-model="password"
                              :type="showPassword ? 'text' : 'password'"
                            />
                            <a
                              href="#"
                              class="input-suffix text-muted"
                              @click.prevent="show"
                            >
                              <span class="feather-icon">
                                <feather-icon
                                  v-if="showPassword"
                                  class="form-icon"
                                  name="eye-off"
                                ></feather-icon>
                                <feather-icon
                                  v-else
                                  class="form-icon"
                                  name="eye"
                                ></feather-icon>
                              </span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="form-check form-check-sm mb-3">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="logged_in"
                          checked
                        />
                        <label class="form-check-label text-muted fs-7" for="logged_in"
                          >保持登录</label
                        >
                      </div>
                    </div>
                    <router-link to="/" class="btn btn-primary btn-uppercase btn-block"
                      >登录</router-link
                    >
                    <p class="p-xs mt-2 text-center">
                      Jmapack 新用户？
                      <a href="#">
                        <u>创建新账户</u>
                      </a>
                    </p>
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
    <PageFooter />
    <!-- / Page Footer -->
  </div>
</template>

<script>
import AuthHeader from "~/components/auth/AuthHeader.vue";
import PageFooter from "@/layouts/Footer/PageFooter.vue";

export default {
  components: {
    PageFooter,
    AuthHeader,
  },
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },

  methods: {
    show() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>