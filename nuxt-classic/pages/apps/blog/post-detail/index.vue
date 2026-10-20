<template>
  <Blog>
    <template #blog-body>
      <PostDetails />
    </template>
  </Blog>
</template>

<script setup>
import Blog from "@/components/blog/Blog.vue";
import PostDetails from "@/components/blog/post-details/PostDetails.vue";
</script>
