<template>
  <a-result status="404" title="404" sub-title="访问的页面不存在">
    <template #extra>
      <a-button type="primary" size="small" @click="router.push({ name: 'Home' })">返回首页</a-button>
    </template>
  </a-result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
