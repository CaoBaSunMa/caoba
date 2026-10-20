<template>
    <div>
        <Multiselect v-model="selected" :options="options" :multiple="true" :close-on-select="false" :clearable="false"
            :max-height="150" :taggable="true" @tag="addTag" class="multiselect-custom" />
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css'

export default {
    components: { Multiselect },
    emits: ['change', 'update:selectedValue'],
    props: {
        option: Array,
        selectedValue: Array
    },
    data() {
        return {
            selected: this.selectedValue,
            options: this.option,
        };
    },
    watch: {
        selected: {
            deep: true,
            handler(val) {
                const list = Array.isArray(val) ? [...val] : [];
                this.$emit('change', list);
                this.$emit('update:selectedValue', list);
            },
        },
    },
    methods: {
        addTag(newTag) {
            this.options.push(newTag);
            this.selected.push(newTag);
        },
    },
};
</script>

<style>
.multiselect-custom .multiselect__control {
    border-color: #007D88;
}

.multiselect-custom .multiselect__tag {
    background-color: #f7f7f7;
    color: #262a2e;
}


.multiselect-custom .multiselect__tag-icon::after {
    color: #626669;
}


.multiselect__tag-icon:focus::after,
.multiselect__tag-icon:hover::after {
    color: black;
}

.multiselect-custom .multiselect__option--highlight {
    background: #f7f7f7;
    color: black
}

.multiselect-custom .multiselect__option--highlight::after {
    content: " \2295";
    background: whitesmoke;
    color: #41b883;
    font-size: 30px
}

.multiselect-custom .multiselect__option--selected.multiselect__option--highlight::after {
    content: "\2297";
    background: whitesmoke;
    color: #ff6a6a;
    font-size: 30px
}
</style>