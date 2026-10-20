<template>
  <div class="hk-pg-wrapper py-0">
    <div class="hk-pg-body py-0">
      <!-- Container -->
      <div class="container-fluid">
        <!-- Row -->
        <div class="row auth-split">
          <div class="col-xl-5 col-lg-6 col-md-7 position-relative mx-auto">
            <div class="auth-content flex-column pt-8 pb-md-8 pb-13">
              <div class="text-center mb-7">
                <router-link class="navbar-brand me-0" to="/">
                  <img
                    class="brand-img d-inline-block"
                    src="@/assets/img/logo-light.png"
                    alt="brand"
                  />
                </router-link>
              </div>
              <form class="w-100">
                <div class="row">
                  <div class="col-xl-7 col-sm-10 mx-auto">
                    <div class="text-center mb-4">
                      <h4>登录您的账户</h4>
                      <p>
                        这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。
                      </p>
                    </div>
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
                          <span class="input-affix-wrapper affix-wth-text">
                            <input
                              class="form-control"
                              placeholder="请输入密码"
                              v-model="password"
                              :type="showPassword ? 'text' : 'password'"
                            />
                            <a
                              href="#"
                              @click.prevent="show"
                              class="input-suffix text-primary text-uppercase fs-8 fw-medium"
                            >
                              <span v-if="showPassword">隐藏</span>
                              <span v-else>显示</span>
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
                    <button type="button" @click.prevent="handleLogin" class="btn btn-primary btn-uppercase btn-block"
                      >登录</button
                    >
                    <p class="p-xs mt-2 text-center">
                      caoba 新用户？ <a href="#"><u>创建新账户</u></a>
                    </p>
                    <a href="#" class="d-block extr-link text-center mt-4">
                      <span class="feather-icon">
                        <feather-icon name="external-link"></feather-icon>
                      </span>
                      <u class="text-muted">向我们的帮助论坛发送反馈</u></a
                    >
                  </div>
                </div>
              </form>
            </div>
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
          <div
            class="col-xl-7 col-lg-6 col-md-5 col-sm-10 d-md-block d-none position-relative bg-primary-light-5"
          >
            <div class="auth-content flex-column text-center py-8">
              <div class="row">
                <div class="col-xxl-7 col-xl-8 col-lg-11 mx-auto">
                  <h2 class="mb-4">认识全新 Pro caoba 2.0</h2>
                  <p>
                    这里有许多可用的 Lorem Ipsum 段落变体，以某种形式，通过注入方式呈现。
                  </p>
                  <button class="btn btn-flush-primary btn-uppercase mt-2">
                    开始导览
                  </button>
                </div>
              </div>
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
          </div>
        </div>
        <!-- /Row -->
      </div>
      <!-- /Container -->
    </div>
    <!-- /Page Body -->
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import Swal from 'sweetalert2';

export default {
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
        this.$router.push('/dashboard');
      } catch (error) {
        Swal.fire({ icon: 'error', title: '错误', text: error.message });
      }
    },
  },
};
</script>
