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
                      <router-link class="navbar-brand me-0" to="/">
                        <img
                          class="brand-img d-inline-block"
                          src="@/assets/img/logo-light.png"
                          alt="brand"
                        />
                      </router-link>
                    </div>
                    <div class="card card-lg card-border">
                      <div class="card-body">
                        <h4 class="mb-4 text-center">登录您的账户</h4>
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
                            <label
                              class="form-check-label text-muted fs-7"
                              for="logged_in"
                              >保持登录</label
                            >
                          </div>
                        </div>
                        <button
                          type="button"
                          @click.prevent="handleLogin"
                          class="btn btn-primary btn-uppercase btn-block"
                          >登录</button
                        >
                        <p class="p-xs mt-2 text-center">
                          caoba 新用户？
                          <a href="#">
                            <u>创建新账户</u>
                          </a>
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
    <auth-footer />
    <!-- / Page Footer -->
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

import Swal from 'sweetalert2';
import AuthFooter from "../AuthFooter.vue";

export default {
  components: {
    AuthFooter,
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
    async handleLogin() {
      const authStore = useAuthStore();
      
      try {
        await authStore.login(this.email, this.password);
        Swal.fire({ icon: 'success', title: '成功', timer: 1500, showConfirmButton: false });
        this..push('/dashboard');
      } catch (error) {
        Swal.fire({ icon: 'error', title: '错误', text: error.message });
      }
    },
  },
};
</script>
