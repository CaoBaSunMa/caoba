<script>
  import { onMount, tick } from "svelte";
  import { chatStore } from "../../../../lib/stores/groupChatStore.js";
  // import { CornerUpRight, MoreHorizontal, ArrowDown } from 'lucide-svelte';
  import {
    ArrowDownIcon,
    CornerUpRightIcon,
    MoreHorizontalIcon,
  } from "svelte-feather-icons";

  //Images
  import avatar8 from "../../../../assets/img/avatar8.jpg";
  import avatar9 from "../../../../assets/img/avatar9.jpg";
  import avatar10 from "../../../../assets/img/avatar10.jpg";
  import HkScrollbar from "../../../../hk-components/@hk-scrollbar/HkScrollbar.svelte";

  let chatState = $state({});
  let messages = $state([]);
  let gotoBottom;

  onMount(() => {
    const unsubscribe = chatStore.subscribe((value) => {
      chatState = value;
      messages = value.grpMsg || [];

      // Auto scroll to bottom when new messages arrive
      tick().then(() => {
        if (gotoBottom) {
          gotoBottom.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    return unsubscribe;
  });
</script>

<HkScrollbar id="chat_body" class="chat-body">
  <ul class="list-unstyled chat-single-list">
    <li class="media received">
      <div class="avatar avatar-xs avatar-rounded">
        <img src={avatar8} alt="user" class="avatar-img" />
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
      </div>
    </li>
    <li class="media media-attachment received">
      <div class="avatar avatar-xs avatar-rounded">
        <img src={avatar9} alt="user" class="avatar-img" />
      </div>
      <div class="media-body msg-docs">
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
            <p>我需要你的帮助。</p>
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
    <li class="media sent">
      <div class="media-body">
        <div class="msg-box">
          <div>
            <p>
              哈哈，这个笑话太好笑了 😍
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
        <img src={avatar10} alt="user" class="avatar-img" />
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
    {#each messages as elem, index (index)}
      <li class="media {elem.types}">
        {#if elem.types === "received"}
          <div class="avatar avatar-xs avatar-rounded">
            {#if elem.avatar?.type === "img"}
              <img src={elem.avatar.src} alt="user" class="avatar-img" />
            {:else if elem.avatar?.type === "init"}
              <div
                class="avatar avatar-xs avatar-{elem.avatar
                  .variant} avatar-rounded"
              >
                <span class="initial-wrap">{elem.avatar.title}</span>
              </div>
            {/if}
          </div>
        {/if}

        <div class="media-body">
          <div class="msg-box" id="msg-1">
            <div>
              <p>{elem.text}</p>
              <span class="chat-time">{elem.time}</span>
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
    {/each}
  </ul>
  <div bind:this={gotoBottom} />
</HkScrollbar>
