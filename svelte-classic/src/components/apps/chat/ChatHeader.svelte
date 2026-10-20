<!-- <script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { get } from "svelte/store";
  import avatar2 from "../../../assets/img/avatar2.jpg";
  import { layoutStore } from "../../../lib/stores/layout";
  import { chatStore } from "../../../lib/stores/chatStore";
  import {
    ArchiveIcon,
    ChevronLeftIcon,
    ExternalLinkIcon,
    InfoIcon,
    MoreVerticalIcon,
    PhoneIcon,
    SlashIcon,
    StarIcon,
    UserPlusIcon,
    VideoIcon,
  } from "svelte-feather-icons";

  export let infoState = false;
  export let infoToggle = () => {};

  let chatState;

  onMount(() => {
    chatState = chatStore.getState();
  });

  // Function to handle store updates (if needed)
  chatStore.subscribe((state) => {
    chatState = state;
  });

  const chatsRoute = () => get(page).url.pathname.includes("/apps/chat/chats");
  const groupRoutes = () => get(page).url.pathname.includes("/apps/chat/group");
  const contactsRoute = () =>
    get(page).url.pathname.includes("/apps/chat/contact");

  const avatarClasses = () => {
    return chatState.grpAvatar.type === "img"
      ? [
          "avatar",
          "avatar-sm",
          "position-relative",
          "avatar-rounded",
          "avatar-primary",
        ]
      : [
          "avatar",
          "avatar-sm",
          "position-relative",
          "avatar-rounded",
          `avatar-${chatState.grpAvatar.variant}`,
        ];
  };

  const backToUserList = () => {
    chatStore.toggleStartChat();
    layoutStore.toggleTopNav();
  };
</script>

