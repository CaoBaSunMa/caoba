<template>
  <div class="card card-border mb-0 h-100">
    <div class="card-header card-header-action">
      <h6>受众概览</h6>
      <div class="card-action-wrap">
        <div
          class="btn-group d-lg-flex d-none"
          role="group"
          aria-label="基本轮廓按钮示例"
        >
          <button type="button" class="btn btn-outline-light active">全部</button>
          <button type="button" class="btn btn-outline-light">会话</button>
          <button type="button" class="btn btn-outline-light">来源</button>
          <button type="button" class="btn btn-outline-light">推荐</button>
        </div>
        <select class="form-select d-lg-none d-flex">
          <option selected="" value="1">全部</option>
          <option value="2">会话</option>
          <option value="3">来源</option>
          <option value="4">推荐</option>
        </select>
      </div>
    </div>
    <div class="card-body">
      <!-- Chart -->
      <AudienceOverviewChart />
      <!-- /Chart -->
      <div class="separator-full mt-5"></div>
      <div class="flex-grow-1 ms-lg-3">
        <div class="row">
          <div class="col-xxl-3 col-sm-6 mb-xxl-0 mb-3">
            <span class="d-block fw-medium fs-7">用户数</span>
            <div class="d-flex align-items-center">
              <span class="d-block fs-4 fw-medium text-dark mb-0">8.8k</span>
              <span class="badge badge-sm badge-soft-success ms-1">
                <i class="bi bi-arrow-up"></i> 7.5%
              </span>
            </div>
          </div>
          <div class="col-xxl-3 col-sm-6 mb-xxl-0 mb-3">
            <span class="d-block fw-medium fs-7">会话数</span>
            <div class="d-flex align-items-center">
              <span class="d-block fs-4 fw-medium text-dark mb-0">18.2k</span>
              <span class="badge badge-sm badge-soft-success ms-1">
                <i class="bi bi-arrow-up"></i> 7.2%
              </span>
            </div>
          </div>
          <div class="col-xxl-3 col-sm-6 mb-xxl-0 mb-3">
            <span class="d-block fw-medium fs-7">跳出率</span>
            <div class="d-flex align-items-center">
              <span class="d-block fs-4 fw-medium text-dark mb-0">46.2%</span>
              <span class="badge badge-sm badge-soft-danger ms-1">
                <i class="bi bi-arrow-down"></i> 0.2%
              </span>
            </div>
          </div>
          <div class="col-xxl-3 col-sm-6">
            <span class="d-block fw-medium fs-7">会话时长</span>
            <div class="d-flex align-items-center">
              <span class="d-block fs-4 fw-medium text-dark mb-0">4分24秒</span>
              <span class="badge badge-sm badge-soft-success ms-1">
                <i class="bi bi-arrow-up"></i> 10.8%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AudienceOverviewChart from "./chart-data/AudienceOverviewChart.vue";

export default {
  components: {
    AudienceOverviewChart,
  },
};
</script>
