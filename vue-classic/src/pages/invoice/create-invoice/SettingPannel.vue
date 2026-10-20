<template>
  <div class="invoice-settings">
    <simplebar class="nicescroll-bar">
      <button type="button" class="info-close btn-close" @click="toggleSettingPannel">
        <span aria-hidden="true">×</span>
      </button>
      <div class="collapse-simple mt-lg-0 mt-2">
        <div class="card">
          <div class="card-header">
            <a role="button" data-bs-toggle="collapse" href="#currency" aria-expanded="true"
              >货币</a
            >
          </div>
          <div id="currency" class="collapse show">
            <div class="form-group mt-2">
              <label class="form-label">货币符号</label>
              <select class="form-select" :value="draftStore.draft.settings.currency" @change="onCurrency">
                <option value="CNY">人民币（¥ CNY）</option>
                <option value="USD">美元（$ USD）</option>
                <option value="INR">印度卢比（₹）</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a role="button" data-bs-toggle="collapse" href="#typography" aria-expanded="true"
              >排版</a
            >
          </div>
          <div id="typography" class="collapse show">
            <div class="form-group mt-2">
              <label class="form-label">字体</label>
              <select class="form-select" v-model="draftStore.draft.settings.font">
                <option>Arial</option>
                <option>Times New Roman</option>
                <option>Noto Sans SC</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">字号</label>
              <select class="form-select" v-model="draftStore.draft.settings.fontSize">
                <option value="14px">14px</option>
                <option value="16px">16px</option>
                <option value="20px">20px</option>
                <option value="24px">24px</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">对齐</label>
              <div>
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    :class="{ 'btn-primary-light': draftStore.draft.settings.align === 'left' }"
                    @click="setAlign('left')"
                  >
                    <i class="fa fa-align-left text-primary"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    :class="{ 'btn-primary-light': draftStore.draft.settings.align === 'center' }"
                    @click="setAlign('center')"
                  >
                    <i class="fa fa-align-center"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    :class="{ 'btn-primary-light': draftStore.draft.settings.align === 'right' }"
                    @click="setAlign('right')"
                  >
                    <i class="fa fa-align-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a role="button" data-bs-toggle="collapse" href="#color" aria-expanded="true"
              >颜色</a
            >
          </div>
          <div id="color" class="collapse show">
            <div class="form-group mt-2">
              <label class="form-label">强调色</label>
              <div class="input-group color-picker" title="使用横向选项">
                <span class="input-group-text colorpicker-input-addon">
                  <input
                    :value="draftStore.draft.settings.accentColor"
                    type="color"
                    class="form-control-color p-0"
                    @input="setColor('accentColor', $event.target.value)"
                  />
                </span>
                <input
                  type="text"
                  class="form-control"
                  :value="draftStore.draft.settings.accentColor"
                  @change="setColor('accentColor', $event.target.value)"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">标题颜色</label>
              <div class="input-group color-picker" title="使用横向选项">
                <span class="input-group-text colorpicker-input-addon">
                  <input
                    :value="draftStore.draft.settings.headingColor"
                    type="color"
                    class="form-control-color p-0"
                    @input="setColor('headingColor', $event.target.value)"
                  />
                </span>
                <input
                  type="text"
                  class="form-control"
                  :value="draftStore.draft.settings.headingColor"
                  @change="setColor('headingColor', $event.target.value)"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">文字颜色</label>
              <div class="input-group color-picker" title="使用横向选项">
                <span class="input-group-text colorpicker-input-addon">
                  <input
                    :value="draftStore.draft.settings.textColor"
                    type="color"
                    class="form-control-color p-0"
                    @input="setColor('textColor', $event.target.value)"
                  />
                </span>
                <input
                  type="text"
                  class="form-control"
                  :value="draftStore.draft.settings.textColor"
                  @change="setColor('textColor', $event.target.value)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a role="button" data-bs-toggle="collapse" href="#action" aria-expanded="true"
              >操作</a
            >
          </div>
          <div id="action" class="collapse show">
            <div class="form-group mt-2">
              <label class="form-label">定时发送</label>
              <input
                type="text"
                class="form-control"
                placeholder="日期 例如 2026-10-01 09:00"
                v-model="draftStore.draft.settings.scheduleSend"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a role="button" data-bs-toggle="collapse" href="#option" aria-expanded="true"
              >选项</a
            >
          </div>
          <div id="option" class="collapse show">
            <div class="button-list">
              <button class="btn btn-light btn-block" @click="copyLink">获取链接</button>
              <button class="btn btn-light btn-block" @click="downloadInvoice">下载发票</button>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import { useInvoiceDraftStore, currencySymbol } from "@/stores/invoiceDraftStore";
import Swal from "sweetalert2";

export default {
  name: "SettingPannel",
  setup() {
    const draftStore = useInvoiceDraftStore();
    return { draftStore };
  },
  methods: {
    toggleSettingPannel() {
      this.$emit("toggle-setting-pannel");
    },
    onCurrency(e) {
      this.draftStore.setSettings({ currency: e.target.value, symbol: currencySymbol(e.target.value) });
    },
    setAlign(align) {
      this.draftStore.setSettings({ align });
    },
    setColor(key, val) {
      this.draftStore.setSettings({ [key]: val });
    },
    copyLink() {
      const url = `${location.origin}/apps/invoice/invoice-preview`;
      const done = () => {
        Swal.fire({ icon: "success", title: "链接已复制", timer: 1500, showConfirmButton: false });
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done);
      } else {
        const ta = document.createElement("textarea");
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        done();
      }
    },
    downloadInvoice() {
      this.draftStore.persist();
      this.$router.push("/apps/invoice/invoice-preview");
      setTimeout(() => window.print(), 800);
    },
  },
};
</script>