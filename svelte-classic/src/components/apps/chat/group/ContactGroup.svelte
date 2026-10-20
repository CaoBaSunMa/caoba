<script>
  import { onMount } from "svelte";
  import {
    chatStore,
    chatActions,
  } from "../../../../lib/stores/groupChatStore.js";
  import {
    ArchiveIcon,
    BookIcon,
    MessageSquareIcon,
    MoreHorizontalIcon,
    PlusIcon,
    SettingsIcon,
    StarIcon,
    ToggleRightIcon,
    UserCheckIcon,
    UsersIcon,
  } from "svelte-feather-icons";
  import { chatStore } from "../../../../lib/stores/chatStore.js";
  import HkScrollbar from "../../../../hk-components/@hk-scrollbar/HkScrollbar.svelte";

  let searchValue = $state("");
  let list = $state([]);
  let chatState = $state({});

  // Subscribe to store and fetch conversations
  onMount(() => {
    chatStore.fetchConversations();
    const unsubscribe = chatStore.subscribe((value) => {
      chatState = value;
      // Filter GROUP type conversations
      list = (value.conversations || [])
        .filter(c => c.type === 'GROUP')
        .map(conv => ({
          id: conv.id,
          group: conv.name || '未命名群组',
          lastChat: conv.lastMessage || '',
          status: '',
          avatar: null,
          initAvatar: { title: (conv.name || 'G')[0], variant: 'success' },
        }));
    });
    return unsubscribe;
  });

  let filteredList = $derived.by(() => {
    if (searchValue.length > 1) {
      return list.filter((item) =>
        item.group.toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return list;
  });

  function startConversation(index, id) {
    const conv = chatState.conversations.find(c => c.id === id);
    if (conv) {
      chatStore.selectConversation(conv);
    }

    const updatedContacts = groupList.map((contactList) =>
      contactList.id === id ? { ...contactList, unread: 0 } : contactList
    );
    list = updatedContacts;

    if (window.innerWidth <= 991) {
      chatActions.toggleStartChat();
    }
  }

  function searchOnChange(event) {
    event.preventDefault();
    searchValue = event.target.value;
  }
</script>

<div class="chatapp-aside">
  <header class="aside-header">
    <div class="dropdown">
      <button
        class="chatapp-title dropdown-toggle link-dark btn btn-link"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <h1>群组</h1>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="/apps/chat/chats" data-sveltekit-preload-data="hover">
            <MessageSquareIcon class="dropdown-icon" />
            <span>聊天记录</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#contacts">
            <BookIcon class="dropdown-icon" />
            <span>联系人</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#groups">
            <UsersIcon class="dropdown-icon" />
            <span>群组</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#archived">
            <ArchiveIcon class="dropdown-icon" />
            <span>已归档</span>
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#favorites">
            <StarIcon class="dropdown-icon" />
            <span>收藏</span>
          </a>
        </li>
      </ul>
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
            </span>
            <span>已归档的聊天</span>
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
        placeholder="搜索联系人"
        bind:value={searchValue}
      />
    </form>

    <ul class="chat-contacts-list list-group list-group-flush">
      {#each filteredList as elem, index (elem.id)}
        <li
          class="list-group-item"
          onclick={() => startConversation(index, elem.id)}
          onkeydown={() => startConversation(index, elem.id)}
          role="button"
          tabindex="0"
        >
          <div
            class="media {elem.id === chatState.userId
              ? 'active-user'
              : ''} {!elem.unread ? 'read-chat' : ''}"
          >
            <div class="media-head">
              {#if elem.avatar}
                <div class="avatar avatar-sm avatar-rounded position-relative">
                  <img
                    src={elem.avatar.src || "/placeholder.svg"}
                    alt="user"
                    class="avatar-img"
                  />
                  <div
                    class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
                  >
                    <div class="badge-icon-wrap">
                      <i class="ri-group-fill text-light" />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 127 127"
                    >
                      <g
                        data-name="Ellipse 302"
                        transform="translate(8 8)"
                        strokeWidth={3}
                      >
                        <circle
                          cx="55.5"
                          cy="55.5"
                          r="55.5"
                          stroke="currentColor"
                        />
                        <circle
                          cx="55.5"
                          cy="55.5"
                          r="59.5"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              {:else}
                <div
                  class="avatar avatar-sm avatar-{elem.initAvatar
                    .variant} avatar-rounded"
                >
                  <span class="initial-wrap">{elem.initAvatar.title}</span>
                  <div
                    class="badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1"
                  >
                    <div class="badge-icon-wrap">
                      <i class="ri-group-fill text-light" />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 127 127"
                    >
                      <g
                        data-name="Ellipse 302"
                        transform="translate(8 8)"
                        strokeWidth={3}
                      >
                        <circle
                          cx="55.5"
                          cy="55.5"
                          r="55.5"
                          stroke="currentColor"
                        />
                        <circle
                          cx="55.5"
                          cy="55.5"
                          r="59.5"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              {/if}
            </div>
            <div class="media-body">
              <div>
                <div class="user-name">{elem.group}</div>
                <div class="user-last-chat">{elem.lastChat}</div>
              </div>
              <div>
                <div class="dropdown action-drp">
                  <a
                    href="#"
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                    data-bs-toggle="dropdown"
                  >
                    <span class="btn-icon-wrap">
                      <span class="feather-icon">
                        <MoreHorizontalIcon />
                      </span>
                    </span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#">退出群组</a>
                    <a class="dropdown-item" href="#">删除群组</a>
                    <a class="dropdown-item" href="#">静音群组</a>
                    <a class="dropdown-item link-danger" href="#">屏蔽</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>

    <div class="title-xs text-uppercase text-primary mt-4">
      <span>频道</span>
    </div>
    <ul class="channels-list nav nav-light flex-column">
      <li class="nav-item">
        <a href="#" class="nav-link link-dark">#开发者</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link link-dark">#设计师</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link link-dark">#人事管理</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link link-dark">#团队目标</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link link-dark">#caoba支持</a>
      </li>
    </ul>
  </HkScrollbar>
</div>
