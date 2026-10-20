<template>
  <div class="todo-body">
    <simplebar class="nicescroll-bar">
      <BContainer>
        <div class="todo-toolbar">
          <div>
            <BFormSelect size="sm" model-value="selected">
              <BFormSelectOption value="selected">批量操作</BFormSelectOption>
              <BFormSelectOption value="1">一</BFormSelectOption>
              <BFormSelectOption value="2">二</BFormSelectOption>
              <BFormSelectOption value="3">三</BFormSelectOption>
            </BFormSelect>
            <BButton variant="light" size="sm" class="btn-light ms-2">应用</BButton>
            <BFormSelect size="sm" class="d-xxl-inline-block d-none mx-2" model-value="1">
              <BFormSelectOption value="1">按日期排序</BFormSelectOption>
              <BFormSelectOption value="2">按时间排序</BFormSelectOption>
              <BFormSelectOption value="3">按类别排序</BFormSelectOption>
              <BFormSelectOption value="4">按优先级排序</BFormSelectOption>
              <BFormSelectOption value="5">按标题排序</BFormSelectOption>
              <BFormSelectOption value="6">按负责人排序</BFormSelectOption>
            </BFormSelect>
          </div>
          <div>
            <div class="paging-info d-xxl-inline-block d-none">1 - 10 条，共 30 条</div>
            <ul class="pagination custom-pagination pagination-simple m-0 ms-3">
              <li
                class="paginate_button page-item previous disabled"
                id="datable_1_previous"
              >
                <a href="#" data-dt-idx="0" tabindex="0" class="page-link"
                  ><i class="ri-arrow-left-s-line"></i
                ></a>
              </li>
              <li class="paginate_button page-item active">
                <a href="#" data-dt-idx="1" tabindex="0" class="page-link">1</a>
              </li>
              <li class="paginate_button page-item">
                <a href="#" data-dt-idx="2" tabindex="0" class="page-link">2</a>
              </li>
              <li class="paginate_button page-item next" id="datable_1_next">
                <a href="#" data-dt-idx="3" tabindex="0" class="page-link"
                  ><i class="ri-arrow-right-s-line"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>

        <div class="collapse-simple mt-4">
          <BCard no-body v-for="(data, index) in tasks" :key="index">
            <BCardHeader>
              <a role="button" v-b-toggle="data.id" href="#">
                <h5 class="mb-0">{{ data.title }}</h5>
              </a>
            </BCardHeader>
            <BCollapse :id="data.id" visible>
              <BCardBody>
                <draggable
                  :list="data.tasks"
                  :animation="200"
                  ghost-class="ghost-card"
                  group="tasks"
                >
                  <ul
                    v-for="task in data.tasks"
                    :key="task.id"
                    id="todo_list"
                    class="advance-list"
                  >
                    <li class="advance-list-item single-task-list active-todo">
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                          <div class="form-check">
                            <BFormCheckbox />
                          </div>

                          <div>
                            <span :class="['todo-star', { marked: task.stared }]">
                              <feather-icon name="star"></feather-icon>
                            </span>

                            <HkBadge
                              :variant="task.indicator"
                              indicator
                              indicatorSize="xl"
                            />
                            <span
                              class="todo-text text-dark text-truncate"
                              @click="openInfo"
                              >{{ task.task_name }}</span
                            >

                            <span
                              v-if="task.priority"
                              :class="[
                                'badge badge-sm badge-outline badge-wth-indicator badge-wth-icon ms-3 d-lg-inline-block d-none',
                                {
                                  'badge-danger':
                                    task.priority === 'High' ||
                                    task.priority === 'Urgent',
                                },
                                { 'badge-warning': task.priority === 'Low' },
                                { 'badge-orange': task.priority === 'Medium' },
                              ]"
                            >
                              <span>
                                <i class="badge-dot ri-checkbox-blank-circle-fill"></i>
                                {{ task.priority }}
                              </span>
                            </span>
                          </div>
                        </div>

                        <div class="d-flex flex-shrink-0 align-items-center ms-3">
                          <span
                            v-for="(elem, index) in task.task_time"
                            :key="index"
                            :class="[
                              'todo-time d-lg-inline-block d-none me-3',
                              elem.textClass,
                            ]"
                            >{{ elem.time }}</span
                          >
                          <div
                            v-if="task.img"
                            class="avatar avatar-xs avatar-rounded d-md-inline-block d-none"
                          >
                            <img :src="task.img" alt="用户" class="avatar-img" />
                          </div>
                          <div
                            v-if="task.init_avt"
                            v-for="(elem, index) in task.init_avt"
                            :key="index"
                            :class="[
                              'avatar avatar-xs avatar-rounded d-md-inline-block d-none',
                              elem.bg,
                            ]"
                          >
                            <span className="initial-wrap">{{ elem.text }}</span>
                          </div>
                          <HkBadge
                            v-if="task.badge"
                            v-for="(status, indx) in task.badge"
                            :key="indx"
                            :variant="status.bg"
                            class="ms-3 d-md-inline-block d-none"
                          >
                            {{ status.text }}
                          </HkBadge>

                          <BDropdown
                            variant="flush-light"
                            toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                            end
                          >
                            <template #button-content>
                              <span class="icon">
                                <feather-icon name="more-vertical"></feather-icon>
                              </span>
                            </template>
                            <BDropdownItem href="#">编辑任务</BDropdownItem>
                            <BDropdownItem href="#">查看任务</BDropdownItem>
                            <BDropdownItem href="#"> 删除任务 </BDropdownItem>
                          </BDropdown>
                        </div>
                      </div>
                    </li>
                  </ul>
                </draggable>
              </BCardBody>
            </BCollapse>
          </BCard>
        </div>

        <BRow class="mt-3">
          <BCol sm="12">
            <div class="float-end text-end">
              <ul class="pagination custom-pagination pagination-simple active-theme">
                <li class="paginate_button page-item previous disabled">
                  <a href="#" class="page-link"><i class="ri-arrow-left-s-line"></i></a>
                </li>
                <li class="paginate_button page-item active">
                  <a href="#" class="page-link">1</a>
                </li>
                <li class="paginate_button page-item">
                  <a href="#" class="page-link">2</a>
                </li>
                <li class="paginate_button page-item">
                  <a href="#" class="page-link">3</a>
                </li>
                <li class="paginate_button page-item next">
                  <a href="#" class="page-link"><i class="ri-arrow-right-s-line"></i></a>
                </li>
              </ul>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </simplebar>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import { useTodoStore } from "@/stores/todoStore";

