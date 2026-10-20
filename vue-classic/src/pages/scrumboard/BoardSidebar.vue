<template>
  <nav class="taskboardapp-sidebar">
    <simplebar class="nicescroll-bar">
      <div class="menu-content-wrap">
        <button
          class="btn btn-primary btn-rounded btn-block mb-4"
          data-bs-toggle="modal"
          data-bs-target="#add_new_board"
        >
          新建看板
        </button>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="filter = 'all'">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="layout"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">所有看板</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="filter = 'starred'">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="star"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">星标看板</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="filter = 'private'">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="lock"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">私有看板</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="filter = 'public'">
                <span class="nav-icon-wrap">
                  <span class="feather-icon">
                    <feather-icon name="user-check"></feather-icon>
                  </span>
                </span>
                <span class="nav-link-text">公开看板</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="separator separator-light"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <div class="title-sm text-primary mb-0">我的看板</div>
          <a
            href="#"
            class="btn btn-xs btn-icon btn-rounded btn-light"
            data-bs-toggle="modal"
            data-bs-target="#add_new_board"
            ><span
              class="icon"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="新建看板"
            >
              <span class="feather-icon">
                <feather-icon name="plus"></feather-icon>
              </span>
            </span>
          </a>
        </div>
        <div class="menu-group">
          <ul class="nav nav-light navbar-nav flex-column" v-if="boards.length">
            <li
              class="nav-item"
              v-for="board in boards"
              :key="board.id"
            >
              <div>
                <div class="media d-flex align-items-center">
                  <div class="media-head me-2">
                    <div class="avatar avatar-xs avatar-primary avatar-rounded">
                      <span class="initial-wrap">{{ (board.name || 'B').charAt(0).toUpperCase() }}</span>
                    </div>
                  </div>
                  <div class="media-body">
                    <div>
                      <div
                        class="name"
                        :class="{ 'text-primary fw-medium': board.id === kanbanStore.selectedBoardId }"
                        style="cursor: pointer"
                        @click="onSelect(board)"
                      >{{ board.name }}
                        <span class="badge badge-soft-primary ms-1 fs-9">{{ board.type }}</span>
                      </div>
                    </div>
                  </div>
                  <template v-if="mode === 'select' && board.id === kanbanStore.selectedBoardId">
                    <div class="ms-auto">
                      <span class="badge badge-success">当前</span>
                    </div>
                  </template>
                </div>
              </div>
            </li>
          </ul>
          <p v-else class="fs-8 text-muted mb-0 px-1">暂无看板，点击上方「新建看板」创建</p>
        </div>
        <div class="alert alert-warning mt-5" role="alert">
          <h6 class="heading-wth-icon alert-heading">
            <span class="head-icon">
              <span class="feather-icon">
                <feather-icon name="zap-off"></feather-icon>
              </span>
            </span>
            试用期于 1 月 14 日结束
          </h6>
          <p class="fs-7">
            您的试用期仅剩最后 3 天，请立即续订以保持连接。
          </p>
        </div>
      </div>
    </simplebar>
    <!--Sidebar Fixnav-->
    <div class="taskboardapp-fixednav">
      <div class="hk-toolbar">
        <ul class="nav nav-light">
          <li class="nav-item nav-link">
            <a
              class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="设置"
              href="#"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="settings"></feather-icon>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="归档"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="archive"></feather-icon>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item nav-link">
            <a
              href="#"
              class="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="帮助"
            >
              <span class="icon">
                <span class="feather-icon">
                  <feather-icon name="book"></feather-icon>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--/ Sidebar Fixnav-->
  </nav>
</template>

<script>
import { useKanbanStore } from "@/stores/kanban";
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "BoardSidebar",
  props: {
    boardType: { type: String, default: "KANBAN" }, // KANBAN / PIPELINE / PROJECT / ALL
    mode: { type: String, default: "select" }, // select: 点击选中当前看板; navigate: 点击跳转对应看板页
  },
  setup(props) {
    const kanbanStore = useKanbanStore();
    const router = useRouter();
    const filter = ref("all");

    const boards = computed(() => {
      let list = kanbanStore.boards || [];
      if (props.boardType && props.boardType !== "ALL") {
        list = list.filter((b) => b.type === props.boardType);
      }
      return list;
    });

    const typeRoute = (type) => {
      if (type === "PIPELINE") return "/apps/scrumboard/pipeline";
      if (type === "PROJECT") return "/apps/scrumboard/project-board";
      return "/apps/scrumboard/kanban-board";
    };

    const onSelect = async (board) => {
      if (props.mode === "navigate") {
        router.push(typeRoute(board.type));
        return;
      }
      await kanbanStore.selectBoard(board.id);
    };

    onMounted(() => {
      if (!kanbanStore.boards.length) kanbanStore.fetchBoards();
    });

    return {
      kanbanStore,
      boards,
      filter,
      onSelect,
    };
  },
};
</script>