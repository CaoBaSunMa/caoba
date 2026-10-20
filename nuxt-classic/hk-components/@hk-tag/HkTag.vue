<template>
  <div>
    <v-select
      v-model="selectedTags"
      :options="options"
      taggable
      @new-tag="addTag"
      placeholder="Select or add tags"
      multiple
    />
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  components: { vSelect },
  props: {
    option: Array,
    selectedValue: Array,
  },
  data() {
    return {
      selectedTags: this.selectedValue,
      options: this.option,
    };
  },
  methods: {
    addTag(newTag) {
      const tag = newTag.trim();
      if (tag && !this.options.includes(tag)) {
        this.options.push(tag);
      }
      this.selectedTags.push(tag);
    },
  },
};
</script>
