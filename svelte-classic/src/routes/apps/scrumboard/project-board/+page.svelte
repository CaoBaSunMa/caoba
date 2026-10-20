<script>
// @ts-nocheck

  import TaskBoard from '$lib/components/scrumboard/project-board/TaskBoard.svelte';
  import BoardSidebar from '$lib/components/scrumboard/BoardSidebar.svelte';
  import AddNewTask from '$lib/components/scrumboard/AddNewTask.svelte';
  import AddFavBoard from '$lib/components/scrumboard/AddFavBoard.svelte';
  import AddNewMember from '$lib/components/scrumboard/AddNewMember.svelte';

  let showSidebar = true; // Local state for board sidebar visibility

  function toggleSidebar() {
    showSidebar = !showSidebar;
  }
</script>

<div class="hk-pg-body py-0">
  <div class="taskboardapp-wrap" class:taskboardapp-sidebar-toggle={!showSidebar}>
    <BoardSidebar />
    <TaskBoard {showSidebar} on:toggle-sidebar={toggleSidebar} />
  </div>

  <AddNewTask />
    <AddFavBoard />
    <AddNewMember />
</div>
