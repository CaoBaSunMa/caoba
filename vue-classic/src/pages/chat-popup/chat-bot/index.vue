<template>
    <ChatBoatInterface :show="true" />
</template>

<script>
import ChatBoatInterface from "@/components/chatboatInterface/index.vue";

export default {
    components: {
        ChatBoatInterface
    },
    data() {
        return {
            message: "Hello, Vue.js!"
        };
    }
};
</script>
