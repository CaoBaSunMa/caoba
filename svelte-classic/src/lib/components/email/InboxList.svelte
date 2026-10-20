<script>
    // @ts-nocheck

    import { emailStore } from "$lib/stores/emailStore";
    import { layoutStore } from "$lib/stores/layout";
    import { onMount } from "svelte";
    import {
        ArchiveIcon,
        CalendarIcon,
        CheckIcon,
        EditIcon,
        InboxIcon,
        LayoutIcon,
        MailIcon,
        RefreshCwIcon,
        SendIcon,
        SettingsIcon,
        StarIcon,
        Trash2Icon,
    } from "svelte-feather-icons";

    //Images
    import avatar2 from "../../../assets/img/avatar2.jpg";
    import avatar3 from "../../../assets/img/avatar3.jpg";
    import avatar7 from "../../../assets/img/avatar7.jpg";
    import avatar8 from "../../../assets/img/avatar8.jpg";
    import avatar9 from "../../../assets/img/avatar9.jpg";
    import avatar10 from "../../../assets/img/avatar10.jpg";
    import HkScrollbar from "../../../hk-components/@hk-scrollbar/HkScrollbar.svelte";

    export let showSidebar;

    function toggleSidebar() {
        dispatch("toggle-sidebar");
    }

    function composeNewEmail() {
        $emailStore.composeNewEmail(true);
    }

    function conversation() {
        if (window.innerWidth <= 991) {
            $emailStore.toggleOpenEmail();
            $layoutStore.toggleTopNav();
        }
    }

    onMount(() => {
        import("bootstrap").then(({ Tooltip, Dropdown }) => {
            document
                .querySelectorAll('[data-bs-toggle="tooltip"]')
                .forEach((el) => {
                    new Tooltip(el);
                });
            document
                .querySelectorAll('[data-bs-toggle="dropdown"]')
                .forEach((el) => {
                    new Dropdown(el);
                });
        });
    });
</script>

