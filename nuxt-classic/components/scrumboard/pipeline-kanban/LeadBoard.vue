<template>
  <div class="taskboard-body taskboard-body-alt">
    <div>
      <simplebar data-simplebar class="tasklist-scroll position-relative">
        <draggable class="tasklist-wrap">
          <BCard
            v-for="(data, index) in columns"
            :key="index"
            class="card-simple card-flush spipeline-list"
            no-body
          >
            <template class="card-header-action" #header>
              <div class="spipeline-handle">
                <h6 class="text-uppercase fw-bold mb-0">{{ data.title }}</h6>
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
              <div>
                <span>
                  <span class="overall-estimation">
                    {{ data.leadValue }}
                  </span>
                  <span class="spipeline-dot-sep">●</span>
                  <span class="lead-count"> {{ data.leads.length }} 个线索 </span>
                </span>
              </div>
              <BButton
                variant="light"
                class="btn-block text-primary btn-add-newtask"
                v-b-modal.add_new_deal
                @click="addNewList(index)"
              >
                <span>
                  <span class="icon">
                    <feather-icon name="plus"></feather-icon>
                  </span>
                  <span class="btn-text">添加卡片</span>
                </span>
              </BButton>
            </template>

            <BCardBody>
              <draggable
                :list="data.leads"
                :animation="200"
                ghost-class="ghost-card"
                group="tasks"
                class="tasklist-cards-wrap"
              >
                <BCard
                  v-for="lead in data.leads"
                  :key="lead.id"
                  :class="[
                    'card-border spipeline-card',
                    { 'lost-deal': lead.status === 'lost' },
                    { 'won-deal': lead.status === 'won' },
                  ]"
                  no-body
                >
                  <BCardBody>
                    <div class="card-action-wrap">
                      <a
                        :class="[
                          'btn btn-xs btn-icon btn-rounded dropdown-toggle no-caret',
                          { 'btn-light': !lead.growth || lead.growth === 'normal' },
                          { 'btn-primary': lead.growth === 'high' },
                          { 'btn-warning': lead.growth === 'average' },
                          { 'btn-danger': lead.growth === 'low' },
                        ]"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        href="#"
                      >
                        <span class="icon">
                          <span class="feather-icon">
                            <feather-icon
                              v-if="lead.growth === 'low'"
                              name="chevron-left"
                            ></feather-icon>
                            <feather-icon
                              v-else-if="lead.growth === 'average'"
                              name="alert-triangle"
                            ></feather-icon>
                            <feather-icon v-else name="chevron-right"></feather-icon>
                          </span>
                        </span>
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-icon-text dropdown-menu-end spipeline-dropdown"
                      >
                        <h6 class="dropdown-header text-muted">计划活动</h6>
                        <a class="dropdown-item" href="#">
                          <div class="d-flex align-items-center">
                            <div class="me-3 position-relative text-disabled">
                              <i class="ri-checkbox-blank-circle-line"></i>
                            </div>
                            <div class="mw-175p">
                              <div class="h6 mb-0 text-truncate">
                                已与詹姆斯约定通话
                              </div>
                              <p class="dropdown-item-text text-truncate text-danger">
                                昨天 16:30
                              </p>
                            </div>
                            <div
                              class="avatar avatar-icon avatar-xxs avatar-soft-danger avatar-rounded ms-3"
                            >
                              <span class="initial-wrap">
                                <span class="feather-icon">
                                  <feather-icon name="phone"></feather-icon>
                                </span>
                              </span>
                            </div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="#">
                          <div class="d-flex align-items-center">
                            <div class="me-3 position-relative text-disabled">
                              <i class="ri-checkbox-blank-circle-line"></i>
                            </div>
                            <div class="mw-175p">
                              <div class="h6 mb-0 text-truncate">
                                已与洛克斯约定通话
                              </div>
                              <p class="dropdown-item-text text-truncate">
                                2020年1月21日 12:40
                              </p>
                            </div>
                            <div
                              class="avatar avatar-icon avatar-xxs avatar-light avatar-rounded ms-3"
                            >
                              <span class="initial-wrap">
                                <span class="feather-icon">
                                  <feather-icon name="phone"></feather-icon>
                                </span>
                              </span>
                            </div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="#">
                          <div class="d-flex align-items-center">
                            <div class="me-3 position-relative text-disabled">
                              <i class="ri-checkbox-blank-circle-line"></i>
                            </div>
                            <div class="mw-175p">
                              <div class="h6 mb-0 text-truncate">
                                已与洛克斯·斯特朗约定演示
                              </div>
                              <p class="dropdown-item-text text-truncate">
                                2020年11月9日 09:40
                              </p>
                            </div>
                            <div
                              class="avatar avatar-icon avatar-xxs avatar-soft-primary avatar-rounded ms-3"
                            >
                              <span class="initial-wrap">
                                <span class="feather-icon">
                                  <feather-icon name="phone"></feather-icon>
                                </span>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div class="media">
                      <div class="media-head">
                        <div
                          :class="[
                            'avatar avatar-rounded',
                            { 'avatar-logo': lead.symbolLogo },
                            lead.logoBg,
                          ]"
                        >
                          <span class="initial-wrap">
                            <img
                              v-if="lead.symbolLogo"
                              :src="lead.symbolLogo"
                              alt="logo"
                            />
                            <img
                              v-if="lead.logo"
                              :src="lead.logo"
                              alt="user"
                              class="avatar-img"
                            />
                            <span v-if="lead.initLogo">{{ lead.initLogo }}</span>
                          </span>
                        </div>
                      </div>
                      <div class="media-body">
                        <div class="brand-name">{{ lead.brandName }}</div>
                        <div class="price-estimation">${{ lead.price }}</div>
                        <div class="brand-cat">{{ lead.category }}</div>
                        <div class="media align-items-center">
                          <div class="media-head">
                            <div class="avatar avatar-xs avatar-rounded d-4 d-flex">
                              <img :src="lead.avatar" alt="user" class="avatar-img" />
                            </div>
                          </div>
                          <div class="media-body">
                            <p
                              :class="{
                                'text-danger': lead.status === 'lost',
                                'text-primary': lead.status === 'won',
                              }"
                            >
                              {{ lead.lastUsed }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BCardBody>
                </BCard>
              </draggable>
            </BCardBody>
          </BCard>

          <BCard no-body class="card-simple card-border spipeline-list create-new-list">
            <template class="card-header-action" #header>
              <BButton
                variant="light"
                class="btn-block bg-transparent border-0 text-primary"
                v-b-modal.add_task_list
              >
                <span>
                  <span class="icon">
                    <feather-icon name="plus"></feather-icon>
                  </span>
                  <span class="btn-text">新建列表</span>
                </span>
              </BButton>
            </template>
          </BCard>
        </draggable>
      </simplebar>
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import { useKanbanStore } from "@/stores/kanbanStore";

export default {
  name: "LeadBoard",
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      columns: [],
    };
  },
  async mounted() {
    const kanbanStore = useKanbanStore();
    await kanbanStore.fetchBoards();
    const pipelineBoard = kanbanStore.boards.find(b => b.type === 'PIPELINE');
    if (pipelineBoard) {
      await kanbanStore.selectBoard(pipelineBoard.id);
      this.buildColumns();
    }
  },
  methods: {
    buildColumns() {
      const kanbanStore = useKanbanStore();
      this.columns = kanbanStore.columns
        .sort((a, b) => (a.position || 0) - (b.position || 0))
        .map(col => ({
          title: col.name,
          leadValue: kanbanStore.cards.filter(c => c.columnId === col.id).length.toString(),
          leads: kanbanStore.cards
            .filter(c => c.columnId === col.id)
            .sort((a, b) => (a.position || 0) - (b.position || 0))
            .map(card => ({
              id: card.id,
              brandName: card.title,
              price: '$' + (card.description || '0'),
              category: card.priority || '普通',
              initLogo: { title: card.title[0], bg: 'bg-primary' },
              growth: 'normal',
              lastUsed: card.dueDate || '',
              status: '',
            })),
        }));
    },
    onEditBoard() {},
    addNewList() {},
    openDealForm() {},
    editLeadBoard() {},
  },
  setup() {
    const pipelineStore = usePipelineStore();

    const onEditBoard = (name) => {
      pipelineStore.setBoardName(name.toUpperCase());
      pipelineStore.setOldBoardName(name);
    };

    const addNewList = (index) => {
      pipelineStore.setColumnIndex(index);
    };

    return {
      pipelineStore,
      onEditBoard,
      addNewList,
    };
  },
};
</script>
