<template>
  <div class="taskboardapp-content">
    <div class="taskboardapp-detail-wrap">
      <header class="taskboard-header">
        <ul
          class="nav nav-justified nav-light nav-tabs nav-segmented-tabs active-theme mx-auto w-350p"
        >
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#tab_boards">
              <span class="nav-link-text">看板</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#tab_team">
              <span class="nav-link-text badge-on-text">团队</span>
            </a>
          </li>
        </ul>
        <div
          :class="['hk-sidebar-togglable', { active: !showSidebar }]"
          @click="toggleSidebar"
        ></div>
      </header>
      <div class="taskboard-body">
        <simplebar class="nicescroll-bar">
          <div class="container-fluid">
            <div class="row justify-content-center board-team-wrap">
              <div class="col-md-8 col-sm-12">
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="tab_boards">
                    <h5 class="mb-5">所有看板</h5>
                    <div class="row">
                      <div
                        class="col-lg-6"
                        v-for="board in boards"
                        :key="board.id"
                      >
                        <div class="card board-card card-border">
                          <div class="card-body">
                            <div class="media align-items-center" style="cursor: pointer" @click="openBoard(board)">
                              <div class="media-head">
                                <div class="avatar avatar-sm avatar-pink">
                                  <span class="initial-wrap">{{ (board.name || 'B').charAt(0).toUpperCase() }}</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <span>{{ board.name }}</span>
                                <span class="badge badge-soft-primary ms-2 fs-9">{{ typeLabel(board.type) }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="card-footer text-muted justify-content-between">
                            <div>
                              <div
                                class="avatar-group avatar-group-sm avatar-group-overlapped me-3"
                              >
                                <div class="avatar avatar-rounded" v-tooltip data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="凯瑟琳">
                                  <img :src="avatar8" alt="user" class="avatar-img" />
                                </div>
                                <div class="avatar avatar-rounded" v-tooltip data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="迪恩">
                                  <img :src="avatar13" alt="user" class="avatar-img" />
                                </div>
                                <div class="avatar avatar-rounded" v-tooltip data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="摩根">
                                  <img :src="avatar2" alt="user" class="avatar-img" />
                                </div>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <p class="p-xs me-2">{{ typeLabel(board.type) }}看板</p>
                              <div class="flex-shrink-0">
                                <a
                                  class="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
                                  aria-expanded="false"
                                  data-bs-toggle="dropdown"
                                  href="#"
                                >
                                  <span class="icon">
                                    <span class="feather-icon">
                                      <feather-icon name="more-horizontal"></feather-icon>
                                    </span>
                                  </span>
                                </a>
                                <div role="menu" class="dropdown-menu dropdown-menu-end">
                                  <a class="dropdown-item" href="#" @click="openBoard(board)">进入看板</a>
                                  <a class="dropdown-item" href="#" @click="copyLink(board)">复制链接</a>
                                  <a class="dropdown-item" href="#" @click="removeBoard(board)">删除</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="card card-border border-dashed h-100">
                          <div class="card-body d-flex align-items-center justify-content-center">
                            <button
                              class="btn btn-outline-light btn-block"
                              data-bs-toggle="modal"
                              data-bs-target="#add_new_board"
                            >
                              <span v-tooltip data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="新建看板">
                                <span class="icon">
                                  <span class="feather-icon">
                                    <feather-icon name="plus"></feather-icon>
                                  </span>
                                </span>
                              </span>
                              <span class="ms-2">新建看板</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p v-if="!boards.length" class="text-muted mt-4">暂无项目看板，点击「新建看板」创建。</p>
                  </div>
                  <div class="tab-pane fade" id="tab_team">
                    <div class="d-flex justify-content-between align-items-center mb-5">
                      <div class="d-flex align-items-center form-group mb-0">
                        <h5 class="mb-0 me-4">成员</h5>
                        <label class="flex-shrink-0 mb-0 me-2">排序方式：</label>
                        <select class="form-control form-select form-select-sm w-130p">
                          <option selected="" value="1">创建日期</option>
                          <option value="2">A - Z</option>
                          <option value="3">Z - A</option>
                        </select>
                      </div>
                      <button class="btn btn-light btn-icon">
                        <span class="icon">
                          <span class="feather-icon">
                            <feather-icon name="plus"></feather-icon>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="row">
                      <div class="col-xl-6 col-md-12" v-for="member in members" :key="member.name">
                        <div class="card team-card card-border">
                          <div class="card-body">
                            <div class="media align-items-center">
                              <div class="media-head">
                                <div class="avatar avatar-rounded">
                                  <img :src="member.img" alt="user" class="avatar-img" />
                                </div>
                              </div>
                              <div class="media-body">
                                <div>{{ member.name }}</div>
                                <div class="text-truncate">{{ member.email }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </simplebar>
      </div>
    </div>
  </div>
</template>

<script>
import { useKanbanStore } from "@/stores/kanban";
import { useRouter } from "vue-router";
import { onMounted, computed } from "vue";
//Images
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar8 from "@/assets/img/avatar8.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";

export default {
  name: "ProjectsTaskBoard",
  props: {
    showSidebar: Boolean,
  },
  setup() {
    const kanbanStore = useKanbanStore();
    const router = useRouter();

    const boards = computed(() => kanbanStore.boards || []);

    const typeRoute = (type) => {
      if (type === "PIPELINE") return "/apps/scrumboard/pipeline";
      if (type === "KANBAN") return "/apps/scrumboard/kanban-board";
      return "/apps/scrumboard/project-board";
    };

    const openBoard = (board) => {
      // 先选中该看板，再跳转
      router.push(typeRoute(board.type));
    };

    const copyLink = async (board) => {
      const link = location.origin + typeRoute(board.type);
      try {
        await navigator.clipboard.writeText(link);
      } catch (e) {
        console.error("[projects] copy link failed:", e);
      }
      alert("链接已复制：" + typeRoute(board.type));
    };

    const removeBoard = async (board) => {
      try {
        await kanbanStore.deleteBoard(board.id);
      } catch (e) {
        alert(e.message || "删除看板失败");
      }
    };

    const typeLabel = (type) => {
      return { KANBAN: "任务看板", PIPELINE: "销售管道", PROJECT: "项目" }[type] || type;
    };

    onMounted(() => {
      if (!kanbanStore.boards.length) kanbanStore.fetchBoards();
    });

    return {
      kanbanStore,
      boards,
      openBoard,
      copyLink,
      removeBoard,
      typeLabel,
      avatar2,
      avatar8,
      avatar13,
    };
  },
  data() {
    return {
      members: [
        { name: "摩根·弗里曼", email: "morgan@caoba.com", img: avatar2 },
        { name: "乌玛·瑟曼", email: "huma@clariesup.au", img: avatar8 },
        { name: "汤姆·克鲁斯", email: "tomcz@caoba.com", img: avatar13 },
        { name: "凯瑟琳·沃特斯顿", email: "katherine@caoba.com", img: avatar8 },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
};
</script>