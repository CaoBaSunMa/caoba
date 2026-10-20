<template>
    <header class="blog-header">
        <div class="d-flex align-items-center">
            <a class="blogapp-title link-dark" href="#">
                <h1 v-if="postRoute">文章</h1>
                <h1 v-if="addNewPostRoute">新建文章</h1>
                <h1 v-if="postDetailRoute">编辑文章</h1>
            </a>
            <router-link v-if="postDetailRoute" to="/apps/blog/add-new-post" class="btn btn-soft-primary ms-3">新建</router-link>
        </div>

        <div class="blog-options-wrap">
            <template v-if="postRoute">
                <div class="dropdown">
                    <a class="btn btn-outline-light dropdown-toggle  d-sm-inline-block d-none" href="#"
                        data-bs-toggle="dropdown">管理</a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">
                            <span class="feather-icon dropdown-icon">
                                <feather-icon name="flag"></feather-icon>
                            </span>
                            <span>管理文章</span>
                        </a>
                        <a class="dropdown-item" href="#">
                            <span class="feather-icon dropdown-icon">
                                <feather-icon name="grid"></feather-icon>
                            </span>
                            <span>管理分类</span>
                        </a>
                        <a class="dropdown-item" href="#">
                            <span class="feather-icon dropdown-icon">
                                <feather-icon name="tag"></feather-icon>
                            </span>
                            <span>管理标签</span>
                        </a>
                    </div>
                </div>
                <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret flex-shrink-0 d-lg-inline-block d-none"
                    href="#" v-tooltip data-bs-toggle="tooltip"  data-bs-placement="top" title="" data-bs-original-title="刷新">
                    <span class="icon">
                        <feather-icon name="refresh-cw"></feather-icon>
                    </span>
                </a>
                <div class="v-separator  d-lg-inline-block d-none"></div>
            </template>
            <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret flex-shrink-0  ms-0"
                href="#" data-bs-toggle="dropdown">
                <span class="icon">
                    <span class="feather-icon">
                        <feather-icon name="more-vertical"></feather-icon>
                    </span>
                </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">
                    <span class="feather-icon dropdown-icon">
                        <feather-icon name="users"></feather-icon>
                    </span>
                    <span>文章</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="feather-icon dropdown-icon">
                        <feather-icon name="settings"></feather-icon>
                    </span>
                    <span>设置</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="feather-icon dropdown-icon">
                        <feather-icon name="slash"></feather-icon>
                    </span>
                    <span>屏蔽内容</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="feather-icon dropdown-icon">
                        <feather-icon name="external-link"></feather-icon>
                    </span>
                    <span>反馈</span>
                </a>
            </div>
            <a class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable flex-shrink-0  d-lg-inline-block d-none"
                href="#" v-tooltip data-bs-toggle="tooltip"  data-bs-placement="top" title="" data-bs-original-title="折叠"
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
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { useLayoutStore } from '@/stores/layout'

export default {
    name: 'PostHeader',
    props: {
        showSidebar: Boolean,
        showInfo: Boolean,
    },
    setup() {
        const layoutStore = useLayoutStore();
        const route = useRoute();
        const postRoute = computed(() => route.path.includes('/blog/posts'));
        const addNewPostRoute = computed(() => route.path.includes('/blog/add-new-post'));
        const postDetailRoute = computed(() => route.path.includes('/blog/post-detail'));
        return {
            layoutStore,
            postRoute,
            addNewPostRoute,
            postDetailRoute,
        }
    },
    methods: {
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        },
    },
}
</script>