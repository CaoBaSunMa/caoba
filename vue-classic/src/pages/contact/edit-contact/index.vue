<template>
    <div class="hk-pg-body py-0">
        <div :class="['contactapp-wrap', { 'contactapp-sidebar-toggle': showSidebar }]">

            <ContactSidebar />

            <div class="contactapp-content">
                <div class="contactapp-detail-wrap">
                    <ContactHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
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
import ContactSidebar from '../ContactSidebar.vue'
import ContactHeader from './ContactHeader.vue'
import EditContactBody from './EditContactBody.vue'
import ProfileInfo from './ProfileInfo.vue'
import MoreInfo from './MoreInfo.vue'
import Tags from './Tags.vue'
import AddBio from './AddBio.vue'
import CreateNewContact from '../CreateNewContact.vue'
import AddLabel from '../AddLabel.vue'
import AddTag from '../AddTag.vue'
import { useContactStore } from "@/stores/contactStore";

export default {
    name: 'EditContact',
    components: {
        ContactSidebar,
        ContactHeader,
        EditContactBody,
        ProfileInfo,
        MoreInfo,
        Tags,
        AddBio,
        CreateNewContact,
        AddLabel,
        AddTag,
    },
    setup() {
        const contactStore = useContactStore();
        return { contactStore };
    },
    data() {
        return {
            showSidebar: false,
        };
    },
    created() {
        this.loadContact();
    },
    watch: {
        // SPA 内从一个联系人导航到另一个联系人时，路由参数变化
        // 但组件实例被复用，created 不会再次执行，需监听参数重新加载
        '$route.params.id'() {
            this.loadContact();
        },
    },
    methods: {
        loadContact() {
            const id = Number(this.$route.params.id);
            if (id) {
                this.contactStore.fetchById(id).catch(() => {
                    this.$router.replace('/apps/contact/contact-list');
                });
            }
        },
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        },
    },
}
</script>

<style scoped>
/* Your component's styles go here */
</style>