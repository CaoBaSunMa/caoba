import { writable } from 'svelte/store';

function createChatPopupStore() {
  const { subscribe, update } = writable({
    popupMsgs: [
      { text: "我有一个关于定价的方案", types: "sent" },
      { text: "欢迎回来！您想升级现有套餐吗？", types: "received" }
    ],
    directMsgs: []
  });

  return {
    subscribe,
    sendPopupMsg: (popupMsg) => update(state => ({
      ...state,
      popupMsgs: [...state.popupMsgs, popupMsg]
    })),
    sendDirectMsg: (directMsg) => update(state => ({
      ...state,
      directMsgs: [...state.directMsgs, directMsg]
    }))
  };
}

export const chatPopupStore = createChatPopupStore();