<header class="chat-header">
  <a
    id="back_user_list"
    class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover back-user-list"
    href="#"
    on:click={backToUserList}
  >
    <span class="icon">
      <span class="feather-icon">
        <ChevronLeftIcon />
      </span>
    </span>
  </a>

  {#if chatsRoute()}
    <div class="media">
      <div class="media-head">
        {#if chatState.avatar.type === "img"}
          <div class="avatar avatar-sm avatar-rounded position-relative">
            <img src={chatState.avatar.src} alt="user" class="avatar-img" />
          </div>
        {:else}
          <div
            class="avatar avatar-sm {`avatar-${chatState.avatar.variant}`} avatar-rounded"
          >
            <span class="initial-wrap">{chatState.avatar.title}</span>
          </div>
        {/if}
        {#if chatState.status === "Online" || chatState.status === "Typing"}
          <span
            class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
          />
        {/if}
      </div>
      <div class="media-body">
        <div class="user-name">{chatState.userName}</div>
        <div class="user-status">
          {chatState.status}
          {#if chatState.status === "Typing"}<span class="one">.</span><span
              class="two">.</span
            ><span class="three">.</span>{/if}
        </div>
      </div>
    </div>
  {/if}


  <div class="chat-options-wrap">
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-none d-xl-block"
      href="#"
      data-bs-toggle="modal"
      data-bs-target="#invite_people"
    >
      <span
        class="icon"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="Invite people"
      >
        <span class="feather-icon">
          <UserPlusIcon />
        </span>
      </span>
    </a>
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-none d-xl-block"
      href="#"
      data-bs-toggle="modal"
      data-bs-target="#audio_call"
    >
      <span
        class="icon"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="Audio call"
      >
        <span class="feather-icon">
          <PhoneIcon />
        </span>
      </span>
    </a>
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-none d-xl-block"
      href="#"
      data-bs-toggle="modal"
      data-bs-target="#video_call"
    >
      <span
        class="icon"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="Video Call"
      >
        <span class="feather-icon">
          <VideoIcon />
        </span>
      </span>
    </a>
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover chatapp-info-toggle"
      href="#"
    >
      <span
        class="icon"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="Info"
      >
        <span class="feather-icon">
          <InfoIcon />
        </span>
      </span>
    </a>
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
      href="#"
      data-bs-toggle="dropdown"
    >
      <span
        class="icon"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="More"
      >
        <span class="feather-icon">
          <MoreVerticalIcon />
        </span>
      </span>
    </a>
    <div class="dropdown-menu dropdown-menu-end">
      <a
        class="d-xl-none dropdown-item"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#invite_people"
      >
        <span class="feather-icon dropdown-icon">
          <UserPlusIcon />
        </span>
        <span>邀请成员</span>
      </a>
      <a
        class="d-xl-none dropdown-item"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#audio_call"
      >
        <span class="feather-icon dropdown-icon">
          <PhoneIcon />
        </span>
        <span>语音通话</span>
      </a>
      <a
        class="d-xl-none dropdown-item"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#video_call"
      >
        <span class="feather-icon dropdown-icon">
          <VideoIcon />
        </span>
        <span>视频通话</span>
      </a>
      <div class="d-xl-none dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <StarIcon />
        </span>
        <span>星标消息</span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <ArchiveIcon />
        </span>
        <span>归档消息</span>
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <SlashIcon />
        </span>
        <span>屏蔽内容</span></a
      >
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <ExternalLinkIcon />
        </span>
        <span>反馈</span>
      </a>
    </div>
    
  </div>
</header> -->

<script>
  import { onMount } from "svelte";
  import {
    chatStore,
    chatActions,
  } from "../../../lib/stores/groupChatStore.js";
  // import { ChevronLeft, UserPlus, Phone, Video, Info, MoreVertical, ChevronDown, ChevronUp } from 'lucide-svelte';
  import {
    ArchiveIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronUpIcon,
    ExternalLinkIcon,
    InfoIcon,
    MoreVerticalIcon,
    PhoneIcon,
    SlashIcon,
    StarIcon,
    UserPlusIcon,
    VideoIcon,
  } from "svelte-feather-icons";
  import HkTooltip from "../../../hk-components/@hk-tooltip/HkTooltip.svelte";

  let { infoState = false, infoToggle } = $props();
  let chatState = $state({});
  let topNavCollapse = $state(false);

  let chatsRoute = $state(false);
  let groupRoutes = $state(false);
  let contactsRoute = $state(false);

  onMount(() => {
    const unsubscribe = chatStore.subscribe((value) => {
      chatState = value;
    });

    // Mock route detection - replace with actual routing logic if needed
    const currentPath = window.location.pathname;
    chatsRoute = currentPath.includes("/chats");
    groupRoutes = currentPath.includes("/group");
    contactsRoute = currentPath.includes("/contact");

    return unsubscribe;
  });

  function toggleInfo() {
    if (infoToggle) {
      infoToggle();
    }
  }

  function backToUserList() {
    chatActions.toggleStartChat();
  }

  function toggleTopNav() {
    topNavCollapse = !topNavCollapse;
  }
</script>

<!-- <header class="chat-header">
  <button
    class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover back-user-list"
    onclick={backToUserList}
  >
    <span class="icon">
      <span class="feather-icon">
        <ChevronLeftIcon />
      </span>
    </span>
  </button>

  <div class="media">
    <div class="media-head">
      {#if chatState.grpAvatar?.type === "img"}
        <div
          class="avatar avatar-sm position-relative avatar-rounded avatar-primary"
        >
          <img
            src={chatState.grpAvatar.src || "/placeholder.svg"}
            alt="user"
            class="avatar-img"
          />
          <div
            class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
          >
            <div class="badge-icon-wrap">
              <i class="ri-group-fill text-light"></i>
            </div>
          </div>
        </div>
      {:else if chatState.grpAvatar?.type === "init"}
        <div
          class="avatar avatar-sm position-relative avatar-rounded avatar-{chatState
            .grpAvatar.variant}"
        >
          <span class="initial-wrap">{chatState.grpAvatar.title}</span>
          <div
            class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
          >
            <div class="badge-icon-wrap">
              <i class="ri-group-fill text-light"></i>
            </div>
          </div>
        </div>
      {/if}
    </div>
    <div class="media-body">
      <div class="user-name">{chatState.groupName || "Select a group"}</div>
      <div class="user-status">{chatState.grpStatus || "No status"}</div>
    </div>
  </div>

  <div class="chat-options-wrap">
    <button
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-none d-xl-block"
      title="Invite people"
    >
      <UserPlusIcon />
    </button>

    <button
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-none d-xl-block"
      title="Audio call"
    >
      <PhoneIcon />
    </button>

    <button
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-none d-xl-block"
      title="Video Call"
    >
      <VideoIcon />
    </button>

    <button
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover chatapp-info-toggle {infoState
        ? 'active'
        : ''}"
      onclick={toggleInfo}
      title="Info"
    >
      <InfoIcon />
    </button>

    <div class="dropdown">
      <button
        class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
        type="button"
        data-bs-toggle="dropdown"
        title="More"
      >
        <MoreVerticalIcon />
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <a class="d-xl-none dropdown-item" href="#">
            <UserPlusIcon class="dropdown-icon" />
            <span>邀请成员</span>
          </a>
        </li>
        <li>
          <a class="d-xl-none dropdown-item" href="#">
            <PhoneIcon class="dropdown-icon" />
            <span>语音通话</span>
          </a>
        </li>
        <li>
          <a class="d-xl-none dropdown-item" href="#">
            <VideoIcon class="dropdown-icon" />
            <span>视频通话</span>
          </a>
        </li>
        <li><hr class="d-xl-none dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Stared Messages</a></li>
        <li><a class="dropdown-item" href="#">Archive Messages</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Block Content</a></li>
        <li><a class="dropdown-item" href="#">Feedback</a></li>
      </ul>
    </div>

    <button
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-none d-xl-block"
      onclick={toggleTopNav}
      title="Collapse"
    >
      {#if topNavCollapse}
        <ChevronDownIcon />
      {:else}
        <ChevronUpIcon />
      {/if}
    </button>
  </div>
</header> -->

<header class="chat-header">
  <button
    id="back_user_list"
    class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover back-user-list"
    onclick={backToUserList}
  >
    <span class="icon">
      <span class="feather-icon">
        <ChevronLeftIcon />
      </span>
    </span>
  </button>

  <!-- header for chats -->
  {#if chatsRoute}
    <div class="media">
      <div class="media-head">
        {#if chatState.avatar?.type === "img"}
          <div class="avatar avatar-sm avatar-rounded position-relative">
            <img
              src={chatState.avatar.src || "/placeholder.svg"}
              alt="user"
              class="avatar-img"
            />
            {#if chatState.status === "Online" || chatState.status === "Typing"}
              <span
                class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
              ></span>
            {/if}
          </div>
        {:else}
          <div
            class="avatar avatar-sm avatar-rounded position-relative {`avatar-${chatState.avatar.variant}`}"
          >
            <span class="initial-wrap">{chatState.avatar.title}</span>
            {#if chatState.status === "Online" || chatState.status === "Typing"}
              <span
                class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
              ></span>
            {/if}
          </div>
        {/if}
      </div>
      <div class="media-body">
        <div class="user-name">{chatState.userName}</div>
        <div class="user-status">
          {chatState.status}
          {#if chatState.status === "Typing"}
            <span class="one">.</span><span class="two">.</span><span
              class="three">.</span
            >
          {/if}
        </div>
      </div>
    </div>
  {/if}

  <!-- header for groups -->
  {#if groupRoutes}
    <div class="media">
      <div class="media-head">
        {#if chatState.grpAvatar?.type === "img"}
          <div class="avatar avatar-sm avatar-rounded position-relative">
            <img
              src={chatState.grpAvatar.src || "/placeholder.svg"}
              alt="user"
              class="avatar-img"
            />
            <div
              class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
            >
              <div class="badge-icon-wrap">
                <i class="ri-group-fill text-light"></i>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 141">
                <g transform="translate(-79 -975)">
                  <path
                    d="M70.5,0A70.5,70.5,0,1,1,0,70.5,70.5,70.5,0,0,1,70.5,0Z"
                    transform="translate(79 975)"
                    fill="#fff"
                  />
                  <path
                    d="M55.5,0A55.5,55.5,0,1,1,0,55.5,55.5,55.5,0,0,1,55.5,0Z"
                    transform="translate(94 990)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
        {:else}
          <div
            class="avatar avatar-sm avatar-rounded position-relative {`avatar-${chatState.grpAvatar.variant}`}"
          >
            <span class="initial-wrap">{chatState.grpAvatar.title}</span>
            <div
              class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
            >
              <div class="badge-icon-wrap">
                <i class="ri-group-fill text-light"></i>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 141">
                <g transform="translate(-79 -975)">
                  <path
                    d="M70.5,0A70.5,70.5,0,1,1,0,70.5,70.5,70.5,0,0,1,70.5,0Z"
                    transform="translate(79 975)"
                    fill="#fff"
                  />
                  <path
                    d="M55.5,0A55.5,55.5,0,1,1,0,55.5,55.5,55.5,0,0,1,55.5,0Z"
                    transform="translate(94 990)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
        {/if}
      </div>
      <div class="media-body">
        <div class="user-name">{chatState.groupName || "Select a group"}</div>
        <div class="user-status">{chatState.grpStatus || "No status"}</div>
      </div>
    </div>
  {/if}

  <!-- header for contacts -->
  <!-- {#if contactsRoute}
    <div class="media">
      <div class="media-head">
        <div class="avatar avatar-sm avatar-rounded position-relative">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="user"
            class="avatar-img"
          />
          <span
            class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
          ></span>
        </div>
      </div>
      <div class="media-body">
        <div class="user-name">Alan Rickman</div>
        <div class="user-status">Online</div>
      </div>
    </div>
  {/if} -->

  <div class="chat-options-wrap">
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-none d-xl-block"
      href="#"
      data-bs-toggle="modal"
      data-bs-target="#invite_people"
    >
      <HkTooltip class="icon" title="邀请成员">
        <span class="feather-icon">
          <UserPlusIcon />
        </span>
      </HkTooltip>
    </a>
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-none d-xl-block"
      href="#"
      data-bs-toggle="modal"
      data-bs-target="#audio_call"
    >
      <HkTooltip class="icon" title="语音通话">
        <span class="feather-icon">
          <PhoneIcon />
        </span>
      </HkTooltip>
    </a>
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover d-none d-xl-block"
      href="#"
      data-bs-toggle="modal"
      data-bs-target="#video_call"
    >
      <HkTooltip class="icon" title="视频通话">
        <span class="feather-icon">
          <VideoIcon />
        </span>
      </HkTooltip>
    </a>
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover chatapp-info-toggle {infoState
        ? 'active'
        : ''}"
      onclick={toggleInfo}
    >
      <HkTooltip class="icon" title="信息">
        <span class="feather-icon">
          <InfoIcon />
        </span>
      </HkTooltip>
    </a>
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
      href="#"
      data-bs-toggle="dropdown"
    >
      <HkTooltip class="icon" title="更多">
        <span class="feather-icon">
          <MoreVerticalIcon />
        </span>
      </HkTooltip>
    </a>
    <div class="dropdown-menu dropdown-menu-end">
      <a
        class="d-xl-none dropdown-item"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#invite_people"
      >
        <span class="feather-icon dropdown-icon">
          <UserPlusIcon />
        </span>
        <span>邀请成员</span>
      </a>
      <a
        class="d-xl-none dropdown-item"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#audio_call"
      >
        <span class="feather-icon dropdown-icon">
          <PhoneIcon />
        </span>
        <span>语音通话</span>
      </a>
      <a
        class="d-xl-none dropdown-item"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#video_call"
      >
        <span class="feather-icon dropdown-icon">
          <VideoIcon />
        </span>
        <span>视频通话</span>
      </a>
      <div class="d-xl-none dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <StarIcon />
        </span>
        <span>星标消息</span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <ArchiveIcon />
        </span>
        <span>归档消息</span>
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <SlashIcon />
        </span>
        <span>屏蔽内容</span></a
      >
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <ExternalLinkIcon />
        </span>
        <span>反馈</span>
      </a>
    </div>
    <a
      class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-none d-xl-block"
      href="#"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title=""
      data-bs-original-title="Collapse"
      onclick={toggleTopNav}
    >
      <HkTooltip class="feather-icon" title="收起">
        <span class="icon">
          {#if topNavCollapse}
            <ChevronDownIcon />
          {:else}
            <ChevronUpIcon />
          {/if}
        </span>
      </HkTooltip>
    </a>
  </div>
</header>
