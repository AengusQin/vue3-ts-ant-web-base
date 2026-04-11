<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'

const count = ref(0)
const axios = inject<any>('axios')
const echarts = inject<any>('echarts')
const chartRef = ref<HTMLElement | null>(null)
const dataFromAxios = ref('')

onMounted(async () => {
  // 测试 Axios
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    dataFromAxios.value = res.data.title
  } catch (error) {
    console.error('Axios error:', error)
  }

  // 测试 ECharts
  if (chartRef.value && echarts) {
    const myChart = echarts.init(chartRef.value)
    myChart.setOption({
      title: { text: 'ECharts 测试' },
      tooltip: {},
      xAxis: { data: ['A', 'B', 'C', 'D', 'E', 'F'] },
      yAxis: {},
      series: [{ name: 'Data', type: 'bar', data: [5, 20, 36, 10, 10, 20] }]
    })
  }
})
</script>

<template>
  <div style="padding: 20px;">
    <h2>Ant Design Vue 测试</h2>
    <a-button type="primary" @click="count++">点击计数：{{ count }}</a-button>

    <h2 style="margin-top: 20px;">Axios 测试</h2>
    <p>请求结果: {{ dataFromAxios || '加载中...' }}</p>

    <h2 style="margin-top: 20px;">ECharts 测试</h2>
    <div ref="chartRef" style="width: 600px; height: 400px; background: #f9f9f9;"></div>
  </div>
</template>
