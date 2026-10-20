<script>
// @ts-nocheck

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let isDragging = false;
  let files = [];

  function handleDrop(event) {
    event.preventDefault();
    isDragging = false;

    const droppedFiles = Array.from(event.dataTransfer.files);
    files = [...files, ...droppedFiles];

    // Dispatch files to parent
    dispatch("filesSelected", { files });
  }

  function handleInputChange(event) {
    const selectedFiles = Array.from(event.target.files);
    files = [...files, ...selectedFiles];
    dispatch("filesSelected", { files });
  }

  function handleDragOver(event) {
    event.preventDefault();
    isDragging = true;
  }

  function handleDragLeave() {
    isDragging = false;
  }
</script>

<div
  class={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition 
          ${isDragging ? "bg-blue-50 border-blue-400" : "border-gray-300"}`}
  on:drop={handleDrop}
  on:dragover={handleDragOver}
  on:dragleave={handleDragLeave}
>
  <p class="text-gray-600">
    拖拽文件到此处或点击上传
  </p>
  <div>
    <input
    type="file"
    multiple
    on:change={handleInputChange}
    class="hidden"
    bind:this={fileInput}
    hidden
  />
  <button
    type="button"
    class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
    on:click={() => fileInput.click()}
    hidden
  >
    选择文件
  </button>
  </div>
</div>

<!-- Preview files -->
{#if files.length > 0}
  <ul class="mt-4 text-left text-sm">
    {#each files as file, i}
      <li class="py-1">📄 {file.name} ({Math.round(file.size / 1024)} KB)</li>
    {/each}
  </ul>
{/if}
