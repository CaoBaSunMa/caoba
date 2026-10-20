<template>
  <div class="taskboard-body">
    <div>
      <div class="taskbar-toolbar">
        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <button
            class="btn btn-soft-primary flex-shrink-0 btn-add-newlist me-4"
            data-bs-toggle="modal"
            data-bs-target="#add_task_list"
          >
            新建
          </button>
          <div class="form-check form-switch ms-auto">
            <input type="checkbox" class="form-check-input" id="customDes" checked="" />
            <label class="form-check-label" for="customDes">显示描述</label>
          </div>
        </div>
        <form role="search" class="d-lg-flex d-none">
          <input type="text" class="form-control" placeholder="在会话中搜索" />
        </form>
      </div>

      <PerfectScrollbar class="tasklist-scroll position-relative">
        <draggable class="tasklist-wrap">
          <div
            v-for="(data, index) in columns"
            :key="data.title"
            class="card card-simple card-border tasklist"
          >
            <div class="card-header card-header-action">
              <div class="tasklist-handle">
                <h6 class="text-uppercase fw-bold d-flex align-items-center mb-0">
                  <span class="tasklist-name">{{ data.title }}</span>
                  <span class="badge badge-pill badge-soft-violet ms-2">{{
                    data.tasks.length
                  }}</span>
                </h6>
                <div class="card-action-wrap">
                  <a
                    class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <span class="icon">
                      <span class="feather-icon">
                        <feather-icon name="more-horizontal"></feather-icon>
                      </span>
                    </span>
                  </a>
                  <div role="menu" class="dropdown-menu dropdown-menu-end">
                    <a
                      class="dropdown-item edit-tasklist"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_task_list"
                      @click="onEditBoard(data.title)"
                      >编辑</a
                    >
                    <a
                      class="dropdown-item delete-tasklist"
                      href="#"
                      @click="deleteBoard(index)"
                      >删除</a
                    >
                    <a
                      class="dropdown-item clear-tasklist"
                      href="#"
                      @click="removeAllTasks(index)"
                      >清除全部</a
                    >
                  </div>
                </div>
              </div>
              <button
                class="btn btn-white btn-block btn-add-newtask"
                data-bs-toggle="modal"
                data-bs-target="#add_new_card"
                @click="addNewList(index)"
              >
                <span>
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="plus"></feather-icon>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <PerfectScrollbar class="card-body">
              <draggable
                :list="data.tasks"
                :animation="200"
                ghost-class="ghost-card"
                group="tasks"
                class="tasklist-cards-wrap"
                @change="onCardChange($event, data)"
              >
                <div
                  v-for="task in data.tasks"
                  :key="task.id"
                  class="card card-border card-simple card-wth-progress tasklist-card"
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
                  <div class="card-body">
                    <div
                      v-for="(avatar, index) in task.Avatar"
                      :key="index"
                      class="avatar-group avatar-group-overlapped"
                    >
                      <div
                        v-if="avatar.type === 'avt'"
                        class="avatar avatar-rounded"
                        v-tooltip
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
                        v-tooltip
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
                  </div>
                  <div
                    v-if="task.Footer"
                    class="card-footer text-muted justify-content-between"
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
                  </div>
                </div>
              </draggable>
            </PerfectScrollbar>
          </div>

          <div class="card card-simple card-border tasklist add-new-task">
            <button
              class="btn btn-soft-primary btn-add-newlist flex-shrink-0"
              data-bs-toggle="modal"
              data-bs-target="#add_task_list"
            >
              新建列表
            </button>
          </div>
        </draggable>
      </PerfectScrollbar>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { VueDraggableNext } from "vue-draggable-next";
import { storeToRefs } from "pinia";
import { useKanbanStore } from "@/stores/kanban";
import { kanbanMixins } from "@/mixins/kanbanApi";

export default {
  name: "TaskBoard",
  mixins: [kanbanMixins],
  components: {
    draggable: VueDraggableNext,
    PerfectScrollbar,
  },

  setup() {
    const kanbanStore = useKanbanStore();
    const { boardColumns: columns } = storeToRefs(kanbanStore);

    const onEditBoard = (name) => {
      kanbanStore.setBoardName(name);
      kanbanStore.setOldBoardName(name);
    };

    const addNewList = (index) => {
      kanbanStore.setColumnIndex(index);
    };

    const onCardChange = async (ev, column) => {
      if (ev.added && ev.added.element && column) {
        try {
          await kanbanStore.moveCard(ev.added.element.id, {
            targetColumnId: column.columnId,
            targetPosition: column.tasks.length - 1,
          });
        } catch (e) {
          console.error("[kanban] drag move failed:", e);
        }
      }
    };

    return {
      kanbanStore,
      columns,
      onEditBoard,
      addNewList,
      onCardChange,
    };
  },
};
</script>
