<template>
    <span ref="popover" class="d-inline-block" tabindex="0" data-bs-toggle="popover" :title="title"
        :data-bs-content="content" :data-bs-placement="placement" :data-bs-trigger="trigger">
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
        content: {
            type: String,
            default: '',
        },
        placement: {
            type: String,
            default: 'top',
        },
        trigger: {
            type: String,
            default: 'click',
        },
    },
    data() {
        return {
            popoverInstance: null,
        };
    },
    async mounted() {
        if (import.meta.server) return;
        const { Popover } = await import('bootstrap');
        const popoverTriggerEl = this.$refs.popover;
        if (popoverTriggerEl) {
            this.popoverInstance = new Popover(popoverTriggerEl, {
                title: this.title,
                content: this.content,
                placement: this.placement,
                trigger: this.trigger,
            });
        }
    },
    beforeUnmount() {
        if (this.popoverInstance) {
            this.popoverInstance.dispose();
        }
    },
};
</script>