export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      tasks: [],
    };
  },
  async mounted() {
    const todoStore = useTodoStore();
    await todoStore.fetchTasks();
    // Group tasks by status for display
    this.tasks = [
      { title: "待办", id: "todo_tasks", tasks: (todoStore.groups.TODO || []).map(this.mapTask) },
      { title: "进行中", id: "in_progress_tasks", tasks: (todoStore.groups.IN_PROGRESS || []).map(this.mapTask) },
      { title: "已完成", id: "done_tasks", tasks: (todoStore.groups.DONE || []).map(this.mapTask) },
    ].filter(g => g.tasks.length > 0);
  },
  methods: {
    mapTask(t) {
      const priorityMap = { URGENT: 'badge-danger', HIGH: 'badge-warning', MEDIUM: 'badge-primary', LOW: 'badge-info' };
      return {
        id: t.id,
        checked: t.status === 'DONE',
        stared: false,
        task_name: t.title,
        priority: t.priority,
        indicator: priorityMap[t.priority] || 'badge-primary',
        task_time: [{ time: t.dueDate || '', textClass: 'text-muted' }],
        init_avt: [{ text: t.title[0], bg: 'bg-primary' }],
      };
    },
    openInfo() {
      this.$emit("open-info");
    },
  },
};
</script>
