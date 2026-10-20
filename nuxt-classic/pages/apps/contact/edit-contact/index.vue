<template>
  <div class="hk-pg-body py-0">
    <div :class="['contactapp-wrap', { 'contactapp-sidebar-toggle': showSidebar }]">
      <ContactSidebar />

      <div class="contactapp-content">
        <div class="contactapp-detail-wrap">
          <EditContactHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
          <EditContactBody />
        </div>

        <!-- Profile Information -->
        <ProfileInfo />
        <!-- /Profile Information -->

        <!-- More Info -->
        <MoreInfo />
        <!-- /More Info -->

        <!-- Tags -->
        <Tags />
        <!-- /Tags -->

        <!-- Add Bio -->
        <AddBio />
        <!-- /Add Bio -->

        <!-- Create New Contact -->
        <CreateNewContact />
        <!-- /Create New Contact -->

        <!-- Add Label -->
        <AddLabel />
        <!-- Add Label -->

        <!-- Add Tag -->
        <AddTag />
        <!-- Add Tag -->
      </div>
    </div>
  </div>
</template>

<script>
import EditContactBody from "@/components/contact/edit-contact/EditContactBody.vue";
import ProfileInfo from "@/components/contact/edit-contact/ProfileInfo.vue";
import MoreInfo from "@/components/contact/edit-contact/MoreInfo.vue";
import Tags from "@/components/contact/edit-contact/Tags.vue";
import AddBio from "@/components/contact/edit-contact/AddBio.vue";
//sub-components
import ContactSidebar from "@/components/contact/ContactSidebar.vue";
import CreateNewContact from "@/components/contact/CreateNewContact.vue";
import AddLabel from "@/components/contact/AddLabel.vue";
import AddTag from "@/components/contact/AddTag.vue";
import EditContactHeader from "~/components/contact/edit-contact/EditContactHeader.vue";

export default {
  name: "EditContact",
  components: {
    ContactSidebar,
    EditContactHeader,
    EditContactBody,
    ProfileInfo,
    MoreInfo,
    Tags,
    AddBio,
    CreateNewContact,
    AddLabel,
    AddTag,
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

<style scoped>
/* Your component's styles go here */
</style>
