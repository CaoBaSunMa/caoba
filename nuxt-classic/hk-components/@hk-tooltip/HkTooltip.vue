<template>
    <span ref="tooltip" class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" :title="title"
        :data-bs-html="htmlContent">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        placement: {
            type: String,
            default: 'top',
        },
        delay: {
            type: Number,
            default: 0,
        },
        trigger: {
            type: String,
            default: 'hover',
        },
        htmlContent: {
            type: Boolean,
            default: false,
        },
        class: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            tooltipInstance: null,
        };
    },
    async mounted() {
        if (import.meta.server) return;
        const { Tooltip } = await import('bootstrap');
        const tooltipTriggerEl = this.$refs.tooltip;
        if (tooltipTriggerEl) {
            this.tooltipInstance = new Tooltip(tooltipTriggerEl, {
                title: this.title,
                trigger: this.trigger,
                placement: this.placement,
            });
        }
    },
    beforeUnmount() {
        if (this.tooltipInstance) {
            this.tooltipInstance.dispose();
        }
    },
};
</script>
