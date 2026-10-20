<template>
  <div class="content-aside">
    <BButton variant="outline-secondary" class="btn-block" disabled>
      预览更改
    </BButton>
    <BButton variant="primary" class="btn-block mb-3">发布</BButton>
    <BCard no-body class="card-border">
      <BCardBody>
        <BForm @submit.prevent class="edit-post-form">
          <BFormGroup label="发布日期" label-for="published_date" class="mb-3">
            <date-range-picker
              id="published_date"
              :date-range="publishedDate"
              :locale-data="{ format: 'm/dd hh:mm TT' }"
              :ranges="false"
              :single-date-picker="true"
              :time-picker="true"
              :time-picker24-hour="false"
              :show-dropdowns="true"
            />
          </BFormGroup>
          <BFormGroup label="可见性" label-for="visibility_select" class="mb-3">
            <BFormSelect id="visibility_select" model-value="1">
              <BFormSelectOption value="1">公开</BFormSelectOption>
              <BFormSelectOption value="2">私密</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
          <BFormGroup label="状态" label-for="status" class="mb-3">
            <BFormSelect id="status" model-value="1">
              <BFormSelectOption value="1">--</BFormSelectOption>
            </BFormSelect>
          </BFormGroup>
        </BForm>
      </BCardBody>
    </BCard>

    <BCard no-body class="card-border overflow-hidden">
      <BCardHeader class="card-header-action">
        <a
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#categories_1"
          aria-expanded="true"
        >
          <div class="d-flex align-items-center">
            <h6 class="me-2 mb-0">分类</h6>
            <BButton
              variant="light"
              size="xs"
              tag="span"
              class="btn-icon btn-rounded"
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
            </BButton>
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
      </BCardHeader>
      <BCollapse id="categories_1" visible>
        <BCardBody>
          <BTabs
            justified
            nav-class="nav nav-light nav-tabs nav-segmented-tabs segmented-tabs-soft"
          >
            <BTab title="全部分类">
              <div class="h-180p">
                <simplebar class="nicescroll-bar p-0">
                  <BFormCheckbox id="catchk1" :model-value="true"> 设计 </BFormCheckbox>
                  <BFormCheckbox id="catchk2" :model-value="true">
                    开发
                  </BFormCheckbox>
                  <BFormCheckbox id="catchk3" :model-value="true">
                    技术
                  </BFormCheckbox>
                  <BFormCheckbox id="catchk4" :model-value="false">
                    商业
                  </BFormCheckbox>
                  <BFormCheckbox id="catchk5" :model-value="false">
                    社交媒体
                  </BFormCheckbox>
                  <BFormCheckbox id="catchk6" :model-value="false">
                    体育
                  </BFormCheckbox>
                  <BFormCheckbox id="catchk7" :model-value="false">
                    写作
                  </BFormCheckbox>
                </simplebar>
              </div>
            </BTab>
            <BTab title="常用">
              <div class="h-180p">
                <simplebar class="nicescroll-bar p-0">
                  <BFormCheckbox id="catchk8" :model-value="false">
                    设计
                  </BFormCheckbox>
                  <BFormCheckbox id="catchk9" :model-value="true">
                    开发
                  </BFormCheckbox>
                  <BFormCheckbox id="catchk10" :model-value="true">
                    技术
                  </BFormCheckbox>
                  <BFormCheckbox id="catchk11" :model-value="false">
                    商业
                  </BFormCheckbox>
                </simplebar>
              </div>
            </BTab>
          </BTabs>
        </BCardBody>
      </BCollapse>
    </BCard>

    <BCard no-body class="card-border">
      <BCardHeader class="card-header-action">
        <a role="button" data-bs-toggle="collapse" href="#tags_1" aria-expanded="true">
          <h6 class="mb-0">添加标签（最多5个）</h6>
        </a>
        <div class="card-action-wrap">
          <BButton
            variant="flush-dark"
            class="btn-icon btn-rounded flush-soft-hover"
            data-bs-toggle="collapse"
            href="#tags_1"
            aria-expanded="true"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="chevron-down"></feather-icon>
              </span>
            </span>
          </BButton>
        </div>
      </BCardHeader>
      <BCollapse id="tags_1" visible>
        <BCardBody>
          <div class="form-group mb-0">
            <hk-tag :option="multiSelectOpt" :selected-value="selectedTags"></hk-tag>
          </div>
        </BCardBody>
      </BCollapse>
    </BCard>

    <BCard no-body class="card-border overflow-hidden">
      <BCardHeader class="card-header-action">
        <a role="button" data-bs-toggle="collapse" href="#post_1" aria-expanded="true">
          <div class="d-flex align-items-center">
            <h6 class="me-2 mb-0">文章类型</h6>
            <BButton
              variant="light"
              size="xs"
              tag="span"
              class="btn-icon btn-rounded"
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
            </BButton>
          </div>
        </a>
        <div class="card-action-wrap">
          <BButton
            variant="flush-dark"
            class="btn-icon btn-rounded flush-soft-hover"
            data-bs-toggle="collapse"
            href="#post_1"
            aria-expanded="true"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="chevron-down"></feather-icon>
              </span>
            </span>
          </BButton>
        </div>
      </BCardHeader>
      <BCollapse id="post_1" visible>
        <BCardBody>
          <BFormRadio id="customRadio1" name="customRadio" value="A">
            图片文章
          </BFormRadio>
          <BFormRadio id="customRadio2" name="customRadio" value="B">
            视频文章
          </BFormRadio>
          <BFormRadio id="customRadio3" name="customRadio" value="C">
            引用文章
          </BFormRadio>
          <BFormRadio id="customRadio4" name="customRadio" value="D">
            图库文章
          </BFormRadio>
        </BCardBody>
      </BCollapse>
    </BCard>

    <BCard no-body class="card-border overflow-hidden">
      <BCardHeader class="card-header-action">
        <a role="button" data-bs-toggle="collapse" href="#prev_1" aria-expanded="true">
          <div class="d-flex align-items-center">
            <h6 class="me-2 mb-0">预览图片</h6>
            <BButton
              variant="light"
              size="xs"
              tag="span"
              class="btn-icon btn-rounded"
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
            </BButton>
          </div>
        </a>
        <div class="card-action-wrap">
          <BButton
            variant="flush-dark"
            class="btn-icon btn-rounded flush-soft-hover"
            data-bs-toggle="collapse"
            href="#prev_1"
            aria-expanded="true"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="chevron-down"></feather-icon>
              </span>
            </span>
          </BButton>
        </div>
      </BCardHeader>
      <BCollapse id="prev_1" visible>
        <BCardBody>
          <HkDropZone>
            <span class="main-text">上传一张高质量图片</span>
            <div class="fw-light text-muted">让您的博客文章更具吸引力</div>
          </HkDropZone>
        </BCardBody>
      </BCollapse>
    </BCard>
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
      selectedTags: [],
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