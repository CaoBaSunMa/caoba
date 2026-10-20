import { defineStore } from 'pinia';
import { calendarAPI } from '@/services/modules';

function toCalendarEvent(e) {
  // 地图后端 CalendarEvent 字段到 FullCalendar 事件
  const ev = {
    id: String(e.id),
    title: e.title,
    backgroundColor: e.color || '#009B84',
    borderColor: e.color || '#009B84',
    start: e.startTime,
    end: e.endTime,
    description: e.description,
    location: e.location,
    category: e.category,
    visibility: e.visibility,
    priority: e.priority,
    extendedProps: { ...e },
  };
  if (e.allDay) {
    ev.allDay = true;
  }
  return ev;
}

export const useCalendarStore = defineStore('calendar', {
    state: () => ({
        events: [],
        reminders: [],
        loading: false,
        error: null,
    }),
    getters: {
        calendarEvents(state) {
            return state.events.map(toCalendarEvent);
        },
    },
    actions: {
        async fetchEvents(start, end) {
            this.loading = true;
            this.error = null;
            try {
                const params = {};
                if (start) params.start = start;
                if (end) params.end = end;
                const res = await calendarAPI.getEvents(params);
                this.events = res.data ?? res;
            } catch (err) {
                this.error = err.message || '获取日历事件失败';
                console.error('[calendar] fetchEvents failed:', err);
            } finally {
                this.loading = false;
            }
        },

        async createEvent(data) {
            try {
                const res = await calendarAPI.createEvent({
                    title: data.title,
                    description: data.description || '',
                    startTime: data.startTime,
                    endTime: data.endTime,
                    allDay: !!data.allDay,
                    location: data.location || '',
                    category: data.category || '默认',
                    visibility: data.visibility || '公开',
                    priority: data.priority || '中',
                });
                const created = res.data ?? res;
                this.events.push(created);
                return created;
            } catch (err) {
                this.error = err.message || '创建事件失败';
                console.error('[calendar] createEvent failed:', err);
                throw err;
            }
        },

        async updateEvent(id, data) {
            try {
                const res = await calendarAPI.updateEvent(id, data);
                const updated = res.data ?? res;
                const idx = this.events.findIndex(e => e.id === id);
                if (idx >= 0) this.events[idx] = updated;
                return updated;
            } catch (err) {
                this.error = err.message || '更新事件失败';
                console.error('[calendar] updateEvent failed:', err);
                throw err;
            }
        },

        async deleteEvent(id) {
            try {
                await calendarAPI.deleteEvent(id);
                this.events = this.events.filter(e => e.id !== id);
            } catch (err) {
                this.error = err.message || '删除事件失败';
                console.error('[calendar] deleteEvent failed:', err);
                throw err;
            }
        },

        async fetchReminders() {
            try {
                const res = await calendarAPI.getReminders();
                this.reminders = res.data ?? res;
            } catch (err) {
                this.error = err.message || '获取提醒失败';
                console.error('[calendar] fetchReminders failed:', err);
            }
        },

        async createReminder(data) {
            try {
                const res = await calendarAPI.createReminder(data);
                const created = res.data ?? res;
                this.reminders.push(created);
                return created;
            } catch (err) {
                this.error = err.message || '创建提醒失败';
                console.error('[calendar] createReminder failed:', err);
                throw err;
            }
        },

        async deleteReminder(id) {
            try {
                await calendarAPI.deleteReminder(id);
                this.reminders = this.reminders.filter(r => r.id !== id);
            } catch (err) {
                this.error = err.message || '删除提醒失败';
                console.error('[calendar] deleteReminder failed:', err);
            }
        },
    }
});