<template>
  <div class="hk-pg-body py-0">
    <div :class="['blogapp-wrap', { 'blogapp-sidebar-toggle': showSidebar }]">
      <!-- sidebar -->
      <BlogSidebar />
      <div class="blogapp-content">
        <div class="blogapp-detail-wrap">
          <BlogHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
          <slot name="blog-body" />
        </div>
        <!-- Add Category -->
        <AddCategory />
        <!-- /Add Category -->
        <!-- Add Tag -->
        <AddTag />
        <!-- Add Tag -->
      </div>
    </div>
  </div>
</template>

<script>
import BlogSidebar from "./BlogSidebar.vue";
import BlogHeader from "./BlogHeader.vue";
import AddTag from "./AddTag.vue";
import AddCategory from "./AddCategory.vue";

export default {
  name: "BlogPage",
  components: {
    BlogSidebar,
    BlogHeader,
    AddTag,
    AddCategory,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
