<template>
  <header class="profile-header">
    <ul class="nav nav-line nav-tabs nav-icon nav-light h-100 d-md-flex d-none">
      <li class="nav-item">
        <a
          class="d-flex align-items-center nav-link active h-100"
          data-bs-toggle="tab"
          href="#"
        >
          <span class="nav-link-text">个人资料</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="d-flex align-items-center nav-link h-100" data-bs-toggle="tab" href="#">
          <span class="nav-link-text">人脉</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="d-flex align-items-center nav-link h-100" data-bs-toggle="tab" href="#">
          <span class="nav-link-text">订阅</span>
        </a>
      </li>
    </ul>

    <BFormSelect model-value="selected" class="mw-200p d-md-none d-flex me-2">
      <BFormSelectOption value="selected">个人资料</BFormSelectOption>
      <BFormSelectOption value="1">团队</BFormSelectOption>
      <BFormSelectOption value="2">项目</BFormSelectOption>
      <BFormSelectOption value="3">人脉</BFormSelectOption>
    </BFormSelect>

    <div class="profile-options-wrap">
      <BDropdown
        variant="soft-secondary"
        toggle-class="btn-icon no-caret"
        tag="a"
        href="#"
        end
      >
        <template #button-content>
          <span class="icon">
            <feather-icon name="more-vertical" />
          </span>
        </template>
        <BDropdownItem href="#">操作</BDropdownItem>
        <BDropdownItem href="#">另一项操作</BDropdownItem>
        <BDropdownItem href="#">其他选项</BDropdownItem>
        <BDropdownDivider />
        <BDropdownItem href="#">分隔链接</BDropdownItem>
      </BDropdown>
    </div>
  </header>
</template>

<script setup></script>
