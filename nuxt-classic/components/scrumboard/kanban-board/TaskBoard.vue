<template>
  <div class="taskboard-body">
    <div>
      <div class="taskbar-toolbar">
        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <BButton
            variant="soft-primary"
            class="flex-shrink-0 btn-add-newlist me-4"
            v-b-modal.add_task_list
          >
            新建
          </BButton>
          <BFormCheckbox class="ms-auto" :model-value="true" switch>
            显示描述
          </BFormCheckbox>
        </div>
        <BForm @submit.pr role="search" class="d-lg-flex d-none">
          <BFormInput type="text" placeholder="在会话中搜索" />
        </BForm>
      </div>

      <PerfectScrollbar class="tasklist-scroll position-relative">
        <draggable class="tasklist-wrap">
          <BCard
            v-for="(data, index) in columns"
            :key="data.title"
            class="card-simple card-border tasklist"
            no-body
          >
            <template class="card-header-action" #header>
              <div class="tasklist-handle">
                <h6 class="text-uppercase fw-bold d-flex align-items-center mb-0">
                  <span class="tasklist-name">{{ data.title }}</span>
                  <HkBadge variant="soft-violet" class="ms-2" pill>
                    {{ data.tasks.length }}
                  </HkBadge>
                </h6>
                <div class="card-action-wrap">
                  <BDropdown
                    variant="flush-dark"
                    toggle-class="btn-icon btn-rounded flush-soft-hover no-caret"
                    tag="a"
                    href="#"
                    end
                  >
                    <template #button-content>
                      <span class="icon">
                        <feather-icon name="more-horizontal"></feather-icon>
                      </span>
                    </template>
                    <BDropdownItem
                      href="#"
                      v-b-modal.edit_task_list
                      @click="onEditBoard(data.title)"
                    >
                      编辑
                    </BDropdownItem>
                    <BDropdownItem href="#" @click="deleteBoard(index)">
                      删除
                    </BDropdownItem>
                    <BDropdownItem href="#" @click="removeAllTasks(index)">
                      清除全部
                    </BDropdownItem>
                  </BDropdown>
                </div>
              </div>
              <BButton
                variant="white"
                class="btn-block btn-add-newtask"
                v-b-modal.add_new_card
                @click="addNewList(index)"
              >
                <span>
                  <span class="icon">
                    <feather-icon name="plus"></feather-icon>
                  </span>
                </span>
              </BButton>
            </template>
            <PerfectScrollbar class="card-body">
              <draggable
                :list="data.tasks"
                :animation="200"
                ghost-class="ghost-card"
                group="tasks"
                class="tasklist-cards-wrap"
              >
                <BCard
                  v-for="task in data.tasks"
                  :key="task.id"
                  class="card-border card-simple card-wth-progress tasklist-card"
                  no-body
                >
                  <div class="progress progress-bar-xs">
                    <div
                      :class="[
                        'progress-bar',
                        `w-${task.Progressed_Value}`,
                        {
                          'bg-warning':
                            task.Progressed_Value > 30 && task.Progressed_Value < 50,
                        },
                        { 'bg-danger': task.Progressed_Value < 30 },
                        { 'bg-success': task.Progressed_Value === 100 },
                      ]"
                      role="progressbar"
                      :aria-valuenow="task.Progressed_Value"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <div class="card-header card-header-action">
                    <h6 class="fw-bold">{{ task.Task_Name }}</h6>
                    <div class="card-action-wrap">
                      <a
                        class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <span class="icon">
                          <span class="feather-icon">
                            <feather-icon name="more-vertical"></feather-icon>
                          </span>
                        </span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a
                          class="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#task_detail"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="edit-2"></feather-icon>
                          </span>
                          <span>编辑</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="user"></feather-icon>
                          </span>
                          <span>指派给</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="paperclip"></feather-icon>
                          </span>
                          <span>附加文件</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="tag"></feather-icon>
                          </span>
                          <span>应用标签</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="calendar"></feather-icon>
                          </span>
                          <span>设置截止日期</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="bookmark"></feather-icon>
                          </span>
                          <span>关注任务</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="arrow-up"></feather-icon>
                          </span>
                          <span>设为最高优先级</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="repeat"></feather-icon>
                          </span>
                          <span>更改状态</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="pocket"></feather-icon>
                          </span>
                          <span>另存为模板</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="archive"></feather-icon>
                          </span>
                          <span>移至归档</span>
                        </a>
                        <a
                          class="dropdown-item delete-task"
                          href="#"
                          @click="removeTask(index, task.id)"
                        >
                          <span class="feather-icon dropdown-icon">
                            <feather-icon name="trash-2"></feather-icon>
                          </span>
                          <span>删除</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <BCardBody>
                    <div
                      v-for="(avatar, index) in task.Avatar"
                      :key="index"
                      class="avatar-group avatar-group-overlapped"
                    >
                      <div
                        v-if="avatar.type === 'avt'"
                        class="avatar avatar-rounded"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="丹尼尔"
                      >
                        <img :src="avatar.img" alt="user" class="avatar-img" />
                      </div>

                      <div
                        v-if="avatar.type === 'initAvt'"
                        :class="['avatar avatar-rounded', avatar.bg]"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="胡玛"
                      >
                        <span class="initial-wrap"
                          ><span>{{ avatar.avt }}</span></span
                        >
                      </div>
                    </div>
                    <div class="mt-2">
                      <span
                        v-for="(badge, index) in task.Badges"
                        :key="index"
                        :class="['badge my-1 me-1', badge.bg]"
                        >{{ badge.title }}</span
                      >
                    </div>
                  </BCardBody>
                  <BCardFooter
                    v-if="task.Footer"
                    class="text-muted justify-content-between"
                  >
                    <div>
                      <span class="task-counter">
                        <span><i class="ri-checkbox-line"></i></span>
                        <span>{{ task.Task_Counter }}</span>
                      </span>
                      <span v-if="task.Task_Discuss" class="task-discuss">
                        <span><i class="ri-message-3-line"></i></span>
                        <span>{{ task.Task_Discuss }}</span>
                      </span>
                    </div>
                    <div>
                      <span class="task-deadline">
                        {{ task.Deadline }}
                      </span>
                    </div>
                  </BCardFooter>
                </BCard>
              </draggable>
            </PerfectScrollbar>
          </BCard>

          <BCard no-body class="card-simple card-border tasklist add-new-task">
            <BButton
              variant="soft-primary"
              class="btn-add-newlist flex-shrink-0"
              v-b-modal.add_task_list
            >
              新建列表
            </BButton>
          </BCard>
        </draggable>
      </PerfectScrollbar>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { VueDraggableNext } from "vue-draggable-next";
