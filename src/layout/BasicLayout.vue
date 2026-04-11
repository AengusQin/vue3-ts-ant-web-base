<template>
  <a-layout class="app-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible theme="light" class="app-sider">
      <div class="logo">
        <span v-if="!collapsed" class="logo-text">My Project</span>
        <span v-else class="logo-text-short">MP</span>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        @click="handleMenuClick"
      >
        <a-menu-item key="Home">
          <template #icon><HomeOutlined /></template>
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="Settings">
          <template #icon><SettingOutlined /></template>
          <span>设置</span>
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
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  HomeOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['Home']);

const route = useRoute();
const router = useRouter();

watch(() => route.name, (newVal) => {
  if (newVal) {
    selectedKeys.value = [newVal as string];
  }
}, { immediate: true });

const handleMenuClick = ({ key }: { key: string }) => {
  router.push({ name: key });
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
