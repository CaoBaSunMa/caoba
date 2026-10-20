<template>
  <div class="contact-body contact-detail-body">
    <simplebar class="nicescroll-bar">
      <div class="d-flex flex-xxl-nowrap flex-wrap">
        <div class="contact-info w-xxl-30 w-100">
          <div class="dropdown action-btn">
            <button
              aria-expanded="false"
              data-bs-toggle="dropdown"
              class="btn btn-light dropdown-toggle"
              type="button"
            >
              操作
            </button>
            <div role="menu" class="dropdown-menu">
              <a class="dropdown-item" href="#" @click.prevent="toggleStar">
                {{ current && current.starred ? "取消收藏" : "添加到收藏" }}
              </a>
              <a class="dropdown-item" href="#" @click.prevent="share">分享联系人</a>
              <a class="dropdown-item link-danger" href="#" @click.prevent="remove">删除联系人</a>
            </div>
          </div>
          <div class="text-center mt-5">
            <div class="dropify-circle edit-img">
              <HkAvatarUploader :defaultImg="avatar2" />
            </div>
            <div class="cp-name text-truncate mt-3">{{ fullName(current) }}</div>
            <p>无来电，一直忙碌</p>
            <hk-rating :rating="3" readOnly></hk-rating>
            <ul class="hk-list hk-list-sm justify-content-center mt-2">
              <li>
                <a class="btn btn-icon btn-soft-primary btn-rounded" :href="mailtoHref" target="_blank">
                  <span class="icon">
                    <feather-icon name="mail"></feather-icon>
                  </span>
                </a>
              </li>
              <li>
                <a class="btn btn-icon btn-soft-success btn-rounded" :href="'tel:' + (current && current.phone || '')">
                  <span class="icon">
                    <feather-icon name="phone"></feather-icon>
                  </span>
                </a>
              </li>
              <li>
                <a class="btn btn-icon btn-soft-danger btn-rounded" href="#">
                  <span class="icon">
                    <feather-icon name="video"></feather-icon>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-header">
              <a href="#">个人资料信息</a>
              <button
                class="btn btn-xs btn-icon btn-rounded btn-light"
                v-tooltip
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="编辑"
              >
                <span class="icon" data-bs-toggle="modal" data-bs-target="#editInfo">
                  <feather-icon name="edit-2"></feather-icon>
                </span>
              </button>
            </div>
            <div class="card-body">
              <ul class="cp-info">
                <li>
                  <span>名</span>
                  <span>{{ current && current.firstName || "-" }}</span>
                </li>
                <li>
                  <span>姓</span>
                  <span>{{ current && current.lastName || "-" }}</span>
                </li>
                <li>
                  <span>邮箱</span>
                  <span>{{ current && current.email || "-" }}</span>
                </li>
                <li>
                  <span>电话</span>
                  <span>{{ current && current.phone || "-" }}</span>
                </li>
                <li>
                  <span>位置</span>
                  <span>{{ current && current.location || "-" }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="separator-full"></div>
          <div class="card">
            <div class="card-header">
              <a href="#">更多信息</a>
              <button
                class="btn btn-xs btn-icon btn-rounded btn-light"
                v-tooltip
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="编辑"
              >
                <span class="icon" data-bs-toggle="modal" data-bs-target="#moreContact">
                  <feather-icon name="edit-2"></feather-icon>
                </span>
              </button>
            </div>
            <div class="card-body">
              <ul class="cp-info">
                <li>
                  <span>职位</span>
                  <span>{{ current && current.position || "-" }}</span>
                </li>
                <li>
                  <span>公司</span>
                  <span>{{ current && current.company || "-" }}</span>
                </li>
                <li>
                  <span>位置</span>
                  <span>{{ current && current.location || "-" }}</span>
                </li>
                <li>
                  <span>创建时间</span>
                  <span>{{ formatDate(current && current.createdAt) }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="separator-full"></div>
          <div class="card">
            <div class="card-header">
              <a href="#">标签</a>
              <button
                class="btn btn-xs btn-icon btn-rounded btn-light"
                v-tooltip
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="添加标签"
              >
                <span class="icon" data-bs-toggle="modal" data-bs-target="#tagsInput">
                  <feather-icon name="plus"></feather-icon>
                </span>
              </button>
            </div>
            <div class="card-body">
              <template v-if="labels(current).length">
                <span
                  v-for="label in labels(current)"
                  :key="label"
                  class="badge badge-soft-violet me-2"
                  >{{ label }}</span
                >
              </template>
              <span v-else class="text-muted">暂无标签</span>
            </div>
          </div>
          <div class="separator-full"></div>
          <div class="card">
            <div class="card-header">
              <a href="#">社交账号</a>
            </div>
            <div class="card-body">
              <ul class="hk-list hk-list-sm">
                <li>
                  <button class="btn btn-icon btn-rounded btn-primary">
                    <span class="icon">
                      <FontAwesomeIcon :icon="faBehance" />
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
              </ul>
            </div>
          </div>
          <div class="separator-full"></div>
          <div class="card">
            <div class="card-header">
              <a href="#">个人简介</a>
              <button
                class="btn btn-xs btn-icon btn-rounded btn-light"
                v-tooltip
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="编辑"
              >
                <span class="icon" data-bs-toggle="modal" data-bs-target="#addBio">
                  <feather-icon name="edit-2"></feather-icon>
                </span>
              </button>
            </div>
            <div class="card-body">
              <p class="mb-0">
                {{ current && current.notes || "暂无个人简介" }}
              </p>
            </div>
          </div>
          <div class="separator-full"></div>
          <div class="card">
            <div class="card-header">
              <a href="#">设置</a>
            </div>
            <div class="card-body">
              <ul class="cp-action">
                <li>
                  <a href="javascript:void(0);" @click="share">
                    <span class="cp-icon-wrap">
                      <feather-icon name="upload"></feather-icon>
                    </span>
                    分享联系人
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" @click="toggleStar">
                    <span class="cp-icon-wrap">
                      <feather-icon :name="current && current.starred ? 'star' : 'heart'"></feather-icon>
                    </span>
                    {{ current && current.starred ? "取消收藏" : "添加到收藏" }}
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="link-danger" @click="remove">
                    <span class="cp-icon-wrap">
                      <feather-icon name="trash"></feather-icon>
                    </span>
                    删除联系人
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="contact-more-info">
          <ul class="nav nav-tabs nav-line nav-icon nav-light">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#tab_summery">
                <span class="nav-icon-wrap">
                  <feather-icon name="zap"></feather-icon>
                </span>
                <span class="nav-link-text">摘要</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="activity"></feather-icon>
                </span>
                <span class="nav-link-text">动态</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="edit-3"></feather-icon>
                </span>
                <span class="nav-link-text">笔记</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="mail"></feather-icon>
                </span>
                <span class="nav-link-text">邮箱</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="phone"></feather-icon>
                </span>
                <span class="nav-link-text">通话</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="check-square"></feather-icon>
                </span>
                <span class="nav-link-text">任务</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="clock"></feather-icon>
                </span>
                <span class="nav-link-text">日程</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#">
                <span class="nav-icon-wrap">
                  <feather-icon name="shield"></feather-icon>
                </span>
                <span class="nav-link-text">销售</span>
              </a>
            </li>
          </ul>
          <div class="tab-content mt-7">
            <div class="tab-pane fade show active" id="tab_summery">
              <form @submit.prevent="saveNote">
                <div class="row">
                  <div class="col-md-12 form-group">
                    <div class="form-label-group">
                      <label>写一条笔记</label>
                    </div>
                    <textarea
                      class="form-control"
                      rows="8"
                      placeholder="写下内部备注"
                      v-model="newNote"
                    ></textarea>
                  </div>
                </div>
                <button class="btn btn-outline-light mt-2" type="submit">添加笔记</button>
              </form>
            </div>
          </div>
          <div class="pipeline-status-wrap mt-7">
            <div class="title-lg mb-3">线索管道状态</div>
            <ul class="pipeline-stutus">
              <li class="completed"><span>进行中</span></li>
              <li class="active"><span>跟进中</span></li>
              <li><span>已安排服务</span></li>
              <li><span>沟通中</span></li>
              <li><span>胜/败</span></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import HkAvatarUploader from "@/hk-components/@hk-avatar-uploader/HkAvatarUploader.vue";
//icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBehance,
  faDropbox,
  faGithub,
  faGoogle,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";
//image
import avatar2 from "@/assets/img/avatar2.jpg";
import { useContactStore } from "@/stores/contactStore";
import Swal from "sweetalert2";
import { parseLabels, fullName } from "@/utils/export";

export default {
  name: "EditContactBody",
  components: {
    HkAvatarUploader,
    FontAwesomeIcon,
  },
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
  data() {
    return {
      faBehance,
      faDropbox,
      faGithub,
      faGoogle,
      faGoogleDrive,
      avatar2,
      newNote: "",
    };
  },
  computed: {
    current() {
      return this.contactStore.current;
    },
    mailtoHref() {
      const email = (this.current && this.current.email) || "";
      return email ? `mailto:${email}` : "#";
    },
  },
  methods: {
    fullName(c) {
      return c ? fullName(c) : "";
    },
    labels(c) {
      return c ? parseLabels(c.labels) : [];
    },
    formatDate(value) {
      if (!value) return "-";
      const d = new Date(value);
      if (isNaN(d.getTime())) return value;
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    },
    toggleStar() {
      if (!this.current) return;
      this.contactStore
        .toggleStar(this.current.id)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: this.current.starred ? "已加星标" : "已取消星标",
            timer: 1200,
            showConfirmButton: false,
          });
        })
        .catch((err) =>
          Swal.fire({ icon: "error", title: "操作失败", text: err.response?.data?.message || err.message })
        );
    },
    share() {
      if (this.current && this.current.email) {
        window.location.href = `mailto:${this.current.email}?subject=来自%20caoba%20的联系`;
      } else {
        Swal.fire({ icon: "info", title: "该联系人暂无邮箱", timer: 1500, showConfirmButton: false });
      }
    },
    async remove() {
      if (!this.current) return;
      const r = await Swal.fire({
        title: "删除联系人",
        text: `确定删除「${fullName(this.current)}」吗？删除后无法恢复。`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        confirmButtonColor: "#e74c3c",
      });
      if (!r.isConfirmed) return;
      try {
        await this.contactStore.deleteContact(this.current.id);
        Swal.fire({ icon: "success", title: "已删除", timer: 1200, showConfirmButton: false });
        this.$router.push("/apps/contact/contact-list");
      } catch (err) {
        Swal.fire({ icon: "error", title: "删除失败", text: err.response?.data?.message || err.message });
      }
    },
    async saveNote() {
      if (!this.current) return;
      const note = (this.newNote || "").trim();
      if (!note) return;
      try {
        const prevNotes = this.current.notes || "";
        await this.contactStore.updateContact(this.current.id, {
          notes: prevNotes ? `${prevNotes}\n${note}` : note,
        });
        this.newNote = "";
        Swal.fire({ icon: "success", title: "笔记已保存", timer: 1200, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: "error", title: "保存失败", text: err.response?.data?.message || err.message });
      }
    },
  },
};
</script>
