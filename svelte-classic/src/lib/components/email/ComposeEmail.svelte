<script>
// @ts-nocheck

    import { emailStore } from '$lib/stores/emailStore';
    import { onMount } from 'svelte';
    import { EditIcon, Maximize2Icon, Minimize2Icon, MinusIcon, PaperclipIcon, Trash2Icon, XIcon } from 'svelte-feather-icons';
    // import Chip from '$lib/components/Chip.svelte';
  
    let recipients = [];
    let newRecipient = '';
  
    function handleMinimize() {
      $emailStore.closeMaximize();
      $emailStore.toggleMinimize();
    }
  
    function handleMaximize() {
      $emailStore.toggleMaximize();
    }
  
    function handleClose() {
      $emailStore.toggleComposeEmail();
      $emailStore.closeMaximize();
      $emailStore.closeMinimize();
    }
  
    function addRecipient() {
      if (newRecipient) {
        recipients = [...recipients, newRecipient];
        newRecipient = '';
      }
    }
  
    onMount(() => {
      import('bootstrap').then(({ Tooltip }) => {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
          new Tooltip(el);
        });
      });
    });
  </script>
  
  <div
    class="compose-email-popup"
    class:d-block={$emailStore.composeEmail}
    class:minimize-email-popup={$emailStore.minimize}
    class:maximize-email-popup={$emailStore.maximize}
  >
    <div class="d-flex flex-column h-100">
      <header class="d-flex align-items-center justify-content-between">
        <h6 class="text-white mb-0">写邮件</h6>
        <div class="d-flex">
          <button
            class="btn btn-sm btn-icon btn-dark btn-rounded d-lg-block d-none"
            on:click={handleMinimize}
          >
            <span class="icon">
              <span class="feather-icon">
                <MinusIcon />
              </span>
            </span>
          </button>
          <button
            class="btn btn-sm btn-icon btn-dark btn-rounded d-lg-block d-none"
            on:click={handleMaximize}
          >
            <span class="icon">
              <span class="feather-icon">
                {#if $emailStore.maximize}
                  <Minimize2Icon />
                {:else}
                  <Maximize2Icon />
                {/if}
              </span>
            </span>
          </button>
          <button class="btn btn-sm btn-icon btn-dark btn-rounded" on:click={handleClose}>
            <span class="icon">
              <span class="feather-icon">
                <XIcon />
              </span>
            </span>
          </button>
        </div>
      </header>
      <form>
        <div class="form-group">
          <div class="d-flex flex-wrap">
            <!-- <Chip classes="mb-2 me-2" variant="primary" src="/img/avatar11.jpg" dismissable={true}>Morgan</Chip>
            <Chip classes="mb-2 me-2" variant="primary" src="/img/avatar12.jpg" dismissable={true}>Charlie</Chip>
            <Chip classes="mb-2 me-2" variant="primary" src="/img/avatar13.jpg" dismissable={true}>Winston</Chip> -->
            <!-- {#each recipients as recipient, index}
              <Chip key={index} classes="mb-2 me-2" variant="primary" dismissable={true}>{recipient}</Chip>
            {/each} -->
            <input
              type="text"
              class="form-control border-0 p-0 shadow-none flex-1 mb-2 me-2"
              placeholder="添加收件人"
              bind:value={newRecipient}
              on:keyup={(e) => e.key === 'Enter' && addRecipient()}
            />
          </div>
        </div>
        <div class="form-group">
          <input type="text" placeholder="主题" class="form-control" />
        </div>
        <div class="form-group">
          <textarea class="form-control"></textarea>
        </div>
      </form>
      <div class="compose-email-footer">
        <div>
          <button class="btn btn-primary me-2" type="submit">发送</button>
          <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover">
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="添加标记"
            >
              <span class="feather-icon">
                <PaperclipIcon />
              </span>
            </span>
          </button>
        </div>
        <div>
          <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover">
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="保存草稿"
            >
              <span class="feather-icon">
                <EditIcon />
              </span>
            </span>
          </button>
          <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover">
            <span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="删除"
            >
              <span class="feather-icon">
                <Trash2Icon />
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  