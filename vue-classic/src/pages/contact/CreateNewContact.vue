<template>
  <div
    id="add_new_contact"
    class="modal fade add-new-contact"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="关闭"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h5 class="mb-5">新建联系人</h5>
          <form @submit.prevent="save">
            <div class="row gx-3">
              <div class="col-sm-2 form-group">
                <HkDropzone class="dropify-square"> 上传照片 </HkDropzone>
              </div>
              <div class="col-sm-10 form-group">
                <textarea
                  class="form-control mnh-100p"
                  rows="4"
                  placeholder="添加个人简介"
                  v-model="bio"
                ></textarea>
              </div>
            </div>
            <div
              class="title title-xs title-wth-divider text-primary text-uppercase my-4"
            >
              <span>基本信息</span>
            </div>
            <div class="row gx-3">
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="form-label">名</label>
                  <input class="form-control" type="text" v-model="form.firstName" />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="form-label">中间名</label>
                  <input class="form-control" type="text" v-model="form.middleName" />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="form-label">姓</label>
                  <input class="form-control" type="text" v-model="form.lastName" />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">邮箱 ID</label>
                  <input class="form-control" type="text" v-model="form.email" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">电话</label>
                  <input class="form-control" type="text" v-model="form.phone" />
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="form-label">城市</label>
                  <input class="form-control" type="text" v-model="form.city" />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="form-label">州/省</label>
                  <input class="form-control" type="text" v-model="form.state" />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <label class="form-label">国家</label>
                  <input class="form-control" type="text" v-model="form.country" />
                </div>
              </div>
            </div>
            <div
              class="title title-xs title-wth-divider text-primary text-uppercase my-4"
            >
              <span>公司信息</span>
            </div>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">公司名称</label>
                  <input class="form-control" type="text" v-model="form.company" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">职位</label>
                  <input class="form-control" type="text" v-model="form.position" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">网站</label>
                  <input class="form-control" type="text" v-model="form.website" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="form-label">工作电话</label>
                  <input class="form-control" type="text" v-model="form.workPhone" />
                </div>
              </div>
            </div>
            <div
              class="title title-xs title-wth-divider text-primary text-uppercase my-4"
            >
              <span>补充信息</span>
            </div>
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <label class="form-label">标签</label>
                  <hk-tag
                    :key="resetKey"
                    :option="contactStore.allLabels"
                    :selected-value="tags"
                    @change="tags = $event"
                  />
                  <small class="form-text text-muted">
                    每个联系人最多可添加 4 个标签
                  </small>
                </div>
              </div>
            </div>
            <div class="row gx-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Facebook" v-model="form.facebook" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Twitter" v-model="form.twitter" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="LinkedIn" v-model="form.linkedin" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Gmail" v-model="form.gmail" />
                </div>
              </div>
            </div>
            <div class="modal-footer align-items-center p-0 mt-4">
              <button type="button" class="btn btn-outline-secondary" @click="confirmDiscard">
                <i class="ri-close-line me-1"></i>放弃
              </button>
              <button type="submit" class="btn btn-primary">新建联系人</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HkDropzone from "@/hk-components/@hk-dropzone/HkDropzone.vue";
import HkTag from "@/hk-components/@hk-tag/HkTag.vue";
import { useContactStore } from "@/stores/contactStore";
import Swal from "sweetalert2";
import { Modal } from "bootstrap";

const emptyForm = () => ({
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  country: "",
  company: "",
  position: "",
  website: "",
  workPhone: "",
  facebook: "",
  twitter: "",
  linkedin: "",
  gmail: "",
});

export default {
  components: {
    HkDropzone,
    HkTag,
  },
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
  data() {
    return {
      form: emptyForm(),
      bio: "",
      tags: ["协作者"],
      resetKey: 0,
    };
  },
  methods: {
    resetForm() {
      this.form = emptyForm();
      this.bio = "";
      this.tags = ["协作者"];
      this.resetKey += 1;
    },
    confirmDiscard() {
      const hasData = this.form.firstName || this.form.lastName || this.form.email || this.form.phone;
      if (hasData) {
        Swal.fire({
          title: "放弃修改？",
          text: "未保存的表单数据将丢失",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          cancelButtonColor: "#6c757d",
          confirmButtonText: "确定放弃",
          cancelButtonText: "继续编辑",
        }).then((result) => {
          if (result.isConfirmed) {
            this.resetForm();
            this.closeModal();
          }
        });
      } else {
        this.resetForm();
        this.closeModal();
      }
    },
    closeModal() {
      const el = document.getElementById("add_new_contact");
      const modal = Modal.getInstance(el);
      if (modal) modal.hide();
    },
    async save() {
      if (!this.form.firstName.trim()) {
        Swal.fire({ icon: "warning", title: "请填写姓名", timer: 1500, showConfirmButton: false });
        return;
      }
      const location = [this.form.city, this.form.state, this.form.country]
        .map((v) => (v || "").trim())
        .filter(Boolean)
        .join(", ");
      try {
        await this.contactStore.createContact({
          firstName: this.form.firstName.trim(),
          lastName: (this.form.lastName || "").trim(),
          email: (this.form.email || "").trim(),
          phone: (this.form.phone || "").trim(),
          company: (this.form.company || "").trim(),
          position: (this.form.position || "").trim(),
          location,
          notes: this.bio,
          labels: JSON.stringify(Array.isArray(this.tags) ? this.tags : []),
        });
        this.resetForm();
        this.closeModal();
        Swal.fire({ icon: "success", title: "创建成功", text: "联系人已添加", timer: 1500, showConfirmButton: false });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "创建失败",
          text: err.response?.data?.message || err.message,
        });
      }
    },
  },
};
</script>