<template>
  <div class="hk-pg-body py-0">
    <div :class="['contactapp-wrap', { 'contactapp-sidebar-toggle': showSidebar }]">
      <ContactSidebar />

      <div class="contactapp-content">
        <div class="contactapp-detail-wrap">
          <!-- header here -->
          <contact-header :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
          <ContactCardBody />
        </div>
        <!-- Contact Details -->
        <ContactDetails />
        <!-- /Contact Details -->
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
import ContactHeader from "@/components/contact/ContactHeader.vue";
import ContactCardBody from "@/components/contact/contact-cards/ContactCardBody.vue";
import ContactSidebar from "@/components/contact/ContactSidebar.vue";
import AddLabel from "@/components/contact/AddLabel.vue";
import AddTag from "@/components/contact/AddTag.vue";
import CreateNewContact from "@/components/contact/CreateNewContact.vue";
import ContactDetails from "@/components/contact/contact-cards/ContactDetails.vue";

export default {
  components: {
    ContactCardBody,
    ContactHeader,
    ContactSidebar,
    AddLabel,
    AddTag,
    CreateNewContact,
    ContactDetails,
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
