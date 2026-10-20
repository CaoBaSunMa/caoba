<script>
  import { onMount } from "svelte";
  import { chatStore } from "$lib/stores/chatStore.js";
  import emptyChat from "../../../../assets/img/start-conversation.png";
  import avatar2 from "../../../../assets/img/avatar2.jpg";

  let bottomRef;
  let startConversation = false;

  const messages = $derived(chatStore.contactMsg);

  function handleConversation() {
    startConversation = true;
    if (startConversation) {
      const inputElement = document.getElementById("input_contact_chat");
      if (inputElement) {
        inputElement.focus();
      }
    }
  }

  $effect(() => {
    if (bottomRef) {
      bottomRef.scrollIntoView({ behavior: "smooth" });
    }
  });

  onMount(() => {
    // Initial setup if needed
  });
</script>

<simplebar id="chat_body" class="chat-body">
  {#if messages.length > 1}
    <ul class="list-unstyled chat-single-list">
      {#each messages as elem, index (index)}
        <li class="media {elem.types}">
          {#if elem.types === "received"}
            <div class="avatar avatar-xs avatar-rounded">
              <img
                src={avatar2 || "/placeholder.svg"}
                alt="user"
                class="avatar-img"
              />
            </div>
          {/if}
          <div class="media-body">
            <div class="msg-box" id="msg-1">
              <div>
                <p>{elem.text}</p>
                <span class="chat-time">{elem.time}</span>
              </div>
              <div class="msg-action">
                <button
                  class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret"
                  onclick={() => {}}
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <!-- Corner up right icon -->
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="15 14 20 9 15 4"></polyline>
                        <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
                      </svg>
                    </span>
                  </span>
                </button>
                <button
                  class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                  data-bs-toggle="dropdown"
                  onclick={() => {}}
                >
                  <span class="icon">
                    <span class="feather-icon">
                      <!-- More horizontal icon -->
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </span>
                  </span>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="javascript:void(0)">转发</a>
                  <a class="dropdown-item" href="javascript:void(0)">复制</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="start-conversation">
      <img
        class="d-block img-fluid"
        src={emptyChat || "/placeholder.svg"}
        alt="empty-chat"
      />
      <button
        class="btn btn-soft-primary btn-lg mt-3"
        onclick={handleConversation}
      >
        开始对话
      </button>
    </div>
  {/if}
  <div bind:this={bottomRef}></div>
</simplebar>
