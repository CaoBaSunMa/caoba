<template>
  <BCard no-body class="card-border mb-0 h-100">
    <template #header class="card-header-action">
      <h6>活跃用户</h6>
      <div class="card-action-wrap">
        <button type="button" class="btn btn-outline-light">实时图表</button>
      </div>
    </template>
    <BCardBody>
      <BRow>
        <BCol md="8">
          <ActiveUserMap />
        </BCol>
        <BCol md="4">
          <div class="media align-items-center mb-3">
            <div class="media-head me-3">
              <div class="avatar avatar-xxs avatar-rounded">
                <img :src="UsFlag" alt="用户头像" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div class="progress-lb-wrap">
                <label class="progress-label mb-0">美国</label>
                <div class="d-flex align-items-center">
                  <BProgress class="progress-bar-rounded progress-bar-xs flex-1">
                    <BProgressBar :value="80" bg-variant="blue-dark-3" />
                  </BProgress>
                  <div class="fs-8 mnw-30p ms-3">80%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="media align-items-center mb-3">
            <div class="media-head me-3">
              <div class="avatar avatar-xxs avatar-rounded">
                <img :src="IndianFlag" alt="用户头像" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div class="progress-lb-wrap">
                <label class="progress-label mb-0">印度</label>
                <div class="d-flex align-items-center">
                  <BProgress class="progress-bar-rounded progress-bar-xs flex-1">
                    <BProgressBar :value="50" bg-variant="blue" />
                  </BProgress>
                  <div class="fs-8 mnw-30p ms-3">50%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="media align-items-center mb-3">
            <div class="media-head me-3">
              <div class="avatar avatar-xxs avatar-rounded">
                <img :src="UkFlag" alt="用户头像" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div class="progress-lb-wrap">
                <label class="progress-label mb-0">英国</label>
                <div class="d-flex align-items-center">
                  <BProgress class="progress-bar-rounded progress-bar-xs flex-1">
                    <BProgressBar :value="30" bg-variant="primary" />
                  </BProgress>
                  <div class="fs-8 mnw-30p ms-3">30%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="media align-items-center mb-3">
            <div class="media-head me-3">
              <div class="avatar avatar-xxs avatar-rounded">
                <img :src="AustralianFlag" alt="用户头像" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div class="progress-lb-wrap">
                <label class="progress-label mb-0">澳大利亚</label>
                <div class="d-flex align-items-center">
                  <BProgress class="progress-bar-rounded progress-bar-xs flex-1">
                    <BProgressBar :value="15" bg-variant="grey-dark-2" />
                  </BProgress>
                  <div class="fs-8 mnw-30p ms-3">15%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="media align-items-center">
            <div class="media-head me-3">
              <div class="avatar avatar-xxs avatar-rounded">
                <img :src="CanadianFlag" alt="用户头像" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div class="progress-lb-wrap">
                <label class="progress-label mb-0">加拿大</label>
                <div class="d-flex align-items-center">
                  <BProgress class="progress-bar-rounded progress-bar-xs flex-1">
                    <BProgressBar :value="10" bg-variant="grey" />
                  </BProgress>
                  <div class="fs-8 mnw-30p ms-3">10%</div>
                </div>
              </div>
            </div>
          </div>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>

<script setup>
import ActiveUserMap from "./chart-data/ActiveUserMap.vue";
//flags
import UsFlag from "@/styles/fonts/flags/4x3/us.svg";
import IndianFlag from "@/styles/fonts/flags/4x3/in.svg";
import UkFlag from "@/styles/fonts/flags/4x3/gb.svg";
import AustralianFlag from "@/styles/fonts/flags/4x3/au.svg";
import CanadianFlag from "@/styles/fonts/flags/4x3/ca.svg";
</script>
