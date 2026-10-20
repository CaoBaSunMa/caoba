<template>
    <header class="contact-header">
        <div class="d-flex align-items-center">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb  mb-0">
                    <li class="breadcrumb-item"><a href="contact.html">联系人</a></li>
                    <li class="breadcrumb-item active" aria-current="page">摩根·弗里曼</li>
                </ol>
            </nav>
        </div>
        <div class="contact-options-wrap">
            <div class="d-flex fs-7 align-items-center">1 / 30</div>
            <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle" href="#"
                v-tooltip data-bs-toggle="tooltip"  data-bs-placement="top" title="" data-bs-original-title="上一个">
                <span class="icon">
                    <span class="feather-icon">
                        <feather-icon name="chevron-left"></feather-icon>
                    </span>
                </span>
            </a>
            <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle" href="#"
                v-tooltip data-bs-toggle="tooltip"  data-bs-placement="top" title="" data-bs-original-title="下一个">
                <span class="icon">
                    <span class="feather-icon">
                        <feather-icon name="chevron-right"></feather-icon>
                    </span>
                </span>
            </a>
            <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable" href="#"
                v-tooltip data-bs-toggle="tooltip"  data-bs-placement="top" title="" data-bs-original-title="收起"
                @click="layoutStore.toggleTopNav()">
                <span class="icon">
                    <feather-icon name="chevron-down" v-if="layoutStore.$state.topNavCollapse" />
                    <feather-icon name="chevron-up" v-else />
                </span>
            </a>
        </div>
        <div :class="['hk-sidebar-togglable', { 'active': showSidebar }]" @click="toggleSidebar"></div>
    </header>
</template>

<script>
import { useLayoutStore } from '@/stores/layout'

export default {
    props: {
        showSidebar: Boolean,
    },
    setup() {
        const layoutStore = useLayoutStore();
        return {
            layoutStore
        }
    },
    methods: {
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        },
    },
};
</script>
