<template>
  <div class="hk-pg-body py-0">
    <div :class="['contactapp-wrap', { 'contactapp-sidebar-toggle': showSidebar }]">
      <ContactSidebar />
      <div class="contactapp-content">
        <div class="contactapp-detail-wrap">
          <contact-header :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
          <contact-body />
        </div>
        <!-- Create New Contact -->
        <CreateNewContact />
        <!-- /Create New Contact -->
        <!-- Add Label -->
        <AddLabel />
        <!-- Add Tag -->
        <AddTag />
        <!-- Add Tag -->
        <!-- 委托访问 -->
        <DelegateAccess />
      </div>
    </div>
  </div>
</template>

<script>
import ContactHeader from "../ContactHeader.vue";
import ContactSidebar from "../ContactSidebar.vue";
import ContactBody from "./ContactBody.vue";
import AddLabel from "../AddLabel.vue";
import AddTag from "../AddTag.vue";
import CreateNewContact from "../CreateNewContact.vue";
import DelegateAccess from "../contact-cards/DelegateAccess.vue";

export default {
  components: {
    ContactHeader,
    ContactBody,
    ContactSidebar,
    AddLabel,
    AddTag,
    CreateNewContact,
    DelegateAccess,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
