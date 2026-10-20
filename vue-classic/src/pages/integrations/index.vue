<template>
  <div class="hk-pg-body py-0">
    <div
      :class="['integrationsapp-wrap', { 'integrationsapp-sidebar-toggle': showSidebar }]"
    >
      <AppSidebar
        :activeCategory="activeCategory"
        @setCategory="setCategory"
      />
      <div class="integrationsapp-content">
        <div class="integrationsapp-detail-wrap">
          <RouterView v-slot="{ Component }">
            <component
              :is="Component"
              :showSidebar="showSidebar"
              :activeCategory="activeCategory"
              @toggle-sidebar="toggleSidebar"
              @setCategory="setCategory"
            />
          </RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from "./AppSidebar.vue";

export default {
  name: "Integrations",
  components: {
    AppSidebar,
  },
  data() {
    return {
      showSidebar: false,
      activeCategory: null,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    setCategory(cat) {
      this.activeCategory = this.activeCategory === cat ? null : cat;
    },
  },
};
</script>
