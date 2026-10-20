<template>
  <Blog>
    <template #blog-body>
      <PostList />
    </template>
  </Blog>
</template>

<script setup>
import Blog from "~/components/blog/Blog.vue";
import PostList from "~/components/blog/post/PostList.vue";
</script>
