# nuxt-classic 中文翻译术语表

本文件为 nuxt-classic 翻译各批次的统一术语基准（与已完成翻译的 vue-classic 保持一致）。翻译前必须阅读。如需参考已译好的 vue-classic 对应模块，可将 `vue-classic/src/pages/`、`vue-classic/src/data/`、`vue-classic/src/layout/` 中同源文件的译法作为对照。

## 菜单/导航术语（sidebarMenu.js + Sidebar.vue）
| 英文 | 中文 |
|---|---|
| Dashboard | 仪表盘 |
| Apps | 应用 |
| Chat | 聊天 |
| Chats | 聊天记录 |
| Groups | 群组 |
| Contacts | 联系人 |
| Chat Popup | 聊天弹窗 |
| Direct Message | 私信 |
| Chatbot | 聊天机器人 |
| Calendar | 日历 |
| Email | 邮件 |
| Scrumboard | Scrum看板 |
| All Boards | 所有看板 |
| Project Kanban | 项目看板 |
| Pipeline Kanban | 流程看板 |
| Contact | 联系人 |
| Contact List | 联系人列表 |
| Contact Cards | 联系人卡片 |
| Edit Contact | 编辑联系人 |
| File Manager | 文件管理 |
| List View | 列表视图 |
| Grid View | 网格视图 |
| Gallery | 图库 |
| Todo | 待办 |
| Task List | 任务列表 |
| Gantt Chart | 甘特图 |
| Blog | 博客 |
| Posts | 文章 |
| Add New Post | 新建文章 |
| Post Detail | 文章详情 |
| Invoice | 发票 |
| Invoice List | 发票列表 |
| Invoice Templates | 发票模板 |
| Create Invoice | 创建发票 |
| Invoice Preview | 发票预览 |
| Integrations | 集成 |
| All Apps | 所有应用 |
| App Details / App Detail | 应用详情 |
| Pages | 页面 |
| Authentication | 身份验证 |
| Login | 登录 |
| Signup | 注册 |
| Lock Screen | 锁屏 |
| Reset Password | 重置密码 |
| Error 404 | 错误 404 |
| Error 503 | 错误 503 |
| Profile | 个人资料 |
| Edit Profile | 编辑个人资料 |
| Account | 账户 |
| Documentation | 文档 |
| Components | 组件 |

## 顶部导航/通用 UI 术语（TopNav、Sidebar、页面内）
| 英文 | 中文 |
|---|---|
| Search | 搜索 |
| Recent Search | 最近搜索 |
| Help | 帮助 |
| Users | 用户 |
| Search all | 搜索全部 |
| How to setup theme? | 如何设置主题？ |
| View detail documentation | 查看详细文档 |
| Notifications | 通知 |
| View all notifications | 查看所有通知 |
| Manage your account | 管理你的账户 |
| Add Account | 添加账户 |
| Sign Out | 退出登录 |
| Manage Account | 账户管理 |
| Payment methods | 支付方式 |
| Subscriptions | 订阅 |
| Settings | 设置 |
| Raise a ticket | 提交工单 |
| Terms & Conditions | 条款与条件 |
| Help & Support | 帮助与支持 |
| Offers | 优惠 |
| Collaboration | 协作 |
| Updates | 更新 |
| Privacy Policy | 隐私政策 |
| T&C | 条款与条件 |
| System Status | 系统状态 |
| Send feedback to our help forum | 向我们的帮助论坛发送反馈 |
| All rights reserved | 保留所有权利 |
| Quickly Build Applications | 快速构建应用 |
| Exclusively for webapps Based on Bootstrap | 专为基于 Bootstrap 的 Web 应用打造 |
| Go caoba Docs | 前往 caoba 文档 |
| Loading... | 加载中... |
| Save | 保存 |
| Cancel | 取消 |
| Add | 添加 |
| Edit | 编辑 |
| Delete | 删除 |
| Close | 关闭 |
| View all | 查看全部 |
| See all | 查看全部 |

## 状态/参与逻辑比较的值——必须保留英文原值
以下值参与 JS 逻辑比较（`===`、`:class` 映射、`v-if`），**只可翻译展示文案，不得改动这些值本身**：
- 状态值：`won`、`lost`、`open`、`active`、`completed`、`Online`、`Typing`、`Offline`、`priority` 的 `high`/`low`/`medium`，表格 accessor 字段名、分类 class 名（如 `avatar-soft-primary`、`bg-*`）。
- 品牌/技术词保留：`caoba`、`Yunxiang`（及邮箱 `@yunxiang.com`）、`Bootstrap`、`Vue`、`Nuxt`、`Node JS`、`SCSS`、`Grunt`、`npm`、`Facebook`、`Twitter` 等产品名可保留英文或译为「脸书/推特」按 vue-classic 先例（vue-classic 中保留品牌英文，人名均译为中文）。
- 邮箱一律保留原名：`contact@yunxiang.com`、`alan@yunxiang.com` 等。
- 内部路由 path / `id` / `name` 键（用于菜单高亮、store 状态）不要改动。

## 人名译法（自然中文，与 vue-classic 一致）
- Sarah Jone → 莎拉·琼
- Joe Jackson → 乔·杰克逊
- Maria Richard → 玛丽亚·理查德
- Morgan Freeman → 摩根·弗里曼
- Alan Rickman → 艾伦·里克曼
- Winston Churchil → 温斯顿·丘吉尔
- 其余英文人名一律音译为自然中文全名；头像 `initial-wrap` 内保留原字母或改中文名首字（遵循 vue-classic 先例）。

## 时间/日期中文化
- `Today, 10:14 PM` → `今天 22:14`
- `Yesterday, 9:25 PM` → `昨天 21:25`
- `Friday, Dec 19 at 9:30 am` → `12月19日周五 上午9:30`
- `2 Oct, 2021` → `2021年10月2日`
- `14 Sep, 2021` → `2021年9月14日`
- 其他英文日期按 `YYYY年M月D日`、英文月份转中文（January→1月 等）格式处理。

## 通用品质要求
1. 只翻译**用户可见文本**：模板文本、placeholder、aria-label、title、tooltip、按钮、下拉菜单、表单 label、toast、空状态文案。
2. 不修改：JS 逻辑、变量名、路由、函数名、组件 props 的键名、类名字符串映射、`v-b-tooltip` 内嵌的取值、emoji/图标名（`feather-icon name="..."` 值保留英文）。
3. 注意 Nuxt 特有语法：`<script setup>`、`NuxtLink`、`v-b-tooltip.top="'...'"`（字符串用单引号）、`useHead`/`useSeoMeta` 中的 title/meta 描述也要翻译为中文。
4. 保持 HTML 结构、缩进、引号风格（单/双引号）与原文件一致；不要改动文件中的 JSON 数据键。
5. bootstrap-vue 组件（`<BFormInput>`、`<BButton>`、`<BModal>` 等）的 `placeholder`/`label`/`title` prop 中英文同样翻译。
6. 若某字符串同时被用于逻辑比较（如在 data/computed 中 === 判断），保留英文；仅当纯粹是展示文本时才翻译。