<template>
  <AppHeader :showSidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
  <div class="integrations-body">
    <simplebar class="nicescroll-bar">
      <div class="container mt-md-7 mt-3">
        <div class="row">
          <div class="col-xxl-8 col-lg-7">
            <div class="media">
              <div class="media-head me-3">
                <div class="avatar avatar-logo">
                  <span class="initial-wrap bg-success-light-5">
                    <img src="@/assets/img/symbol-avatar-15.png" alt="logo" />
                  </span>
                </div>
              </div>
              <div class="media-body">
                <h3 class="hd-bold mb-0">Kickstarter</h3>
                <span>由 caoba 提供</span>
                <div class="d-flex align-items-center mt-1">
                  <div class="d-flex align-items-center">
                    <hk-rating
                      :rating="3"
                      class="d-flex align-items-center me-2"
                      readOnly
                    />
                    <span> 3,123 </span>
                  </div>
                  <div class="d-sm-flex align-items-center d-none">
                    <span class="opacity-15 mx-2">●</span>
                    <span class="d-flex align-items-center fs-8"
                      ><i class="ri-download-cloud-2-line fs-7 me-1 text-primary"></i>15M
                      次下载</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-lg-5 mt-lg-0 mt-3">
            <button type="button" class="btn btn-primary btn-block" @click="install">
              {{ installed ? "已安装" : "安装" }}</button
            >
            <div class="d-flex mt-3">
              <button class="btn btn-sm btn-light btn-block">
                <span>
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="share"></feather-icon>
                    </span>
                  </span>
                  <span>分享</span>
                </span>
              </button>
              <button class="btn btn-sm btn-light btn-block ms-2 mt-0">
                <span>
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="bookmark"></feather-icon>
                    </span>
                  </span>
                  <span>收藏</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-8 col-lg-7">
            <div class="product-detail-slider">
              <AppSlider />
            </div>
            <div class="separator"></div>
            <ul class="nav nav-light nav-pills nav-pills-rounded justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="pill" href="#tabit_1">
                  <span class="nav-link-text">概览</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#tabit_2">
                  <span class="nav-link-text">评论</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#tabit_3">
                  <span class="nav-link-text">评价</span>
                </a>
              </li>
            </ul>
            <div class="tab-content py-7">
              <div class="tab-pane fade show active" id="tabit_1">
                <h5>概览与功能</h5>
                <p>
                  觉得经典 Lorem ipsum 已经过时了？用这些有趣又独特的文本生成器，为你的下一个项目增添一点个性。经典拉丁文段落永远不会过时，用它简单易用的填充文本生成器，尽情享受你想要的 Lorem ipsum。它将前所未有地遭遇烈火与怒火。大家都知道那个叫 Lorem Ipsum 的猪吗？一位"极其可靠的信源"打电话到我的办公室，告诉我奥巴马（Barack Obama）的占位文本是个骗局。
                </p>
                <div class="row my-7">
                  <div class="col-xxl-6">
                    <h6>Kaster Shots</h6>
                    <p>
                      如果你不刷 Twitter、不看新闻，或者只是听不够《学徒》主持人的传奇演讲，那就试试这款 Trump Lorem ipsum 生成器吧。
                    </p>
                  </div>
                  <div class="col-xxl-6 mt-xxl-0 mt-3">
                    <h6>Kaster Brilliant</h6>
                    <p>
                      如果你还没看过《权力的游戏》，现在就去看。如果看过了，你就会完全理解为什么这款以 Hodor 为主题的 Lorem ipsum 生成器如此出色。
                    </p>
                  </div>
                </div>
                <h6>更多特色功能</h6>
                <ul class="list-ul ps-3">
                  <li class="mb-1">
                    <span
                      >Kickstarter 是一家总部位于布鲁克林的美国公益公司。</span
                    >
                  </li>
                  <li class="mb-1">
                    <span>纽约，运营着全球众筹平台。</span>
                  </li>
                  <li class="mb-1">
                    <span
                      >该平台专注于创意。公司宣称的使命。</span
                    >
                  </li>
                  <li class="mb-1"><span>帮助将创意项目变为现实。</span></li>
                  <li>
                    <span>Kaster，试试这款 Trump Lorem ipsum 生成器。</span>
                  </li>
                </ul>
              </div>
              <div class="tab-pane fade" id="tabit_2">
                <div class="title title-lg"><span>3 条回复</span></div>
                <div class="comment-block">
                  <form class="mb-4">
                    <div class="form-group">
                      <div class="media">
                        <div class="media-head">
                          <div class="avatar avatar-xs avatar-rounded">
                            <img
                              src="@/assets/img/avatar4.jpg"
                              alt="user"
                              class="avatar-img"
                            />
                          </div>
                        </div>
                        <div class="media-body">
                          <div class="form-inline">
                            <input class="form-control me-3" />
                            <button class="btn btn-primary">发布</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-xs avatar-rounded">
                        <img
                          src="@/assets/img/avatar4.jpg"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <div>
                        <span class="cm-name">马丁·路德</span>
                      </div>
                      <p>
                        从这里开始，你可以运行 truffle compile、truffle migrate 和 truffle
                        test 来编译合约、将合约部署到网络，并运行它们关联的单元测试。
                      </p>
                      <div class="comment-action-wrap mt-3">
                        <span>3 小时前</span>
                        <span class="comment-dot-sep">●</span>
                        <a href="#">回复</a>
                        <span class="comment-dot-sep">●</span>
                        <a href="#">点赞</a>
                      </div>
                    </div>
                  </div>
                  <div class="separator separator-light"></div>
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-xs avatar-rounded">
                        <img
                          src="@/assets/img/avatar2.jpg"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <div>
                        <span class="cm-name">凯瑟琳·琼斯</span>
                      </div>
                      <p>阿什顿·库彻（Ashton Kutcher）完成了非常出色的动态作品</p>
                      <div class="comment-action-wrap mt-3">
                        <span>3 小时前</span>
                        <span class="comment-dot-sep">●</span>
                        <a href="#">回复</a>
                        <span class="comment-dot-sep">●</span>
                        <a href="#">点赞</a>
                      </div>
                      <div class="media">
                        <div class="media-head">
                          <div class="avatar avatar-xs avatar-rounded">
                            <img
                              src="@/assets/img/avatar3.jpg"
                              alt="user"
                              class="avatar-img"
                            />
                          </div>
                        </div>
                        <div class="media-body">
                          <div>
                            <span class="cm-name">阿什顿·库彻</span>
                          </div>
                          <p>谢谢 :)</p>
                          <div class="comment-action-wrap mt-3">
                            <span>3 小时前</span>
                            <span class="comment-dot-sep">●</span>
                            <a href="#">回复</a>
                            <span class="comment-dot-sep">●</span>
                            <a href="#">点赞</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="separator separator-light"></div>
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-xs avatar-rounded">
                        <img
                          src="@/assets/img/avatar4.jpg"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <div>
                        <span class="cm-name">菲比·弗莱</span>
                      </div>
                      <p>
                        如果你的 Lorem ipsum 喜欢"超脆"的口感，那么 Bacon Ipsum 就是你的占位文本生成器。煎蛋和土豆饼随你选择，不过推荐加一份。
                      </p>
                      <div class="comment-action-wrap mt-3">
                        <span>2020年2月8日</span>
                        <span class="comment-dot-sep">●</span>
                        <a href="#">回复</a>
                        <span class="comment-dot-sep">●</span>
                        <a href="#">点赞</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tabit_3">
                <div class="review-block">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                      <div class="title title-lg mb-0 me-3">
                        <span>用户评价</span>
                      </div>
                      <button
                        class="btn btn-soft-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add_new_review"
                      >
                        写评价
                      </button>
                    </div>
                    <div>
                      <select class="form-select d-md-flex d-none">
                        <option selected="">有帮助的评价</option>
                        <option value="1">评分最高</option>
                        <option value="2">评分较低</option>
                        <option value="3">热门评价</option>
                      </select>
                    </div>
                  </div>
                  <div class="separator mt-4"></div>
                  <div class="review">
                    <div class="media align-items-center">
                      <div class="media-head">
                        <div class="avatar avatar-xs avatar-rounded">
                          <img
                            src="@/assets/img/avatar7.jpg"
                            alt="user"
                            class="avatar-img"
                          />
                        </div>
                      </div>
                      <div class="media-body">
                        <span class="cr-name">马丁·路德</span>
                      </div>
                    </div>
                    <div class="d-flex flex-sm-nowrap flex-wrap mt-2 mb-1">
                      <hk-rating
                        :rating="4"
                        class="d-flex align-items-center me-2 mb-sm-0 mb-2"
                        readOnly
                      />
                      <div>
                        针对 <span class="text-dark mx-1">设计质量</span>
                        <span class="fs-8">2020年1月12日</span>
                      </div>
                    </div>
                    <p>
                      一款手工制作、小批量、文艺范的手冲版经典 Lorem ipsum 生成器——Hipster
                      Ipsum 会让你的原型图多一分蓝领气息。
                    </p>
                    <div class="review-action-wrap mt-3">
                      <span class="me-1">这条评价对你有帮助吗？</span>
                      <a href="#" class="btn btn-outline-light btn-xs">是</a>
                      <a href="#" class="btn btn-outline-light btn-xs">否</a>
                      <span class="review-dot-sep">●</span>
                      <a href="#">回复</a>
                      <span class="review-dot-sep">●</span>
                      <a href="#">举报</a>
                    </div>
                  </div>

                  <div class="separator separator-light"></div>
                  <div class="review">
                    <div class="media align-items-center">
                      <div class="media-head">
                        <div class="avatar avatar-xs">
                          <img
                            src="@/assets/img/avatar3.jpg"
                            alt="user"
                            class="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div class="media-body">
                        <span class="cr-name">菲比·弗莱</span>
                      </div>
                    </div>
                    <div class="d-flex flex-sm-nowrap flex-wrap mt-2 mb-1">
                      <hk-rating
                        :rating="2"
                        class="d-flex align-items-center me-2 mb-sm-0 mb-2"
                        readOnly
                      />
                      <div>
                        针对 <span class="text-dark mx-1">设计质量</span>
                        <span class="fs-8">2020年12月31日</span>
                      </div>
                    </div>
                    <p>
                      作为一款网页生成器和 jQuery 插件，Delorean Ipsum 使用《回到未来》的台词，为每个项目（无论是过去还是现在）生成值得引用的 Lorem ipsum 文本。
                    </p>
                    <div class="review-action-wrap mt-3">
                      <span class="me-1">这条评价对你有帮助吗？</span>
                      <a href="#" class="btn btn-outline-light btn-xs">是</a>
                      <a href="#" class="btn btn-outline-light btn-xs">否</a>
                      <span class="review-dot-sep">●</span>
                      <a href="#">回复</a>
                      <span class="review-dot-sep">●</span>
                      <a href="#">举报</a>
                    </div>
                    <div class="review">
                      <div class="media align-items-center">
                        <div class="media-head">
                          <div class="avatar avatar-xs">
                            <img
                              src="@/assets/img/avatar13.jpg"
                              alt="user"
                              class="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div class="media-body">
                          <span class="cr-name">阿什顿·库彻</span>
                        </div>
                      </div>
                      <div class="d-flex flex-sm-nowrap flex-wrap mt-2 mb-1">
                        <div><span class="fs-8">2020年1月1日</span></div>
                      </div>
                      <p>
                        太空——最后的边疆。这是星舰"进取号"的航行历程。
                      </p>
                      <div class="review-action-wrap mt-3">
                        <span class="me-1">这条评价对你有帮助吗？</span>
                        <a href="#" class="btn btn-outline-light btn-xs">是</a>
                        <a href="#" class="btn btn-outline-light btn-xs">否</a>
                        <span class="review-dot-sep">●</span>
                        <a href="#">回复</a>
                        <span class="review-dot-sep">●</span>
                        <a href="#">举报</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-lg-5">
            <div class="content-aside">
              <div class="card card-border mt-6">
                <div class="card-body">
                  <h6 class="mb-4">分类</h6>
                  <div class="tag-cloud">
                    <a href="#" class="badge badge-soft-primary me-1">caoba</a>
                    <a href="#" class="badge badge-soft-primary me-1">Bootstrap 5</a>
                    <a href="#" class="badge badge-soft-primary">后台管理模板</a>
                  </div>
                </div>
              </div>
              <div class="card card-border">
                <div class="card-body">
                  <div class="media align-items-center">
                    <div class="media-head me-3">
                      <div
                        class="avatar avatar-sm avatar-icon avatar-soft-success avatar-rounded"
                      >
                        <span class="initial-wrap">
                          <span class="feather-icon">
                            <feather-icon name="external-link"></feather-icon>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div class="media-body">
                      <h6 class="mb-0">网站</h6>
                      <a href="#" class="link-muted">kickstarter.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card-border">
                <div class="card-body">
                  <h6 class="mb-4">其他信息</h6>
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <div class="fs-7">版本</div>
                      <div class="text-dark fw-medium">A3.45-4.0</div>
                    </li>
                    <li class="mb-3">
                      <div class="fs-7">更新时间</div>
                      <div class="text-dark fw-medium">2020年5月20日</div>
                    </li>
                    <li class="mb-3">
                      <div class="fs-7">大小</div>
                      <div class="text-dark fw-medium">4.35 MB</div>
                    </li>
                    <li class="mb-3">
                      <div class="fs-7">语言</div>
                      <div class="text-dark fw-medium">英语、西班牙语、法语</div>
                    </li>
                    <li class="mb-3">
                      <div class="fs-7">开发者</div>
                      <div class="text-dark fw-medium d-flex align-items-center">
                        caoba<i class="ri-information-fill fs-7 ms-1 lh-1"></i>
                      </div>
                    </li>
                    <li class="mb-3">
                      <div class="fs-7">资源</div>
                      <div class="text-dark fw-medium d-flex align-items-center">
                        产品文档<a href="#" class="d-flex"
                          ><i class="ri-external-link-line fs-7 ms-1 lh-1"></i
                        ></a>
                      </div>
                    </li>
                    <li>
                      <a href="#" class="d-flex align-items-center link-danger"
                        ><span class="d-flex"
                          ><i class="ri-information-line fs-7 me-1 lh-1"></i></span
                        >举报</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card card-border">
                <div class="card-body">
                  <h6 class="mb-4">相关</h6>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item border-0 px-0">
                      <a href="#">
                        <div class="media align-items-center">
                          <div class="media-head me-3">
                            <div class="avatar avatar-sm avatar-logo">
                              <span class="initial-wrap bg-success-light-5">
                                <img src="@/assets/img/symbol-avatar-14.png" alt="logo" />
                              </span>
                            </div>
                          </div>
                          <div
                            class="media-body d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h6 class="mb-0">Intercom</h6>
                              <div class="fs-7 text-muted">聊天应用</div>
                              <div class="d-flex align-items-center fs-8 text-muted">
                                <i
                                  class="ri-download-cloud-2-line fs-7 me-1 text-primary"
                                ></i
                                >15M 次下载
                              </div>
                            </div>
                            <span class="badge badge-sm badge-primary">
                              <span
                                ><span class="icon"><i class="ri-star-s-fill"></i></span
                                >4.5</span
                              >
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="list-group-item border-0 px-0">
                      <a href="#">
                        <div class="media align-items-center">
                          <div class="media-head me-3">
                            <div class="avatar avatar-sm">
                              <img
                                class="avatar-img"
                                src="@/assets/img/logo-avatar-2.png"
                                alt="logo"
                              />
                            </div>
                          </div>
                          <div
                            class="media-body d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h6 class="mb-0">Swiggy</h6>
                              <div class="fs-7 text-muted">外卖配送</div>
                              <div class="d-flex align-items-center fs-8 text-muted">
                                <i
                                  class="ri-download-cloud-2-line fs-7 me-1 text-primary"
                                ></i
                                >15M 次下载
                              </div>
                            </div>
                            <span class="badge badge-sm badge-warning">
                              <span
                                ><span class="icon"><i class="ri-star-s-fill"></i></span
                                >3.5</span
                              >
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="list-group-item border-0 px-0">
                      <a href="#">
                        <div class="media align-items-center">
                          <div class="media-head me-3">
                            <div class="avatar avatar-sm">
                              <img
                                class="avatar-img"
                                src="@/assets/img/logo-avatar-10.png"
                                alt="logo"
                              />
                            </div>
                          </div>
                          <div
                            class="media-body d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h6 class="mb-0">Medium</h6>
                              <div class="fs-7 text-muted">博客</div>
                              <div class="d-flex align-items-center fs-8 text-muted">
                                <i
                                  class="ri-download-cloud-2-line fs-7 me-1 text-primary"
                                ></i
                                >15M 次下载
                              </div>
                            </div>
                            <span class="badge badge-sm badge-danger">
                              <span
                                ><span class="icon"><i class="ri-star-s-fill"></i></span
                                >2.0</span
                              >
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="list-group-item border-0 px-0">
                      <a href="#">
                        <div class="media align-items-center">
                          <div class="media-head me-3">
                            <div class="avatar avatar-sm avatar-logo">
                              <span class="initial-wrap bg-dark">
                                <img src="@/assets/img/symbol-avatar-12.png" alt="logo" />
                              </span>
                            </div>
                          </div>
                          <div
                            class="media-body d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <h6 class="mb-0">Figma</h6>
                              <div class="fs-7 text-muted">设计工具</div>
                              <div class="d-flex align-items-center fs-8 text-muted">
                                <i
                                  class="ri-download-cloud-2-line fs-7 me-1 text-primary"
                                ></i
                                >15M 次下载
                              </div>
                            </div>
                            <span class="badge badge-sm badge-primary">
                              <span
                                ><span class="icon"><i class="ri-star-s-fill"></i></span
                                >4.5</span
                              >
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6 class="text-center mt-10 mb-4">相似应用</h6>
        <div class="row">
          <div class="col-xl-3 col-md-6">
            <div class="card card-border text-center">
              <div class="card-body">
                <div class="avatar avatar-sm avatar-violet mb-3">
                  <span class="initial-wrap">Cb</span>
                </div>
                <div class="app-name">caoba</div>
                <div class="app-cat">聊天应用</div>
                <div class="d-flex align-items-center justify-content-center">
                  <hk-rating
                    :rating="3"
                    class="d-flex align-items-center me-2"
                    readOnly
                  />
                  <span class="fs-8">3,672</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card card-border text-center">
              <div class="card-body">
                <div class="avatar avatar-sm avatar-logo mb-3">
                  <span class="initial-wrap">
                    <img src="@/assets/img/symbol-avatar-4.png" alt="logo" />
                  </span>
                </div>
                <div class="app-name">caoba</div>
                <div class="app-cat">仪表盘模板</div>
                <div class="d-flex align-items-center justify-content-center">
                  <hk-rating
                    :rating="3"
                    class="d-flex align-items-center me-2"
                    readOnly
                  />
                  <span class="fs-8">3,672</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card card-border text-center">
              <div class="card-body">
                <div class="avatar avatar-sm avatar-logo mb-3">
                  <span class="initial-wrap">
                    <img src="@/assets/img/symbol-avatar-1.png" alt="logo" />
                  </span>
                </div>
                <div class="app-name">Tinder</div>
                <div class="app-cat">交友应用</div>
                <div class="d-flex align-items-center justify-content-center">
                  <hk-rating
                    :rating="4"
                    class="d-flex align-items-center me-2"
                    readOnly
                  />
                  <span class="fs-8">3,672</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card card-border text-center">
              <div class="card-body">
                <div class="avatar avatar-sm avatar-logo mb-3">
                  <span class="initial-wrap">
                    <img src="@/assets/img/symbol-avatar-16.png" alt="logo" />
                  </span>
                </div>
                <div class="app-name">Github</div>
                <div class="app-cat">极客开发</div>
                <div class="d-flex align-items-center justify-content-center">
                  <hk-rating
                    :rating="3.5"
                    :fraction="0.5"
                    readOnly
                    class="d-flex align-items-center me-2"
                  />
                  <span class="fs-8">3,672</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppSlider from "./AppsSlider.vue";
import { useIntegrationStore } from "@/stores/integrationStore";

export default {
  components: {
    AppHeader,
    AppSlider,
  },
  props: {
    showSidebar: Boolean,
  },
  emits: ["toggle-sidebar"],
  setup() {
    const store = useIntegrationStore();
    return { store };
  },
  computed: {
    currentApp() {
      const id = Number(this.$route.query.id);
      if (id) {
        return this.store.integrations.find((it) => it.id === id) || null;
      }
      return this.store.integrations.find(
        (it) => it.status === "CONNECTED",
      ) || null;
    },
    installed() {
      return this.currentApp?.status === "CONNECTED";
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    async install() {
      if (!this.store.integrations.length) {
        await this.store.fetchIntegrations();
      }
      const app = this.currentApp;
      if (!app) {
        window.alert("该应用暂未在管理端配置，请在集成页选择应用。");
        return;
      }
      try {
        if (app.status === "CONNECTED") {
          if (window.confirm(`确定卸载「${app.appName}」吗？`)) {
            await this.store.disconnect(app.id);
          }
        } else {
          await this.store.connect(app.id);
        }
      } catch (err) {
        console.error("[integration] install failed:", err);
        window.alert(err.response?.data?.message || err.message);
      }
    },
  },
};
</script>
