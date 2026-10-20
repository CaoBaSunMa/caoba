import {
  AuthProvider,
  BoardProvider,
  ChatProvider,
  ContactProvider,
  EmailProvider,
  InvoiceProvider,
  TaskProvider,
} from './index';

// Every page-level `use*` hook reads from these contexts, so they have to wrap the
// whole router tree — not just the individual views. None of them use router hooks,
// so mounting them above <BrowserRouter> is safe.
const AppProviders = ({ children }) => (
  <AuthProvider>
    <ContactProvider>
      <ChatProvider>
      <EmailProvider>
        <TaskProvider>
          <BoardProvider>
            <InvoiceProvider>{children}</InvoiceProvider>
          </BoardProvider>
        </TaskProvider>
      </EmailProvider>
      </ChatProvider>
    </ContactProvider>
  </AuthProvider>
);

export default AppProviders;