import { useKanbanStore } from "@/stores/kanbanStore";

export default {
  name: "TaskBoard",
  components: {
    draggable: VueDraggableNext,
    PerfectScrollbar,
  },

  data() {
    return {
      columns: [],
    };
  },

  async mounted() {
    const kanbanStore = useKanbanStore();
    await kanbanStore.fetchBoards();
    // Find KANBAN type board
    const kanbanBoard = kanbanStore.boards.find(b => b.type === 'KANBAN');
    if (kanbanBoard) {
      await kanbanStore.selectBoard(kanbanBoard.id);
      this.buildColumns();
    }
  },

  methods: {
    buildColumns() {
      const kanbanStore = useKanbanStore();
      this.columns = kanbanStore.columns
        .sort((a, b) => (a.position || 0) - (b.position || 0))
        .map(col => ({
          ...col,
          title: col.name,
          tasks: kanbanStore.cards
            .filter(c => c.columnId === col.id)
            .sort((a, b) => (a.position || 0) - (b.position || 0))
            .map(card => ({
              id: card.id,
              Task_Name: card.title,
              Description: card.description,
              Deadline: card.dueDate,
              Progressed_Value: 0,
              Badges: card.priority ? [{ title: card.priority, bg: this.priorityColor(card.priority) }] : [],
              Avatar: [],
              Footer: true,
            })),
        }));
    },
    priorityColor(p) {
      return { URGENT: 'badge-danger', HIGH: 'badge-warning', MEDIUM: 'badge-primary', LOW: 'badge-info' }[p] || 'badge-primary';
    },

    onEditBoard(name) {
      const kanbanStore = useKanbanStore();
      kanbanStore.setBoardName(name.toUpperCase());
      kanbanStore.setOldBoardName(name);
    },

    addNewList(index) {
      useKanbanStore().setColumnIndex(index);
    },
  },
};
</script>
