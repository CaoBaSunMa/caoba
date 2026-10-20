<template>
    <div id="add_new_tag" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document" style="width: auto;">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h6 class="text-uppercase fw-bold mb-3">添加标签</h6>
                    <form>
                        <div class="row gx-3">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <hk-tag :option="multiSelectOpt" :selected-value="selectedTags"></hk-tag>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary float-end" @click="submit">添加</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HkTag from '@/hk-components/@hk-tag/HkTag.vue'
import { useBlogStore } from '@/stores/blogStore'

export default {
    components: {
        HkTag,
    },
    setup() {
        const blogStore = useBlogStore();
        return { blogStore };
    },
    data() {
        return {
            multiSelectOpt: ['协作者', '设计师', 'React 开发', '促销', '广告'],
            selectedTags: ['协作者', '设计师', 'React 开发',]
        }
    },
    mounted() {
        // Initialize selectedTags with some default values
        this.selectedTags = [this.multiSelectOpt[0], this.multiSelectOpt[1], this.multiSelectOpt[2], this.multiSelectOpt[3]];
    },
    methods: {
        closeModal() {
            const modal = document.getElementById('add_new_tag');
            if (!modal) return;
            if (window.bootstrap?.Modal) {
                window.bootstrap.Modal.getInstance(modal)?.hide();
            } else {
                modal.classList.remove('show');
                modal.style.display = 'none';
                document.querySelector('.modal-backdrop')?.remove();
            }
        },
        submit() {
            const tags = [...this.selectedTags].filter(Boolean);
            tags.forEach((t) => {
                if (!this.blogStore.$state.localTags.includes(t)) {
                    this.blogStore.$state.localTags.push(t);
                }
            });
            if (tags.length) {
                this.blogStore.$state.activeTag = tags[0];
            }
            this.closeModal();
        },
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>