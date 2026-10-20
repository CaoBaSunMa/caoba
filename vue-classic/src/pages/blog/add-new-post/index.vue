<template>
  <div class="blog-body">
    <simplebar class="nicescroll-bar">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xxl-9 col-lg-8">
            <form class="edit-post-form" @submit.prevent="submitDraft">
              <div class="form-group">
                <label class="form-label">文章标题</label>
                <input class="form-control" placeholder="文章标题" v-model.trim="form.title" />
              </div>
              <div class="form-group">
                <label class="form-label">固定链接（Slug）</label>
                <input class="form-control" placeholder="固定链接" v-model.trim="form.slug" />
              </div>
              <div class="row gx-3">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="form-label">分类</label>
                    <select class="form-select" v-model="form.category">
                      <option value="">未分类</option>
                      <option v-for="cat in blogStore.categories" :key="cat.name" :value="cat.name">
                        {{ cat.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="form-label">状态</label>
                    <select class="form-select" v-model="form.status">
                      <option value="DRAFT">草稿</option>
                      <option value="PUBLISHED">已发布</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">摘要</label>
                <textarea class="form-control" rows="2" placeholder="文章摘要" v-model.trim="form.excerpt"></textarea>
              </div>
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
                        <TinymceEditor :initialValue="form.content" />
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
                      <HkDropZone>
                        <span className="main-text">上传一张高质量图片</span>
                        <div className="fw-light text-muted">
                          让您的博客文章更具吸引力
                        </div>
                      </HkDropZone>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xxl-3 col-lg-4">
            <BlogAside @publish="submitPublish" @save-draft="submitDraft" />
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import HkDropZone from "@/hk-components/@hk-dropzone/HkDropzone.vue";
import BlogAside from "../BlogAside.vue";
import TinymceEditor from "@/components/TinymceEditor/TinymceEditor.vue";
import { useBlogStore } from "@/stores/blogStore";

export default {
  name: "AddNewPost",
  components: {
    HkDropZone,
    BlogAside,
    TinymceEditor,
  },
  setup() {
    const blogStore = useBlogStore();
    return { blogStore };
  },
  data() {
    return {
      form: {
        id: null,
        title: "",
        slug: "",
        excerpt: "",
        category: "",
        status: "DRAFT",
        content: "",
      },
    };
  },
  created() {
    const id = this.$route.query.id;
    if (id) {
      this.loadPost(id);
    }
  },
  methods: {
    async loadPost(id) {
      try {
        const post = await this.blogStore.fetchPost(Number(id));
        this.form = {
          id: post.id,
          title: post.title || "",
          slug: post.slug || "",
          excerpt: post.excerpt || "",
          category: post.category || "",
          status: post.status || "DRAFT",
          content: post.content || post.excerpt || "",
        };
      } catch (err) {
        // 文章不存在（404）或加载失败：回到列表页，避免控制台报错
        if (this.$router.currentRoute.value?.query?.id) {
          this.$router.replace("/apps/blog/posts");
        }
      }
    },
    buildPayload(status) {
      return {
        title: this.form.title,
        slug: this.form.slug || undefined,
        excerpt: this.form.excerpt,
        category: this.form.category || undefined,
        tags: JSON.stringify(["Vue3", "前端"]),
        content: this.form.content || this.form.excerpt || this.form.title,
        status,
      };
    },
    async submitPublish() {
      if (!this.form.title) {
        window.alert("请填写文章标题");
        return;
      }
      await this.save("PUBLISHED");
    },
    async submitDraft() {
      if (!this.form.title) return;
      await this.save("DRAFT");
    },
    async save(status) {
      try {
        if (this.form.id) {
          await this.blogStore.updatePost(this.form.id, this.buildPayload(status));
        } else {
          await this.blogStore.createPost(this.buildPayload(status));
        }
        window.alert("已保存成功");
      } catch (err) {
        console.error("[blog] save failed:", err);
        window.alert("保存失败：" + (err.response?.data?.message || err.message));
      }
    },
  },
};
</script>