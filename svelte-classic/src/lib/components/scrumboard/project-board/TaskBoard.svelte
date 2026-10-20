<script>
  import { createEventDispatcher } from 'svelte';

  export let showSidebar;
   const dispatch = createEventDispatcher();

  function handleToggleSidebar() {
    console.log('Toggle sidebar clicked in TaskBoard');
    dispatch('toggle-sidebar');
  }

  // Static avatar paths
  import avatar2 from '../../../../assets/img/avatar2.jpg';
  import avatar3 from '../../../../assets/img/avatar3.jpg';
  import avatar5 from '../../../../assets/img/avatar5.jpg';
  import avatar6 from '../../../../assets/img/avatar6.jpg';
  import avatar7 from '../../../../assets/img/avatar7.jpg';
  import avatar8 from '../../../../assets/img/avatar8.jpg';
  import avatar9 from '../../../../assets/img/avatar9.jpg';
  import avatar10 from '../../../../assets/img/avatar10.jpg';
  import avatar11 from '../../../../assets/img/avatar11.jpg';
  import avatar13 from '../../../../assets/img/avatar13.jpg';
  import avatar14 from '../../../../assets/img/avatar14.jpg';

</script>

<div class="taskboardapp-content">
  <div class="taskboardapp-detail-wrap">
    <header class="taskboard-header">
      <ul class="nav nav-justified nav-light nav-tabs nav-segmented-tabs active-theme mx-auto w-350p">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#tab_boards">
            <span class="nav-link-text">看板</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#tab_team">
            <span class="nav-link-text badge-on-text">团队</span>
          </a>
        </li>
      </ul>
      <div class:hk-sidebar-togglable={true} class:active={!showSidebar} on:click={handleToggleSidebar}></div>
    </header>
    <div class="taskboard-body">
      <div class="nicescroll-bar" style="overflow-y: auto; max-height: 100vh;">
        <div class="container-fluid">
          <div class="row justify-content-center board-team-wrap">
            <div class="col-md-8 col-sm-12">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tab_boards">
                  <h5 class="mb-5">常用看板</h5>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="card board-card card-border">
                        <div class="card-body">
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-sm avatar-pink">
                                <span class="initial-wrap">J</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <span>caoba</span>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted justify-content-between">
                          <div>
                            <div class="avatar-group avatar-group-sm avatar-group-overlapped me-3">
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="凯瑟琳">
                                <img src={avatar8} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="迪恩">
                                <img src={avatar13} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="摩根">
                                <img src={avatar2} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-soft-danger avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="提示文本">
                                <span class="initial-wrap">3+</span>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="p-xs me-2">25 分钟前更新</p>
                            <div class="flex-shrink-0">
                              <a class="btn btn-xs btn-icon btn-flush-primary btn-rounded flush-soft-hover" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="公开">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="globe"></i>
                                  </span>
                                </span>
                              </a>
                              <a class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="more-horizontal"></i>
                                  </span>
                                </span>
                              </a>
                              <div role="menu" class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">编辑</a>
                                <a class="dropdown-item" href="#">复制链接</a>
                                <a class="dropdown-item" href="#">删除</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="card board-card card-border">
                        <div class="card-body">
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-sm avatar-pumpkin">
                                <span class="initial-wrap">A</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <span>Angular - caoba</span>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted justify-content-between">
                          <div>
                            <div class="avatar-group avatar-group-sm avatar-group-overlapped me-3">
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="凯瑟琳">
                                <img src={avatar9} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="迪恩">
                                <img src={avatar13} alt="user" class="avatar-img" />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="p-xs me-2">5 分钟前更新</p>
                            <div class="flex-shrink-0">
                              <a class="btn btn-xs btn-icon btn-flush-primary btn-rounded flush-soft-hover" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="公开">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="globe"></i>
                                  </span>
                                </span>
                              </a>
                              <a class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="more-horizontal"></i>
                                  </span>
                                </span>
                              </a>
                              <div role="menu" class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">编辑</a>
                                <a class="dropdown-item" href="#">复制链接</a>
                                <a class="dropdown-item" href="#">删除</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h5 class="mb-0">所有看板</h5>
                    <button class="btn btn-light btn-icon" data-bs-toggle="modal" data-bs-target="#add_new_board">
                      <span class="icon">
                        <span class="feather-icon">
                          <i data-feather="plus"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="card board-card card-border">
                        <div class="card-body">
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-sm avatar-violet">
                                <span class="initial-wrap">R</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <span>React - caoba</span>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted justify-content-between">
                          <div>
                            <div class="avatar-group avatar-group-sm avatar-group-overlapped me-3">
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="凯瑟琳">
                                <img src={avatar10} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="迪恩">
                                <img src={avatar13} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="摩根">
                                <img src={avatar2} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-soft-danger avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="提示文本">
                                <span class="initial-wrap">4+</span>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="p-xs me-2">昨天更新</p>
                            <div class="flex-shrink-0">
                              <a class="btn btn-xs btn-icon btn-flush-primary btn-rounded flush-soft-hover" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="公开">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="globe"></i>
                                  </span>
                                </span>
                              </a>
                              <a class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="more-horizontal"></i>
                                  </span>
                                </span>
                              </a>
                              <div role="menu" class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">编辑</a>
                                <a class="dropdown-item" href="#">复制链接</a>
                                <a class="dropdown-item" href="#">删除</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="card board-card card-border">
                        <div class="card-body">
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-sm avatar-orange">
                                <span class="initial-wrap">G</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <span>格里芬</span>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted justify-content-between">
                          <div>
                            <div class="avatar-group avatar-group-sm avatar-group-overlapped me-3">
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="凯瑟琳">
                                <img src={avatar11} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="迪恩">
                                <img src={avatar8} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="摩根">
                                <img src={avatar7} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-soft-danger avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="提示文本">
                                <span class="initial-wrap">W</span>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="p-xs me-2">10 分钟前更新</p>
                            <div class="flex-shrink-0">
                              <a class="btn btn-xs btn-icon btn-flush-primary btn-rounded flush-soft-hover" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="公开">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="globe"></i>
                                  </span>
                                </span>
                              </a>
                              <a class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="more-horizontal"></i>
                                  </span>
                                </span>
                              </a>
                              <div role="menu" class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">编辑</a>
                                <a class="dropdown-item" href="#">复制链接</a>
                                <a class="dropdown-item" href="#">删除</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="card board-card card-border">
                        <div class="card-body">
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-sm avatar-primary">
                                <span class="initial-wrap">P</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <span>班公湖</span>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted justify-content-between">
                          <div>
                            <div class="avatar-group avatar-group-sm avatar-group-overlapped me-3">
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="凯瑟琳">
                                <img src={avatar8} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="迪恩">
                                <img src={avatar13} alt="user" class="avatar-img" />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="p-xs me-2">1 小时前更新</p>
                            <div class="flex-shrink-0">
                              <a class="btn btn-xs btn-icon btn-flush-primary btn-rounded flush-soft-hover" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="公开">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="globe"></i>
                                  </span>
                                </span>
                              </a>
                              <a class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="more-horizontal"></i>
                                  </span>
                                </span>
                              </a>
                              <div role="menu" class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">编辑</a>
                                <a class="dropdown-item" href="#">复制链接</a>
                                <a class="dropdown-item" href="#">删除</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="card board-card card-border">
                        <div class="card-body">
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-sm avatar-info">
                                <span class="initial-wrap">D</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <span>涂鸦</span>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted justify-content-between">
                          <div>
                            <div class="avatar-group avatar-group-sm avatar-group-overlapped me-3">
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="凯瑟琳">
                                <img src={avatar9} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="迪恩">
                                <img src={avatar10} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="摩根">
                                <img src={avatar11} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-soft-danger avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="提示文本">
                                <span class="initial-wrap">3+</span>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="p-xs me-2">20 分钟前更新</p>
                            <div class="flex-shrink-0">
                              <a class="btn btn-xs btn-icon btn-flush-primary btn-rounded flush-soft-hover" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="公开">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="globe"></i>
                                  </span>
                                </span>
                              </a>
                              <a class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="more-horizontal"></i>
                                  </span>
                                </span>
                              </a>
                              <div role="menu" class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">编辑</a>
                                <a class="dropdown-item" href="#">复制链接</a>
                                <a class="dropdown-item" href="#">删除</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="card board-card card-border">
                        <div class="card-body">
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-sm avatar-pink">
                                <span class="initial-wrap">P</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <span>波戈迪</span>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer text-muted justify-content-between">
                          <div>
                            <div class="avatar-group avatar-group-sm avatar-group-overlapped me-3">
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="凯瑟琳">
                                <img src={avatar5} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="迪恩">
                                <img src={avatar6} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="摩根">
                                <img src={avatar7} alt="user" class="avatar-img" />
                              </div>
                              <div class="avatar avatar-soft-danger avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" title="提示文本">
                                <span class="initial-wrap">5+</span>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="p-xs me-2">2 天前更新</p>
                            <div class="flex-shrink-0">
                              <a class="btn btn-xs btn-icon btn-flush-primary btn-rounded flush-soft-hover" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="公开">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="globe"></i>
                                  </span>
                                </span>
                              </a>
                              <a class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <i data-feather="more-horizontal"></i>
                                  </span>
                                </span>
                              </a>
                              <div role="menu" class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">编辑</a>
                                <a class="dropdown-item" href="#">复制链接</a>
                                <a class="dropdown-item" href="#">删除</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="card card-border border-dashed h-100">
                        <div class="card-body d-flex align-items-center justify-content-center">
                          <button class="btn btn-outline-light btn-block" data-bs-toggle="modal" data-bs-target="#add_new_board">
                            <span data-bs-toggle="tooltip" data-bs-placement="top" title="新建看板">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="plus"></i>
                                </span>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab_team">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <div class="d-flex align-items-center form-group mb-0">
                      <h5 class="mb-0 me-4">成员</h5>
                      <label class="flex-shrink-0 mb-0 me-2">排序方式：</label>
                      <select class="form-control form-select form-select-sm w-130p">
                        <option selected value="1">创建日期</option>
                        <option value="2">A - Z</option>
                        <option value="3">Z - A</option>
                      </select>
                    </div>
                    <button class="btn btn-light btn-icon" data-bs-toggle="modal" data-bs-target="#add_new_team">
                      <span class="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="新建成员">
                        <span class="feather-icon">
                          <i data-feather="plus"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                  <div class="row">
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-rounded">
                                <img src={avatar2} alt="user" class="avatar-img" />
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="设计师">
                                <span>摩根·弗里曼</span>
                                <span class="badge badge-primary badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">morgan@caoba.com</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-rounded">
                                <img src={avatar9} alt="user" class="avatar-img" />
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="设计师">
                                <span>乌玛·瑟曼</span>
                                <span class="badge badge-primary badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">huma@clariesup.au</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-rounded">
                                <img src={avatar7} alt="user" class="avatar-img" />
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="开发者">
                                <span>汤姆·克鲁斯</span>
                                <span class="badge badge-danger badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">tomcz@caoba.com</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-soft-danger avatar-rounded">
                                <span class="initial-wrap">D</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="设计师">
                                <span>丹尼尔·克雷格</span>
                                <span class="badge badge-primary badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">danialc@caoba.com</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-rounded">
                                <img src={avatar10} alt="user" class="avatar-img" />
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="库存">
                                <span>温斯顿·丘吉尔</span>
                                <span class="badge badge-primary badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">winston@worthniza.ga</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-rounded">
                                <img src={avatar8} alt="user" class="avatar-img" />
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="开发者">
                                <span>凯瑟琳·琼斯</span>
                                <span class="badge badge-danger badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">joneskath@caoba.com</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-rounded">
                                <img src={avatar3} alt="user" class="avatar-img" />
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="人事经理">
                                <span>杰奎琳·乔克</span>
                                <span class="badge badge-danger badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">jaquljoker@caoba.com</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-light avatar-rounded">
                                <span class="initial-wrap">J</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="设计师">
                                <span>约翰·布拉泽</span>
                                <span class="badge badge-primary badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">john@cryodrakon.info</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-rounded">
                                <img src={avatar14} alt="user" class="avatar-img" />
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="设计师">
                                <span>约翰·布拉泽</span>
                                <span class="badge badge-primary badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">john@cryodrakon.info</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card team-card card-border">
                        <div class="card-body">
                          <div class="card-action-wrap">
                            <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown">
                              <span class="icon">
                                <span class="feather-icon">
                                  <i data-feather="more-horizontal"></i>
                                </span>
                              </span>
                            </button>
                            <div role="menu" class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">邀请参与项目</a>
                              <a class="dropdown-item" href="#">复制链接</a>
                              <a class="dropdown-item" href="#">邮件偏好</a>
                            </div>
                          </div>
                          <div class="media align-items-center">
                            <div class="media-head">
                              <div class="avatar avatar-soft-success avatar-rounded">
                                <span class="initial-wrap">C</span>
                              </div>
                            </div>
                            <div class="media-body">
                              <div data-bs-toggle="tooltip" data-bs-placement="top" title="开发者">
                                <span>查理·卓别林</span>
                                <span class="badge badge-danger badge-indicator badge-indicator-nobdr"></span>
                              </div>
                              <div class="text-truncate">charlie@leernoca.monster</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-12">
                      <div class="card card-border border-dashed h-100">
                        <div class="card-body d-flex align-items-center justify-content-center">
                          <button class="btn btn-icon btn-outline-light" data-bs-toggle="modal" data-bs-target="#add_new_team">
                            <span class="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="新建成员">
                              <span class="feather-icon">
                                <i data-feather="plus"></i>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
