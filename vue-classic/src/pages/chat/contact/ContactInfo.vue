<template>
  <div class="chat-info">
    <simplebar class="nicescroll-bar">
      <button type="button" class="info-close btn-close">
        <span aria-hidden="true">×</span>
      </button>
      <div class="text-center">
        <div class="avatar avatar-xxl avatar-rounded">
          <img :src="avatar2" alt="user" class="avatar-img" />
        </div>
        <div class="cp-name text-truncate mt-2">艾伦·里克曼</div>
        <p class="text-truncate">
          今天什么都不想做.. 我只想躺在床上
        </p>
      </div>

      <div class="mt-4">
        <form role="search">
          <input type="text" class="form-control" placeholder="搜索会话内容" />
        </form>
        <div class="collapse-simple mt-3">
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#gn_info"
                aria-expanded="true"
                >基本信息</a
              >
            </div>
            <div id="gn_info" class="collapse show">
              <div class="card-body">
                <ul class="cp-info">
                  <li>
                    <a href="#">
                      <span class="cp-icon-wrap">
                        <span class="feather-icon">
                          <feather-icon name="briefcase"></feather-icon>
                        </span> </span
                      >开发者
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="cp-icon-wrap">
                        <span class="feather-icon">
                          <feather-icon name="mail"></feather-icon>
                        </span>
                      </span>
                      <span class="text-primary">alan@caoba.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="cp-icon-wrap">
                        <span class="feather-icon">
                          <feather-icon name="phone"></feather-icon>
                        </span>
                      </span>
                      +91-25-4125-2365
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="cp-icon-wrap">
                        <span class="feather-icon">
                          <feather-icon name="map-pin"></feather-icon>
                        </span>
                      </span>
                      美国纽约
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#social_profile"
                aria-expanded="true"
                >社交资料
              </a>
            </div>
            <div id="social_profile" class="collapse show">
              <div class="card-body">
                <ul class="hk-list hk-list-sm">
                  <li>
                    <button class="btn btn-icon btn-rounded btn-primary">
                      <span class="icon">
                        <i class="fa fa-behance"></i>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button class="btn btn-icon btn-rounded btn-warning">
                      <span class="icon">
                        <FontAwesomeIcon :icon="faGoogleDrive" />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button class="btn btn-icon btn-rounded btn-info">
                      <span class="icon">
                        <FontAwesomeIcon :icon="faDropbox" />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button class="btn btn-icon btn-rounded btn-dark">
                      <span class="icon">
                        <FontAwesomeIcon :icon="faGithub" />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button class="btn btn-icon btn-rounded btn-danger">
                      <span class="icon">
                        <FontAwesomeIcon :icon="faGoogle" />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#biography"
                aria-expanded="true"
                >个人简介
              </a>
            </div>
            <div id="biography" class="collapse show">
              <div class="card-body">
                <p>
                  大家好，艾伦·里克曼是一位出色的联合创始人兼文案撰稿人，
                  为世界 500 强企业服务了近十年。我精通多门外语，
                  并且喜欢产出高品质的内容。
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#settings"
                aria-expanded="true"
                >设置
              </a>
            </div>
            <div id="settings" class="collapse show">
              <div class="card-body">
                <ul class="cp-action">
                  <li>
                    <a href="javascript:void(0);"> 清空聊天记录 </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span class="text-danger">屏蔽联系人</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"> 反馈问题 </a>
                  </li>
                </ul>
                <a href="#" class="d-block text-dark fs-7 mb-10"
                  >反馈并举报会话</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faDropbox,
  faGithub,
  faGoogle,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";
//Image
import avatar2 from "@/assets/img/avatar2.jpg";

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    infoToggle: Function,
  },
  methods: {
    toggleInfo() {
      if (this.infoToggle) {
        this.infoToggle();
      }
    },
  },
  data() {
    return {
      avatar2,
      faDropbox,
      faGithub,
      faGoogle,
      faGoogleDrive,
    };
  },
};
</script>
