<script>
  import { chatStore } from "../../../lib/stores/chatStore"; // Adjust path as needed
  import avatar1 from "../../../assets/img/avatar1.jpg";
  import avatar2 from "../../../assets/img/avatar2.jpg";
  import avatar3 from "../../../assets/img/avatar3.jpg";
  import avatar5 from "../../../assets/img/avatar5.jpg";
  import avatar6 from "../../../assets/img/avatar6.jpg";
  import avatar7 from "../../../assets/img/avatar7.jpg";

  let searchQuery = "";
  let selectedUsers = new Set();

  // Static user list
  const users = [
    { id: 1, name: "摩根·弗里曼", avatar: { type: "img", src: avatar2 } },
    { id: 2, name: "乌玛·瑟曼", avatar: { type: "img", src: avatar7 } },
    { id: 3, name: "查理·卓别林", avatar: { type: "img", src: avatar3 } },
    {
      id: 4,
      name: "温斯顿·丘吉尔",
      avatar: { type: "init", title: "温", variant: "soft-danger" },
    },
    { id: 5, name: "办公看板", avatar: { type: "img", src: avatar1 } },
    { id: 6, name: "宝贝老板", avatar: { type: "img", src: avatar6 } },
    { id: 7, name: "杰奎琳·乔克", avatar: { type: "img", src: avatar5 } },
  ];

  // Reactive filtered user list
  $: filteredUsers =
    searchQuery.trim().length > 0
      ? users.filter((user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : users;

  // Handle checkbox toggle
  function toggleUser(id) {
    if (selectedUsers.has(id)) {
      selectedUsers.delete(id);
    } else {
      selectedUsers.add(id);
    }
    selectedUsers = new Set(selectedUsers); // Trigger reactivity
  }

  // Handle invite action
  function inviteUsers() {
    const invited = users
      .filter((user) => selectedUsers.has(user.id))
      .map((user) => user.name);
    if (invited.length > 0) {
      console.log("Invited users:", invited);
      // Example: Update chatStore or send invite (extend as needed)
      // $chatStore.addMembers(invited); // Hypothetical method
      selectedUsers.clear();
      selectedUsers = new Set(); // Reset selection
      // Close modal (requires Bootstrap JS)
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("invite_people")
      );
      if (modal) modal.hide();
    } else {
      alert("Please select at least one user to invite!");
    }
  }
</script>

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
        <form class="m-3" role="search" on:submit|preventDefault>
          <input
            type="text"
            class="form-control rounded-input user-search"
            placeholder="搜索用户"
            bind:value={searchQuery}
          />
        </form>
        <div class="h-350p">
          <div
            class="nicescroll-bar"
            style="overflow-y: auto; max-height: 350px;"
          >
            <ul class="invite-user-list">
              {#each filteredUsers as user, index (user.id)}
                <li>
                  <div class="media d-flex align-items-center">
                    <div class="media-head me-3">
                      {#if user.avatar.type === "img"}
                        <div class="avatar avatar-sm avatar-rounded">
                          <img
                            src={user.avatar.src}
                            alt="user"
                            class="avatar-img"
                          />
                        </div>
                      {:else}
                        <div
                          class="avatar avatar-sm avatar-{user.avatar
                            .variant} avatar-rounded"
                        >
                          <span class="initial-wrap">{user.avatar.title}</span>
                        </div>
                      {/if}
                    </div>
                    <div class="media-body">
                      <div class="user-name">{user.name}</div>
                    </div>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheck{user.id}"
                      checked={selectedUsers.has(user.id)}
                      on:change={() => toggleUser(user.id)}
                    />
                  </div>
                </li>
              {/each}
            </ul>
          </div>
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
        <button
          type="button"
          class="btn flex-fill btn-primary flex-1"
          on:click={inviteUsers}
        >
          邀请聊天
        </button>
      </div>
    </div>
  </div>
</div>
