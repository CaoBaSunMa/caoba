<template>
  <simplebar :auto-hide="false" class="split" id="split_1" style="max-height: 100vh">
    <div class="table-wrap">
      <HkDataTable
        :columns="columns"
        :data="tableData"
        :selectable="true"
        starred
        classes="gt-todo-table nowrap"
      >
        <template v-slot:priority="{ cellValue }">
          <span
            v-if="cellValue"
            :class="[
              'badge badge-outline',
              { 'badge-danger': cellValue === 'High' || cellValue === 'Urgent' },
              { 'badge-warning': cellValue === 'Low' },
              { 'badge-orange': cellValue === 'Medium' },
            ]"
          >
            <span>
              <i class="badge-dot ri-checkbox-blank-circle-fill"></i>
              {{ cellValue }}
            </span>
          </span>
        </template>

        <template v-slot:assignee="{ cellValue }">
          <div
            v-for="(avtr, index) in cellValue"
            class="media align-items-center"
            :key="index"
          >
            <div class="media-head me-2">
              <div v-if="avtr.type === 'image'" class="avatar avatar-xs avatar-rounded">
                <img :src="avtr.img" alt="用户" class="avatar-img" />
              </div>
              <div
                v-if="avtr.type === 'init'"
                :class="['avatar avatar-xs avatar-rounded', avtr.avtBg]"
              >
                <span class="initial-wrap">{{ avtr.cstmAvt }}</span>
              </div>
            </div>
            <div class="media-body">
              {{ avtr.userName }}
            </div>
          </div>
        </template>

        <template v-slot:status="{ cellValue }">
          <div
            v-for="(status, index) in cellValue"
            :key="index"
            class="dropdown selectable-dropdown"
          >
            <button
              aria-expanded="false"
              data-bs-toggle="dropdown"
              :class="['btn btn-rounded dropdown-toggle', status.variant]"
              type="button"
            >
              {{ status.title }}
            </button>
            <div role="menu" class="dropdown-menu">
              <div class="dropdown-item" data-color="#5e7d8a">暂停</div>
              <div class="dropdown-item" data-color="#FFC400">进行中</div>
              <div class="dropdown-item" data-color="#9e9e9e">待办</div>
              <div class="dropdown-item" data-color="#007D88">已完成</div>
              <div class="dropdown-item" data-color="#FF0101">待处理</div>
            </div>
          </div>
        </template>

        <template v-slot:actions="{ cellValue }">
          <div class="dropdown">
            <button
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover dropdown-toggle no-caret"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              <span class="icon">
                <feather-icon name="more-vertical"></feather-icon>
              </span>
            </button>
            <div role="menu" class="dropdown-menu dropdown-menu-end">
              <div class="dropdown-item" data-color="#5e7d8a">暂停</div>
              <div class="dropdown-item" data-color="#FFC400">进行中</div>
              <div class="dropdown-item" data-color="#9e9e9e">待办</div>
              <div class="dropdown-item" data-color="#007D88">已完成</div>
              <div class="dropdown-item" data-color="#FF0101">待处理</div>
            </div>
          </div>
        </template>
      </HkDataTable>
    </div>
  </simplebar>
</template>

<script>
import HkDataTable from "@/hk-components/@hkDataTable/HkDataTable.vue";
//Images
import avatar2 from '@/assets/img/avatar2.jpg';
import avatar7 from '@/assets/img/avatar7.jpg';
import avatar9 from '@/assets/img/avatar9.jpg';
import avatar10 from '@/assets/img/avatar10.jpg';
import avatar15 from '@/assets/img/avatar15.jpg';

