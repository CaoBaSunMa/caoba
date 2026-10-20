<template>
  <div id="add_new_cat" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
            <span aria-hidden="true">×</span>
          </button>
          <h6 class="text-uppercase fw-bold mb-3">新建分类</h6>
          <form @submit.prevent="submit">
            <div class="row gx-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="分类名称" v-model.trim="name" required />
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary float-end">添加</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useBlogStore } from "@/stores/blogStore";

export default {
  name: "BlogAddCategory",
  setup() {
    const blogStore = useBlogStore();
    return { blogStore };
  },
  data() {
    return { name: "" };
  },
  methods: {
    closeModal() {
      const modal = document.getElementById("add_new_cat");
      if (!modal) return;
      if (window.bootstrap?.Modal) {
        window.bootstrap.Modal.getInstance(modal)?.hide();
      } else {
        modal.classList.remove("show");
        modal.style.display = "none";
        document.querySelector(".modal-backdrop")?.remove();
      }
    },
    submit() {
      if (!this.name) return;
      this.blogStore.$state.localCategories.push(this.name);
      this.blogStore.$state.activeCategory = this.name;
      this.name = "";
      this.closeModal();
    },
  },
};
</script>