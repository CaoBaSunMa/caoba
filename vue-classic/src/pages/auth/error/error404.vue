<template>
  <div class="container-xxl">
    <!-- Page Body -->
    <div class="hk-pg-body">
      <div class="row">
        <div class="col-xl-7 col-lg-6 d-lg-block d-none">
          <div class="auth-content py-md-0 py-8">
            <div class="row">
              <div class="col-xl-12 text-center">
                <img
                  src="@/assets/img/macaroni-fatal-error.png"
                  class="img-fluid w-sm-80 w-50"
                  alt="login"
                />
                <p class="p-xs mt-5 text-light">
                  插画由
                  <a href="https://icons8.com/ouch/" target="_blank" class="text-light"
                    ><u>Icons8</u></a
                  >
                  提供
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-md-7 col-sm-10">
          <div class="auth-content py-md-0 py-8">
            <div class="w-100">
              <div class="row">
                <div class="col-xxl-9 col-xl-8 col-lg-11">
                  <h1 class="display-4 fw-bold mb-2">404</h1>
                  <p class="p-lg">
                    抱歉，找不到请求的页面。请尝试使用其他名称查找。
                  </p>
                  <router-link to="/" class="btn btn-primary mt-4"
                    >返回应用</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Body -->
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>
