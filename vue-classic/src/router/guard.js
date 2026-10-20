import router from '@/router';
import { useAuthStore } from '@/stores/auth';

const publicPages = ['/auth/login', '/auth/login/simple', '/auth/login/classic',
  '/auth/signup', '/auth/signup/simple', '/auth/signup/classic',
  '/auth/lock-screen', '/auth/reset-password', '/auth/error-503', '/error-404'];

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  const isPublic = publicPages.some(p => to.path.startsWith(p));

  if (!auth.isLoggedIn && !isPublic) {
    next('/auth/login');
  } else if (auth.isLoggedIn && isPublic) {
    next('/dashboard');
  } else {
    next();
  }
});
