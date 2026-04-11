import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import BasicLayout from '../layout/BasicLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home/index.vue'),
        meta: { title: '首页', icon: 'HomeOutlined' }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('../views/Settings/index.vue'),
        meta: { title: '设置', icon: 'SettingOutlined' }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
