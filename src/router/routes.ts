import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons-vue';

declare module 'vue-router' {
  interface RouteMeta {
    /** 菜单名称 & 浏览器标签页标题 */
    title?: string;
    /** 菜单图标，直接传 @ant-design/icons-vue 的组件 */
    icon?: Component;
    /** 为 true 时不出现在侧边栏菜单中 */
    hideInMenu?: boolean;
  }
}

/** BasicLayout 下的页面，侧边栏菜单按此数组顺序自动生成 */
export const layoutRoutes: RouteRecordRaw[] = [
  {
    path: 'home',
    name: 'Home',
    component: () => import('../views/Home/index.vue'),
    meta: { title: '首页', icon: HomeOutlined },
  },
  {
    path: 'settings',
    name: 'Settings',
    component: () => import('../views/Settings/index.vue'),
    meta: { title: '设置', icon: SettingOutlined },
  },
  {
    path: ':pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound/index.vue'),
    meta: { title: '页面不存在', hideInMenu: true },
  },
];
