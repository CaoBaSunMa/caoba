<template>
  <div class="content-aside">
    <button class="btn btn-outline-secondary btn-block" @click="$emit('save-draft')">保存草稿</button>
    <button class="btn btn-primary btn-block mb-3" @click="$emit('publish')">发布</button>
    <div class="card card-border">
      <div class="card-body">
        <form class="edit-post-form">
          <div class="form-group">
            <label class="form-label">发布日期</label>
            <date-range-picker
              :date-range="publishedDate"
              :locale-data="{ format: 'm/dd hh:mm TT' }"
              :ranges="false"
              :single-date-picker="true"
              :time-picker="true"
              :time-picker24-hour="false"
              :show-dropdowns="true"
            />
          </div>
          <div class="form-group">
            <label class="form-label">可见性</label>
            <select class="form-select">
              <option selected value="1">公开</option>
              <option value="2">私密</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">状态</label>
            <select class="form-select">
              <option selected value="1">--</option>
            </select>
          </div>
        </form>
      </div>
    </div>

    <div class="card card-border overflow-hidden">
      <div class="card-header card-header-action">
        <a
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#categories_1"
          aria-expanded="true"
        >
          <div class="d-flex align-items-center">
            <h6 class="me-2 mb-0">分类</h6>
            <span
              class="btn btn-xs btn-icon btn-rounded btn-light"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="新建分类"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="plus"></feather-icon>
                </span>
              </span>
            </span>
          </div>
        </a>
        <div class="card-action-wrap">
          <a
            class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
            data-bs-toggle="collapse"
            href="#categories_1"
            aria-expanded="true"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="chevron-down"></feather-icon>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div id="categories_1" class="collapse show">
        <div class="card-body">
          <ul
            class="nav nav-justified nav-light nav-tabs nav-segmented-tabs segmented-tabs-soft"
          >
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#tab_cat">
                <span class="nav-link-text">全部分类</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab_freq">
                <span class="nav-link-text badge-on-text">常用</span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="tab_cat">
              <div class="h-180p">
                <simplebar class="nicescroll-bar p-0">
                  <div class="form-check mb-1">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="catchk1"
                      checked
                    />
                    <label class="form-check-label" for="catchk1">设计</label>
                  </div>
                  <div class="form-check mb-1">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="catchk2"
                      checked
                    />
                    <label class="form-check-label" for="catchk2">开发</label>
                  </div>
                  <div class="form-check mb-1">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="catchk3"
                      checked
                    />
                    <label class="form-check-label" for="catchk3">技术</label>
                  </div>
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="catchk4" />
                    <label class="form-check-label" for="catchk4">商业</label>
                  </div>
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="catchk5" />
                    <label class="form-check-label" for="catchk5">社交媒体</label>
                  </div>
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="catchk6" />
                    <label class="form-check-label" for="catchk6">体育</label>
                  </div>
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="catchk7" />
                    <label class="form-check-label" for="catchk7">写作</label>
                  </div>
                </simplebar>
              </div>
            </div>
            <div class="tab-pane fade" id="tab_freq">
              <div class="h-180p">
                <simplebar class="nicescroll-bar p-0">
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="catchk1" />
                    <label class="form-check-label" for="catchk1">设计</label>
                  </div>
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="catchk2" />
                    <label class="form-check-label" for="catchk2">开发</label>
                  </div>
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="catchk3" />
                    <label class="form-check-label" for="catchk3">技术</label>
                  </div>
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="catchk4" />
                    <label class="form-check-label" for="catchk4">商业</label>
                  </div>
                </simplebar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-border overflow-hidden">
      <div class="card-header card-header-action">
        <a role="button" data-bs-toggle="collapse" href="#tags_1" aria-expanded="true">
          <h6 class="mb-0">添加标签（最多5个）</h6>
        </a>
        <div class="card-action-wrap">
          <a
            class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
            data-bs-toggle="collapse"
            href="#tags_1"
            aria-expanded="true"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="chevron-down"></feather-icon>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div id="tags_1" class="collapse show">
        <div class="card-body">
          <div class="form-group mb-0">
            <hk-tag :option="multiSelectOpt" :selected-value="selectedTags"></hk-tag>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-border overflow-hidden">
      <div class="card-header card-header-action">
        <a role="button" data-bs-toggle="collapse" href="#post_1" aria-expanded="true">
          <div class="d-flex align-items-center">
            <h6 class="me-2 mb-0">文章类型</h6>
            <span
              class="btn btn-xs btn-icon btn-rounded btn-light"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="新建分类"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="plus"></feather-icon>
                </span>
              </span>
            </span>
          </div>
        </a>
        <div class="card-action-wrap">
          <a
            class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
            data-bs-toggle="collapse"
            href="#post_1"
            aria-expanded="true"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="chevron-down"></feather-icon>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div id="post_1" class="collapse show">
        <div class="card-body">
          <div class="form-check mb-1">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="form-check-input"
              checked
            />
            <label class="form-check-label" for="customRadio1">图片文章</label>
          </div>
          <div class="form-check mb-1">
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              class="form-check-input"
            />
            <label class="form-check-label" for="customRadio2">视频文章</label>
          </div>
          <div class="form-check mb-1">
            <input
              type="radio"
              id="customRadio3"
              name="customRadio"
              class="form-check-input"
            />
            <label class="form-check-label" for="customRadio3">引用文章</label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              id="customRadio4"
              name="customRadio"
              class="form-check-input"
            />
            <label class="form-check-label" for="customRadio4">图库文章</label>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-border overflow-hidden">
      <div class="card-header card-header-action">
        <a role="button" data-bs-toggle="collapse" href="#prev_1" aria-expanded="true">
          <div class="d-flex align-items-center">
            <h6 class="me-2 mb-0">预览图片</h6>
            <span
              class="btn btn-xs btn-icon btn-rounded btn-light"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="新建分类"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="plus"></feather-icon>
                </span>
              </span>
            </span>
          </div>
        </a>
        <div class="card-action-wrap">
          <a
            class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
            data-bs-toggle="collapse"
            href="#prev_1"
            aria-expanded="true"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="chevron-down"></feather-icon>
              </span>
            </span>
          </a>
        </div>
      </div>
      <div id="prev_1" class="collapse show">
        <div class="card-body">
          <!-- <input type="file" id="input-file-now" class="dropify" /> -->
          <HkDropZone>
            <span className="main-text">上传一张高质量图片</span>
            <div className="fw-light text-muted">让您的博客文章更具吸引力</div>
          </HkDropZone>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HkDropZone from "@/hk-components/@hk-dropzone/HkDropzone.vue";
import HkTag from "@/hk-components/@hk-tag/HkTag.vue";

export default {
  name: "BlogAside",
  components: {
    HkDropZone,
    HkTag,
  },
  data() {
    return {
      multiSelectOpt: [
        "协作者",
        "设计师",
        "React 开发",
        "促销",
        "广告",
      ],
      selectedTags: ["协作者", "设计师", "React 开发"],
      publishedDate: { startDate: new Date() },
    };
  },
  mounted() {
    // Initialize selectedTags with some default values
    this.selectedTags = [
      this.multiSelectOpt[0],
      this.multiSelectOpt[1],
      this.multiSelectOpt[2],
      this.multiSelectOpt[3],
    ];
  },
};
</script>
