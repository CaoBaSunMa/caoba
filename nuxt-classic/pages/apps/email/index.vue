<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'emailapp-wrap',
        {
          'emailapp-sidebar-toggle': !showSidebar,
          'emailapp-slide': emailStore.$state.openEmail,
        },
      ]"
    >
      <EmailSidebar />
      <div class="emailapp-content">
        <InboxList :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
        <div class="emailapp-single-email">
          <EmailHeader />
          <EmailBody />
        </div>
      </div>
      <!-- Compose email -->
      <ComposeEmail />
      <!-- /Compose email -->

      <!-- Add Category -->
      <AddCategory />
      <!-- /Add Category -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useEmailStore } from '@/stores/emailStore';
import EmailSidebar from '@/components/email/EmailSidebar.vue';
import InboxList from '@/components/email/InboxList.vue';
import EmailHeader from '@/components/email/EmailHeader.vue';
import EmailBody from '@/components/email/EmailBody.vue';
import ComposeEmail from '@/components/email/ComposeEmail.vue';
import AddCategory from '@/components/email/AddCategory.vue';

const emailStore = useEmailStore();
const showSidebar = ref(true);

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}
</script>
