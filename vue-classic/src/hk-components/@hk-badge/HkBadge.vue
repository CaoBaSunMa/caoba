<template>
    <span
        :class="['badge', { 'badge-sm': size === 'sm' }, { 'badge-outline': outline }, { [`bg-${bg}`]: !soft }, { [`badge-soft-${bg}`]: soft }, { 'badge-indicator': indicator },]">
        <slot />
    </span>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    children: String,
    bg: String,
    pill: Boolean,
    outline: Boolean,
    indicator: Boolean,
    text: Boolean,
    soft: Boolean,
    size: String,
});

const badgeClasses = computed(() => {
    return [
        'badge',
        { 'badge-sm': props.size === 'sm' },
        { 'badge-outline': props.outline },
        { [`bg-${props.bg}`]: !props.soft },
        { [`badge-soft-${props.bg}`]: props.soft },
        { 'badge-indicator': props.indicator },
    ];
});
</script>