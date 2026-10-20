<template>
    <div :class="['hk-wrapper hk-pg-auth', { 'bg-primary-dark-3': lockScreenRoute }]" data-footer="simple">
        <RouterView />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pathName = computed(() => route.path)
const lockScreenRoute = computed(() => pathName.value.match('/auth/lock-screen'))
</script>
