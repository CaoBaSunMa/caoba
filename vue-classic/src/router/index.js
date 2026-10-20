import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    // App Routes
    {
      path: '/',
      component: () => import('@/layout/apps-layout/AppLayout.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('@/pages/dashboard/index.vue'),
        },
        //chats
        {
          path: 'apps/chat/chats',
          component: () => import('@/pages/chat/chats/index.vue'),
        },
        {
          path: 'apps/chat/group',
          component: () => import('@/pages/chat/group/index.vue'),
        },
        {
          path: 'apps/chat/contact',
          component: () => import('@/pages/chat/contact/index.vue'),
        },
        //chat popup
        {
          path: 'apps/chat-popup/direct-message',
          component: () => import('@/pages/chat-popup/direct-message/index.vue'),
        },
        {
          path: 'apps/chat-popup/chat-bot',
          component: () => import('@/pages/chat-popup/chat-bot/index.vue'),
        },
        //calendar
        {
          path: 'apps/calendar',
          component: () => import('@/pages/calendar/index.vue'),
        },
        //email
        {
          path: 'apps/email',
          component: () => import('@/pages/email/index.vue'),
        },
        //scrumboard
        {
          path: 'apps/scrumboard/project-board',
          component: () => import('@/pages/scrumboard/projects-board/index.vue'),
        },
        {
          path: 'apps/scrumboard/kanban-board',
          component: () => import('@/pages/scrumboard/kanban-board/index.vue'),
        },
        {
          path: 'apps/scrumboard/pipeline',
          component: () => import('@/pages/scrumboard/pipeline-kanban/index.vue'),
        },

        //contacts
        {
          path: 'apps/contact/contact-list',
          component: () => import('@/pages/contact/contact-list/index.vue'),
        },
        {
          path: 'apps/contact/contact-card',
          component: () => import('@/pages/contact/contact-cards/index.vue'),
        },
        {
          path: 'apps/contact/edit-contact/:id?',
          component: () => import('@/pages/contact/edit-contact/index.vue'),
        },
        // file-manager
        {
          path: 'apps/file-manager/',
          component: () => import('@/pages/file-manager/index.vue'),
          children: [
            {
              path: 'list-view',
              component: () => import('@/pages/file-manager/list-view/index.vue'),
            },
            {
              path: 'grid-view',
              component: () => import('@/pages/file-manager/grid-view/index.vue'),
            },
          ]
        },
        //gallery
        {
          path: 'apps/gallery',
          component: () => import('@/pages/gallery/index.vue'),
        },
        //todo
        {
          path: 'apps/todo/task-list',
          component: () => import('@/pages/todo/task-list/index.vue'),
        },
        {
          path: 'apps/todo/gantt',
          component: () => import('@/pages/todo/gantt/index.vue'),
        },
        //bog
        {
          path: 'apps/blog/',
          component: () => import('@/pages/blog/index.vue'),
          children: [
            {
              path: 'posts',
              component: () => import('@/pages/blog/post/index.vue'),
            },
            {
              path: 'add-new-post',
              component: () => import('@/pages/blog/add-new-post/index.vue'),
            },
            {
              path: 'post-detail',
              component: () => import('@/pages/blog/post-details/index.vue'),
            },
          ]
        },
        //invoice
        {
          path: 'apps/invoice/',
          component: () => import('@/pages/invoice/index.vue'),
          children: [
            {
              path: 'invoice-list',
              component: () => import('@/pages/invoice/invoice-list/index.vue'),
            },
            {
              path: 'invoice-templates',
              component: () => import('@/pages/invoice/templates/index.vue'),
            },
            {
              path: 'create-invoice',
              component: () => import('@/pages/invoice/create-invoice/index.vue'),
            },
            {
              path: 'invoice-preview',
              component: () => import('@/pages/invoice/preview/index.vue'),
            },
          ]
        },
        //apps integration
        {
          path: 'apps/integrations/',
          component: () => import('@/pages/integrations/index.vue'),
          children: [
            {
              path: 'all-apps',
              component: () => import('@/pages/integrations/all-apps/index.vue'),
            },
            {
              path: 'app-detail',
              component: () => import('@/pages/integrations/app-detail/index.vue'),
            },
            {
              path: 'integration',
              component: () => import('@/pages/integrations/integration/index.vue'),
            },
          ]
        },
        //profile
        {
          path: 'profile/',
          component: () => import('@/pages/profile/index.vue'),
        },
        {
          path: 'profile/edit-profile/',
          component: () => import('@/pages/profile/edit-profile/index.vue'),
        },
        {
          path: 'profile/account/',
          component: () => import('@/pages/profile/account/index.vue'),
        },
        //error-404
        {
          path: 'error-404',
          component: () => import('@/pages/auth/error/error404.vue'),
        }

      ]
    },

    //Auth Routes
    {
      path: '/auth',
      component: () => import('@/layout/auth-layout/AuthLayout.vue'),
      children: [
        //login
        {
          path: 'login',
          component: () => import('@/pages/auth/login/login.vue'),
        },
        {
          path: 'login/simple',
          component: () => import('@/pages/auth/login/login-simple.vue'),
        },
        {
          path: 'login/classic',
          component: () => import('@/pages/auth/login/login-classic.vue'),
        },
        //signup
        {
          path: 'signup',
          component: () => import('@/pages/auth/signup/signup.vue'),
        },
        {
          path: 'signup/simple',
          component: () => import('@/pages/auth/signup/signup-simple.vue'),
        },
        {
          path: 'signup/classic',
          component: () => import('@/pages/auth/signup/signup-classic.vue'),
        },
        //other pages
        {
          path: 'lock-screen',
          component: () => import('@/pages/auth/lock-screen/lock-screen.vue'),
        },
        {
          path: 'reset-password',
          component: () => import('@/pages/auth/reset-password/reset-password.vue'),
        },
        //error-503
        {
          path: 'error-503',
          component: () => import('@/pages/auth/error/error503.vue'),
        }

      ]
    }
  ]
})

// Route guard - authentication check
const publicPages = ['/auth/login', '/auth/login/simple', '/auth/login/classic',
  '/auth/signup', '/auth/signup/simple', '/auth/signup/classic',
  '/auth/lock-screen', '/auth/reset-password', '/auth/error-503', '/error-404'];

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const isPublic = publicPages.some(p => to.path.startsWith(p));
  if (!token && !isPublic) {
    next('/auth/login');
  } else if (token && isPublic) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router
