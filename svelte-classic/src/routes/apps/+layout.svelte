<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import AppsLayout from "../../layouts/apps-layout/AppsLayout.svelte";

  onMount(() => {
    if (browser) {
      import('bootstrap').then(({ Tooltip, Dropdown, Tab }) => {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
          new Tooltip(el);
        });
        document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
          new Dropdown(el);
        });
        document.querySelectorAll('[data-bs-toggle="tab"]').forEach((el) => {
          new Tab(el);
        });
      });
    }
  });
</script>

<AppsLayout>
  <slot />
</AppsLayout>
