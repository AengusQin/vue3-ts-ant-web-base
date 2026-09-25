<template>
  <a-layout class="app-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible theme="light" class="app-sider">
      <div class="logo">
        <span v-if="!collapsed" class="logo-text">{{ appTitle }}</span>
        <span v-else class="logo-text-short">{{ appTitle.charAt(0) }}</span>
      </div>
      <a-menu :selected-keys="selectedKeys" mode="inline" @click="handleMenuClick">
        <a-menu-item v-for="item in menuItems" :key="item.key">
          <template v-if="item.icon" #icon><component :is="item.icon" /></template>
          <span>{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="app-header">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content class="app-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { layoutRoutes } from '../router/routes';

const appTitle = import.meta.env.VITE_APP_TITLE;
const collapsed = ref<boolean>(false);

// 菜单由 router/index.ts 中的 layoutRoutes 生成，key 即路由 name
const menuItems = layoutRoutes
  .filter((r) => r.name && !r.meta?.hideInMenu)
  .map((r) => ({ key: String(r.name), title: r.meta?.title, icon: r.meta?.icon }));

const route = useRoute();
const router = useRouter();

const selectedKeys = computed(() => (route.name ? [String(route.name)] : []));

const handleMenuClick = ({ key }: { key: string | number }) => {
  router.push({ name: String(key) });
};
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
}
.app-sider {
  border-right: 1px solid #f0f0f0;
}
.logo {
  height: 32px;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}
.logo-text {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}
.logo-text-short {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.app-header {
  background: #fff;
  padding: 0 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}
.trigger {
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: #1890ff;
}
.app-content {
  margin: 24px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
  border-radius: 4px;
}
</style>
