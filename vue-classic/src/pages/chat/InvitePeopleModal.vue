<template>
  <div class="modal fade" id="invite_people" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered mw-400p" role="document">
      <div class="modal-content">
        <div class="modal-header header-wth-bg-inv">
          <h5 class="modal-title">邀请成员</h5>
          <button
            type="button"
            class="btn-close text-white"
            data-bs-dismiss="modal"
            aria-label="关闭"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body p-0">
          <form class="m-3" role="search">
            <input
              type="text"
              class="form-control rounded-input user-search"
              placeholder="搜索用户"
            />
          </form>
          <div class="h-350p">
            <simplebar class="nicescroll-bar">
              <ul class="invite-user-list">
                <li>
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img :src="avatar2" alt="user" class="avatar-img" />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="user-name">摩根·弗里曼</div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" class="form-check-input" id="customCheck2" />
                  </div>
                </li>
                <li>
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img :src="avatar7" alt="user" class="avatar-img" />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="user-name">乌玛·瑟曼</div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" class="form-check-input" id="customCheck3" />
                  </div>
                </li>
                <li>
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img :src="avatar3" alt="user" class="avatar-img" />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="user-name">查理·卓别林</div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" class="form-check-input" id="customCheck4" />
                  </div>
                </li>
                <li>
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar avatar-sm avatar-soft-danger avatar-rounded">
                        <span class="initial-wrap">温</span>
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="user-name">温斯顿·丘吉尔</div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" class="form-check-input" id="customCheck5" />
                  </div>
                </li>
                <li>
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img :src="avatar1" alt="user" class="avatar-img" />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="user-name">办公看板</div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" class="form-check-input" id="customCheck6" />
                  </div>
                </li>
                <li>
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img :src="avatar6" alt="user" class="avatar-img" />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="user-name">宝贝老板</div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" class="form-check-input" id="customCheck7" />
                  </div>
                </li>
                <li>
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-3">
                      <div class="avatar avatar-sm avatar-rounded">
                        <img :src="avatar5" alt="user" class="avatar-img" />
                      </div>
                    </div>
                    <div class="media-body">
                      <div class="user-name">杰奎琳·乔克</div>
                    </div>
                  </div>
                  <div>
                    <input type="checkbox" class="form-check-input" id="customCheck8" />
                  </div>
                </li>
              </ul>
            </simplebar>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn flex-fill btn-light flex-1"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn flex-fill btn-primary flex-1">
            邀请聊天
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Images
import avatar1 from "@/assets/img/avatar1.jpg";
import avatar2 from "@/assets/img/avatar2.jpg";
import avatar3 from "@/assets/img/avatar3.jpg";
import avatar5 from "@/assets/img/avatar5.jpg";
import avatar6 from "@/assets/img/avatar6.jpg";
import avatar7 from "@/assets/img/avatar7.jpg";

export default {
  name: "InvitePeopleModal",
  data() {
    return {
      avatar1,
      avatar2,
      avatar3,
      avatar5,
      avatar6,
      avatar7,
    };
  },
};
</script>
