<template>
  <Blog>
    <template #blog-body>
      <AddNewPost />
    </template>
  </Blog>
</template>

<script setup>
import AddNewPost from "@/components/blog/add-new-post/AddNewPost.vue";
import Blog from "@/components/blog/Blog.vue";
</script>
