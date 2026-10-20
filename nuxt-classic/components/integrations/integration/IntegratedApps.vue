<template>
  <div class="integrations-body">
    <simplebar class="nicescroll-bar">
      <BContainer class="mt-md-7 mt-3">
        <BRow>
          <BCol xxl="3" xl="4" md="6" v-for="(app, index) in integratedApps" :key="index">
            <BCard no-body class="card-border card-int mb-4">
              <BCardBody>
                <div class="d-flex justify-content-between align-items-start mb-3">
                  <div
                    v-for="(image, indx) in app.img"
                    :key="indx"
                    :class="['avatar avatar-sm mb-3 avatar-logo', image.variant]"
                  >
                    <span
                      v-if="image.type === 'symbol'"
                      :class="['initial-wrap', image.bg]"
                    >
                      <img :src="image.src" :alt="image.type" />
                    </span>
                    <img
                      v-if="image.type === 'logo'"
                      :src="image.src"
                      class="avatar-img"
                      :alt="image.type"
                    />
                    <span v-if="image.type === 'initAvt'" class="initial-wrap">{{
                      image.title
                    }}</span>
                  </div>
                  <a
                    v-if="app.integrated"
                    href="#"
                    class="btn btn-block btn-primary flex-grow-0 flex-shrink-0 flex-basis-0"
                    >已连接</a
                  >
                  <a
                    v-else
                    href="#"
                    class="btn btn-block btn-outline-secondary flex-grow-0 flex-shrink-0 flex-basis-0"
                    >连接</a
                  >
                </div>
                <div class="app-name">{{ app.name }}</div>
                <p class="p-sm multine-ellipsis">{{ app.details }}</p>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </BContainer>
    </simplebar>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { integrationAPI } from "~/services/modules";

const integratedApps = ref([]);

onMounted(async () => {
  try {
    const res = await integrationAPI.getIntegrations();
    integratedApps.value = (res.data || []).map(app => ({
      id: app.id,
      name: app.appName,
      category: app.category,
      details: app.status === 'CONNECTED' ? '已连接' : '未连接',
      integrated: app.status === 'CONNECTED',
      img: [{ type: 'logo', src: app.appIcon, bg: 'bg-primary' }],
    }));
  } catch (e) {
    console.error('加载集成应用失败:', e);
  }
});
</script>
