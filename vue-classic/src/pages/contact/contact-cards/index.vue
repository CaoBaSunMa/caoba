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
        <!-- Edit modals (个人资料信息 / 更多信息 / 标签 / 个人简介) -->
        <ProfileInfo />
        <MoreInfo />
        <Tags />
        <AddBio />
        <!-- 委托访问 -->
        <DelegateAccess />
      </div>
    </div>
  </div>
</template>

<script>
import ContactHeader from "../ContactHeader.vue";
import ContactCardBody from "./ContactCardBody.vue";
import ContactSidebar from "../ContactSidebar.vue";
import AddLabel from "../AddLabel.vue";
import AddTag from "../AddTag.vue";
import CreateNewContact from "../CreateNewContact.vue";
import ContactDetails from "./ContactDetails.vue";
import ProfileInfo from "../edit-contact/ProfileInfo.vue";
import MoreInfo from "../edit-contact/MoreInfo.vue";
import Tags from "../edit-contact/Tags.vue";
import AddBio from "../edit-contact/AddBio.vue";
import DelegateAccess from "./DelegateAccess.vue";

export default {
  components: {
    ContactCardBody,
    ContactHeader,
    ContactSidebar,
    AddLabel,
    AddTag,
    CreateNewContact,
    ContactDetails,
    ProfileInfo,
    MoreInfo,
    Tags,
    AddBio,
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