<template>
  <BContainer fluid="xxl">
    <!-- Page Body -->
    <div class="hk-pg-body">
      <BRow>
        <BCol xl="7" lg="6" class="d-lg-block d-none">
          <div class="auth-content py-md-0 py-8">
            <BRow>
              <BCol xl="12" class="text-center">
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
              </BCol>
            </BRow>
          </div>
        </BCol>
        <BCol xl="5" lg="6" md="7" sm="10">
          <div class="auth-content py-md-0 py-8">
            <div class="w-100">
              <BRow>
                <BCol xxl="9" xl="8" lg="11">
                  <h1 class="display-4 fw-bold mb-2">404</h1>
                  <p class="p-lg">
                    抱歉，找不到请求的页面。请尝试使用其他名称查找。
                  </p>
                  <BButton variant="primary" to="/" class="mt-4"> 返回应用 </BButton>
                </BCol>
              </BRow>
            </div>
          </div>
        </BCol>
      </BRow>
    </div>
    <!-- /Page Body -->
  </BContainer>
</template>