import { writable } from "svelte/store"
import avatar1 from '../../assets/img/avatar1.jpg';
import avatar8 from '../../assets/img/avatar8.jpg';

// Chat store using Svelte stores instead of Pinia
export const chatStore = writable({
  startChat: false,
  avatar: { type: "img", src: avatar8 },
  userId: 2,
  userName: "乌玛·瑟曼",
  msg: [],
  contactMsg: [],
  rplyMsg: [],
  status: "Typing",
  // Group states
  grpId: 12,
  grpAvatar: { type: "img", src: avatar1 },
  groupName: "开发者专区",
  grpStatus: "Active 5min ago",
  grpMsg: [
    {
      avatar: { type: "img", src: avatar1 },
      text: "欢迎加入群组！",
      time: "10:30 AM",
      types: "received",
    },
  ],
})

// Chat actions
export const chatActions = {
  toggleStartChat() {
    chatStore.update((state) => ({
      ...state,
      startChat: !state.startChat,
    }))
  },

  sendMsg(newMsg) {
    chatStore.update((state) => ({
      ...state,
      msg: [...state.msg, newMsg],
    }))
  },

  setUser(userId, avatar, userName, status) {
    chatStore.update((state) => ({
      ...state,
      userId,
      avatar,
      userName,
      status,
    }))
  },

  sendContactMsg(newContactMsg) {
    chatStore.update((state) => ({
      ...state,
      contactMsg: [...state.contactMsg, newContactMsg],
    }))
  },

  addReplyMsg(newRplyMsg) {
    chatStore.update((state) => ({
      ...state,
      rplyMsg: [...state.rplyMsg, newRplyMsg],
    }))
  },

  sendGrpMsg(newGrpMsg) {
    chatStore.update((state) => ({
      ...state,
      grpMsg: [...state.grpMsg, newGrpMsg],
    }))
  },

  selectGroup(grpId, grpAvatar, groupName, grpStatus) {
    chatStore.update((state) => ({
      ...state,
      grpId,
      grpAvatar,
      groupName,
      grpStatus,
    }))
  },
}
