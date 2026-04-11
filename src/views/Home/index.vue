<template>
  <div class="home-container">
    <a-typography-title :level="4">首页 (Home)</a-typography-title>
    <a-typography-paragraph>
      这是一个高信息密度的管理面板概览页面。
    </a-typography-paragraph>
    
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="数据总览" size="small" :bordered="false" class="dashboard-card">
          <a-statistic title="今日访问" :value="112893" />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="活跃用户" size="small" :bordered="false" class="dashboard-card">
          <a-statistic title="在线人数" :value="345" />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="系统状态" size="small" :bordered="false" class="dashboard-card">
          <a-statistic title="CPU 使用率" :value="23" suffix="%" />
        </a-card>
      </a-col>
    </a-row>

    <div class="table-container">
      <a-table :dataSource="dataSource" :columns="columns" size="small" :pagination="false" bordered>
      </a-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dataSource = ref([
  { key: '1', name: '系统核心服务', status: '运行中', time: '2026-04-12 10:00' },
  { key: '2', name: '数据库服务', status: '运行中', time: '2026-04-12 10:05' },
]);

const columns = [
  { title: '服务名称', dataIndex: 'name', key: 'name' },
  { title: '状态', dataIndex: 'status', key: 'status' },
  { title: '更新时间', dataIndex: 'time', key: 'time' },
];
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.dashboard-card {
  background: #fafafa;
  border: 1px solid #f0f0f0;
}
.table-container {
  margin-top: 16px;
}
</style>
