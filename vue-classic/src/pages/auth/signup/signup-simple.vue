<template>
  <AuthHeader />
  <div class="hk-pg-wrapper">
    <!-- Page Body -->
    <div class="hk-pg-body">
      <!-- Container -->
      <div class="container-xxl">
        <!-- Row -->
        <div class="row">
          <div class="col-xl-7 col-lg-6 d-lg-block d-none v-separator">
            <div class="auth-content py-md-0 py-8">
              <div class="row">
                <div class="col-xxl-9 col-xl-8 col-lg-11 mx-auto">
                  <div class="text-center">
                    <h3 class="mb-2">
                      为您下一个 Web 项目准备的高质量 Bootstrap 模板。
                    </h3>
                    <p>立即开始您的 <mark>14 天免费</mark> 试用。</p>
                  </div>
                  <ul class="list-icon mt-4">
                    <li class="mb-1">
                      <p>
                        <i class="ri-check-fill text-success"></i
                        ><span
                          >这里提供了多种不同形式的 Lorem Ipsum 段落文本，以某种形式，通过注入的幽默呈现。</span
                        >
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
                  <div class="row gx-3 mt-7">
                    <div class="col-lg-6">
                      <div class="card card-shadow">
                        <img
                          class="card-img-top"
                          src="@/assets/img/slide3.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h5 class="card-title text-uppercase">帮助中心</h5>
                          <p class="card-text">
                            这是一张更宽的卡片，附有辅助文本。
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="card card-shadow">
                        <img
                          class="card-img-top"
                          src="@/assets/img/slide4.jpg"
                          alt="Card image cap"
                        />
                        <div class="card-body">
                          <h5 class="card-title text-uppercase">研究中心</h5>
                          <p class="card-text">
                            这是一张更宽的卡片，附有辅助文本。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="mt-5 p-xs credit-text text-center text-light">
                    所有插画均由
                    <a href="https://icons8.com/ouch/" target="_blank" class="text-light"
                      ><u>OUCH</u></a
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
                    <h4 class="text-center mb-4">注册 caoba</h4>
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
                              class="input-suffix text-primary text- uppercase fs-8 fw-medium"
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
                    <p class="p-xs mt-2 text-center">
                      已有账号？ <a href="#"><u>登录</u></a>
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
import { useAuthStore } from '@/stores/auth';

import Swal from 'sweetalert2';
import AuthHeader from "@/pages/auth/AuthHeader.vue";
import PageFooter from "@/layout/Footer/PageFooter.vue";
//icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default {
  components: {
    PageFooter,
    AuthHeader,
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
