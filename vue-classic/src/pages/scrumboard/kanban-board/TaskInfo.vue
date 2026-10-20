<template>
  <div class="taskboard-info">
    <simplebar class="nicescroll-bar">
      <button type="button" class="info-close btn-close mb-10" @click="toggle - info">
        <span aria-hidden="true">×</span>
      </button>
      <form role="search" class="mt-xl-0 mt-5">
        <input type="text" class="form-control" placeholder="在会话中搜索" />
      </form>
      <div class="collapse-simple mt-4">
        <div class="card">
          <div class="card-header">
            <a
              role="button"
              data-bs-toggle="collapse"
              href="#members"
              aria-expanded="true"
              >成员</a
            >
          </div>
          <div id="members" class="collapse show">
            <div class="card-body">
              <ul class="hk-list">
                <li>
                  <div
                    class="avatar avatar-sm avatar-primary avatar-rounded"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="caoba"
                  >
                    <span class="initial-wrap">Cb</span>
                  </div>
                </li>
                <li>
                  <div
                    class="avatar avatar-sm avatar-rounded"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="摩根"
                  >
                    <img src="@/assets/img/avatar2.jpg" alt="user" class="avatar-img" />
                  </div>
                </li>
                <li>
                  <div
                    class="avatar avatar-sm avatar-rounded"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="查理"
                  >
                    <img src="@/assets/img/avatar13.jpg" alt="user" class="avatar-img" />
                  </div>
                </li>
                <li>
                  <div
                    class="avatar avatar-sm avatar-rounded position-relative"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="汤姆"
                  >
                    <img src="@/assets/img/avatar7.jpg" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </li>
                <li>
                  <div
                    class="avatar avatar-sm avatar-rounded"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="凯瑟琳"
                  >
                    <img src="@/assets/img/avatar9.jpg" alt="user" class="avatar-img" />
                  </div>
                </li>
                <li>
                  <div
                    class="avatar avatar-sm avatar-rounded position-relative"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="丹尼尔"
                  >
                    <img src="@/assets/img/avatar10.jpg" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </li>
                <li>
                  <div
                    class="avatar avatar-sm avatar-rounded position-relative"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="老板"
                  >
                    <img src="@/assets/img/avatar15.jpg" alt="user" class="avatar-img" />
                    <span
                      class="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"
                    ></span>
                  </div>
                </li>
                <li>
                  <div
                    class="avatar avatar-sm avatar-soft-danger avatar-rounded"
                    v-tooltip
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="温斯顿"
                  >
                    <span class="initial-wrap">W</span>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    class="avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded"
                    data-bs-toggle="modal"
                    data-bs-target="#invite_people"
                  >
                    <span
                      class="initial-wrap"
                      v-tooltip
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="新增"
                    >
                      <feather-icon name="plus" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a
              role="button"
              data-bs-toggle="collapse"
              href="#activity"
              aria-expanded="true"
              >最新动态</a
            >
          </div>
          <div id="activity" class="collapse show">
            <div class="card-body">
              <ul class="activity-list list-group list-group-flush">
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-primary avatar-rounded">
                        <span class="initial-wrap">Cb</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">caoba</span> 的文档链接已
                        恢复正常 -
                        <a href="#" class="link-url"
                          ><u>ttps://caoba.com/theme/jampa</u></a
                        >
                      </p>
                      <div class="last-activity-time">2021年10月15日 12:34</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img
                          src="@/assets/img/avatar2.jpg"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">摩根·弗里曼</span> 已完成
                        <a href="#" class="link-default"><u>组件</u></a> 的 React 转换
                      </p>
                      <div class="last-activity-time">2021年9月16日 16:54</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img
                          src="@/assets/img/avatar13.jpg"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">吉米·卡里</span> 已完成
                        <a href="#" class="link-default"><u>元素</u></a> 中的侧边栏菜单
                      </p>
                      <div class="last-activity-time">2021年9月10日 10:13</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img
                          src="@/assets/img/avatar7.jpg"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">查理·卓别林</span> 已删除
                        <a href="#" class="link-default"><u>已完成</u></a> 列表中的空卡片
                      </p>
                      <div class="last-activity-time">2021年9月10日 10:13</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-soft-danger avatar-rounded">
                        <span class="initial-wrap">W</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">温斯顿·丘吉尔</span> 在 UI 组件任务列表中创建了一条备注
                      </p>
                      <div class="last-activity-time">2021年9月2日 09:23</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img
                          src="@/assets/img/avatar2.jpg"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">摩根·弗里曼</span> 已完成
                        <a href="#" class="link-default"><u>组件</u></a> 的 React 转换
                      </p>
                      <div class="last-activity-time">2021年9月16日 16:54</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img
                          src="@/assets/img/avatar13.jpg"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">吉米·卡里</span> 已将共享组件添加到
                        <a href="#" class="link-default"><u>基础结构</u></a>
                      </p>
                      <div class="last-activity-time">2021年9月10日 10:13</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-primary avatar-rounded">
                        <span class="initial-wrap">Cb</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">caoba</span> 已在
                        <a href="#" class="link-default"><u>基础结构</u></a> 上发表评论
                      </p>
                      <div class="last-activity-time">2021年9月10日 10:13</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img
                          src="@/assets/img/avatar7.jpg"
                          alt="user"
                          class="avatar-img"
                        />
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">查理·卓别林</span> 已将组件从所有模块移至进行中
                      </p>
                      <div class="last-activity-time">2021年9月10日 10:13</div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="media">
                    <div class="media-head">
                      <div class="avatar avatar-sm avatar-soft-danger avatar-rounded">
                        <span class="initial-wrap">W</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <p>
                        <span class="text-dark">温斯顿·丘吉尔</span> 在 UI 组件任务列表中创建了一条备注
                      </p>
                      <div class="last-activity-time">2021年9月10日 10:13</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </simplebar>
  </div>
</template>

<script>
export default {
  name: "TaskInfo",
  methods: {
    toggleInfo() {
      this.$emit("toggle-info");
    },
  },
};
</script>
