<script>
    // @ts-nocheck

    import { onMount } from "svelte";

    //Images
    import avatar2 from "../../../assets/img/avatar2.jpg";
    import avatar10 from "../../../assets/img/avatar10.jpg";
    import avatar11 from "../../../assets/img/avatar11.jpg";
    import avatar12 from "../../../assets/img/avatar12.jpg";
    import avatar13 from "../../../assets/img/avatar13.jpg";
    import sign from "../../../assets/img/caoba.svg";
    import HkScrollbar from "../../../hk-components/@hk-scrollbar/HkScrollbar.svelte";
    import { ArrowDownIcon, ArrowRightIcon, CornerUpLeftIcon, EditIcon, MoreVerticalIcon, PaperclipIcon, PrinterIcon, StarIcon, Trash2Icon } from "svelte-feather-icons";

</script>

<div class="email-body">
    <HkScrollbar class="nicescroll-bar">
        <div class="single-email-subject">
            <div>
                <h4 class="fw-light">
                    您购买的商品有可用更新。
                </h4>
                <span
                    class="badge badge-orange badge-sm badge-pill flex-shrink-0 ms-3"
                    >更新</span
                >
            </div>
            <div class="email-options-wrap">
                <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="打印"
                >
                    <span class="icon">
                        <span class="feather-icon">
                            <PrinterIcon />
                        </span>
                    </span>
                </a>
                <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="回复"
                >
                    <span class="icon">
                        <span class="feather-icon">
                            <CornerUpLeftIcon />
                        </span>
                    </span>
                </a>
                <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="转发"
                >
                    <span class="icon">
                        <span class="feather-icon">
                            <ArrowRightIcon />
                        </span>
                    </span>
                </a>
            </div>
        </div>
        <div
            id="accordionSimpleExample"
            class="accordion accordion-simple single-email-thread"
        >
            <div class="accordion-item">
                <div id="simple-headingOne" class="accordion-header">
                    <div>
                        <div class="email-head">
                            <div
                                data-bs-toggle="collapse"
                                data-bs-target="#simple-collapseOne"
                                role="button"
                                aria-expanded="false"
                            ></div>
                            <div class="media">
                                <div class="media-head">
                                    <div class="avatar d-8">
                                        <img
                                            src={avatar2}
                                            alt="用户"
                                            class="avatar-img rounded-circle"
                                        />
                                    </div>
                                </div>
                                <div class="media-body">
                                    <div>摩根·弗里曼</div>
                                    <div class="fs-7">
                                        <span>发给</span>
                                        <div class="mail-desc-dropdown">
                                            <a
                                                href="#"
                                                class="dropdown-toggle link-dark ms-1"
                                                data-bs-toggle="dropdown">我</a
                                            >
                                            <div class="dropdown-menu">
                                                <div>
                                                    <span>发件人：</span><span
                                                        >摩根 <span
                                                            >&lt;morganfreeman@caoba.com&gt;</span
                                                        ></span
                                                    >
                                                </div>
                                                <div>
                                                    <span>收件人：</span><span
                                                        >caoba <span
                                                            >&lt;contact@caoba.com&gt;</span
                                                        ></span
                                                    >
                                                </div>
                                                <div>
                                                    <span>日期：</span><span
                                                        >12月30日 16:22</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="email-head-action">
                                <div class="email-time">12月30日 16:22</div>
                                <span class="email-star marked">
                                    <span class="feather-icon">
                                    <StarIcon />
                                </span>
                                </span>
                                <a
                                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover btn-sm"
                                    href="#"
                                >
                                    <span class="icon">
                                        <span class="feather-icon">
                                            <CornerUpLeftIcon />
                                        </span>
                                    </span>
                                </a>
                                <a
                                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover btn-sm dropdown-toggle no-caret"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    <span class="icon">
                                        <span class="feather-icon">
                                            <MoreVerticalIcon />
                                        </span>
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">转发</a
                                    >
                                    <a class="dropdown-item" href="#">删除</a>
                                    <a class="dropdown-item" href="#"
                                        >举报垃圾邮件</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="simple-collapseOne"
                    class="accordion-collapse collapse"
                >
                    <div class="accordion-body">
                        <p>嗨，caoba，</p>
                        <p>
                            我们想通知您，您的商品 caoba - caoba 管理后台模板，更新现已可在您的
                            下载页面获取。
                        </p>
                        <p>提醒：您需要登录后才能下载更新。</p>
                        <p class="mt-3 mb-4">
                            您可以在以下页面管理您商品的通知：
                            <a href="#"><u>您的下载页面。</u></a>
                        </p>
                        <p>此致，<br />caoba 团队</p>
                        <img
                            class="d-block mt-2 mb-3"
                            src={sign}
                            alt="签名"
                        />
                        <div class="separator separator-light"></div>
                        <div class="text-end">
                            <a href="#" class="link-theme fs-7"
                                ><u>全部下载</u></a
                            >
                        </div>
                        <div class="email-attachment-wrap">
                            <div class="attachment-box">
                                <div>
                                    <div class="media">
                                        <div
                                            class="avatar avatar-icon avatar-sm avatar-blue"
                                        >
                                            <span class="initial-wrap fs-3">
                                                <i class="ri-file-excel-2-fill"
                                                ></i>
                                            </span>
                                        </div>
                                        <div class="media-body">
                                            <p class="file-name">
                                                Website_content.xls
                                            </p>
                                            <p class="file-size">2,635 KB</p>
                                        </div>
                                    </div>
                                    <div class="file-overlay">
                                        <button
                                            class="btn btn-sm btn-icon btn-rounded btn-primary"
                                        >
                                            <span class="icon">
                                                <ArrowDownIcon />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="attachment-box">
                                <div>
                                    <div class="media">
                                        <div
                                            class="avatar avatar-icon avatar-sm avatar-warning"
                                        >
                                            <span class="initial-wrap fs-3">
                                                <i class="ri-file-zip-fill"></i>
                                            </span>
                                        </div>
                                        <div class="media-body">
                                            <p class="file-name">
                                                caoba.zip
                                            </p>
                                            <p class="file-size">2.45 GB</p>
                                        </div>
                                    </div>
                                    <div class="file-overlay">
                                        <button
                                            class="btn btn-sm btn-icon btn-rounded btn-primary"
                                        >
                                            <span class="icon"
                                                >
                                                <ArrowDownIcon />
                                                </span
                                            >
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div id="simple-headingTwo" class="accordion-header">
                    <div>
                        <div class="email-head">
                            <div
                                data-bs-toggle="collapse"
                                data-bs-target="#simple-collapseTwo"
                                role="button"
                                aria-expanded="true"
                            ></div>
                            <div class="media">
                                <div class="media-head">
                                    <div class="avatar d-8">
                                        <img
                                            src={avatar2}
                                            alt="用户"
                                            class="avatar-img rounded-circle"
                                        />
                                    </div>
                                </div>
                                <div class="media-body">
                                    <div>摩根·弗里曼</div>
                                    <div class="fs-7">
                                        <span>发给</span>
                                        <div class="mail-desc-dropdown">
                                            <a
                                                href="#"
                                                class="dropdown-toggle link-dark ms-1"
                                                data-bs-toggle="dropdown">我</a
                                            >
                                            <div class="dropdown-menu">
                                                <div>
                                                    <span>发件人：</span><span
                                                        >摩根 <span
                                                            >&lt;morganfreeman@caoba.com&gt;</span
                                                        ></span
                                                    >
                                                </div>
                                                <div>
                                                    <span>收件人：</span><span
                                                        >caoba <span
                                                            >&lt;contact@caoba.com&gt;</span
                                                        ></span
                                                    >
                                                </div>
                                                <div>
                                                    <span>日期：</span><span
                                                        >1月1日 09:30</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="email-head-action">
                                <div class="email-time">1月1日 09:30</div>
                                <span class="email-star marked">
                                    <span class="feather-icon">
                                    <StarIcon />
                                </span>
                                </span>
                                <a
                                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover btn-sm"
                                    href="#"
                                >
                                    <span class="icon">
                                        <span class="feather-icon">
                                            <CornerUpLeftIcon />
                                        </span>
                                    </span>
                                </a>
                                <a
                                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover btn-sm dropdown-toggle no-caret"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    <span class="icon">
                                        <span class="feather-icon">
                                            <MoreVerticalIcon />
                                        </span>
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">转发</a
                                    >
                                    <a class="dropdown-item" href="#">删除</a>
                                    <a class="dropdown-item" href="#"
                                        >举报垃圾邮件</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="simple-collapseTwo" class="collapse show">
                    <div class="accordion-body">
                        <p>
                            您好，我购买了这套管理后台模板，请帮我安装并部署，我希望网站能够正常运行。
                            提醒：您需要登录后才能下载更新。
                        </p>
                        <p class="mb-4">
                            提醒：您需要登录后才能下载更新。
                        </p>
                        <p>此致，<br />caoba 团队</p>
                        <img
                            class="d-block mt-2 mb-3"
                            src={sign}
                            alt="签名"
                        />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <div id="simple-headingThree" class="accordion-header">
                    <div>
                        <div class="email-head">
                            <div
                                data-bs-toggle="collapse"
                                data-bs-target="#simple-collapseThree"
                                role="button"
                                aria-expanded="true"
                            ></div>
                            <div class="media">
                                <div class="media-head">
                                    <div class="avatar d-8">
                                        <img
                                            src={avatar10}
                                            alt="用户"
                                            class="avatar-img rounded-circle"
                                        />
                                    </div>
                                </div>
                                <div class="media-body">
                                    <div>管理员</div>
                                    <div class="fs-7">
                                        <span>发给</span>
                                        <div class="mail-desc-dropdown">
                                            <a
                                                href="#"
                                                class="dropdown-toggle link-dark ms-1"
                                                data-bs-toggle="dropdown"
                                                >摩根</a
                                            >
                                            <div class="dropdown-menu">
                                                <div>
                                                    <span>发件人：</span><span
                                                        >管理员 <span
                                                            >&lt;admin@caoba.com&gt;</span
                                                        ></span
                                                    >
                                                </div>
                                                <div>
                                                    <span>收件人：</span><span
                                                        >摩根 <span
                                                            >&lt;morganfreeman@caoba.com&gt;</span
                                                        ></span
                                                    >
                                                </div>
                                                <div>
                                                    <span>日期：</span><span
                                                        >1月2日 10:21</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="email-head-action">
                                <div class="email-time">1月2日 10:21</div>
                                <span class="email-star">
                                    <span class="feather-icon">
                                    <StarIcon />
                                </span>
                                </span>
                                <a
                                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover btn-sm"
                                    href="#"
                                >
                                    <span class="icon">
                                        <span class="feather-icon">
                                            <CornerUpLeftIcon />
                                        </span>
                                    </span>
                                </a>
                                <a
                                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover btn-sm dropdown-toggle no-caret"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    <span class="icon">
                                        <span class="feather-icon">
                                            <MoreVerticalIcon />
                                        </span>
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">转发</a
                                    >
                                    <a class="dropdown-item" href="#">删除</a>
                                    <a class="dropdown-item" href="#"
                                        >举报垃圾邮件</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="simple-collapseThree" class="collapse show">
                    <div class="accordion-body">
                        <p>您好，</p>
                        <p>能否请您指出哪些页面出现了错误？</p>
                        <div class="my-5">
                            <button
                                class="btn btn-outline-light me-2"
                                data-bs-toggle="collapse"
                                data-bs-target="#compose_email"
                                aria-expanded="false"
                            >
                                <span>
                                    <span class="icon">
                                        <span class="feather-icon">
                                            <CornerUpLeftIcon />
                                        </span>
                                    </span>
                                    <span>回复</span>
                                </span>
                            </button>
                            <button
                                class="btn btn-outline-light"
                                data-bs-toggle="collapse"
                                data-bs-target="#compose_email"
                                aria-expanded="false"
                            >
                                <span>
                                    <span class="icon">
                                        <span class="feather-icon">
                                            <ArrowRightIcon />
                                        </span>
                                    </span>
                                    <span>转发</span>
                                </span>
                            </button>
                        </div>
                        <!-- Compose email -->
                        <div id="compose_email" class="collapse mt-7">
                            <div class="d-flex">
                                <div class="media">
                                    <div class="media-head me-3">
                                        <div
                                            class="avatar avatar-icon avatar-soft-light avatar-rounded d-8"
                                        >
                                            <span class="initial-wrap">
                                                <i class="ri-user-fill"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <form class="card card-shadow w-100">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <div class="d-flex flex-wrap">
                                                <div
                                                    class="chip chip-primary chip-dismissable user-chip mb-2 me-2"
                                                >
                                                    <span>
                                                        <span class="avatar">
                                                            <img
                                                                src={avatar11}
                                                                alt="用户"
                                                                class="avatar-img"
                                                            />
                                                        </span>
                                                        <span class="chip-text"
                                                            >摩根</span
                                                        >
                                                        <button
                                                            type="button"
                                                            class="btn-close"
                                                        ></button>
                                                    </span>
                                                </div>
                                                <div
                                                    class="chip chip-primary chip-dismissable user-chip mb-2 me-2"
                                                >
                                                    <span>
                                                        <span class="avatar">
                                                            <img
                                                                src={avatar12}
                                                                alt="用户"
                                                                class="avatar-img"
                                                            />
                                                        </span>
                                                        <span class="chip-text"
                                                            >查理</span
                                                        >
                                                        <button
                                                            type="button"
                                                            class="btn-close"
                                                        ></button>
                                                    </span>
                                                </div>
                                                <div
                                                    class="chip chip-primary chip-dismissable user-chip mb-2 me-2"
                                                >
                                                    <span>
                                                        <span class="avatar">
                                                            <img
                                                                src={avatar13}
                                                                alt="用户"
                                                                class="avatar-img"
                                                            />
                                                        </span>
                                                        <span class="chip-text"
                                                            >温斯顿</span
                                                        >
                                                        <button
                                                            type="button"
                                                            class="btn-close"
                                                        ></button>
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    class="form-control border-0 p-0 shadow-none flex-1 mb-2 me-2"
                                                    placeholder="添加收件人"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <textarea
                                                class="form-control"
                                                rows="8"
                                                placeholder="输入内容"
                                            ></textarea>
                                        </div>
                                        <div
                                            class="form-group d-flex justify-content-between mb-0"
                                        >
                                            <div>
                                                <button
                                                    class="btn btn-primary me-2"
                                                    type="button">发送</button
                                                >
                                                <button
                                                    type="button"
                                                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                                >
                                                    <span
                                                        class="icon"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="添加标记"
                                                        data-bs-original-title="添加标记"
                                                    >
                                                        <span
                                                            class="feather-icon"
                                                        >
                                                            <PaperclipIcon />
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                                    type="button"
                                                >
                                                    <span
                                                        class="icon"
                                                        data-bs-toggle="Save Draft"
                                                        data-bs-placement="top"
                                                        title="保存草稿"
                                                        data-bs-original-title="保存草稿"
                                                    >
                                                        <span
                                                            class="feather-icon"
                                                        >
                                                            <EditIcon />
                                                        </span>
                                                    </span>
                                                </button>
                                                <button
                                                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                                    type="button"
                                                >
                                                    <span
                                                        class="icon"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="删除"
                                                        data-bs-original-title="删除"
                                                    >
                                                        <span
                                                            class="feather-icon"
                                                        >
                                                            <Trash2Icon />
                                                        </span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- /Compose email -->
                    </div>
                </div>
            </div>
        </div>
    </HkScrollbar>
</div>
