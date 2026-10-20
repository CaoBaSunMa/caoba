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
      </div>
    </div>
  </div>
</template>

<script>
import ContactSidebar from "@/components/contact/ContactSidebar.vue";
import ContactHeader from "@/components/contact/ContactHeader.vue";
import ContactBody from "@/components/contact/contact-list/ContactBody.vue";
import AddLabel from "@/components/contact/AddLabel.vue";
import AddTag from "@/components/contact/AddTag.vue";
import CreateNewContact from "@/components/contact/CreateNewContact.vue";

export default {
  components: {
    ContactHeader,
    ContactBody,
    ContactSidebar,
    AddLabel,
    AddTag,
    CreateNewContact,
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
