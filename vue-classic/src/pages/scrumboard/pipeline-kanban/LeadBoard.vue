<template>
  <div class="taskboard-body taskboard-body-alt">
    <div>
      <simplebar data-simplebar class="tasklist-scroll position-relative">
        <draggable class="tasklist-wrap">
          <div
            v-for="(data, index) in columns"
            :key="index"
            class="card card-simple card-flush spipeline-list"
          >
            <div class="card-header card-header-action">
              <div class="spipeline-handle">
                <h6 class="text-uppercase fw-bold mb-0">{{ data.title }}</h6>
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
              <div>
                <span>
                  <span class="overall-estimation">
                    {{ data.leadValue }}
                  </span>
                  <span class="spipeline-dot-sep">●</span>
                  <span class="lead-count"> {{ data.leads.length }} 个线索 </span>
                </span>
              </div>
              <button
                class="btn btn-light btn-block text-primary btn-add-newtask"
                data-bs-toggle="modal"
                data-bs-target="#add_new_deal"
                @click="addNewList(index)"
              >
                <span>
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="plus"></feather-icon>
                    </span>
                  </span>
                  <span class="btn-text">添加卡片</span>
                </span>
              </button>
            </div>

            <div class="card-body">
              <draggable
                :list="data.leads"
                :animation="200"
                ghost-class="ghost-card"
                group="tasks"
                class="tasklist-cards-wrap"
                @change="onDealChange($event, data)"
              >
                <div
                  v-for="lead in data.leads"
                  :key="lead.id"
                  :class="[
                    'card card-border spipeline-card',
                    { 'lost-deal': lead.status === 'lost' },
                    { 'won-deal': lead.status === 'won' },
                  ]"
                >
                  <div class="card-body">
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
                              <img v-if="lead.avatar" :src="lead.avatar" alt="user" class="avatar-img" />
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
                  </div>
                </div>
              </draggable>
            </div>
          </div>

          <div class="card card-simple card-border spipeline-list create-new-list">
            <div class="card-header card-header-action">
              <button
                class="btn btn-light btn-block bg-transparent border-0 text-primary"
                data-bs-toggle="modal"
                data-bs-target="#add_task_list"
              >
                <span>
                  <span class="icon">
                    <span class="feather-icon">
                      <feather-icon name="plus"></feather-icon>
                    </span>
                  </span>
                  <span class="btn-text">新建列表</span>
                </span>
              </button>
            </div>
          </div>
        </draggable>
      </simplebar>
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import { storeToRefs } from "pinia";
import { usePipelineStore } from "@/stores/pipeline";
import { pipelineMixins } from "@/mixins/pipelineMixins";

export default {
  name: "LeadBoard",
  mixins: [pipelineMixins],
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const pipelineStore = usePipelineStore();
    const { boardColumns: columns } = storeToRefs(pipelineStore);

    const onEditBoard = (name) => {
      pipelineStore.setBoardName(name);
      pipelineStore.setOldBoardName(name);
    };

    const addNewList = (index) => {
      pipelineStore.setColumnIndex(index);
    };

    const onDealChange = async (ev, column) => {
      if (ev.added && ev.added.element && column) {
        try {
          await pipelineStore.moveCard(ev.added.element.id, {
            targetColumnId: column.columnId,
            targetPosition: column.leads.length - 1,
          });
        } catch (e) {
          console.error("[pipeline] drag move failed:", e);
        }
      }
    };

    return {
      pipelineStore,
      columns,
      onEditBoard,
      addNewList,
      onDealChange,
    };
  },
};
</script>
