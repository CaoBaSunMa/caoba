<script>
    import { emailStore } from '$lib/stores/emailStore';
    import EmailSidebar from '$lib/components/email/EmailSidebar.svelte';
    import InboxList from '$lib/components/email/InboxList.svelte';
    import EmailHeader from '$lib/components/email/EmailHeader.svelte';
    import EmailBody from '$lib/components/email/EmailBody.svelte';
    import ComposeEmail from '$lib/components/email/ComposeEmail.svelte';
    import AddCategory from '$lib/components/email/AddCategory.svelte';
  
    let showSidebar = true;
  
    function toggleSidebar() {
      showSidebar = !showSidebar;
    }
  </script>
  
  <div class="hk-pg-body py-0">
    <div
      class="emailapp-wrap"
      class:emailapp-sidebar-toggle={!showSidebar}
      class:emailapp-slide={$emailStore.openEmail}
    >
      <EmailSidebar />
      <div class="emailapp-content">
        <InboxList {showSidebar} on:toggle-sidebar={toggleSidebar} />
        <div class="emailapp-single-email">
          <EmailHeader />
          <EmailBody />
        </div>
      </div>
      <ComposeEmail />
      <AddCategory />
    </div>
  </div>
  