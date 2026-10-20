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
                  <div class="col-lg-4 col-md-6 mx-auto">
                    <div class="card card-flush bg-transparent">
                      <div class="card-body text-center">
                        <div
                          class="avatar avatar-xl avatar-rounded position-relative mb-3"
                        >
                          <img
                            src="@/assets/img/avatar12.jpg"
                            alt="user"
                            class="avatar-img"
                          />
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
                        <div class="row gx-3">
                          <div class="form-group col-lg-12">
                            <span class="input-affix-wrapper">
                              <input
                                class="form-control"
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
                          </div>
                        </div>
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
    <div class="hk-footer border-0 bg-transparent">
      <footer class="container-xxl footer">
        <div class="row">
          <div class="col-xl-8 text-center">
            <p class="footer-text pb-0">
              <span class="copy-text text-white opacity-55"
                >caoba © {{ new Date().getFullYear() }} 保留所有权利。</span
              >
              <a href="#" class="text-white opacity-55" target="_blank">隐私政策</a
              ><span class="footer-link-sep text-white opacity-55">|</span
              ><a href="#" class="text-white opacity-55" target="_blank">条款与条件</a
              ><span class="footer-link-sep text-white opacity-55">|</span
              ><a href="#" class="text-white opacity-55" target="_blank">系统状态</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    <!-- / Page Footer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    unlock() {
      // Add your unlock logic here
      if (this.password !== "") {
        // Redirect to the dashboard
        this.$router.push("/");
      } else {
        // show alert when password is empty
        alert("密码不能为空。");
      }
    },
  },
};
</script>
