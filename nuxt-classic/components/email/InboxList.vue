<template>
  <div class="emailapp-aside">
    <header class="aside-header">
      <BDropdown toggle-class="emailapp-title text-dark p-0" variant="link">
        <template #button-content>
          <h1>收件箱</h1>
        </template>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="inbox"></feather-icon>
          </span>
          <span>收件箱</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="send"></feather-icon>
          </span>
          <span>已发送</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="archive"></feather-icon>
          </span>
          <span>归档</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="edit"></feather-icon>
          </span>
          <span>草稿</span>
        </BDropdownItem>
        <BDropdownItem href="#">
          <span class="feather-icon dropdown-icon">
            <feather-icon name="trash-2"></feather-icon>
          </span>
          <span>回收站</span>
        </BDropdownItem>
      </BDropdown>
      <div class="d-flex">
        <BButton
          variant="flush-dark"
          class="btn-icon btn-rounded flush-soft-hover me-0"
          href="#"
        >
          <span class="icon">
            <feather-icon name="refresh-cw"></feather-icon>
          </span>
        </BButton>
        <BDropdown
          variant="flush-dark"
          toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
          end
        >
          <template #button-content>
            <span class="icon">
              <feather-icon name="settings"></feather-icon>
            </span>
          </template>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="mail"></feather-icon>
            </span>
            <span>显示未读邮件</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="star"></feather-icon>
            </span>
            <span>显示星标邮件</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="calendar"></feather-icon>
            </span>
            <span>按日期排序</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="layout"></feather-icon>
            </span>
            <span>按分类排序</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span class="feather-icon dropdown-icon">
              <feather-icon name="check"></feather-icon>
            </span>
            <span>全部标为已读</span>
          </BDropdownItem>
          <BDropdownDivider />
          <BDropdownItem>设置</BDropdownItem>
          <BDropdownItem>帮助</BDropdownItem>
          <BDropdownItem>反馈问题</BDropdownItem>
        </BDropdown>

        <BButton
          variant="primary"
          href="#"
          class="btn-icon btn-rounded show-compose-popup"
          @click="composeNewEmail"
        >
          <span class="icon">
            <feather-icon name="edit"></feather-icon>
          </span>
        </BButton>
      </div>
      <div
        :class="['hk-sidebar-togglable', { active: !showSidebar }]"
        @click="toggleSidebar"
      ></div>
    </header>

    <simplebar class="aside-body">
      <BForm class="aside-search" role="search">
        <BFormInput type="text" placeholder="搜索收件箱" />
      </BForm>
      <BListGroup class="email-list" flush>
        <BListGroupItem @click="conversation">
          <div class="media">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-rounded">
                <img :src="avatar2" alt="用户" class="avatar-img" />
              </div>
              <HkBadge variant="primary" indicator borderless />
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">摩根·弗里曼</div>
                  <div>
                    <span class="email-star marked">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">09:30</div>
                  </div>
                </div>
                <div class="email-subject">我们第四版的时间线创建</div>
                <div class="email-text">
                  <p>
                    能力与完美伪装，令陌生人也为之着迷。欲知详情……
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BListGroupItem>
        <BListGroupItem @click="conversation">
          <div class="media read-email">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-rounded">
                <img :src="avatar9" alt="用户" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">赫玛·瑟曼</div>
                  <HkBadge variant="warning" sm pill >更新</HkBadge>
                  <div>
                    <span class="email-star">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">07:51</div>
                  </div>
                </div>
                <div class="email-subject">第三季度提案。</div>
                <div class="email-text">
                  <p>
                    精彩之处在于真诚不减。移除请求令我们共同成长。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BListGroupItem>
        <BListGroupItem @click="conversation">
          <div class="media read-email active-user">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-soft-success avatar-rounded">
                <span class="initial-wrap">C</span>
              </div>
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">查理·卓别林</div>
                  <div>
                    <span class="email-star">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">昨天</div>
                  </div>
                </div>
                <div class="email-subject">为 caoba 构建了稳健的平台。</div>
                <div class="email-text">
                  <p>
                    经典拉丁文何以对世间万物如此敏感？你改变世界的每件事都令人惊叹。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BListGroupItem>
        <BListGroupItem @click="conversation">
          <div class="media">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-rounded">
                <img :src="avatar10" alt="用户" class="avatar-img" />
              </div>
              <HkBadge variant="primary" indicator borderless />
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">温斯顿·丘吉尔</div>
                  <div>
                    <span class="email-star marked">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">3月3日</div>
                  </div>
                </div>
                <div class="email-subject">您账户中的交易记录。</div>
                <div class="email-text">
                  <p>
                    林地信笺直接促成两人收入的增长。他的偏爱愈发令人钦佩。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BListGroupItem>
        <BListGroupItem @click="conversation">
          <div class="media read-email">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-rounded">
                <img :src="avatar3" alt="用户" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">杰奎琳·乔克</div>
                  <HkBadge variant="primary" sm pill >团队</HkBadge>
                  <div>
                    <span class="email-star marked">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">3月3日</div>
                  </div>
                </div>
                <div class="email-subject">发布 caoba 测试版</div>
                <div class="email-text">
                  <p>
                    他瞬间就察觉到了。往昔的羞涩依旧保持着内心的从容。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BListGroupItem>
        <BListGroupItem @click="conversation">
          <div class="media read-email">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-rounded">
                <img :src="avatar7" alt="用户" class="avatar-img" />
              </div>
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">汤姆·克鲁斯</div>
                  <HkBadge variant="success" sm pill >支持</HkBadge>
                  <div>
                    <span class="email-star">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">2月28日</div>
                  </div>
                </div>
                <div class="email-subject">手续费与经纪方案问题。</div>
                <div class="email-text">
                  <p>
                    儿子读完便看到了其余部分。往昔的怀疑已然消逝，好奇心依然挥之不去。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BListGroupItem>
        <BListGroupItem @click="conversation">
          <div class="media">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-soft-danger avatar-rounded">
                <span class="initial-wrap">D</span>
              </div>
              <HkBadge variant="primary" indicator borderless />
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">丹尼尔·克雷格</div>
                  <div>
                    <span class="email-star">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">2月25日</div>
                  </div>
                </div>
                <div class="email-subject">设计服务发票。</div>
                <div class="email-text">
                  <p>
                    出色的女儿们为何急于抗拒？赞美化作了恋人们彼此的温暖。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BListGroupItem>
        <BListGroupItem @click="conversation">
          <div class="media read-email">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-rounded">
                <img :src="avatar8" alt="用户" class="avatar-img" />
              </div>
              <HkBadge variant="primary" indicator borderless />
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">凯瑟琳·琼斯</div>
                  <div>
                    <span class="email-star marked">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">2月22日</div>
                  </div>
                </div>
                <div class="email-subject">欢迎加入 caoba 团队。</div>
                <div class="email-text">
                  <p>
                    我们不再打扰彼此的安居。那里终将有人为她而驻足。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BListGroupItem>
        <BListGroupItem @click="conversation">
          <div class="media read-email">
            <div class="media-head">
              <div class="avatar avatar-sm avatar-success avatar-rounded">
                <span class="initial-wrap">Cb</span>
              </div>
            </div>
            <div class="media-body">
              <div>
                <div>
                  <div class="email-head">caoba</div>
                  <div>
                    <span class="email-star marked">
                      <feather-icon name="star"></feather-icon>
                    </span>
                    <div class="email-time">1月30日</div>
                  </div>
                </div>
                <div class="email-subject">亲爱的丹尼尔，关于退款事宜……</div>
                <div class="email-text">
                  <p>
                    如此不偏不倚的宽容令人称奇。麻木不仁者却总能获得纵容……
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BListGroupItem>
      </BListGroup>
    </simplebar>
  </div>
</template>

<script>
import { useEmailStore } from "@/stores/emailStore";
import { useLayoutStore } from "@/stores/layout";
//Images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar3 from "@/assets/img/avatar3.jpg";
import avatar7 from "@/assets/img/avatar7.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar9 from "@/assets/img/avatar9.jpg";
import avatar10 from "@/assets/img/avatar10.jpg";

export default {
  props: {
    showSidebar: Boolean,
  },

  data() {
    return {
      avatar2,
      avatar3,
      avatar7,
      avatar8,
      avatar9,
      avatar10,
    };
  },
  setup() {
    const emailStore = useEmailStore();
    const composeNewEmail = () => {
      emailStore.composeNewEmail(true);
    };
    return {
      emailStore,
      composeNewEmail,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },

    conversation() {
      const emailStore = useEmailStore();
      const layoutStore = useLayoutStore();

      if (window.innerWidth <= 991) {
        emailStore.toggleOpenEmail();
        layoutStore.toggleTopNav();
      }
    },
  },
};
</script>