export default {
  name: "GanttTable",
  components: {
    HkDataTable,
  },
  data() {
    return {
      columns: [
        {
          accessor: "id",
          title: "ID",
          hidden: true,
        },
        {
          accessor: "starred",
          title: "",
          hidden: true,
        },
        {
          accessor: "task",
          title: "任务",
          sort: true,
          // cellFormatter: taskFormater,
        },
        {
          accessor: "priority",
          title: "优先级",
          sort: true,
          cellFormatter: "priority",
        },
        {
          accessor: "assignee",
          title: "负责人",
          sort: true,
          cellFormatter: "assignee",
        },
        {
          accessor: "due_date",
          title: "截止日期",
          sort: true,
        },
        {
          accessor: "status",
          title: "状态",
          sort: true,
          cellFormatter: "status",
        },
        {
          accessor: "actions",
          title: "",
          cellFormatter: "actions",
        },
      ],
      tableData: [
        {
          id: 1,
          starred: true,
          task: "与加拿大团队进行视频会议",
          priority: "High",
          assignee: [
            { type: "image", img: avatar7, userName: "汤姆·克鲁斯" },
          ],
          due_date: "明天",
          status: [{ title: "待办", variant: "btn-secondary" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 2,
          starred: false,
          task: "客户目标会议",
          priority: "High",
          assignee: [
            {
              type: "image",
              img: avatar9,
              userName: "凯瑟琳·琼斯",
            },
          ],
          due_date: "昨天",
          status: [{ title: "进行中", variant: "btn-warning" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 3,
          starred: false,
          task: "目标市场趋势动态分析",
          priority: "",
          assignee: [
            { type: "image", img: avatar7, userName: "汤姆·克鲁斯" },
          ],
          due_date: "今天",
          status: [{ title: "已完成", variant: "btn-primary" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 4,
          starred: true,
          task: "向道琼斯先生发送修订后的提案",
          priority: "Low",
          assignee: [
            {
              type: "image",
              img: avatar10,
              userName: "马丁·路德金",
            },
          ],
          due_date: "星期六",
          status: [{ title: "暂停", variant: "btn-info" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 5,
          starred: false,
          task: "安排首次演示通话",
          priority: "",
          assignee: [
            {
              type: "init",
              cstmAvt: "Cb",
              avtBg: "avatar-primary",
              userName: "caoba",
            },
          ],
          due_date: "星期日",
          status: [{ title: "进行中", variant: "btn-warning" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 6,
          starred: true,
          task: "升级资源依赖",
          priority: "Medium",
          assignee: [
            { type: "image", img: avatar15, userName: "宝贝老板" },
          ],
          due_date: "2020年11月27日",
          status: [{ title: "待处理", variant: "btn-danger" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 7,
          starred: false,
          task: "更新贡献指南和许可证",
          priority: "",
          assignee: [
            { type: "image", img: avatar15, userName: "宝贝老板" },
          ],
          due_date: "今天",
          status: [{ title: "已完成", variant: "btn-primary" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 8,
          starred: false,
          task: "修复提示文本换行规则",
          priority: "High",
          assignee: [
            {
              type: "image",
              img: avatar2,
              userName: "摩根·弗里曼",
            },
          ],
          due_date: "4天前",
          status: [{ title: "进行中", variant: "btn-warning" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 9,
          starred: true,
          task: "重新设计基础模型",
          priority: "Urgent",
          assignee: [
            {
              type: "image",
              img: avatar2,
              userName: "查理·卓别林",
            },
          ],
          due_date: "2020年8月3日",
          status: [{ title: "进行中", variant: "btn-warning" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 10,
          starred: true,
          task: "配置安全分析功能",
          priority: "Medium",
          assignee: [
            { type: "image", img: avatar2, userName: "汤姆·克鲁斯" },
          ],
          due_date: "2020年8月8日",
          status: [{ title: "暂停", variant: "btn-info" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 11,
          starred: false,
          task: "从收件箱移除通知面板",
          priority: "Urgent",
          assignee: [
            { type: "image", img: avatar2, userName: "宝贝老板" },
          ],
          due_date: "2020年9月24日",
          status: [{ title: "待办", variant: "btn-secondary" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 12,
          starred: false,
          task: "发送加入项目的邀请",
          priority: "Low",
          assignee: [
            { type: "image", img: avatar7, userName: "汤姆·克鲁斯" },
          ],
          due_date: "昨天",
          status: [{ title: "进行中", variant: "btn-warning" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 13,
          starred: false,
          task: "连接软件工具",
          priority: "High",
          assignee: [
            {
              type: "image",
              img: avatar10,
              userName: "马丁·路德金",
            },
          ],
          due_date: "星期六",
          status: [{ title: "已完成", variant: "btn-primary" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
        {
          id: 14,
          starred: false,
          task: "使用规划器加快项目审查",
          priority: "High",
          assignee: [
            {
              type: "image",
              img: avatar9,
              userName: "凯瑟琳·琼斯",
            },
          ],
          due_date: "2020年10月15日",
          status: [{ title: "已完成", variant: "btn-primary" }],
          actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }],
        },
      ],
    };
  },
};
</script>
