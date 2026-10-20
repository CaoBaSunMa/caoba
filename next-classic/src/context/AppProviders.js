'use client';
import { GlobalStateProvider } from './GolobalStateProvider';
import {
  AuthProvider,
  BoardProvider,
  ChatProvider,
  ContactProvider,
  EmailProvider,
  InvoiceProvider,
  TaskProvider,
} from './index';

/**
 * 应用级 Provider 组合：
 *   GlobalStateProvider —— 原有 UI 状态（侧边栏、主题、弹窗等）
 *   下面 7 个 —— 接入 caoba-ai 后端 API 的数据 Provider
 * 顺序：先挂 UI 状态，再挂数据 Provider（数据 Provider 也可读 UI 状态）。
 */
const AppProviders = ({ children }) => (
  <GlobalStateProvider>
    <AuthProvider>
      <ContactProvider>
        <EmailProvider>
          <TaskProvider>
            <InvoiceProvider>
              <ChatProvider>
                <BoardProvider>{children}</BoardProvider>
              </ChatProvider>
            </InvoiceProvider>
          </TaskProvider>
        </EmailProvider>
      </ContactProvider>
    </AuthProvider>
  </GlobalStateProvider>
);

export default AppProviders;
export { AppProviders };
