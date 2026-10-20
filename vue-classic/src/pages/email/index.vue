<template>
  <div class="hk-pg-body py-0">
    <div
      :class="[
        'emailapp-wrap',
        { 'emailapp-sidebar-toggle': !showSidebar },
        { 'emailapp-slide': emailStore.$state.openEmail },
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

<script>
import { useEmailStore } from "@/stores/emailStore";
import EmailSidebar from "./EmailSidebar.vue";
import InboxList from "./InboxList.vue";
import EmailHeader from "./EmailHeader.vue";
import EmailBody from "./EmailBody.vue";
import ComposeEmail from "./ComposeEmail.vue";
import AddCategory from "./AddCategory.vue";

export default {
  name: "Email",
  components: {
    EmailSidebar,
    InboxList,
    EmailHeader,
    EmailBody,
    ComposeEmail,
    AddCategory,
  },
  setup() {
    const emailStore = useEmailStore();
    return {
      emailStore,
    };
  },
  data() {
    return {
      showSidebar: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
