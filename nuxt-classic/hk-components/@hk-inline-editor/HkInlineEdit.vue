<template>
    <div :class="['d-flex', 'align-items-center', 'inline-editable-wrap', containerClass]">
        <button v-if="!editable && left" type="button"
            class="btn btn-sm btn-icon btn-flush-light btn-rounded flush-soft-hover edit-tyn ms-1" @click="onEdit">
            <span className="icon">
                <span className="feather-icon">
                    <feather-icon name="edit-2" />
                </span>
            </span>
        </button>

        <span :id="id" :contenteditable="editable" @blur="blurEle" :class="['form-label', className, as]">
            {{ value }}
        </span>

        <button v-if="!editable && !left" type="button"
            class="btn btn-sm btn-icon btn-flush-light btn-rounded flush-soft-hover edit-tyn ms-1" @click="onEdit">
            <span className="icon">
                <span className="feather-icon">
                    <feather-icon name="edit-2" />
                </span>
            </span>
        </button>
    </div>
</template>

<script>
import { nextTick, ref } from 'vue';

export default {
    props: {
        value: String,
        as: {
            type: String,
            default: 'div'
        },
        className: String,
        containerClass: String,
        id: {
            type: [String, Number],
            required: true
        },
        left: Boolean
    },
    setup(props) {
        const editable = ref(false);

        const onEdit = () => {
            editable.value = true;
            // Focus the element and move cursor to the end
            nextTick(() => {
                const el = document.getElementById(props.id);
                el.focus();
                if (typeof window.getSelection != "undefined"
                    && typeof document.createRange != "undefined") {
                    var range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            });
        };

        const blurEle = () => {
            editable.value = false;
        };

        return { editable, onEdit, blurEle };
    },

};
</script>