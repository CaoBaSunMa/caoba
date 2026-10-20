<template>
    <span ref="popover" class="d-inline-block" tabindex="0" data-bs-toggle="popover" :title="title"
        :data-bs-content="content" :data-bs-placement="placement" :data-bs-trigger="trigger">
        <slot></slot>
    </span>
</template>

<script>
import { Popover } from 'bootstrap';

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
    mounted() {
        this.initializePopover();
    },
    methods: {
        initializePopover() {
            const popoverTriggerEl = this.$refs.popover;
            if (popoverTriggerEl) {
                new Popover(popoverTriggerEl, {
                    title: this.title,
                    content: this.content,
                    placement: this.placement,
                    trigger: this.trigger,
                });
            }
        },
    },
    beforeUnmount() {
        if (this.$refs.popover) {
            const popoverInstance = Popover.getInstance(this.$refs.popover);
            if (popoverInstance) {
                popoverInstance.dispose();
            }
        }
    },
};
</script>