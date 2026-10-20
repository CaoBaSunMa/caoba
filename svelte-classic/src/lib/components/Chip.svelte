<script>
// @ts-nocheck

    export let children = '';
    export let variant = 'primary';
    export let dismissable = false;
    export let pill = false;
    export let ticked = false;
    export let icon = '';
    export let src = '';
    export let lg = false;
    export let disabled = false;
    export let classes = '';
  
    let show = true;
  
    function toggleShow() {
      show = !show;
    }
  </script>
  
  <div
    class="chip {classes}"
    class:chip-{variant}
    class:chip-dismissable={dismissable}
    class:chip-pill={pill}
    class:chip-ticked={ticked}
    class:chip-wth-icon={icon}
    class:d-none={!show}
    class:user-chip={src}
    class:chip-lg={lg}
    class:chip-disabled={disabled}
  >
    {#if !dismissable && !src}
      <input type="checkbox" class="form-check-input" />
    {/if}
    <span>
      {#if icon}
        <slot name="icon">{icon}</slot>
      {/if}
      {#if src}
        <span class="avatar">
          <img {src} alt="user" class="avatar-img" />
        </span>
      {/if}
      <span class="chip-text">
        <slot>{children}</slot>
      </span>
      {#if dismissable}
        <button type="button" class="btn-close" on:click={toggleShow}></button>
      {/if}
    </span>
  </div>
  
  