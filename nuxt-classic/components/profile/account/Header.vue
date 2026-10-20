<template>
  <div class="hk-pg-header pg-header-wth-tab pt-7">
    <div class="d-flex">
      <div class="flex-1">
        <h1 class="pg-title">账户设置</h1>
        <p class="p-lg col-lg-8">
          管理你的账户设置和选项。你可以自定义兴趣、添加社交媒体链接、编辑集成，以获得更好的应用内体验。
        </p>
      </div>
    </div>
    <ul class="nav nav-line nav-light nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#tab_block_1">
          <span class="nav-link-text">自定义兴趣</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#tab_block_2">
          <span class="nav-link-text">社交资料</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#tab_block_3">
          <span class="nav-link-text">集成</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          >账单信息</a
        >
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#tab_block_4" data-bs-toggle="tab"
            >已保存卡片</a
          >
          <a class="dropdown-item" href="#tab_block_5" data-bs-toggle="tab"
            >我的地址</a
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
