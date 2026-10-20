<template>
  <div class="blog-body">
    <simplebar class="nicescroll-bar">
      <BContainer fluid>
        <BRow>
          <BCol xxl="9" lg="8">
            <BForm @submit.prevent class="edit-post-form">
              <BFormGroup label="文章标题" label-for="post_title" class="mb-3">
                <BFormInput id="post_title" placeholder="文章标题" />
              </BFormGroup>
              <BFormGroup label="固定链接" label-for="permalink" class="mb-3">
                <BFormInput id="permalink" placeholder="固定链接" />
              </BFormGroup>

              <ul class="nav nav-light nav-tabs border-bottom-0">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#tab_classic">
                    <span class="nav-link-text">经典</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab_code">
                    <span class="nav-link-text">代码</span>
                  </a>
                </li>
              </ul>
              <div class="card card-border rounded-top-start-0">
                <div class="card-body">
                  <div class="tab-content mt-0">
                    <div class="tab-pane fade show active" id="tab_classic">
                      <div class="tinymce-wrap">
                        <TinymceEditor />
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab_code"></div>
                  </div>
                </div>
              </div>
              <div class="card card-border advance-option-post">
                <div class="card-body">
                  <h5 class="card-title">高级选项</h5>
                  <ul class="nav nav-tabs nav-line nav-icon nav-light border-bottom">
                    <li class="nav-item">
                      <a class="nav-link active" data-bs-toggle="tab" href="#tab_summery">
                        <span class="nav-icon-wrap">
                          <span class="feather-icon">
                            <feather-icon name="zap"></feather-icon>
                          </span>
                        </span>
                        <span class="nav-link-text">文章轮播图片</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#">
                        <span class="nav-icon-wrap">
                          <span class="feather-icon">
                            <feather-icon name="settings"></feather-icon>
                          </span>
                        </span>
                        <span class="nav-link-text">文章设置</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" data-bs-toggle="tab" href="#">
                        <span class="nav-icon-wrap">
                          <span class="feather-icon">
                            <feather-icon name="edit"></feather-icon>
                          </span>
                        </span>
                        <span class="nav-link-text">版本历史</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="tab_summery">
                      <HkDropzone>
                        <span className="main-text">上传一张高质量图片</span>
                        <div className="fw-light text-muted">
                          让您的博客文章更具吸引力
                        </div>
                      </HkDropzone>
                    </div>
                  </div>
                </div>
              </div>
            </BForm>
          </BCol>
          <BCol xxl="3" lg="4">
            <BlogAside />
          </BCol>
        </BRow>
      </BContainer>
    </simplebar>
  </div>
</template>

<script setup>
import BlogAside from "../BlogAside.vue";
import TinymceEditor from "@/components/TinymceEditor/TinymceEditor.vue";
</script>