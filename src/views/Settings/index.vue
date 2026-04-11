<template>
  <div class="settings-container">
    <a-typography-title :level="4">系统设置 (Settings)</a-typography-title>
    
    <a-card size="small" :bordered="false" class="settings-card">
      <a-form layout="vertical">
        <a-form-item label="系统名称">
          <a-input v-model:value="systemName" size="small" placeholder="请输入系统名称" />
        </a-form-item>
        <a-form-item label="开放注册">
          <a-switch v-model:checked="allowRegistration" size="small" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" size="small" @click="saveSettings">保存配置</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';

const systemName = ref('My Project Enterprise');
const allowRegistration = ref(false);

const saveSettings = () => {
  message.success('配置已保存');
};
</script>

<style scoped>
.settings-container {
  max-width: 600px;
}
.settings-card {
  border: 1px solid #f0f0f0;
}
</style>
