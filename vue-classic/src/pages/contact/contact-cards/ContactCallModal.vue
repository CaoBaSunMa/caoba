<template>
  <div
    id="video_call_modal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
      <div class="modal-content bg-dark text-white overflow-hidden">
        <div class="modal-body text-center py-4">
          <template v-if="current">
            <div v-if="!cameraOff" class="avatar avatar-xxl avatar-rounded mx-auto mb-3 avatar-primary">
              <img v-if="current.avatar" :src="current.avatar" alt="用户" class="avatar-img" />
              <span v-else class="initial-wrap fs-3 text-white">{{ initialLetter }}</span>
            </div>
            <div
              v-else
              class="avatar avatar-xxl avatar-rounded mx-auto mb-3 avatar-soft-dark"
            >
              <span class="initial-wrap">
                <span class="feather-icon">
                  <feather-icon name="video-off"></feather-icon>
                </span>
              </span>
            </div>
            <div class="fs-6 fw-medium mb-1 text-white">{{ nameText }}</div>
            <div class="fs-7 text-white-50 mb-2">
              {{ state === "ringing" ? "响铃中…" : "通话中" }}
            </div>
            <div class="fs-2 fw-light mb-4" style="font-variant-numeric: tabular-nums">
              {{ durationText }}
            </div>
            <div class="d-flex justify-content-center gap-3">
              <button
                class="btn btn-icon btn-rounded"
                :class="muted ? 'btn-warning' : 'btn-outline-light'"
                v-tooltip
                data-bs-toggle="tooltip"
                title="静音"
                @click="muted = !muted"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon :name="muted ? 'mic-off' : 'mic'"></feather-icon>
                  </span>
                </span>
              </button>
              <button
                class="btn btn-icon btn-rounded"
                :class="cameraOff ? 'btn-warning' : 'btn-outline-light'"
                v-tooltip
                data-bs-toggle="tooltip"
                title="摄像头"
                @click="cameraOff = !cameraOff"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon :name="cameraOff ? 'video-off' : 'video'"></feather-icon>
                  </span>
                </span>
              </button>
              <button
                class="btn btn-icon btn-rounded btn-danger"
                v-tooltip
                data-bs-toggle="tooltip"
                title="挂断"
                @click="endCall"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <feather-icon name="phone-off"></feather-icon>
                  </span>
                </span>
              </button>
            </div>
          </template>
          <template v-else>
            <div class="text-white-50 py-4">暂无联系人信息</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useContactStore } from "@/stores/contactStore";
import { useContactDetailStore } from "@/stores/contactDetailStore";
import { fullName } from "@/utils/export";
import { Modal } from "bootstrap";
import Swal from "sweetalert2";

export default {
  name: "ContactCallModal",
  setup() {
    const contactStore = useContactStore();
    const detailStore = useContactDetailStore();
    return { contactStore, detailStore };
  },
  data() {
    return {
      state: "idle", // idle | ringing | active
      seconds: 0,
      muted: false,
      cameraOff: false,
      timer: null,
      ringTimer: null,
      modalEl: null,
    };
  },
  mounted() {
    this.modalEl = document.getElementById("video_call_modal");
    if (this.modalEl) {
      this.modalEl.addEventListener("shown.bs.modal", this.onShow);
      this.modalEl.addEventListener("hidden.bs.modal", this.onHidden);
    }
  },
  unmounted() {
    if (this.modalEl) {
      this.modalEl.removeEventListener("shown.bs.modal", this.onShow);
      this.modalEl.removeEventListener("hidden.bs.modal", this.onHidden);
    }
  },
  computed: {
    current() {
      return this.contactStore.current;
    },
    nameText() {
      return this.current ? fullName(this.current) : "";
    },
    initialLetter() {
      const s = (this.current && (this.current.firstName || fullName(this.current))) || "?";
      return s.trim().charAt(0).toUpperCase() || "?";
    },
    durationText() {
      const m = String(Math.floor(this.seconds / 60)).padStart(2, "0");
      const s = String(this.seconds % 60).padStart(2, "0");
      return `${m}:${s}`;
    },
  },
  methods: {
    show() {
      this.state = "ringing";
      this.seconds = 0;
      this.muted = false;
      this.cameraOff = false;
      const el = document.getElementById("video_call_modal");
      if (el) Modal.getOrCreateInstance(el).show();
    },
    hide() {
      const el = document.getElementById("video_call_modal");
      const m = Modal.getInstance(el);
      if (m) m.hide();
    },
    onShow() {
      this.ringTimer = setTimeout(() => {
        if (this.state !== "ringing") return;
        this.state = "active";
        this.timer = setInterval(() => {
          this.seconds += 1;
        }, 1000);
      }, 1800);
    },
    onHidden() {
      this.stopTimers();
    },
    stopTimers() {
      if (this.timer) clearInterval(this.timer);
      if (this.ringTimer) clearTimeout(this.ringTimer);
      this.timer = null;
      this.ringTimer = null;
    },
    endCall() {
      const secs = this.state === "active" ? this.seconds : 0;
      const c = this.current;
      if (c) {
        this.detailStore.pushCall(c.id, {
          type: "video",
          duration: secs,
          status: "completed",
        });
        this.detailStore.logActivity(
          c.id,
          "video",
          "与「" + this.nameText + "」完成了一次视频通话" + (secs ? "（" + this.durationText + "）" : "")
        );
      }
      this.stopTimers();
      this.hide();
      Swal.fire({ icon: "success", title: "通话已结束", timer: 1200, showConfirmButton: false });
    },
  },
};
</script>

<style scoped>
#video_call_modal .modal-content {
  border-radius: 1rem;
}
</style>