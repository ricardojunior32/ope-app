
const routes = [
  {
    path: '/',
    component: () => import('../components/home.vue'),
    //children: [
    //  { path: '', component: () => import('pages/Index.vue') }
    //]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/implementacao',
    component: () => import('../components/implementacao.vue')
  },

  {
    path: '/login',
    component: () => ('../components/login.vue')
  },

  {
    path: '/planilhas',
    component: () => import('../components/planilhas.vue')
  },

  {
    path: '/tutoriais',
    component: () => import ('../components/tutoriais.vue')
  },

  {
    path: '/wiki',
    component: () => import ('../components/wikiglobal.vue')
  }
]

export default routes
