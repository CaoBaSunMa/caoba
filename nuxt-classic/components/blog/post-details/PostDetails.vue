<template>
  <div class="blog-body">
    <simplebar class="nicescroll-bar">
      <BContainer fluid>
        <BRow>
          <BCol xxl="9" lg="8">
            <BForm @submit.prevent class="edit-post-form">
              <BFormGroup label="文章标题" label-for="post_title" class="mb-3">
                <BFormInput
                  id="post_title"
                  model-value="构建高效的数据面板用户界面设计"
                  placeholder="文章标题"
                />
              </BFormGroup>
              <BFormGroup label="固定链接" label-for="permalink" class="mb-3">
                <BFormInput
                  id="permalink"
                  model-value="https://caoba.com/theme/caoba"
                  placeholder="文章标题"
                />
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
              <BCard no-body class="card-border rounded-top-start-0">
                <BCardBody>
                  <div class="tab-content mt-0">
                    <div class="tab-pane fade show active" id="tab_classic">
                      <div class="tinymce-wrap">
                        <TinymceEditor :initialValue="initialContent" />
                      </div>
                    </div>
                    <div class="tab-pane fade" id="tab_code">
                      <div contenteditable="true">
                        &lt;div class=&quot;col&quot;&gt; &lt;a href=&quot;#&quot;&gt;
                        &lt;div class=&quot;card card-border&quot;
                        style=&quot;background-image:url(&#39;/src/assets/img/gallery/mock5.jpg&#39;);&quot;&gt;
                        &lt;/div&gt; &lt;/a&gt; &lt;/div&gt;
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
              <BCard no-body class="card-border advance-option-post">
                <BCardBody>
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
                      <BRow
                        cols-xl="6"
                        cols-lg="3;"
                        cols-sm="2"
                        cols="1"
                        class="uploaded-img-prev"
                      >
                        <BCol>
                          <a href="#">
                            <div
                              class="card card-border"
                              :style="{ backgroundImage: `url(${mock1})` }"
                            ></div>
                          </a>
                        </BCol>
                        <BCol>
                          <a href="#">
                            <div
                              class="card card-border"
                              :style="{ backgroundImage: `url(${mock2})` }"
                            ></div>
                          </a>
                        </BCol>
                        <BCol>
                          <a href="#">
                            <div
                              class="card card-border"
                              :style="{ backgroundImage: `url(${mock3})` }"
                            ></div>
                          </a>
                        </BCol>
                        <BCol>
                          <a href="#">
                            <div
                              class="card card-border"
                              :style="{ backgroundImage: `url(${mock4})` }"
                            ></div>
                          </a>
                        </BCol>
                        <BCol>
                          <a href="#">
                            <div
                              class="card card-border"
                              :style="{ backgroundImage: `url(${mock5})` }"
                            ></div>
                          </a>
                        </BCol>
                        <BCol>
                          <a href="#">
                            <div
                              class="card card-border"
                              :style="{ backgroundImage: `url(${mock6})` }"
                            ></div>
                          </a>
                        </BCol>
                      </BRow>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BForm>
          </BCol>
          <BCol xxl="3" lg="4">
            <!-- aside -->
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
//Images
import mock1 from "@/assets/img/gallery/mock1.jpg";
import mock2 from "@/assets/img/gallery/mock2.jpg";
import mock3 from "@/assets/img/gallery/mock3.jpg";
import mock4 from "@/assets/img/gallery/mock4.jpg";
import mock5 from "@/assets/img/gallery/mock5.jpg";
import mock6 from "@/assets/img/gallery/mock6.jpg";

const initialContent = ref(`
          <p style="text-align: center;"><span style="color: #bdc3c7;">→ 这是一个功能完整的编辑器演示，欢迎探索！ ←</span></p>
          <p style="text-align: center;"><br></p>
          <h2 style="text-align: center; color:#298DFF">TinyMCE 是世界上可定制性最强、最灵活的富文本编辑器。</h2>
          <p style="text-align: center;"><strong> <span style="font-size: 14px;"> <span> 轻盈下载即可使用，TinyMCE 能应对您遇到的任何挑战。 </span> </span> </strong></p>
          <p style="text-align: center;"><br></p>
          <table style="border-collapse: collapse; width: 85%; margin-left: auto; margin-right: auto; border: 0;">
            <tbody>
              <tr>
                <td style="width: 25%; text-align: center; padding: 7px;" ><span>🛠 50+ 插件</span></td>
                <td style="width: 25%; text-align: center; padding: 7px;" ><span>💡 高级支持</span></td>
                <td style="width: 25%; text-align: center; padding: 7px;" ><span>🖍 自定义皮肤</span></td>
                <td style="width: 25%; text-align: center; padding: 7px;" ><span>⚙ 完整 API 访问权限</span></td>
              </tr>
            </tbody>
          </table>
        `);
</script>
