<template>
  <AuthHeader />
  <div class="hk-pg-wrapper">
    <!-- Page Body -->
    <div class="hk-pg-body">
      <!-- Container -->
      <BContainer fluid="xxl">
        <!-- Row -->
        <BRow>
          <BCol xl="7" lg="6" class="d-lg-block d-none">
            <div class="auth-content py-md-0 py-8">
              <BRow>
                <BCol xl="12" class="text-center">
                  <img
                    src="@/assets/img/macaroni-delete-confirmaton.png"
                    class="img-fluid w-sm-70 w-50"
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
                    <h1 class="display-4 fw-bold mb-2">503</h1>
                    <p>
                      服务器暂时无法处理该请求。这可能是因为服务器过载或正在停机维护。
                    </p>
                    <BButton variant="primary" to="/" class="mt-4">
                      返回应用
                    </BButton>
                  </BCol>
                </BRow>
              </div>
            </div>
          </BCol>
        </BRow>
        <!-- /Row -->
      </BContainer>
      <!-- /Container -->
    </div>
    <!-- /Page Body -->

    <!-- Page Footer -->
    <PageFooter />
    <!-- / Page Footer -->
  </div>
</template>

<script setup>
import AuthHeader from "@/components/auth/AuthHeader.vue";
import PageFooter from "@/layouts/Footer/PageFooter.vue";

definePageMeta({
  layout: "auth",
});
</script>