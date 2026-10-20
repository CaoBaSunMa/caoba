import { defineStore } from "pinia";

/*
 * 联系人详情附加数据（会话/本地持久化）：
 * 动态、通话记录、任务、日程、销售管道、委托访问。
 * 按联系人 id 存储，刷新页面不丢失。
 */
const STORAGE_KEY = "caoba.contact-details.v1";

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function parseLabelArr(labels) {
  if (!labels) return [];
  try {
    const arr = typeof labels === "string" ? JSON.parse(labels) : labels;
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    return [];
  }
}

export const useContactDetailStore = defineStore("contactDetail", {
  state: () => ({
    data: load(),
  }),
  getters: {
    extras: (state) => (contactId) => {
      const e = state.data[contactId] || {};
      return {
        activities: e.activities || [],
        calls: e.calls || [],
        tasks: e.tasks || [],
        events: e.events || [],
        pipeline: e.pipeline || { stage: 0, note: "" },
        delegations: e.delegations || [],
        seeded: !!e.seeded,
      };
    },
  },
  actions: {
    persist() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    },
    ensure(id) {
      if (!this.data[id]) {
        this.data[id] = {};
        this.persist();
      }
    },
    // 首次打开弹窗时，依据联系人真实数据生成初始动态
    seedActivities(id, contact) {
      this.ensure(id);
      if (this.data[id].seeded) return;
      const name = [contact.firstName, contact.lastName].filter(Boolean).join(" ") || "该联系人";
      const labels = parseLabelArr(contact.labels);
      const acts = [];
      if (contact.createdAt) {
        acts.push({ id: uid(), type: "user-plus", text: `你创建了联系人「${name}」`, ts: contact.createdAt });
      }
      if (labels.length) {
        acts.push({ id: uid(), type: "tag", text: `添加了标签：${labels.join("、")}`, ts: contact.createdAt || new Date().toISOString() });
      }
      if (contact.updatedAt && contact.createdAt !== contact.updatedAt) {
        acts.push({ id: uid(), type: "edit-3", text: `更新了「${name}」的资料信息`, ts: contact.updatedAt });
      }
      this.data[id].activities = acts;
      this.data[id].seeded = true;
      this.persist();
    },
    logActivity(id, type, text) {
      this.ensure(id);
      this.data[id].activities = this.data[id].activities || [];
      this.data[id].activities.unshift({ id: uid(), type, text, ts: new Date().toISOString() });
      this.persist();
    },
    removeActivity(id, activityId) {
      this.ensure(id);
      this.data[id].activities = (this.data[id].activities || []).filter((a) => a.id !== activityId);
      this.persist();
    },
    clearActivities(id) {
      this.ensure(id);
      this.data[id].activities = [];
      this.data[id].seeded = true;
      this.persist();
    },
    // 通话
    pushCall(id, call) {
      this.ensure(id);
      this.data[id].calls = this.data[id].calls || [];
      this.data[id].calls.unshift({ id: uid(), ts: new Date().toISOString(), ...call });
      this.persist();
    },
    removeCall(id, callId) {
      this.ensure(id);
      this.data[id].calls = (this.data[id].calls || []).filter((c) => c.id !== callId);
      this.persist();
    },
    // 任务
    addTask(id, title, priority) {
      this.ensure(id);
      this.data[id].tasks = this.data[id].tasks || [];
      this.data[id].tasks.unshift({
        id: uid(),
        title,
        priority: priority || "MEDIUM",
        done: false,
        ts: new Date().toISOString(),
      });
      this.persist();
    },
    toggleTask(id, taskId) {
      this.ensure(id);
      const t = (this.data[id].tasks || []).find((x) => x.id === taskId);
      if (t) t.done = !t.done;
      this.persist();
    },
    deleteTask(id, taskId) {
      this.ensure(id);
      this.data[id].tasks = (this.data[id].tasks || []).filter((x) => x.id !== taskId);
      this.persist();
    },
    // 日程
    addEvent(id, event) {
      this.ensure(id);
      this.data[id].events = this.data[id].events || [];
      this.data[id].events.unshift({ id: uid(), ts: new Date().toISOString(), ...event });
      this.persist();
    },
    deleteEvent(id, eventId) {
      this.ensure(id);
      this.data[id].events = (this.data[id].events || []).filter((e) => e.id !== eventId);
      this.persist();
    },
    // 销售管道
    setPipeline(id, stage, note) {
      this.ensure(id);
      this.data[id].pipeline = { stage, note: note || "" };
      this.persist();
    },
    // 委托访问
    addDelegation(id, delegation) {
      this.ensure(id);
      this.data[id].delegations = this.data[id].delegations || [];
      this.data[id].delegations.unshift({ id: uid(), ts: new Date().toISOString(), ...delegation });
      this.persist();
    },
    removeDelegation(id, delId) {
      this.ensure(id);
      this.data[id].delegations = (this.data[id].delegations || []).filter((d) => d.id !== delId);
      this.persist();
    },
  },
});