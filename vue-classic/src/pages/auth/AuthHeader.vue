<template>
  <nav class="hk-navbar navbar navbar-expand-xl navbar-light fixed-top">
    <div class="container-xxl">
      <!-- Start Nav -->
      <div class="nav-start-wrap">
        <router-link class="navbar-brand" to="/">
          <img
            class="brand-img d-inline-block"
            src="@/assets/img/logo-light.png"
            alt="brand"
          />
        </router-link>
      </div>
      <!-- /Start Nav -->

      <!-- End Nav -->
      <div class="nav-end-wrap">
        <ul v-if="signInRoute" class="navbar-nav flex-row">
          <li class="nav-item nav-link py-0">
            <button class="btn btn-sm btn-outline-light">
              <span>
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="help-circle"></feather-icon>
                  </span>
                </span>
                <span>获取帮助</span>
              </span>
            </button>
          </li>
        </ul>
        <ul v-if="signupRoute" class="navbar-nav flex-row">
          <li class="nav-item nav-link py-0">
            <a href="#" class="btn btn-primary">帮助</a>
          </li>
          <li class="nav-item nav-link py-0">
            <router-link to="/auth/login/simple" class="btn btn-outline-light"
              >登录</router-link
            >
          </li>
        </ul>
      </div>
      <!-- /End Nav -->
    </div>
  </nav>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "AuthHeader",
  setup() {
    const route = useRoute();
    const pathName = route.path;
    const signInRoute = pathName.match("/auth/login");
    const signupRoute = pathName.match("/auth/signup");
    return { signInRoute, signupRoute };
  },
};
</script>
