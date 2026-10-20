<script>
    import { createEventDispatcher } from 'svelte';
    import avatar8 from '../../../../assets/img/avatar8.jpg';
    import { MoreVerticalIcon, UsersIcon, XIcon } from 'svelte-feather-icons';
  
    export let showContact = false;
    const dispatch = createEventDispatcher();
  
    function onHideContact() {
      dispatch('hideContact');
    }
  
    function onClose() {
      dispatch('close');
    }
  </script>
  
  <header>
    {#if showContact}
      <div class="input-group contact-search-wrap">
        <input
          type="text"
          class="form-control contact-search shadow-none"
          placeholder="搜索联系人"
        />
        <a
          href="#"
          id="contact_list_close"
          class="btn btn-sm btn-icon btn-dark btn-rounded"
          on:click|preventDefault={onHideContact}
        >
          <span class="icon">
            <span class="feather-icon">
              <XIcon />
            </span>
          </span>
        </a>
      </div>
    {:else}
      <div class="media-wrap">
        <div class="media">
          <div class="media-head">
            <div class="avatar avatar-sm avatar-rounded position-relative">
              <img src={avatar8} alt="user" class="avatar-img" />
              <span
                class="badge badge-success badge-indicator badge-indicator-lg badge-indicator-nobdr position-bottom-end-overflow-1"
              ></span>
            </div>
          </div>
          <div class="media-body">
            <div class="user-name">伊芙·小野</div>
            <div class="user-status">助理经理</div>
          </div>
        </div>
      </div>
    {/if}
    {#if !showContact}
      <div class="chat-popup-action d-flex">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a
          href="#"
          data-bs-toggle="dropdown"
          class="btn btn-sm btn-icon btn-dark btn-rounded"
        >
          <span class="icon">
            <span class="feather-icon">
              <MoreVerticalIcon />
            </span>
          </span>
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            <i class="dropdown-icon zmdi zmdi-notifications-active"></i>
            <span>发送推送通知</span>
          </a>
          <a class="dropdown-item" href="#">
            <i class="dropdown-icon zmdi zmdi-volume-off"></i>
            <span>静音聊天</span>
          </a>
        </div>
        <a
          href="#"
          id="user_list"
          class="btn btn-sm btn-icon btn-dark btn-rounded"
          on:click|preventDefault={onHideContact}
        >
          <span class="icon">
            <span class="feather-icon">
              <UsersIcon />
            </span>
          </span>
        </a>
        <a
          href="#"
          id="close_popup"
          class="btn btn-sm btn-icon btn-dark btn-rounded"
          on:click|preventDefault={onClose}
        >
          <span class="icon">
            <span class="feather-icon">
              <XIcon />
            </span>
          </span>
        </a>
      </div>
    {/if}
  </header>
  
