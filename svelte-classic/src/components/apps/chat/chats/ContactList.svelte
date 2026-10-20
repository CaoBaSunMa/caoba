<script>
  import { onDestroy, onMount } from "svelte";
  import { chatStore } from "../../../../lib/stores/chatStore.js";

  import {
    ArchiveIcon,
    BookIcon,
    MessageSquareIcon,
    PlusIcon,
    SettingsIcon,
    StarIcon,
    ToggleRightIcon,
    UserCheckIcon,
    UsersIcon,
  } from "svelte-feather-icons";
  import HkScrollbar from "../../../../hk-components/@hk-scrollbar/HkScrollbar.svelte";

  //Images
  import avatar1 from "../../../../assets/img/avatar1.jpg";
  import avatar8 from "../../../../assets/img/avatar8.jpg";
  import avatar15 from "../../../../assets/img/avatar15.jpg";

  let searchValue = $state("");
  let chatState = $state({});
  let list = $state([]);

  // Subscribe to store and fetch conversations
  onMount(() => {
    chatStore.fetchConversations();
    const unsubscribe = chatStore.subscribe((value) => {
      chatState = value;
      list = (value.conversations || []).map(conv => ({
        id: conv.id,
        name: conv.name || '未命名',
        lastChat: conv.lastMessage || '',
        time: conv.updatedAt ? new Date(conv.updatedAt).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '',
        unread: conv.unread || 0,
        status: 'online',
        avatar: null,
        initAvatar: { title: (conv.name || 'N')[0], variant: 'primary' },
      }));
    });
    return unsubscribe;
  });

  let filteredList = $derived.by(() => {
    if (searchValue.length > 1) {
      return list.filter((item) =>
        item.name.toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return list;
  });

  function startConversation(index, id) {
    const conv = chatState.conversations.find(c => c.id === id);
    if (conv) {
      chatStore.selectConversation(conv);
    }
    if (window.innerWidth <= 991) {
      // Toggle mobile view
    }
  }

  function searchOnChange(event) {
    event.preventDefault();
    searchValue = event.target.value;
  }
</script>

<div class="chatapp-aside">
  <header class="aside-header">
    <a
      class="chatapp-title dropdown-toggle link-dark"
      data-bs-toggle="dropdown"
      href="#"
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <h1>聊天</h1>
    </a>
    <div class="dropdown-menu">
      <router-link class="dropdown-item" to="/apps/chat/chats">
        <span class="feather-icon dropdown-icon">
          <MessageSquareIcon />
        </span>
        <span>聊天记录</span>
      </router-link>
      <router-link class="dropdown-item" to="/apps/chat/contact">
        <span class="feather-icon dropdown-icon">
          <BookIcon />
        </span>
        <span>联系人</span>
      </router-link>
      <router-link class="dropdown-item" to="/apps/chat/groups">
        <span class="feather-icon dropdown-icon">
          <UsersIcon />
        </span>
        <span>群组</span>
      </router-link>
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <ArchiveIcon />
        </span>
        <span>已归档</span>
      </a>
      <a class="dropdown-item" href="#">
        <span class="feather-icon dropdown-icon">
          <StarIcon />
        </span>
        <span>收藏</span>
      </a>
    </div>
    <div class="d-flex">
      <div class="dropdown">
        <a
          href="#"
          class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
          data-bs-toggle="dropdown"
        >
          <span class="icon">
            <span class="feather-icon">
              <SettingsIcon />
            </span>
          </span>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
          <a class="dropdown-item" href="#">
            <span class="feather-icon dropdown-icon">
              <UserCheckIcon />
            </span>
            <span>活跃联系人</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="feather-icon dropdown-icon">
              <MessageSquareIcon />
            </span>
            <span>聊天请求</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="feather-icon dropdown-icon">
              <ArchiveIcon />
            </span><span>已归档的聊天</span>
          </a>
          <a class="dropdown-item" href="#">
            <span class="feather-icon dropdown-icon">
              <ToggleRightIcon />
            </span>
            <span>未读聊天</span>
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">设置</a>
          <a class="dropdown-item" href="#">帮助</a>
          <a class="dropdown-item" href="#">反馈问题 </a>
        </div>
      </div>
      <a
        href="#"
        class="btn btn-icon btn-rounded btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#invite_people"
      >
        <span class="icon">
          <span class="feather-icon">
            <PlusIcon />
          </span>
        </span>
      </a>
    </div>
  </header>
  <HkScrollbar class="aside-body">
    <form class="aside-search" role="search" onsubmit={searchOnChange}>
      <input
        type="text"
        class="form-control"
        placeholder="搜索聊天记录"
        bind:value={searchValue}
      />
    </form>
    <div class="frequent-contact">
      <div class="title-sm text-primary"><span>常用联系人</span></div>
      <ul class="hk-list">
        <li>
          <div
            class="avatar avatar-sm avatar-primary position-relative avatar-rounded"
          >
            <span class="initial-wrap">H</span>
            <div
              class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
            >
              <div class="badge-icon-wrap">
                <i class="ri-group-fill text-light"></i>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                <g
                  data-name="Ellipse 302"
                  transform="translate(8 8)"
                  stroke-width="3"
                >
                  <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor"
                  ></circle>
                  <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor"
                  ></circle>
                </g>
              </svg>
            </div>
          </div>
        </li>
        <li>
          <div
            class="avatar avatar-sm avatar-primary position-relative avatar-rounded"
          >
            <img src={avatar1} alt="user" class="avatar-img" />
            <div
              class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
            >
              <div class="badge-icon-wrap">
                <i class="ri-group-fill text-light"></i>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                <g
                  data-name="Ellipse 302"
                  transform="translate(8 8)"
                  stroke-width="3"
                >
                  <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor"
                  ></circle>
                  <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor"
                  ></circle>
                </g>
              </svg>
            </div>
          </div>
        </li>
        <li>
          <div
            class="avatar avatar-sm avatar-soft-danger avatar-rounded position-relative"
          >
            <span class="initial-wrap">W</span>
            <span
              class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
            ></span>
          </div>
        </li>
        <li>
          <div class="avatar avatar-sm avatar-rounded position-relative">
            <img src={avatar8} alt="user" class="avatar-img" />
            <span
              class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
            ></span>
          </div>
        </li>
        <li>
          <div class="avatar avatar-sm avatar-rounded">
            <img src={avatar15} alt="user" class="avatar-img" />
          </div>
        </li>
      </ul>
    </div>
    <ul class="chat-contacts-list list-group list-group-flush">
      {#each filteredList as elem, index}
        <li
          class="list-group-item"
          onclick={() => startConversation(index, elem.id)}
          onkeydown={() => startConversation(index, elem.id)}
        >
          <div
            class="media {elem.id === chatState.userId
              ? 'active-user'
              : ''} {!elem.unread ? 'read-chat' : ''}"
          >
            <div class="media-head">
              {#if elem.avatar}
                <div class="avatar avatar-sm avatar-rounded position-relative">
                  <img src={elem.avatar.src} alt="user" class="avatar-img" />
                  {#if elem.status === "online"}
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  {/if}
                </div>
              {:else}
                <div
                  class="avatar avatar-sm avatar-{elem.initAvatar
                    .variant} avatar-rounded"
                >
                  <span class="initial-wrap">{elem.initAvatar.title}</span>
                </div>
              {/if}
            </div>
            <div class="media-body">
              <div>
                <div class="user-name">{elem.name}</div>
                <div class="user-last-chat">
                  {elem.lastChat}
                  {#if elem.lastChat === "Typing"}
                    <span class="one">.</span><span class="two">.</span><span
                      class="three">.</span
                    >
                  {/if}
                </div>
              </div>
              <div>
                <div class="last-chat-time">{elem.time}</div>
                {#if elem.unread > 0}
                  <div class="badge badge-primary badge-sm badge-pill">
                    {elem.unread}
                  </div>
                {/if}
                <div class="dropdown action-drp">
                  <!-- svelte-ignore a11y_invalid_attribute -->
                  <a
                    href="#"
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                    data-bs-toggle="dropdown"
                  >
                    <span class="icon">
                      <i class="ri-more-line"></i>
                    </span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">静音聊天</a>
                    <a class="dropdown-item" href="#">归档聊天</a>
                    <!-- svelte-ignore a11y_invalid_attribute -->
                    <a class="dropdown-item" href="#">删除聊天</a>
                    <!-- svelte-ignore a11y_invalid_attribute -->
                    <a class="dropdown-item link-danger" href="#">屏蔽</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </HkScrollbar>
</div>
