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
    <select class="form-select mw-200p d-md-none d-flex me-2">
      <option selected="">个人资料</option>
      <option value="1">团队</option>
      <option value="2">项目</option>
      <option value="3">人脉</option>
    </select>
    <div class="profile-options-wrap">
      <a
        class="btn btn-icon btn-soft-secondary dropdown-toggle no-caret"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span class="icon">
          <span class="feather-icon">
            <feather-icon name="more-vertical"></feather-icon>
          </span>
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-end">
        <a class="dropdown-item" href="#">操作</a>
        <a class="dropdown-item" href="#">另一项操作</a>
        <a class="dropdown-item" href="#">其他选项</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">分隔链接</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "My Project",
    };
  },
};
</script>
