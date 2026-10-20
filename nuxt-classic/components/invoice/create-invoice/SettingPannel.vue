<template>
  <div class="invoice-settings">
    <simplebar class="nicescroll-bar">
      <button type="button" class="info-close btn-close" @click="toggleSettingPannel">
        <span aria-hidden="true">×</span>
      </button>
      <div class="collapse-simple mt-lg-0 mt-2">
        <div class="card">
          <div class="card-header">
            <a
              role="button"
              data-bs-toggle="collapse"
              href="#currency"
              aria-expanded="true"
              >货币</a
            >
          </div>
          <div id="currency" class="collapse show">
            <div class="form-group mt-2">
              <label class="form-label">货币符号</label>
              <select class="form-select">
                <option selected="">美元（$ USD）</option>
                <option value="1">印度卢比（₹）</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a
              role="button"
              data-bs-toggle="collapse"
              href="#typography"
              aria-expanded="true"
              >排版</a
            >
          </div>
          <div id="typography" class="collapse show">
            <div class="form-group mt-2">
              <label class="form-label">字体</label>
              <select class="form-select">
                <option selected="">Arial</option>
                <option value="1">Times New Roman</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">字号</label>
              <select class="form-select">
                <option selected="">16px</option>
                <option value="1">20px</option>
                <option value="2">24px</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">对齐</label>
              <div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outline-secondary">
                    <i class="fa fa-align-left text-primary"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    <i class="fa fa-align-center"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    <i class="fa fa-align-right"></i>
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    <i class="fa fa-align-justify"></i>
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
                    v-model="accentColor"
                    type="color"
                    class="form-control-color p-0"
                    :style="{ backgroundColor: accentColor }"
                  />
                </span>
                <input type="text" class="form-control" :value="accentColor" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">标题颜色</label>
              <div class="input-group color-picker" title="使用横向选项">
                <span class="input-group-text colorpicker-input-addon">
                  <input
                    v-model="headingColor"
                    type="color"
                    class="form-control-color p-0"
                    :style="{ backgroundColor: headingColor }"
                  />
                </span>
                <input type="text" class="form-control" :value="headingColor" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">文字颜色</label>
              <div class="input-group color-picker" title="使用横向选项">
                <span class="input-group-text colorpicker-input-addon">
                  <input
                    v-model="textColor"
                    type="color"
                    class="form-control-color p-0"
                    :style="{ backgroundColor: textColor }"
                  />
                </span>
                <input type="text" class="form-control" :value="textColor" />
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
              <input type="text" class="form-control" />
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
              <button class="btn btn-light btn-block">获取链接</button>
              <button class="btn btn-light btn-block">下载发票</button>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
export default {
  name: "SettingPannel",
  data() {
    return {
      accentColor: "#007D88",
      headingColor: "#1F2327",
      textColor: "#646A71",
    };
  },
  methods: {
    toggleSettingPannel() {
      this.$emit("toggle-setting-pannel");
    },
  },
};
</script>
