<script>
  import { onMount, afterUpdate } from "svelte";
  import { chatStore } from "../../../../lib/stores/chatStore";
  import giphy from "../../../../assets/img/giphy.gif";
  import HkScrollbar from "../../../../hk-components/@hk-scrollbar/HkScrollbar.svelte";
  import {
    ArrowDownIcon,
    CornerUpRightIcon,
    MoreHorizontalIcon,
  } from "svelte-feather-icons";

  // Reactive variables
  let messages = [];
  let chatState;
  let bottomRef;

  // Fetch initial messages
  onMount(() => {
    chatState = chatStore.getState(); // Assuming your store has a getState method
    messages = chatState.msg;
  });

  // Watch for changes in messages and scroll to bottom
  afterUpdate(() => {
    if (bottomRef) {
      bottomRef.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Function to handle store updates (if needed)
  chatStore.subscribe((state) => {
    chatState = state;
    messages = state.msg;
  });
</script>

<HkScrollbar data-simplebar  id="chat_body" class="chat-body">
  <ul id="dummy_avatar" class="list-unstyled chat-single-list">
    <!-- Static messages -->
    <li class="media received">
      <div class="avatar avatar-xs avatar-rounded">
        {#if chatState.avatar.type === "img"}
          <img src={chatState.avatar.src} alt="user" class="avatar-img" />
        {:else if chatState.avatar.type === "init"}
          <div
            class={`avatar avatar-xs avatar-${chatState.avatar.variant} avatar-rounded`}
          >
            <span class="initial-wrap">{chatState.avatar.title}</span>
          </div>
        {/if}
      </div>
      <div class="media-body">
        <div class="msg-box">
          <div>
            <p>好吧，我们明天再谈吧</p>
            <span class="chat-time">22:52</span>
          </div>
          <div class="msg-action">
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
            >
              <span class="icon">
                <span class="feather-icon">
                  <CornerUpRightIcon />
                </span>
              </span>
            </a>
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
              data-bs-toggle="dropdown"
            >
              <span class="icon">
                <span class="feather-icon">
                  <MoreHorizontalIcon />
                </span>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">转发</a>
              <a class="dropdown-item" href="#">复制</a>
            </div>
          </div>
        </div>
        <div class="msg-box">
          <div>
            <p>新营销页面的图片已经发过去了</p>
            <span class="chat-time">22:53</span>
          </div>
          <div class="msg-action">
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
            >
              <span class="icon">
                <span class="feather-icon">
                  <CornerUpRightIcon />
                </span>
              </span>
            </a>
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
              data-bs-toggle="dropdown"
            >
              <span class="icon">
                <span class="feather-icon">
                  <MoreHorizontalIcon />
                </span>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">转发</a>
              <a class="dropdown-item" href="#">复制</a>
            </div>
          </div>
        </div>
        <!-- Repeat for other static messages -->
      </div>
    </li>
    <li class="media media-attachment received">
      <div class="avatar avatar-xs avatar-rounded">
        {#if chatState.avatar.type === "img"}
          <img src={chatState.avatar.src} alt="user" class="avatar-img" />
        {:else if chatState.avatar.type === "init"}
          <div
            class={`avatar avatar-xs avatar-${chatState.avatar.variant} avatar-rounded`}
          >
            <span class="initial-wrap">{chatState.avatar.title}</span>
          </div>
        {/if}
      </div>
      <div class="media-body msg-docs">
        <div class="msg-box">
          <div>
            <div class="media">
              <div class="avatar avatar-icon avatar-sm avatar-blue">
                <span class="initial-wrap fs-3">
                  <i class="ri-file-excel-2-fill"></i>
                </span>
              </div>
              <div class="media-body">
                <p class="file-name">Website_content.xls</p>
                <p class="file-size">2,635 KB</p>
              </div>
            </div>
            <div class="file-overlay">
              <button class="btn btn-sm btn-icon btn-rounded btn-primary">
                <span class="icon">
                  <span class="feather-icon">
                    <ArrowDownIcon />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="msg-box">
          <div>
            <div class="media">
              <div class="avatar avatar-icon avatar-sm avatar-warning">
                <span class="initial-wrap fs-3">
                  <i class="ri-file-zip-fill"></i>
                </span>
              </div>
              <div class="media-body">
                <p class="file-name">caoba.zip</p>
                <p class="file-size">2.45 GB</p>
              </div>
            </div>
            <div class="file-overlay">
              <button class="btn btn-sm btn-icon btn-rounded btn-primary">
                <span class="icon">
                  <span class="feather-icon">
                    <ArrowDownIcon />
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div class="msg-action">
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
            >
              <span class="icon">
                <span class="feather-icon">
                  <CornerUpRightIcon />
                </span>
              </span>
            </a>
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
              data-bs-toggle="dropdown"
            >
              <span class="icon">
                <span class="feather-icon">
                  <MoreHorizontalIcon />
                </span>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">转发</a>
              <a class="dropdown-item" href="#">复制</a>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="day-sep">
      <span>今天</span>
    </li>
    <li class="media sent">
      <div class="media-body">
        <div class="msg-box">
          <div>
            <p>
              对了，我正在做一个你一定会感兴趣的项目。这个项目基于 AngularJS，
              你是其中的关键人物，我需要你的帮助。
            </p>
            <span class="chat-time">23:52</span>
          </div>
          <div class="msg-action">
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
            >
              <span class="icon">
                <span class="feather-icon">
                  <CornerUpRightIcon />
                </span>
              </span>
            </a>
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
              data-bs-toggle="dropdown"
            >
              <span class="icon">
                <span class="feather-icon">
                  <MoreHorizontalIcon />
                </span>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">转发</a>
              <a class="dropdown-item" href="#">复制</a>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="media media-attachment received">
      <div class="avatar avatar-xs avatar-rounded">
        {#if chatState.avatar.type === "img"}
          <img src={chatState.avatar.src} alt="user" class="avatar-img" />
        {:else if chatState.avatar.type === "init"}
          <div
            class={`avatar avatar-xs avatar-${chatState.avatar.variant} avatar-rounded`}
          >
            <span class="initial-wrap">{chatState.avatar.title}</span>
          </div>
        {/if}
      </div>
      <div class="media-body msg-imgs">
        <div class="msg-box">
          <div>
            <img class="d-block img-fluid" src={giphy} alt="gif" />
          </div>
          <div class="msg-action">
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
            >
              <span class="icon">
                <span class="feather-icon">
                  <CornerUpRightIcon />
                </span>
              </span>
            </a>
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
              data-bs-toggle="dropdown"
            >
              <span class="icon">
                <span class="feather-icon">
                  <MoreHorizontalIcon />
                </span>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">转发</a>
              <a class="dropdown-item" href="#">复制</a>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="media sent">
      <div class="media-body">
        <div class="msg-box">
          <div>
            <p>
              哈哈，这个笑话太好笑了。这正是你关于工资的心声吧？😍
            </p>
            <span class="chat-time">22:52</span>
          </div>
          <div class="msg-action">
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
            >
              <span class="icon">
                <span class="feather-icon">
                  <CornerUpRightIcon />
                </span>
              </span>
            </a>
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
              data-bs-toggle="dropdown"
            >
              <span class="icon">
                <span class="feather-icon">
                  <MoreHorizontalIcon />
                </span>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">转发</a>
              <a class="dropdown-item" href="#">复制</a>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="media received">
      <div class="avatar avatar-xs avatar-rounded">
        {#if chatState.avatar.type === "img"}
          <img src={chatState.avatar.src} alt="user" class="avatar-img" />
        {:else if chatState.avatar.type === "init"}
          <div
            class={`avatar avatar-xs avatar-${chatState.avatar.variant} avatar-rounded`}
          >
            <span class="initial-wrap">{chatState.avatar.title}</span>
          </div>
        {/if}
      </div>
      <div class="media-body">
        <div class="msg-box">
          <div>
            <p>
              嗨本，提醒一下你今天要来会议室开会。我们正提议对客户简报做一些调整。
            </p>
            <span class="chat-time">09:20</span>
          </div>
          <div class="msg-action">
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
            >
              <span class="icon">
                <span class="feather-icon">
                  <CornerUpRightIcon />
                </span>
              </span>
            </a>
            <a
              href="#"
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
              data-bs-toggle="dropdown"
            >
              <span class="icon">
                <span class="feather-icon">
                  <MoreHorizontalIcon />
                </span>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">转发</a>
              <a class="dropdown-item" href="#">复制</a>
            </div>
          </div>
        </div>
      </div>
    </li>

    <!-- Dynamic messages -->
    {#each messages as message, index}
      <li class={`media ${message.types}`}>
        {#if message.types === "received"}
          <div class="avatar avatar-xs avatar-rounded">
            {#if chatState.avatar.type === "img"}
              <img src={chatState.avatar.src} alt="user" class="avatar-img" />
            {:else if chatState.avatar.type === "init"}
              <div
                class={`avatar avatar-xs avatar-${chatState.avatar.variant} avatar-rounded`}
              >
                <span class="initial-wrap">{chatState.avatar.title}</span>
              </div>
            {/if}
          </div>
        {/if}
        <div class="media-body">
          <div class="msg-box" id="msg-{index}">
            <div>
              <p>{message.text}</p>
              <span class="chat-time">{message.time}</span>
            </div>
            <div class="msg-action">
              <a
                href="#"
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <CornerUpRightIcon />
                  </span>
                </span>
              </a>
              <a
                href="#"
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
              >
                <span class="icon">
                  <span class="feather-icon">
                    <MoreHorizontalIcon />
                  </span>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">转发</a>
                <a class="dropdown-item" href="#">复制</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    {/each}

    <!-- Bottom reference for scrolling -->
    <div bind:this={bottomRef} />
  </ul>
</HkScrollbar>