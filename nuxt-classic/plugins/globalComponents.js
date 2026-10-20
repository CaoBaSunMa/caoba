// 全局组件 / 指令注册（同时作用于 SSR 与客户端）
// 说明：原先这些注册放在 mode:"client" 的插件里，导致服务端渲染时
// 大量 "Failed to resolve component" 警告 + 客户端 hydration 不一致，
// 表格、徽标等实际渲染不出来。这里改为通用插件。
import { h } from "vue";

// simplebar-vue 的 simplebar-core 在模块求值阶段是 SSR 安全的（DOM 访问都发生在
// 实例 created/mounted 阶段，且被 canUseDOM 保护），render 函数只产出纯 vnode。
// 这里**通用注册**真身，而不是像之前那样在服务端用一个结构不同的占位组件 ——
// 占位结构跟 simplebar-vue 渲染的 DOM 不一致，生产环境 hydration 之后
// SimpleBar.initDOM() 找不到 `.simplebar-wrapper`，
// 会抛 "Cannot read properties of null (reading 'matches')"，
// 然后 Nuxt 生产错误处理器把整个页面换成 500 错误页。
import simplebarVue from "simplebar-vue";

import FeatherIcon from "~/hk-components/Icons/FeatherIcon.vue";
import HkAvatarUploader from "~/hk-components/@hk-avatar-uploader/HkAvatarUploader.vue";
import HkBadge from "~/hk-components/@hk-badge/HkBadge.vue";
import HkCallout from "~/hk-components/@hk-callout/HkCallout.vue";
import HkCard from "~/hk-components/@hk-card/HkCard.vue";
import HkChip from "~/hk-components/@hk-chip/HkChip.vue";
import HkDateRangePicker from "~/hk-components/@hk-daterangepicker/HkDateRangePicker.vue";
import HkDrawerContainer from "~/hk-components/@hk-drawer-container/HkDrawerContainer.vue";
import HkDropzone from "~/hk-components/@hk-dropzone/HkDropzone.vue";
import HkFormWizard from "~/hk-components/@hk-form-wizard/HkFormWizard.vue";
import HkInlineEdit from "~/hk-components/@hk-inline-editor/HkInlineEdit.vue";
import HkInputSpinner from "~/hk-components/@hk-input-spinner/HkInputSpinner.vue";
import HkPopover from "~/hk-components/@hk-popover/HkPopover.vue";
import HkProgressbar from "~/hk-components/@hk-progressbar/HkProgressbar.vue";
import HkRating from "~/hk-components/@hk-rating/HkRating.vue";
import HkRibbon from "~/hk-components/@hk-ribbon/HkRibbon.vue";
import HkTag from "~/hk-components/@hk-tag/HkTag.vue";
import HkTooltip from "~/hk-components/@hk-tooltip/HkTooltip.vue";
import HkDataTable from "~/hk-components/@hkDataTable/HkDataTable.vue";

// apexcharts 底层库在**模块求值阶段**就执行 `window.SVG = ...` / `window.Apex = {}`，
// 所以它只能在客户端导入（见 plugins/plugins.js）。但模板里的 <apexchart> 会被 Vue
// 编译成在 render 顶层就执行的 _resolveComponent("apexchart")，即使它包在
// <client-only> 里也一样 —— 服务端没有这个名字就会刷
// "Failed to resolve component: apexchart"。
// 因此服务端注册一个占位组件；由于所有用法都在 <client-only> 内，
// 服务端实际不会渲染它，客户端也会被真身覆盖，不会产生 hydration 不一致。
const SsrApexchart = {
  name: "SsrApexchart",
  render() {
    return h("div", { class: "apexchart-canvas" });
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  // 图标
  app.component("feather-icon", FeatherIcon);

  // 自定义组件
  app.component("HkAvatarUploader", HkAvatarUploader);
  app.component("HkBadge", HkBadge);
  app.component("HkCallout", HkCallout);
  app.component("HkCard", HkCard);
  app.component("HkChip", HkChip);
  app.component("HkDateRangePicker", HkDateRangePicker);
  app.component("HkDrawerContainer", HkDrawerContainer);
  app.component("HkDropzone", HkDropzone);
  app.component("HkFormWizard", HkFormWizard);
  app.component("HkInlineEdit", HkInlineEdit);
  app.component("HkInputSpinner", HkInputSpinner);
  app.component("HkPopover", HkPopover);
  app.component("HkProgressbar", HkProgressbar);
  app.component("HkRating", HkRating);
  app.component("HkRibbon", HkRibbon);
  app.component("HkTag", HkTag);
  app.component("HkTooltip", HkTooltip);
  app.component("HkDataTable", HkDataTable);
  // 模板里用的是 kebab-case，同时注册别名
  app.component("date-range-picker", HkDateRangePicker);
  app.component("hk-tag", HkTag);
  app.component("hk-card", HkCard);

  // simplebar：真身在此通用注册（SSR + 客户端同构，避免 hydration 结构不一致；
  // 详见文件头注释）。apexchart 只能客户端导入，服务端注册占位组件兜底。
  app.component("simplebar", simplebarVue);
  if (import.meta.server) {
    app.component("apexchart", SsrApexchart);
  }

  // v-tooltip 指令（bootstrap tooltip 的 Vue 封装）
  app.directive("tooltip", {
    mounted(el, binding) {
      if (import.meta.server) return;
      const title = binding.value || el.getAttribute("title") || el.getAttribute("data-bs-original-title");
      if (!title) return;
      el.setAttribute("data-bs-toggle", "tooltip");
      el.setAttribute("title", title);
      el.addEventListener("mouseenter", () => {
        if (window.bootstrap && window.bootstrap.Tooltip) {
          const instance = window.bootstrap.Tooltip.getInstance(el) || new window.bootstrap.Tooltip(el);
          instance.show();
        }
      });
      el.addEventListener("mouseleave", () => {
        if (window.bootstrap && window.bootstrap.Tooltip) {
          const instance = window.bootstrap.Tooltip.getInstance(el);
          if (instance) instance.hide();
        }
      });
    },
  });
});
