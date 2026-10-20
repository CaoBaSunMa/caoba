<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { chatStore } from "../../../../lib/stores/chatStore";

  //Images
  import avatar1 from "../../../../assets/img/avatar1.jpg";
  import avatar2 from "../../../../assets/img/avatar2.jpg";
  import thumbImg from "../../../../assets/img/img-thumb1.jpg";
  import img6 from "../../../../assets/img/6image.png";

  let chatState;

  onMount(() => {
    chatState = chatStore.getState();
  });

  // Function to handle store updates (if needed)
  chatStore.subscribe((state) => {
    chatState = state;
  });
</script>

<div class="chat-info">
  <div data-simplebar class="nicescroll-bar">
    <button type="button" class="info-close btn-close">
      <span aria-hidden="true">×</span>
    </button>
    <div class="text-center">
      {#if chatState.avatar.type === "img"}
        <div class="avatar avatar-xxl avatar-rounded">
          <img src={chatState.avatar.src} alt="user" class="avatar-img" />
        </div>
      {:else}
        <div
          class="avatar {`avatar-${chatState.avatar.variant}`} avatar-rounded avatar-xxl"
        >
          <span class="initial-wrap">{chatState.avatar.title}</span>
        </div>
      {/if}
      <div class="cp-name text-truncate mt-2">{chatState.userName}</div>
      <p class="text-truncate">不接电话，一直忙碌</p>
    </div>

    <ul
      class="nav nav-justified nav-light nav-tabs nav-segmented-tabs active-theme mt-4"
    >
      <li class="nav-item">
        <a class="nav-link active" data-bs-toggle="tab" href="#tab_info">
          <span class="nav-link-text">信息</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#tab_files">
          <span class="nav-link-text">文件</span>
        </a>
      </li>
    </ul>
    <div class="tab-content mt-4">
      <div class="tab-pane fade show active" id="tab_info">
        <form role="search">
          <input
            type="text"
            class="form-control"
            placeholder="搜索会话内容"
          />
        </form>
        <div class="collapse-simple mt-3">
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#gn_info"
                aria-expanded="true">基本信息</a
              >
            </div>
            <div id="gn_info" class="collapse show">
              <div class="card-body">
                <ul class="cp-info">
                  <li>
                    <a href="javascript:void(0);">
                      <span class="cp-icon-wrap"
                        ><span class="feather-icon"
                          ><i data-feather="briefcase"></i></span
                        ></span
                      >
                      联合创始人
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span class="cp-icon-wrap"
                        ><span class="feather-icon"
                          ><i data-feather="mail"></i></span
                        ></span
                      >
                      <span class="text-primary">contact@caoba.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span class="cp-icon-wrap"
                        ><span class="feather-icon"
                          ><i data-feather="phone"></i></span
                        ></span
                      >
                      +91-25-4125-2365
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span class="cp-icon-wrap"
                        ><span class="feather-icon"
                          ><i data-feather="map-pin"></i></span
                        ></span
                      >
                      奥斯陆，加拿大
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#social_profile"
                aria-expanded="true"
                >社交资料
              </a>
            </div>
            <div id="social_profile" class="collapse show">
              <div class="card-body">
                <ul class="hk-list hk-list-sm">
                  <li>
                    <button class="btn btn-icon btn-rounded btn-primary"
                      ><span class="icon"><i class="fab fa-behance"></i></span
                      ></button
                    >
                  </li>
                  <li>
                    <button class="btn btn-icon btn-rounded btn-warning"
                      ><span class="icon"
                        ><i class="fab fa-google-drive"></i></span
                      ></button
                    >
                  </li>
                  <li>
                    <button class="btn btn-icon btn-rounded btn-info"
                      ><span class="icon"><i class="fab fa-dropbox"></i></span
                      ></button
                    >
                  </li>
                  <li>
                    <button class="btn btn-icon btn-rounded btn-dark"
                      ><span class="icon"><i class="fab fa-github"></i></span
                      ></button
                    >
                  </li>
                  <li>
                    <button class="btn btn-icon btn-rounded btn-danger"
                      ><span class="icon"><i class="fab fa-google"></i></span
                      ></button
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#biography"
                aria-expanded="true"
                >个人简介
              </a>
            </div>
            <div id="biography" class="collapse show">
              <div class="card-body">
                <p>
                  大家好，乌玛·瑟曼是一位出色的联合创始人兼文案撰稿人，
                  为世界 500 强企业服务了近十年。我精通多门外语，
                  并且喜欢产出高品质的内容。
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#settings"
                aria-expanded="true"
                >设置
              </a>
            </div>
            <div id="settings" class="collapse show">
              <div class="card-body">
                <ul class="cp-action">
                  <li>
                    <a href="javascript:void(0);"> 清空聊天记录 </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span class="text-danger">屏蔽联系人</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"> 反馈问题 </a>
                  </li>
                </ul>
                <a href="#" class="d-block text-dark fs-7 mb-10"
                  >反馈并举报会话</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="tab_files">
        <form role="search">
          <input
            type="text"
            class="form-control search-files"
            placeholder="搜索文件"
          />
        </form>
        <div class="collapse-simple mt-3">
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#files_collapse"
                aria-expanded="true">昨天</a
              >
            </div>
            <div id="files_collapse" class="collapse show">
              <div class="card-body">
                <ul class="cp-files">
                  <li>
                    <div class="media">
                      <div class="media-head">
                        <div
                          class="avatar avatar-icon avatar-sm avatar-soft-blue"
                        >
                          <span class="initial-wrap fs-3">
                            <i class="ri-file-excel-2-fill"></i>
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <p class="file-name">website_content.exl</p>
                          <p class="file-size">2,635 KB</p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                            data-bs-toggle="dropdown"
                            ><span class="icon"
                              ><span class="feather-icon"
                                ><i data-feather="more-vertical"></i></span
                              ></span
                            ></a
                          >
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">下载</a>
                            <a class="dropdown-item link-danger" href="#"
                              >删除</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-head">
                        <div
                          class="avatar avatar-icon avatar-sm avatar-soft-light"
                        >
                          <span class="initial-wrap fs-3">
                            <i class="ri-file-text-fill"></i>
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <p class="file-name">caoba.pdf</p>
                          <p class="file-size">1.3 GB</p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                            data-bs-toggle="dropdown"
                            ><span class="icon"
                              ><span class="feather-icon"
                                ><i data-feather="more-vertical"></i></span
                              ></span
                            ></a
                          >
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">下载</a>
                            <a class="dropdown-item link-danger" href="#"
                              >删除</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-head">
                        <div
                          class="avatar avatar-icon avatar-sm avatar-soft-warning"
                        >
                          <span class="initial-wrap fs-3">
                            <i class="ri-file-zip-fill"></i>
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <p class="file-name">caoba.zip</p>
                          <p class="file-size">2.45 GB</p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                            data-bs-toggle="dropdown"
                            ><span class="icon"
                              ><span class="feather-icon"
                                ><i data-feather="more-vertical"></i></span
                              ></span
                            ></a
                          >
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">下载</a>
                            <a class="dropdown-item link-danger" href="#"
                              >删除</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-head">
                        <div class="avatar avatar-logo avatar-sm">
                          <span class="initial-wrap">
                            <img src={img6} alt="user" />
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <p class="file-name">
                            bruce-mars-fiEG-Pk6ZASFPk6ZASF
                          </p>
                          <p class="file-size">4,178 KB</p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                            data-bs-toggle="dropdown"
                            ><span class="icon"
                              ><span class="feather-icon"
                                ><i data-feather="more-vertical"></i></span
                              ></span
                            ></a
                          >
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">下载</a>
                            <a class="dropdown-item link-danger" href="#"
                              >删除</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-head">
                        <div class="avatar avatar-logo avatar-sm">
                          <span class="initial-wrap">
                            <img src={img6} alt="user" />
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <p class="file-name">jonas-kakaroto-KIPqvvTKIPqvvT</p>
                          <p class="file-size">951 KB</p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                            data-bs-toggle="dropdown"
                            ><span class="icon"
                              ><span class="feather-icon"
                                ><i data-feather="more-vertical"></i></span
                              ></span
                            ></a
                          >
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">下载</a>
                            <a class="dropdown-item link-danger" href="#"
                              >删除</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#files_collapse_1"
                aria-expanded="true">4月23日</a
              >
            </div>
            <div id="files_collapse_1" class="collapse show">
              <div class="card-body">
                <ul class="cp-files">
                  <li>
                    <div class="media">
                      <div class="media-head">
                        <div
                          class="avatar avatar-icon avatar-sm avatar-soft-light"
                        >
                          <span class="initial-wrap fs-3">
                            <i class="ri-keynote-fill"></i>
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <p class="file-name">presentation.keynote</p>
                          <p class="file-size">20 KB</p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                            data-bs-toggle="dropdown"
                            ><span class="icon"
                              ><span class="feather-icon"
                                ><i data-feather="more-vertical"></i></span
                              ></span
                            ></a
                          >
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">下载</a>
                            <a class="dropdown-item link-danger" href="#"
                              >删除</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-head">
                        <div
                          class="avatar avatar-icon avatar-sm avatar-soft-warning"
                        >
                          <span class="initial-wrap fs-3">
                            <i class="ri-file-zip-fill"></i>
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <p class="file-name">PACK-TRIAL.zip</p>
                          <p class="file-size">2.45 GB</p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                            data-bs-toggle="dropdown"
                            ><span class="icon"
                              ><span class="feather-icon"
                                ><i data-feather="more-vertical"></i></span
                              ></span
                            ></a
                          >
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">下载</a>
                            <a class="dropdown-item" href="#">删除</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-head">
                        <div class="avatar avatar-sm">
                          <img
                            src={thumbImg}
                            alt="user"
                            class="avatar-img"
                          />
                        </div>
                      </div>
                      <div class="media-body">
                        <div>
                          <p class="file-name">joel-mott-LaK153ghdigaghdi</p>
                          <p class="file-size">3,028 KB</p>
                        </div>
                        <div>
                          <a
                            href="#"
                            class="btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                            data-bs-toggle="dropdown"
                            ><span class="icon"
                              ><span class="feather-icon"
                                ><i data-feather="more-vertical"></i></span
                              ></span
                            ></a
                          >
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">下载</a>
                            <a class="dropdown-item" href="#">删除</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
