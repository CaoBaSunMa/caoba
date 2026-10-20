<script>
// @ts-nocheck

  import { ArchiveIcon, BookIcon, GlobeIcon, LayoutIcon, LockIcon, MoreVerticalIcon, PlusIcon, SettingsIcon, StarIcon, Trash2Icon, UserCheckIcon } from "svelte-feather-icons";
  import HkScrollbar from "../../../hk-components/@hk-scrollbar/HkScrollbar.svelte";

</script>

<nav class="taskboardapp-sidebar">
    <HkScrollbar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <button
          class="btn btn-primary btn-rounded btn-block mb-4"
          data-bs-toggle="modal"
          data-bs-target="#add_new_board"
        >
          新建看板
        </button>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <LayoutIcon />
                  </span>
                </span>
                <span class="nav-link-text">所有看板</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <StarIcon />
                  </span>
                </span>
                <span class="nav-link-text">星标看板</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <LockIcon />
                  </span>
                </span>
                <span class="nav-link-text">私有看板</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <UserCheckIcon />
                  </span>
                </span>
                <span class="nav-link-text">公开看板</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <Trash2Icon />
                  </span>
                </span>
                <span class="nav-link-text">已删除</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">收藏看板</div>
          <a
            href="#"
            class="btn btn-xs btn-icon btn-rounded btn-light"
            data-bs-toggle="modal"
            data-bs-target="#add_fav_board"
            ><span
              class="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="新建看板"
            >
              <span class="feather-icon">
                <PlusIcon />
              </span>
            </span>
          </a>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <div>
                <div class="media d-flex align-items-center">
                  <div class="media-head me-2">
                    <div class="avatar avatar-xs avatar-primary avatar-rounded">
                      <span class="initial-wrap">J</span>
                    </div>
                  </div>
                  <div class="media-body">
                    <div>
                      <div class="name">caoba</div>
                    </div>
                  </div>
                </div>
                <div class="ms-auto">
                  <button
                    class="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <LockIcon />
                      </span>
                    </span>
                  </button>
                  <button
                    class="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <MoreVerticalIcon />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div>
                <div class="media d-flex align-items-center">
                  <div class="media-head me-2">
                    <div class="avatar avatar-xs avatar-pink avatar-rounded">
                      <span class="initial-wrap">Cb</span>
                    </div>
                  </div>
                  <div class="media-body">
                    <div>
                      <div class="name">caoba</div>
                    </div>
                  </div>
                </div>
                <div class="ms-auto">
                  <button
                    class="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <GlobeIcon />
                      </span>
                    </span>
                  </button>
                  <button
                    class="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <MoreVerticalIcon />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="alert alert-warning mt-5" role="alert">
          <h6 class="heading-wth-icon alert-heading">
            <span class="head-icon">
              <span class="feather-icon">
                <feather-icon name="zap-off"></feather-icon>
              </span>
            </span>
            试用期于 1 月 14 日结束
          </h6>
          <p class="fs-7">
            您的试用期仅剩最后 3 天，请立即续订以保持连接。
          </p>
        </div>
      </div>
    </HkScrollbar>
    <!--Sidebar Fixnav-->
    <div class="taskboardapp-fixednav">
      <div class="hk-toolbar">
        <ul class="nav nav-light">
          <li class="nav-item nav-link">
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="设置"
              href="#"
            >
              <span class="icon">
                <span class="feather-icon">
                  <SettingsIcon />
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="归档"
            >
              <span class="icon">
                <span class="feather-icon">
                  <ArchiveIcon />
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="帮助"
            >
              <span class="icon">
                <span class="feather-icon">
                  <BookIcon />
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--/ Sidebar Fixnav-->
  </nav>
