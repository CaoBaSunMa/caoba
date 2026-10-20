<template>
  <div class="invoiceapp-detail-wrap">
    <TempHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    <div class="invoice-body">
      <simplebar class="nicescroll-bar">
        <div class="container">
          <div class="my-md-7 my-3">
            <h3 class="mb-4">选择你的起始模板</h3>
            <form @submit.prevent>
              <div class="row">
                <div class="col-md-4 mb-md-0 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="搜索模板"
                    v-model="search"
                  />
                </div>
                <div class="col-md-4 mb-md-0 mb-3">
                  <select class="form-select" v-model="style">
                    <option value="">热门</option>
                    <option value="经典">经典</option>
                    <option value="流行">流行</option>
                    <option value="简约">简约</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <select class="form-select" v-model="category">
                    <option value="">全部分类</option>
                    <option value="商务">商务</option>
                    <option value="工作室">工作室</option>
                    <option value="个人">个人</option>
                  </select>
                </div>
              </div>
            </form>

            <template v-if="groups.pro">
              <h5 class="mt-7 mb-3">高级模板</h5>
              <div class="row text-center">
                <a
                  v-for="t in groups.pro"
                  :key="t.name"
                  href="javascript:void(0);"
                  class="d-block col-xl-2 col-sm-4 col-xs-12 mb-5"
                  @click="useTemplate(t)"
                >
                  <div class="card card-border" :class="{ 'border-primary': draftStore.draft.template === t.name }">
                    <img class="card-img" :src="t.img" :alt="t.name" />
                  </div>
                  <h6 class="mb-0">{{ t.name }}</h6>
                </a>
              </div>
            </template>

            <template v-if="groups.biz && groups.biz.length">
              <h5 class="mt-7 mb-3">商务</h5>
              <div class="row text-center">
                <a
                  v-for="t in groups.biz"
                  :key="t.name"
                  href="javascript:void(0);"
                  class="d-block col-xl-2 col-sm-4 col-xs-12 mb-5"
                  @click="useTemplate(t)"
                >
                  <div class="card card-border" :class="{ 'border-primary': draftStore.draft.template === t.name }">
                    <img class="card-img" :src="t.img" :alt="t.name" />
                  </div>
                  <h6 class="mb-0">{{ t.name }}</h6>
                </a>
              </div>
            </template>

            <div v-if="!filtered.length" class="text-center text-muted py-5">没有匹配的模板</div>
          </div>
        </div>
      </simplebar>
    </div>
  </div>
</template>

<script>
import TempHeader from "./TempHeader.vue";
import { useInvoiceDraftStore } from "@/stores/invoiceDraftStore";
import Swal from "sweetalert2";

import img1 from "@/assets/img/templates/template1.png";
import img2 from "@/assets/img/templates/template2.png";
import img3 from "@/assets/img/templates/template3.png";
import img4 from "@/assets/img/templates/template4.png";
import img5 from "@/assets/img/templates/template5.png";
import img6 from "@/assets/img/templates/template6.png";
import img7 from "@/assets/img/templates/template7.png";
import img8 from "@/assets/img/templates/template8.png";

const TEMPLATES = [
  { name: "标准", img: img1, style: "经典", cat: "商务" },
  { name: "简约", img: img2, style: "简约", cat: "工作室" },
  { name: "基础", img: img3, style: "经典", cat: "工作室" },
  { name: "经典", img: img4, style: "经典", cat: "商务" },
  { name: "形式发票", img: img5, style: "流行", cat: "商务" },
  { name: "贸易", img: img6, style: "流行", cat: "商务" },
  { name: "临时", img: img7, style: "简约", cat: "个人" },
  { name: "主要", img: img8, style: "流行", cat: "商务" },
  { name: "马特·奥佩尔", img: img1, style: "经典", cat: "个人" },
  { name: "自由职业者", img: img2, style: "简约", cat: "个人" },
  { name: "设计师", img: img3, style: "简约", cat: "工作室" },
  { name: "服务", img: img4, style: "流行", cat: "商务" },
];

export default {
  components: {
    TempHeader,
  },
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const draftStore = useInvoiceDraftStore();
    return { draftStore };
  },
  data() {
    return {
      search: "",
      style: "",
      category: "",
    };
  },
  computed: {
    filtered() {
      return TEMPLATES.filter((t) => {
        if (this.style && t.style !== this.style) return false;
        if (this.category && t.cat !== this.category) return false;
        if (this.search && !t.name.includes(this.search.trim())) return false;
        return true;
      });
    },
    groups() {
      const pro = this.filtered.filter((t) =>
        ["标准", "简约", "基础", "经典"].includes(t.name)
      );
      const biz = this.filtered.filter((t) => !["标准", "简约", "基础", "经典"].includes(t.name));
      return { pro, biz };
    },
  },
  methods: {
    useTemplate(t) {
      this.draftStore.patch({ template: t.name });
      Swal.fire({
        icon: "success",
        title: `已选择「${t.name}」模板`,
        text: "即将跳转到创建页面",
        timer: 1200,
        showConfirmButton: false,
      });
      this.$router.push("/apps/invoice/create-invoice?template=" + encodeURIComponent(t.name));
    },
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>