<template>
  <div class="card card-border mb-0 h-100">
    <div class="card-header card-header-action">
      <h6>活跃用户</h6>
      <div class="card-action-wrap">
        <button type="button" class="btn btn-outline-light">实时图表</button>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <ActiveUserMap />
        </div>
        <div class="col-md-4">
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
                  <div class="progress progress-bar-rounded progress-bar-xs flex-1">
                    <div
                      class="progress-bar bg-blue-dark-3 w-80"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
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
                  <div class="progress progress-bar-rounded progress-bar-xs flex-1">
                    <div
                      class="progress-bar bg-blue w-50"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
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
                  <div class="progress progress-bar-rounded progress-bar-xs flex-1">
                    <div
                      class="progress-bar bg-primary w-30"
                      role="progressbar"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
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
                  <div class="progress progress-bar-rounded progress-bar-xs flex-1">
                    <div
                      class="progress-bar bg-grey-dark-2 w-15"
                      role="progressbar"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
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
                  <div class="progress progress-bar-rounded progress-bar-xs flex-1">
                    <div
                      class="progress-bar bg-grey w-10"
                      role="progressbar"
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="fs-8 mnw-30p ms-3">10%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActiveUserMap from "./chart-data/ActiveUserMap.vue";
//flags
import UsFlag from "@/styles/fonts/flags/4x3/us.svg";
import IndianFlag from "@/styles/fonts/flags/4x3/in.svg";
import UkFlag from "@/styles/fonts/flags/4x3/gb.svg";
import AustralianFlag from "@/styles/fonts/flags/4x3/au.svg";
import CanadianFlag from "@/styles/fonts/flags/4x3/ca.svg";

export default {
  components: {
    ActiveUserMap,
  },
  data() {
    return {
      UsFlag,
      IndianFlag,
      UkFlag,
      AustralianFlag,
      CanadianFlag,
    };
  },
};
</script>
