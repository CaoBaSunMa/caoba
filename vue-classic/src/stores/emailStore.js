import { defineStore } from 'pinia';
import { emailAPI } from '@/services/modules';

export const useEmailStore = defineStore('email', {
    state: () => ({
        // API data
        emails: [],
        selectedEmail: null,
        currentFolder: 'INBOX',
        loading: false,
        error: null,
        // Existing UI state
        openEmail: false,
        composeEmail: false,
        maximize: false,
        minimize: false,
    }),
    actions: {
        // ---- API actions ----
        async fetchEmails(folder) {
            this.loading = true;
            this.error = null;
            try {
                if (folder) this.currentFolder = folder;
                const res = await emailAPI.getEmails(this.currentFolder);
                this.emails = res.data ?? res;
            } catch (err) {
                this.error = err.message || '获取邮件列表失败';
                console.error('[email] fetchEmails failed:', err);
            } finally {
                this.loading = false;
            }
        },

        async selectEmail(id) {
            const target = this.emails.find(e => e.id === id);
            if (target && !target.read) {
                await this.markRead(id, true);
            }
            const email = this.emails.find(e => e.id === id);
            this.selectedEmail = email;
            this.openEmail = true;
        },

        async sendEmail(data) {
            this.loading = true;
            this.error = null;
            try {
                const res = await emailAPI.sendEmail(data);
                return res.data ?? res;
            } catch (err) {
                this.error = err.message || '发送邮件失败';
                console.error('[email] sendEmail failed:', err);
                throw err;
            } finally {
                this.loading = false;
            }
        },

        async markRead(id, read) {
            try {
                await emailAPI.markRead(id, read !== false);
                const email = this.emails.find(e => e.id === id);
                if (email) email.read = true;
            } catch (err) {
                this.error = err.message || '标记已读失败';
                console.error('[email] markRead failed:', err);
            }
        },

        async markStar(id) {
            try {
                await emailAPI.markStar(id);
                const email = this.emails.find(e => e.id === id);
                if (email) email.starred = !email.starred;
            } catch (err) {
                this.error = err.message || '标记星标失败';
                console.error('[email] markStar failed:', err);
            }
        },

        async moveToFolder(id, folder) {
            try {
                await emailAPI.moveToFolder(id, folder);
                // Remove from current list if viewing
                this.emails = this.emails.filter(e => e.id !== id);
            } catch (err) {
                this.error = err.message || '移动邮件失败';
                console.error('[email] moveToFolder failed:', err);
            }
        },

        // ---- Existing UI logic (kept as-is) ----
        toggleOpenEmail() {
            this.openEmail = !this.openEmail;
        },
        toggleComposeEmail() {
            this.composeEmail = !this.composeEmail;
        },
        composeNewEmail(value) {
            this.composeEmail = value;
        },
        toggleMaximize() {
            this.maximize = !this.maximize;
        },
        closeMaximize() {
            this.maximize = false;
        },
        toggleMinimize() {
            this.minimize = !this.minimize;
        },
        closeMinimize() {
            this.minimize = false;
        }
    }
});
