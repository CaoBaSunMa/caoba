<template>
  <BCard no-body class="card-border mb-0 h-100">
    <template #header class="card-header-action">
      <h6>受众概览</h6>
      <div class="card-action-wrap">
        <BButtonGroup class="d-lg-flex d-none" aria-label="基本轮廓按钮示例">
          <BButton variant="outline-light" active>全部</BButton>
          <BButton variant="outline-light">会话</BButton>
          <BButton variant="outline-light">来源</BButton>
          <BButton variant="outline-light">推荐</BButton>
        </BButtonGroup>
        <BFormSelect class="d-lg-none d-flex" model-value="1">
          <BFormSelectOption value="1">全部</BFormSelectOption>
          <BFormSelectOption value="2">会话</BFormSelectOption>
          <BFormSelectOption value="3">来源</BFormSelectOption>
          <BFormSelectOption value="4">推荐</BFormSelectOption>
        </BFormSelect>
      </div>
    </template>
    <BCardBody>
      <!-- Chart -->
      <AudienceOverviewChart />
      <!-- /Chart -->
      <div class="separator-full mt-5"></div>
      <div class="flex-grow-1 ms-lg-3">
        <BRow>
          <BCol xxl="3" sm="6" class="mb-xxl-0 mb-3">
            <span class="d-block fw-medium fs-7">用户数</span>
            <div class="d-flex align-items-center">
              <span class="d-block fs-4 fw-medium text-dark mb-0">8.8k</span>
              <HkBadge variant="success" class="ms-1" soft sm>
                <i class="bi bi-arrow-up"></i> 7.5%
              </HkBadge>
            </div>
          </BCol>
          <BCol xxl="3" sm="6" class="mb-xxl-0 mb-3">
            <span class="d-block fw-medium fs-7">会话数</span>
            <div class="d-flex align-items-center">
              <span class="d-block fs-4 fw-medium text-dark mb-0">18.2k</span>
              <HkBadge variant="success" class="ms-1" soft sm>
                <i class="bi bi-arrow-up"></i> 7.2%
              </HkBadge>
            </div>
          </BCol>
          <BCol xxl="3" sm="6" class="mb-xxl-0 mb-3">
            <span class="d-block fw-medium fs-7">跳出率</span>
            <div class="d-flex align-items-center">
              <span class="d-block fs-4 fw-medium text-dark mb-0">46.2%</span>
              <HkBadge variant="danger" class="ms-1" soft sm>
                <i class="bi bi-arrow-down"></i> 0.2%
              </HkBadge>
            </div>
          </BCol>
          <BCol xxl="3" sm="6">
            <span class="d-block fw-medium fs-7">会话时长</span>
            <div class="d-flex align-items-center">
              <span class="d-block fs-4 fw-medium text-dark mb-0">4分24秒</span>
              <HkBadge variant="success" class="ms-1" soft sm>
                <i class="bi bi-arrow-up"></i> 10.8%
              </HkBadge>
            </div>
          </BCol>
        </BRow>
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup>
import AudienceOverviewChart from "./chart-data/AudienceOverviewChart.vue";
</script>
