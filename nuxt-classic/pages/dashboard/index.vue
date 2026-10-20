<template>
  <ChatBot :show="false" />
  <BContainer fluid="xxl">
    <!-- Page Header -->
    <Header />
    <!-- /Page Header -->

    <!-- Page Body -->
    <Body />
    <!-- /Page Body -->
  </BContainer>
</template>

<script setup>
import Header from "~/components/dashboard/Header.vue";
import Body from "~/components/dashboard/Body.vue";
import ChatBot from "~/components/chat-popup/chat-bot/ChatBot.vue";
</script>
