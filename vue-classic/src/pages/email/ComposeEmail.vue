<template>
  <div
    :class="[
      'compose-email-popup',
      { 'd-block': emailStore.$state.composeEmail },
      { 'minimize-email-popup': emailStore.$state.minimize },
      { 'maximize-email-popup': emailStore.$state.maximize },
    ]"
  >
    <div class="d-flex flex-column h-100">
      <header class="d-flex align-items-center justify-content-between">
        <h6 class="text-white mb-0">写邮件</h6>
        <div class="d-flex">
          <button
            class="btn btn-sm btn-icon btn-dark btn-rounded d-lg-block d-none"
            @click="handleMinimize"
          >
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="minus"></feather-icon>
              </span>
            </span>
          </button>
          <button
            class="btn btn-sm btn-icon btn-dark btn-rounded d-lg-block d-none"
            @click="handleMaximize"
          >
            <span class="icon">
              <span v-if="emailStore.$state.maximize" class="feather-icon">
                <feather-icon name="minimize-2"></feather-icon>
              </span>
              <span v-else class="feather-icon">
                <feather-icon name="maximize-2"></feather-icon>
              </span>
            </span>
          </button>
          <button class="btn btn-sm btn-icon btn-dark btn-rounded" @click="handleClose">
            <span class="icon">
              <span class="feather-icon">
                <feather-icon name="x"></feather-icon>
              </span>
            </span>
          </button>
        </div>
      </header>
      <form>
        <div class="form-group">
          <div class="d-flex flex-wrap">
            <HkChip classes="mb-2 me-2" variant="primary" :src="avatar11" dismissable>
              摩根
            </HkChip>

            <HkChip classes="mb-2 me-2" variant="primary" :src="avatar12" dismissable>
              查理
            </HkChip>

            <HkChip classes="mb-2 me-2" variant="primary" :src="avatar13" dismissable>
              温斯顿
            </HkChip>
            <HkChip
              v-for="(recipient, index) in recipients"
              :key="index"
              classes="mb-2 me-2"
              variant="primary"
              dismissable
            >
              {{ recipient }}
            </HkChip>
            <input
              type="text"
              class="form-control border-0 p-0 shadow-none flex-1 mb-2 me-2"
              placeholder="添加收件人"
              v-model="newRecipient"
              @keyup.enter="addRecipient"
            />
          </div>
        </div>
        <div class="form-group">
          <input type="text" placeholder="主题" class="form-control" v-model="subject" />
        </div>
        <div class="form-group">
          <textarea class="form-control" v-model="body"></textarea>
        </div>
      </form>
      <div class="compose-email-footer">
        <div>
          <button class="btn btn-primary me-2" type="button" @click="handleSend">发送</button>
          <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover">
            <span
              class="icon"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="添加标记"
              data-bs-original-title="添加标记"
            >
              <span class="feather-icon">
                <feather-icon name="paperclip"></feather-icon>
              </span>
            </span>
          </button>
        </div>
        <div>
          <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover">
            <span
              class="icon"
              data-bs-toggle="Save Draft"
              data-bs-placement="top"
              title="保存草稿"
              data-bs-original-title="保存草稿"
            >
              <span class="feather-icon">
                <feather-icon name="edit"></feather-icon>
              </span>
            </span>
          </button>
          <button class="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover">
            <span
              class="icon"
              v-tooltip
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="删除"
              data-bs-original-title="删除"
            >
              <span class="feather-icon">
                <feather-icon name="trash-2"></feather-icon>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useEmailStore } from "@/stores/emailStore";
import HkChip from "@/hk-components/@hk-chip/HkChip.vue";
//Images
import avatar11 from "@/assets/img/avatar11.jpg";
import avatar12 from "@/assets/img/avatar12.jpg";
import avatar13 from "@/assets/img/avatar13.jpg";

export default {
  components: {
    HkChip,
  },
  data() {
    return {
      avatar11,
      avatar12,
      avatar13,
    };
  },
  setup() {
    const emailStore = useEmailStore();
    const recipients = ref([]);
    const newRecipient = ref("");
    const subject = ref("");
    const body = ref("");

    const handleMinimize = () => {
      emailStore.closeMaximize();
      emailStore.toggleMinimize();
    };

    const handleMaximize = () => {
      emailStore.toggleMaximize();
    };

    const handleClose = () => {
      emailStore.toggleComposeEmail();
      emailStore.closeMaximize();
      emailStore.closeMinimize();
    };

    const addRecipient = () => {
      if (newRecipient.value) {
        recipients.value.push(newRecipient.value);
        newRecipient.value = "";
      }
    };

    const handleSend = async () => {
      if (!subject.value || !body.value) {
        alert("请填写主题和正文！");
        return;
      }
      const to = recipients.value.map((r) => ({ address: r }));
      if (!to.length) {
        alert("请添加收件人！");
        return;
      }
      try {
        await emailStore.sendEmail({
          fromAddress: "admin@caoba.com",
          subject: subject.value,
          body: body.value,
          to,
          cc: [],
          bcc: [],
        });
        emailStore.fetchEmails("SENT");
        emailStore.toggleComposeEmail();
        emailStore.closeMaximize();
        emailStore.closeMinimize();
        subject.value = "";
        body.value = "";
        recipients.value = [];
        alert("发送成功！");
      } catch (e) {
        alert("发送失败：" + (e.message || e));
      }
    };

    return {
      emailStore,
      handleMinimize,
      handleMaximize,
      handleClose,
      recipients,
      newRecipient,
      addRecipient,
      subject,
      body,
      handleSend,
    };
  },
};
</script>
