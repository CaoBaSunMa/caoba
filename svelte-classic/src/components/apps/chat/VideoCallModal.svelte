<script>
  import { chatStore } from '../../../lib/stores/chatStore'; // Adjust path as needed
  import { Mic, Video, Phone, UserPlus, MoreVertical, Maximize, Minimize, HelpCircle } from 'svelte-feather-icons';
  import avatar13 from '../../../assets/img/avatar13.jpg'; // Adjust path as needed
  import avatar2 from '../../../assets/img/avatar2.jpg'; // Fallback avatar, adjust path
  import { page } from '$app/stores'; // For SvelteKit routing, or use svelte-spa-router
  import { get } from 'svelte/store';

  let fullScreen = false;

  // Toggle fullscreen mode
  function toggleFullScreen() {
    fullScreen = !fullScreen;
  }

  // Check route (assuming SvelteKit or svelte-spa-router)
  $: chatsRoute = $page.url.pathname.includes('apps/chat/chats');
  $: groupRoutes = $page.url.pathname.includes('apps/chat/group');

  // If not using a router, assume group call for simplicity
  // Comment out the above and uncomment below if no router:
  // const groupRoutes = true;
  // const chatsRoute = false;
</script>

<div id="video_call" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
  <div
    class="modal-dialog modal-dialog-centered modal-xl chatapp-call-window"
    class:modal-fullscreen={fullScreen}
    role="document"
  >
    <div class="modal-content bg-primary-dark-5">
      <div class="modal-header header-wth-bg bg-primary-dark-3">
        <h6 class="modal-title text-muted">caoba 视频通话</h6>
        <div class="modal-action">
          <a
            href="#"
            class="btn btn-xs btn-icon btn-rounded btn-link link-secondary modal-fullscreen-togglable"
            on:click|preventDefault={toggleFullScreen}
          >
            <span class="icon">
              {#if fullScreen}
                <Minimize size="16" />
              {:else}
                <Maximize size="16" />
              {/if}
            </span>
          </a>
          <a
            href="#"
            class="btn btn-xs btn-icon btn-rounded btn-link link-secondary"
            on:click|preventDefault
          >
            <span class="icon">
              <HelpCircle size="16" />
            </span>
          </a>
        </div>
      </div>
      {#if chatsRoute}
        <div class="modal-body">
          {#if $chatStore.avatar.type === 'img'}
            <div class="avatar avatar-xxxl avatar-rounded d-20">
              <img src={$chatStore.avatar.src} alt="user" class="avatar-img" />
            </div>
          {:else if $chatStore.avatar.type === 'init'}
            <div class="avatar avatar-{$chatStore.avatar.variant} avatar-rounded avatar-xxxl d-20">
              <span class="initial-wrap">{$chatStore.avatar.title}</span>
            </div>
          {/if}
          <h3 class="text-white mt-3">{$chatStore.userName}</h3>
          <p class="text-white">
            正在视频呼叫<span class="one">.</span><span class="two">.</span><span class="three">.</span>
          </p>
        </div>
      {:else if groupRoutes}
        <div class="modal-body">
          {#if $chatStore.grpAvatar.type === 'img'}
            <div class="avatar avatar-xxxl avatar-rounded d-20">
              <img src={$chatStore.grpAvatar.src} alt="user" class="avatar-img" />
            </div>
          {:else if $chatStore.grpAvatar.type === 'init'}
            <div class="avatar avatar-{$chatStore.grpAvatar.variant} avatar-rounded avatar-xxxl d-20">
              <span class="initial-wrap">{$chatStore.grpAvatar.title}</span>
            </div>
          {/if}
          <h3 class="text-white mt-3">{$chatStore.groupName}</h3>
          <p class="text-white">
            正在视频呼叫<span class="one">.</span><span class="two">.</span><span class="three">.</span>
          </p>
        </div>
      {:else}
        <div class="modal-body">
          <div class="avatar avatar-xxxl avatar-rounded d-20">
            <img src={avatar2} alt="user" class="avatar-img" />
          </div>
          <h3 class="text-white mt-3">艾伦·里克曼</h3>
          <p class="text-white">
            正在视频呼叫<span class="one">.</span><span class="two">.</span><span class="three">.</span>
          </p>
        </div>
      {/if}
      <div class="modal-footer">
        <ul class="chatapp-call-action hk-list">
          <li>
            <button class="btn btn-icon btn-lg btn-rounded btn-dark">
              <span class="icon">
                <Mic size="20" />
              </span>
            </button>
          </li>
          <li>
            <button class="btn btn-icon btn-lg btn-rounded btn-dark">
              <span class="icon">
                <Video size="20" />
              </span>
            </button>
          </li>
          <li>
            <button
              class="btn btn-icon btn-lg btn-rounded btn-danger"
              data-bs-dismiss="modal"
            >
              <span class="icon">
                <Phone size="20" />
              </span>
            </button>
          </li>
          <li>
            <button class="btn btn-icon btn-lg btn-rounded btn-dark">
              <span class="icon">
                <UserPlus size="20" />
              </span>
            </button>
          </li>
          <li>
            <button class="btn btn-icon btn-lg btn-rounded btn-dark">
              <span class="icon">
                <MoreVertical size="20" />
              </span>
            </button>
          </li>
        </ul>
        <div class="avatar avatar-lg avatar-rounded chatapp-caller-img">
          <img src={avatar13} alt="user" class="avatar-img" />
        </div>
      </div>
    </div>
  </div>
</div>
