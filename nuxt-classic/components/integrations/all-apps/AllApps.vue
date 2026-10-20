<template>
  <div class="integrations-body">
    <simplebar class="nicescroll-bar">
      <BContainer class="mt-md-7 mt-3">
        <template v-for="(data, index) in appDetails" :key="index">
          <div
            class="d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between my-5"
          >
            <div>
              <h5>{{ data.type }}</h5>
              <p>{{ data.description }}</p>
            </div>
            <a href="#" class="fs-7 flex-shrink-0"><u>查看全部</u></a>
          </div>
          <BRow>
            <BCol xxl="3" xl="4" md="6" v-for="(app, index) in data.apps" :key="index">
              <BCard no-body class="card card-border card-int mb-4">
                <BCardBody>
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
                  <div class="app-name">{{ app.name }}</div>
                  <div class="app-cat">{{ app.category }}</div>
                  <p class="p-sm multine-ellipsis">{{ app.details }}</p>
                </BCardBody>
                <BCardFooter class="justify-content-between border-0">
                  <span class="d-flex align-items-center fs-8">
                    <i class="ri-download-cloud-2-line fs-7 me-2"></i>
                    {{ app.downloads }} 次下载
                  </span>
                  <BButton variant="outline-secondary" size="sm" href="#">
                    连接
                  </BButton>
                </BCardFooter>
              </BCard>
            </BCol>
          </BRow>
        </template>
      </BContainer>
    </simplebar>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { integrationAPI } from "~/services/modules";

const appDetails = ref([]);

onMounted(async () => {
  try {
    const res = await integrationAPI.getIntegrations();
    // Group apps by category
    const apps = (res.data || []).map(app => ({
      id: app.id,
      name: app.appName,
      category: app.category,
      details: app.status === 'CONNECTED' ? '已连接' : '未连接',
      downloads: Math.floor(Math.random() * 100) + 'K',
      img: [{ type: 'logo', src: app.appIcon, bg: 'bg-primary' }],
    }));
    // Group by category
    const grouped = {};
    apps.forEach(app => {
      if (!grouped[app.category]) grouped[app.category] = [];
      grouped[app.category].push(app);
    });
    appDetails.value = Object.entries(grouped).map(([type, apps]) => ({
      type,
      description: `${type}相关的应用`,
      apps,
    }));
  } catch (e) {
    console.error('加载应用详情失败:', e);
  }
});
</script>
