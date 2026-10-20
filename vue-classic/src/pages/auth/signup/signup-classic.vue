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
                  <div class="col-xxl-5 col-xl-7 col-lg-8 col-sm-10 mx-auto">
                    <div class="text-center mb-7">
                      <router-link to="/" class="navbar-brand me-0">
                        <img
                          class="brand-img d-inline-block"
                          src="@/assets/img/logo-light.png"
                          alt="brand"
                        />
                      </router-link>
                    </div>
                    <div class="card card-border">
                      <div class="card-body">
                        <h4 class="text-center mb-0">注册 caoba</h4>
                        <p class="p-xs mt-2 mb-4 text-center">
                          已有账号？ <a href="#"><u>登录</u></a>
                        </p>
                        <button
                          type="button"
                          class="btn btn-outline-dark btn-rounded btn-block mb-3"
                        >
                          <span>
                            <span class="icon">
                              <FontAwesomeIcon :icon="faGoogle" />
                            </span>
                            <span>使用 Gmail 注册</span>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn btn-social btn-social-facebook btn-rounded btn-block"
                        >
                          <span>
                            <span class="icon">
                              <FontAwesomeIcon :icon="faFacebook" />
                            </span>
                            <span>使用 Facebook 注册</span>
                          </span>
                        </button>
                        <div class="title-sm title-wth-divider divider-center my-4">
                          <span>或</span>
                        </div>
                        <div class="row gx-3">
                          <div class="form-group col-lg-6">
                            <label class="form-label">姓名</label>
                            <input
                              class="form-control"
                              placeholder="请输入您的姓名"
                              v-model="fullName"
                              type="text"
                            />
                          </div>
                          <div class="form-group col-lg-6">
                            <label class="form-label">用户名</label>
                            <input
                              class="form-control"
                              placeholder="请输入用户名"
                              v-model="username"
                              type="text"
                            />
                          </div>
                          <div class="form-group col-lg-12">
                            <label class="form-label">邮箱</label>
                            <input
                              class="form-control"
                              placeholder="请输入您的邮箱"
                              v-model="email"
                              type="text"
                            />
                          </div>
                          <div class="form-group col-lg-12">
                            <label class="form-label">密码</label>
                            <div class="input-group password-check">
                              <span class="input-affix-wrapper affix-wth-text">
                                <input
                                  class="form-control"
                                  placeholder="至少 6 个字符"
                                  v-model="password"
                                  :type="showPassword ? 'text' : 'password'"
                                />
                                <a
                                  href="#"
                                  class="input-suffix text-primary text-uppercase fs-8 fw-medium"
                                  @click.prevent="show"
                                >
                                  <span v-if="showPassword">隐藏</span>
                                  <span v-else>显示</span>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="form-check form-check-sm mb-3">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="logged_in"
                            checked
                          />
                          <label class="form-check-label text-muted fs-8" for="logged_in"
                            >创建账户即表示您已阅读并同意我们的 <a href="#">使用条款</a> 和
                            <a href="#">隐私政策</a>。我们可能会通过默认的
                            <a href="#">通知设置</a>向您告知最新更新。</label
                          >
                        </div>
                        <button
                          type="button"
                          @click.prevent="handleSignup"
                          class="btn btn-primary btn-rounded btn-uppercase btn-block"
                          >创建账户</button
                        >
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
    <AuthFooter />
    <!-- / Page Footer -->
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

import Swal from 'sweetalert2';
import AuthFooter from "../AuthFooter.vue";
//icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default {
  components: {
    AuthFooter,
    FontAwesomeIcon,
  },
  data() {
    return {
      fullName: "",
      username: "",
      email: "",
      password: "",
      showPassword: false,
      //icons
      faFacebook,
      faGoogle,
    };
  },
  methods: {
    show() {
      this.showPassword = !this.showPassword;
    },
    async handleSignup() {
      const authStore = useAuthStore();
      
      try {
        await authStore.register({
          username: this.username,
          email: this.email,
          password: this.password,
          fullName: this.fullName,
        });
        Swal.fire({ icon: 'success', title: '成功', timer: 1500, showConfirmButton: false });
        this..push('/dashboard');
      } catch (error) {
        Swal.fire({ icon: 'error', title: '错误', text: error.message });
      }
    },
  },
};
</script>
