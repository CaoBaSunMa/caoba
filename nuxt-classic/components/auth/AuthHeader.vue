<template>
  <nav class="hk-navbar navbar navbar-expand-xl navbar-light fixed-top">
    <BContainer fluid="xxl">
      <!-- Start Nav -->
      <div class="nav-start-wrap">
        <NuxtLink class="navbar-brand" to="/">
          <img
            class="brand-img d-inline-block"
            src="@/assets/img/logo-light.png"
            alt="brand"
          />
        </NuxtLink>
      </div>
      <!-- /Start Nav -->

      <!-- End Nav -->
      <div class="nav-end-wrap">
        <ul v-if="signInRoute" class="navbar-nav flex-row">
          <li class="nav-item nav-link py-0">
            <BButton variant="outline-light" size="sm">
              <span>
                <span class="icon">
                  <feather-icon name="help-circle"></feather-icon>
                </span>
                <span>获取帮助</span>
              </span>
            </BButton>
          </li>
        </ul>
        <ul v-if="signupRoute" class="navbar-nav flex-row">
          <li class="nav-item nav-link py-0">
            <a href="#" class="btn btn-primary">帮助</a>
          </li>
          <li class="nav-item nav-link py-0">
            <BButton variant="outline-light" to="/auth/login/simple"> 登录 </BButton>
          </li>
        </ul>
      </div>
      <!-- /End Nav -->
    </BContainer>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const pathName = route.path;
const signInRoute = pathName.match("/auth/login");
const signupRoute = pathName.match("/auth/signup");
</script>