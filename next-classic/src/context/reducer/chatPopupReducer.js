export const chatPopupinitStates = {
    popupMsgs: [
        { text: "我有一个关于定价的方案", types: "sent" },
        { text: "欢迎回来！您是否想要升级现有方案？", types: "received" }
    ],
    directMsgs: [],
};
const chatPopupReducer = (state = chatPopupinitStates, action) => {
    switch (action.type) {
        case "send_popup_msg":
            return {
                ...state,
                popupMsgs: [...state.popupMsgs, action.popupMsgs]
            };
        case "send_direct_msg":
            return {
                ...state,
                directMsgs: [...state.directMsgs, action.directMsgs]
            };
        default:
            return state;
    }
};

export default chatPopupReducer