<div class="emailapp-aside">
    <header class="aside-header">
        <a
            class="emailapp-title dropdown-toggle link-dark"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
        >
            <h1>收件箱</h1>
        </a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
                <span class="feather-icon dropdown-icon">
                    <InboxIcon />
                </span>
                <span>收件箱</span>
            </a>
            <a class="dropdown-item" href="#">
                <span class="feather-icon dropdown-icon">
                    <SendIcon />
                </span>
                <span>已发送</span>
            </a>
            <a class="dropdown-item" href="#">
                <span class="feather-icon dropdown-icon">
                    <ArchiveIcon />
                </span>
                <span>归档</span>
            </a>
            <a class="dropdown-item" href="#">
                <span class="feather-icon dropdown-icon">
                    <EditIcon />
                </span>
                <span>草稿</span>
            </a>
            <a class="dropdown-item" href="#">
                <span class="feather-icon dropdown-icon">
                    <Trash2Icon />
                </span>
                <span>回收站</span>
            </a>
        </div>
        <div class="d-flex">
            <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover me-0"
                href="#"
            >
                <span class="icon">
                    <span class="feather-icon">
                        <RefreshCwIcon />
                    </span>
                </span>
            </a>
            <a
                class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                href="#"
                data-bs-toggle="dropdown"
            >
                <span class="icon">
                    <span class="feather-icon">
                        <SettingsIcon />
                    </span>
                </span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">
                    <span class="feather-icon dropdown-icon">
                        <MailIcon />
                    </span>
                    <span>显示未读邮件</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="feather-icon dropdown-icon">
                        <StarIcon />
                    </span>
                    <span>显示星标邮件</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="feather-icon dropdown-icon">
                        <CalendarIcon />
                    </span>
                    <span>按日期排序</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="feather-icon dropdown-icon">
                        <LayoutIcon />
                    </span>
                    <span>按分类排序</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="feather-icon dropdown-icon">
                        <CheckIcon />
                    </span>
                    <span>全部标为已读</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">设置</a>
                <a class="dropdown-item" href="#">帮助</a>
                <a class="dropdown-item" href="#">反馈问题</a>
            </div>
            <a
                href="#"
                class="btn btn-icon btn-rounded show-compose-popup btn-primary"
                on:click={composeNewEmail}
            >
                <span class="icon">
                    <span class="feather-icon">
                        <EditIcon />
                    </span>
                </span>
            </a>
        </div>
        <div class="hk-sidebar-togglable"
            class:active={!showSidebar}
            on:click={toggleSidebar}
        ></div>
    </header>
    <HkScrollbar class="aside-body">
        <form class="aside-search" role="search">
            <input
                type="text"
                class="form-control"
                placeholder="搜索收件箱"
            />
        </form>
        <ul class="email-list list-group list-group-flush">
            <li class="list-group-item" on:click={conversation}>
                <div class="media">
                    <div class="media-head">
                        <div class="avatar avatar-sm avatar-rounded">
                            <img src={avatar2} alt="用户" class="avatar-img" />
                        </div>
                        <span
                            class="badge badge-primary badge-indicator badge-indicator-nobdr"
                        ></span>
                    </div>
                    <div class="media-body">
                        <div>
                            <div>
                                <div class="email-head">摩根·弗里曼</div>
                                <div>
                                    <span class="email-star marked">
                                        <i data-feather="star"></i>
                                    </span>
                                    <div class="email-time">09:30</div>
                                </div>
                            </div>
                            <div class="email-subject">
                                我们第四版的时间线创建
                            </div>
                            <div class="email-text">
                                <p>
                                    能力与完美伪装，令陌生人也为之着迷。欲知详情……
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" on:click={conversation}>
                <div class="media read-email">
                    <div class="media-head">
                        <div class="avatar avatar-sm avatar-rounded">
                            <img src={avatar9} alt="用户" class="avatar-img" />
                        </div>
                    </div>
                    <div class="media-body">
                        <div>
                            <div>
                                <div class="email-head">赫玛·瑟曼</div>
                                <span
                                    class="badge badge-warning badge-sm badge-pill"
                                    >更新</span
                                >
                                <div>
                                    <span class="email-star">
                                        <i data-feather="star"></i>
                                    </span>
                                    <div class="email-time">07:51</div>
                                </div>
                            </div>
                            <div class="email-subject">
                                第三季度提案。
                            </div>
                            <div class="email-text">
                                <p>
                                    精彩之处在于真诚不减。移除请求令我们共同成长。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <!-- Add other list items similarly -->
            <li class="list-group-item" on:click={conversation}>
                <div class="media read-email active-user">
                    <div class="media-head">
                        <div
                            class="avatar avatar-sm avatar-soft-success avatar-rounded"
                        >
                            <span class="initial-wrap">C</span>
                        </div>
                    </div>
                    <div class="media-body">
                        <div>
                            <div>
                                <div class="email-head">查理·卓别林</div>
                                <div>
                                    <span class="email-star">
                                        <feather-icon name="star"
                                        ></feather-icon>
                                    </span>
                                    <div class="email-time">昨天</div>
                                </div>
                            </div>
                            <div class="email-subject">
                                为 caoba 构建了稳健的平台。
                            </div>
                            <div class="email-text">
                                <p>
                                    经典拉丁文何以对世间万物如此敏感？你改变世界的每件事都令人惊叹。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" on:click={conversation}>
                <div class="media">
                    <div class="media-head">
                        <div class="avatar avatar-sm avatar-rounded">
                            <img src={avatar10} alt="用户" class="avatar-img" />
                        </div>
                        <span
                            class="badge badge-primary badge-indicator badge-indicator-nobdr"
                        ></span>
                    </div>
                    <div class="media-body">
                        <div>
                            <div>
                                <div class="email-head">温斯顿·丘吉尔</div>
                                <div>
                                    <span class="email-star marked">
                                        <feather-icon name="star"
                                        ></feather-icon>
                                    </span>
                                    <div class="email-time">3 Mar</div>
                                </div>
                            </div>
                            <div class="email-subject">
                                您账户中的交易记录。
                            </div>
                            <div class="email-text">
                                <p>
                                    林地信笺直接促成两人收入的增长。他的偏爱愈发令人钦佩。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" on:click={conversation}>
                <div class="media read-email">
                    <div class="media-head">
                        <div class="avatar avatar-sm avatar-rounded">
                            <img src={avatar3} alt="用户" class="avatar-img" />
                        </div>
                    </div>
                    <div class="media-body">
                        <div>
                            <div>
                                <div class="email-head">杰奎琳·乔克</div>
                                <span
                                    class="badge badge-primary badge-sm badge-pill"
                                    >团队</span
                                >
                                <div>
                                    <span class="email-star marked">
                                        <feather-icon name="star"
                                        ></feather-icon>
                                    </span>
                                    <div class="email-time">3月3日</div>
                                </div>
                            </div>
                            <div class="email-subject">
                                发布 caoba 测试版
                            </div>
                            <div class="email-text">
                                <p>
                                    他瞬间就察觉到了。往昔的羞涩依旧保持着内心的从容。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" on:click={conversation}>
                <div class="media read-email">
                    <div class="media-head">
                        <div class="avatar avatar-sm avatar-rounded">
                            <img src={avatar7} alt="用户" class="avatar-img" />
                        </div>
                    </div>
                    <div class="media-body">
                        <div>
                            <div>
                                <div class="email-head">汤姆·克鲁斯</div>
                                <span
                                    class="badge badge-success badge-sm badge-pill"
                                    >支持</span
                                >
                                <div>
                                    <span class="email-star">
                                        <feather-icon name="star"
                                        ></feather-icon>
                                    </span>
                                    <div class="email-time">2月28日</div>
                                </div>
                            </div>
                            <div class="email-subject">
                                手续费与经纪方案问题。
                            </div>
                            <div class="email-text">
                                <p>
                                    儿子读完便看到了其余部分。往昔的怀疑已然消逝，好奇心依然挥之不去。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" on:click={conversation}>
                <div class="media">
                    <div class="media-head">
                        <div
                            class="avatar avatar-sm avatar-soft-danger avatar-rounded"
                        >
                            <span class="initial-wrap">D</span>
                        </div>
                        <span
                            class="badge badge-primary badge-indicator badge-indicator-nobdr"
                        ></span>
                    </div>
                    <div class="media-body">
                        <div>
                            <div>
                                <div class="email-head">丹尼尔·克雷格</div>
                                <div>
                                    <span class="email-star">
                                        <feather-icon name="star"
                                        ></feather-icon>
                                    </span>
                                    <div class="email-time">2月25日</div>
                                </div>
                            </div>
                            <div class="email-subject">
                                设计服务发票。
                            </div>
                            <div class="email-text">
                                <p>
                                    出色的女儿们为何急于抗拒？赞美化作了恋人们彼此的温暖。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" on:click={conversation}>
                <div class="media read-email">
                    <div class="media-head">
                        <div class="avatar avatar-sm avatar-rounded">
                            <img src={avatar8} alt="用户" class="avatar-img" />
                        </div>
                        <span
                            class="badge badge-primary badge-indicator badge-indicator-nobdr"
                        ></span>
                    </div>
                    <div class="media-body">
                        <div>
                            <div>
                                <div class="email-head">凯瑟琳·琼斯</div>
                                <div>
                                    <span class="email-star marked">
                                        <feather-icon name="star"
                                        ></feather-icon>
                                    </span>
                                    <div class="email-time">2月22日</div>
                                </div>
                            </div>
                            <div class="email-subject">
                                欢迎加入 caoba 团队。
                            </div>
                            <div class="email-text">
                                <p>
                                    我们不再打扰彼此的安居。那里终将有人为她而驻足。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" on:click={conversation}>
                <div class="media read-email">
                    <div class="media-head">
                        <div
                            class="avatar avatar-sm avatar-success avatar-rounded"
                        >
                            <span class="initial-wrap">Cb</span>
                        </div>
                    </div>
                    <div class="media-body">
                        <div>
                            <div>
                                <div class="email-head">caoba</div>
                                <div>
                                    <span class="email-star marked">
                                        <feather-icon name="star"
                                        ></feather-icon>
                                    </span>
                                    <div class="email-time">1月30日</div>
                                </div>
                            </div>
                            <div class="email-subject">
                                亲爱的丹尼尔，关于退款事宜……
                            </div>
                            <div class="email-text">
                                <p>
                                    如此不偏不倚的宽容令人称奇。麻木不仁者却总能获得纵容……
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </HkScrollbar>
</div>
