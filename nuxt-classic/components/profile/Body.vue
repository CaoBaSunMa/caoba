<template>
  <BRow class="mt-7">
    <BCol lg="4" class="mb-lg-0 mb-3">
      <BCard no-body class="card-border mb-lg-4 mb-3">
        <BCardHeader class="card-header card-header-action">
          <div class="media align-items-center">
            <div class="media-head me-2">
              <div class="avatar avatar-sm avatar-rounded">
                <img src="@/assets/img/avatar3.jpg" alt="user" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div class="fw-medium text-dark">凯特·琼斯</div>
              <div class="fs-7">业务经理</div>
            </div>
          </div>
          <div class="card-action-wrap">
            <BDropdown
              variant="flush-dark"
              toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
              href="#"
              end
            >
              <template #button-content>
                <span class="icon">
                  <feather-icon name="settings" />
                </span>
              </template>
              <BDropdownItem href="#">操作</BDropdownItem>
              <BDropdownItem href="#">另一项操作</BDropdownItem>
              <BDropdownItem href="#">其他选项</BDropdownItem>
              <BDropdownDivider />
              <BDropdownItem href="#">分隔链接</BDropdownItem>
            </BDropdown>
          </div>
        </BCardHeader>
        <BCardBody>
          <div class="d-flex text-center">
            <div class="flex-1 border-end">
              <div>
                <span class="d-block fs-4 text-dark mb-1">154</span>
                <span class="d-block text-capitalize fs-7">照片</span>
              </div>
            </div>
            <div class="flex-1 border-end">
              <div>
                <span class="d-block fs-4 text-dark mb-1">65</span>
                <span class="d-block text-capitalize fs-7">关注者</span>
              </div>
            </div>
            <div class="flex-1">
              <div>
                <span class="d-block fs-4 text-dark mb-1">433</span>
                <span class="d-block text-capitalize fs-7">浏览</span>
              </div>
            </div>
          </div>
        </BCardBody>

        <BListGroup flush>
          <BListGroupItem class="border-0">
            <span>
              <i class="bi bi-calendar-check-fill text-disabled me-2"></i>
              <span class="text-muted">去过：</span>
            </span>
            <span class="ms-2">噢，加拿大</span>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <span>
              <i class="bi bi-briefcase-fill text-disabled me-2"></i>
              <span class="text-muted">就职于：</span>
            </span>
            <span class="ms-2">某公司</span>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <span
              ><i class="bi bi-house-door-fill text-disabled me-2"></i>
              <span class="text-muted">现居：</span>
            </span>
            <span class="ms-2">旧金山，加利福尼亚州</span>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <span>
              <i class="bi bi-geo-alt-fill text-disabled me-2"></i>
              <span class="text-muted">来自：</span>
            </span>
            <span class="ms-2">西雅图，华盛顿州</span>
          </BListGroupItem>
        </BListGroup>
      </BCard>
      <BCard no-body class="card-border mb-lg-4 mb-3">
        <BCardHeader class="card-header-action">
          <h6>你认识这些人吗？</h6>
          <div class="card-action-wrap">
            <BDropdown
              variant="flush-dark"
              toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
              href="#"
              end
            >
              <template #button-content>
                <span class="icon">
                  <feather-icon name="more-horizontal" />
                </span>
              </template>
              <BDropdownItem href="#">操作</BDropdownItem>
              <BDropdownItem href="#">另一项操作</BDropdownItem>
              <BDropdownItem href="#">其他选项</BDropdownItem>
              <BDropdownDivider />
              <BDropdownItem href="#">分隔链接</BDropdownItem>
            </BDropdown>
          </div>
        </BCardHeader>
        <BListGroup flush>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar8.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">伊薇·小野</span>
                <span class="d-block text-muted fs-7">Apple Inc</span>
              </div>
              <BButton variant="light" size="sm" class="btn-icon btn-rounded" href="#">
                <span class="icon">
                  <feather-icon name="plus"></feather-icon>
                </span>
              </BButton>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar7.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">克莱·马塞</span>
                <span class="d-block text-muted fs-7">caoba.com</span>
              </div>
              <BButton variant="light" size="sm" class="btn-icon btn-rounded" href="#">
                <span class="icon">
                  <feather-icon name="plus"></feather-icon>
                </span>
              </BButton>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar5.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">玛德琳·拉斯孔</span>
                <span class="d-block text-muted fs-7">Godaddy.co.in</span>
              </div>
              <BButton
                variant="primary"
                size="sm"
                class="btn btn-icon btn-rounded"
                href="#"
              >
                <span class="icon">
                  <feather-icon name="check"></feather-icon>
                </span>
              </BButton>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar4.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">米素库·海德</span>
                <span class="d-block text-muted fs-7">Flipkart</span>
              </div>
              <BButton
                variant="primary"
                size="sm"
                class="btn btn-icon btn-rounded"
                href="#"
              >
                <span class="icon">
                  <feather-icon name="check"></feather-icon>
                </span>
              </BButton>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar3.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">伊齐基尔·梅雷迪斯</span>
                <span class="d-block text-muted fs-7">Paypal</span>
              </div>
              <BButton variant="light" size="sm" class="btn-icon btn-rounded" href="#"
                ><span class="icon"
                  ><span class="feather-icon"
                    ><feather-icon name="plus"></feather-icon></span></span
              ></BButton>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar2.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">约翰尼·梅托耶</span>
                <span class="d-block text-muted fs-7">Robocon</span>
              </div>
              <BButton
                variant="primary"
                size="sm"
                class="btn btn-icon btn-rounded"
                href="#"
              >
                <span class="icon">
                  <feather-icon name="check"></feather-icon>
                </span>
              </BButton>
            </div>
          </BListGroupItem>
        </BListGroup>
      </BCard>
      <BCard no-body class="card-border mb-lg-4 mb-3">
        <BCardHeader class="card-header-action">
          <h6>
            好友
            <span class="badge badge-sm badge-light me-1">212</span>
          </h6>
          <div class="card-action-wrap">
            <a href="#">查看全部</a>
          </div>
        </BCardHeader>
        <BCardBody>
          <BRow gutter-x="3" class="text-center">
            <BCol cols="3" class="mb-3">
              <div class="mb-2">
                <img
                  src="@/assets/img/avatar1.jpg"
                  alt="user"
                  class="img-fluid rounded"
                />
              </div>
              <span class="d-block fs-7 text-truncate">伊薇·小野</span>
            </BCol>
            <BCol cols="3" class="mb-3">
              <div class="mb-2">
                <img
                  src="@/assets/img/avatar2.jpg"
                  alt="user"
                  class="img-fluid rounded"
                />
              </div>
              <span class="d-block fs-7 text-truncate">克莱·马塞</span>
            </BCol>
            <BCol cols="3" class="mb-3">
              <div class="mb-2">
                <img
                  src="@/assets/img/avatar3.jpg"
                  alt="user"
                  class="img-fluid rounded"
                />
              </div>
              <span class="d-block fs-7 text-truncate">玛德琳·拉斯孔</span>
            </BCol>
            <BCol cols="3" class="mb-3">
              <div class="mb-2">
                <img
                  src="@/assets/img/avatar4.jpg"
                  alt="user"
                  class="img-fluid rounded"
                />
              </div>
              <span class="d-block fs-7 text-truncate">米素库·海德</span>
            </BCol>
            <BCol cols="3" class="mb-3">
              <div class="mb-2">
                <img
                  src="@/assets/img/avatar5.jpg"
                  alt="user"
                  class="img-fluid rounded"
                />
              </div>
              <span class="d-block fs-7 text-truncate">伊齐基尔·梅雷迪斯</span>
            </BCol>
            <BCol cols="3" class="mb-3">
              <div class="mb-2">
                <img
                  src="@/assets/img/avatar6.jpg"
                  alt="user"
                  class="img-fluid rounded"
                />
              </div>
              <span class="d-block fs-7 text-truncate">约翰尼·梅托耶</span>
            </BCol>
            <BCol cols="3" class="mb-3">
              <div class="mb-2">
                <img
                  src="@/assets/img/avatar7.jpg"
                  alt="user"
                  class="img-fluid rounded"
                />
              </div>
              <span class="d-block fs-7 text-truncate">安杰利克·劳弗</span>
            </BCol>
            <BCol cols="3" class="mb-3">
              <div class="mb-2">
                <img
                  src="@/assets/img/avatar8.jpg"
                  alt="user"
                  class="img-fluid rounded"
                />
              </div>
              <span class="d-block fs-7 text-truncate">塞西莉亚·里奥斯</span>
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
      <BCard no-body class="card-border mb-lg-4 mb-3">
        <BCardHeader class="card-header-action">
          <h6>
            群组
            <span class="badge badge-sm badge-light me-1">12</span>
          </h6>
          <div class="card-action-wrap">
            <a href="#">查看全部</a>
          </div>
        </BCardHeader>
        <BListGroup flush>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar1.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">景观小组</span>
                <span class="d-block text-muted fs-7">1.25K 名成员</span>
              </div>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar2.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">乔什·格罗本粉丝团</span>
                <span class="d-block text-muted fs-7">2M 名成员</span>
              </div>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar3.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">UI/UX 小组</span>
                <span class="d-block text-muted fs-7">8K 名成员</span>
              </div>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar4.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize">设计之旅</span>
                <span class="d-block text-muted fs-7">14K 名成员</span>
              </div>
            </div>
          </BListGroupItem>
        </BListGroup>
      </BCard>
      <BCard no-body class="card-border mb-lg-4 mb-3">
        <BCardHeader class="card-header-action">
          <h6>
            链接
            <span class="badge badge-sm badge-light me-1">5</span>
          </h6>
          <div class="card-action-wrap">
            <a href="#">查看全部</a>
          </div>
        </BCardHeader>
        <BListGroup flush>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-primary avatar-rounded">
                  <span class="initial-wrap">G</span>
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize text-truncate mw-150p"> Google</span>
                <span class="d-block text-muted fs-7 text-truncate mw-150p"
                  >google.com</span
                >
              </div>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-pink avatar-rounded">
                  <span class="initial-wrap">AR</span>
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize text-truncate mw-150p"
                  >提升你的业务</span
                >
                <span class="d-block text-muted fs-7 text-truncate mw-150p"
                  >yahoo.com</span
                >
              </div>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-warning avatar-rounded">
                  <span class="initial-wrap">PR</span>
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize text-truncate mw-150p"
                  >铸造厨具</span
                >
                <span class="d-block text-muted fs-7 text-truncate mw-150p"
                  >yahoo.com</span
                >
              </div>
            </div>
          </BListGroupItem>
          <BListGroupItem class="border-0">
            <div class="media align-items-center">
              <div class="media-head me-3">
                <div class="avatar avatar-sm avatar-success avatar-rounded">
                  <span class="initial-wrap">PR</span>
                </div>
              </div>
              <div class="media-body">
                <span class="d-block text-capitalize text-truncate mw-150p"
                  >宇宙的思考</span
                >
                <span class="d-block text-muted fs-7 text-truncate mw-150p"
                  >facebook.com</span
                >
              </div>
            </div>
          </BListGroupItem>
        </BListGroup>
      </BCard>
      <BCard no-body class="bg-primary text-center">
        <BCardBody class="twitter-slider-wrap">
          <div class="twitter-icon text-center mb-3">
            <i class="fa fa-twitter" />
          </div>
          <swiper
            :autoHeight="true"
            :loop="true"
            :autoplay="{ delay: 5000 }"
            :pagination="{ clickable: true }"
            :modules="modules"
            class="swiper-carousel tweeter-carousel"
          >
            <swiper-slide>
              <p class="tweet">
                发挥创意，保持好奇心，用心做好每一件作品。保持专注，终将有所收获。
                <a
                  href="#demo"
                  data-expanded-url="#demo"
                  target=" _blank"
                  title="#title"
                  data-scribe="element:url"
                  ><span>https://</span>demo.de<span>&nbsp;</span></a
                >
                <br />
                <span class="timePosted"><a href="#demo">发布于 2024年5月9日</a></span>
              </p>
            </swiper-slide>
            <swiper-slide>
              <p className="tweet">
                设计的意义在于解决问题，而问题往往藏在细节里。不断打磨、不断迭代，才能做出真正打动人心的作品。<br /><br />
                灵感来自生活，也来自每一次尝试。坚持创作，你会遇见更好的自己。无论是形式、功能还是体验，都值得全力以赴。
                <br />
                <span className="timePosted"
                  ><a href="#demo">发布于 2024年5月11日</a></span
                >
              </p>
            </swiper-slide>
          </swiper>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol lg="8">
      <BCard no-body class="card-border card-profile-feed mb-lg-4 mb-3">
        <BCardHeader class="card-header-action">
          <div class="media align-items-center">
            <div class="media-head me-2">
              <div class="avatar avatar-sm avatar-rounded">
                <img src="@/assets/img/avatar8.jpg" alt="user" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div class="fw-medium text-dark">乌玛·瑟曼</div>
              <div class="fs-7">25 分钟</div>
            </div>
          </div>
          <div class="card-action-wrap">
            <BDropdown
              variant="flush-dark"
              toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
              href="#"
              end
            >
              <template #button-content>
                <span class="icon">
                  <feather-icon name="more-horizontal" />
                </span>
              </template>
              <BDropdownItem href="#">操作</BDropdownItem>
              <BDropdownItem href="#">另一项操作</BDropdownItem>
              <BDropdownItem href="#">其他选项</BDropdownItem>
              <BDropdownDivider />
              <BDropdownItem href="#">分隔链接</BDropdownItem>
            </BDropdown>
          </div>
        </BCardHeader>
        <BCardBody>
          <p class="card-text mb-5">
            当年，Sequence 的设计师们决定用手写 Sharpie 笔，把他们为 Chipotle 设计的纸袋包装印上一段 Lorem ipsum 文字。
          </p>
          <BCard no-body class="card-border">
            <div class="position-relative">
              <BCardImg class="d-block" :src="mock12" alt="卡片图片" />
              <a href="#" class="btn btn-dark btn-rounded btn-pg-link">
                <span>
                  <span class="icon">
                    <feather-icon name="link-2"></feather-icon>
                  </span>
                  <span>网站</span>
                </span>
              </a>
            </div>
            <BCardBody>
              <h5>培根鸡肉、烟熏火鸡与手撕排骨。</h5>
              <p class="card-text">
                当然，我们也不能漏掉那一大批经典的 Lorem ipsum 仿制品：Bacon Ipsum、Hipster
                Ipsum、Corporate Ipsum、Legal Ipsum。
              </p>
            </BCardBody>
          </BCard>
        </BCardBody>
        <BCardFooter class="justify-content-between">
          <div>
            <a href="#"><i class="bi bi-heart-fill text-primary"></i>30K</a>
          </div>
          <div>
            <a href="#">1K 条评论</a>
            <a href="#">12 次分享</a>
          </div>
        </BCardFooter>
      </BCard>
      <div class="mb-lg-4 mb-lg-4 mb-3">
        <BCard no-body class="card-border card-profile-feed mb-0 rounded-bottom-0">
          <BCardHeader class="card-header-action">
            <div class="media align-items-center">
              <div class="media-head me-2">
                <div class="avatar avatar-sm avatar-rounded">
                  <img src="@/assets/img/avatar10.jpg" alt="user" class="avatar-img" />
                </div>
              </div>
              <div class="media-body">
                <div class="fw-medium text-dark">约翰尼·梅托耶</div>
                <div class="fs-7">3 小时前</div>
              </div>
            </div>
            <div class="card-action-wrap">
              <BDropdown
                variant="flush-dark"
                toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                href="#"
                end
              >
                <template #button-content>
                  <span class="icon">
                    <feather-icon name="more-horizontal" />
                  </span>
                </template>
                <BDropdownItem href="#">操作</BDropdownItem>
                <BDropdownItem href="#">另一项操作</BDropdownItem>
                <BDropdownItem href="#">其他选项</BDropdownItem>
                <BDropdownDivider />
                <BDropdownItem href="#">分隔链接</BDropdownItem>
              </BDropdown>
            </div>
          </BCardHeader>
          <BCardBody>
            <BCardText class="mb-5">
              更别提 Cupcake Ipsum、Bob Ross Ipsum（“快乐的小云朵”）和毛茸茸的
              Cat Ipsum 了。
            </BCardText>
            <div class="feed-img-layout">
              <BRow class="h-200p">
                <BCol cols="6" class="h-100">
                  <div
                    class="feed-img h-100"
                    :style="{ backgroundImage: `url(${mock11})` }"
                  ></div>
                </BCol>
                <BCol cols="6" class="h-100">
                  <BRow class="h-100">
                    <BCol sm="12" class="h-50 pb-2">
                      <div
                        class="feed-img h-100"
                        :style="{ backgroundImage: `url(${mock12})` }"
                      ></div>
                    </BCol>
                    <BCol sm="12" class="h-50">
                      <BRow class="h-100">
                        <BCol cols="6" class="h-100">
                          <div
                            class="feed-img h-100"
                            :style="{ backgroundImage: `url(${mock13})` }"
                          ></div>
                        </BCol>
                        <BCol cols="6" class="h-100">
                          <div
                            class="feed-img h-100"
                            :style="{ backgroundImage: `url(${mock14})` }"
                          ></div>
                        </BCol>
                      </BRow>
                    </BCol>
                  </BRow>
                </BCol>
              </BRow>
            </div>
          </BCardBody>
          <BCardFooter class="justify-content-between">
            <div>
              <a href="#"><i class="bi bi-heart-fill text-primary"></i>30K</a>
            </div>
            <div>
              <a href="#">1K 条评论</a>
              <a href="#">12 次分享</a>
            </div>
          </BCardFooter>
        </BCard>
        <BCard
          no-body
          class="card-border card-profile-feed border-top-0 rounded-top-0 mb-0"
        >
          <BCardBody>
            <BButton variant="light" size="sm" class="btn-block mb-4">
              隐藏评论
            </BButton>
            <div class="comment-block">
              <div class="media">
                <div class="media-head">
                  <div class="avatar avatar-xs avatar-rounded">
                    <img src="@/assets/img/avatar4.jpg" alt="user" class="avatar-img" />
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
            </div>
          </BCardBody>
          <BCardFooter class="comment-block">
            <BForm @submit.prevent class="w-100">
              <BFormGroup class="mb-0">
                <div class="media">
                  <div class="media-head">
                    <div class="avatar avatar-xs avatar-rounded">
                      <img src="@/assets/img/avatar3.jpg" alt="user" class="avatar-img" />
                    </div>
                  </div>
                  <div class="media-body">
                    <BFormTextarea
                      class="border-0 bg-transparent shadow-none"
                      rows="1"
                      placeholder="发表评论..."
                    />
                  </div>
                </div>
              </BFormGroup>
            </BForm>
          </BCardFooter>
        </BCard>
      </div>
      <BCard no-body class="card-border card-profile-feed">
        <BCardHeader class="card-header-action">
          <div class="media align-items-center">
            <div class="media-head me-2">
              <div class="avatar avatar-sm avatar-rounded">
                <img src="@/assets/img/avatar9.jpg" alt="user" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div class="fw-medium text-dark">米素库·海德</div>
              <div class="fs-7">11 小时前</div>
            </div>
          </div>
          <div class="card-action-wrap">
            <BDropdown
              variant="flush-dark"
              toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
              href="#"
              end
            >
              <template #button-content>
                <span class="icon">
                  <feather-icon name="more-horizontal" />
                </span>
              </template>
              <BDropdownItem href="#">操作</BDropdownItem>
              <BDropdownItem href="#">另一项操作</BDropdownItem>
              <BDropdownItem href="#">其他选项</BDropdownItem>
              <BDropdownDivider />
              <BDropdownItem href="#">分隔链接</BDropdownItem>
            </BDropdown>
          </div>
        </BCardHeader>
        <BCardBody>
          <BCardText class="mb-5">
            当年，Sequence 的设计师们决定用手写 Sharpie 笔，把他们为 Chipotle 设计的纸袋包装印上一段 Lorem ipsum 文字。
          </BCardText>
          <BCard no-body class="card-border">
            <div class="position-relative">
              <BCardImg :src="mock7" alt="卡片图片" />
              <a href="#" class="btn-video-link"></a>
            </div>
          </BCard>
        </BCardBody>
        <BCardFooter class="justify-content-between">
          <div>
            <a href="#"><i class="bi bi-heart-fill text-primary"></i>30K</a>
          </div>
          <div>
            <a href="#">1K 条评论</a>
            <a href="#">12 次分享</a>
          </div>
        </BCardFooter>
      </BCard>
    </BCol>
  </BRow>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
//Images
import mock7 from "@/assets/img/gallery/mock7.jpg";
import mock11 from "@/assets/img/gallery/mock11.jpg";
import mock12 from "@/assets/img/gallery/mock12.jpg";
import mock13 from "@/assets/img/gallery/mock13.jpg";
import mock14 from "@/assets/img/gallery/mock14.jpg";

// Reactive state for Swiper modules
const modules = [Pagination, Autoplay];
</script>
