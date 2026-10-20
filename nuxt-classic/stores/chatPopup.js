import { defineStore } from 'pinia';

export const useChatPopupStore = defineStore('chatPopup', {
    state: () => ({
        popupMsgs: [
            { text: "我有一个关于定价的方案", types: "sent" },
            { text: "欢迎回来！你是想升级现有的套餐吗？", types: "received" }
        ],
        directMsgs: [],
    }),
    actions: {
        sendPopupMsg(popupMsg) {
            this.popupMsgs.push(popupMsg);
        },
        sendDirectMsg(directMsg) {
            this.directMsgs.push(directMsg);
        }
    }
});