import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import * as echarts from 'echarts'
import axios from 'axios'

const app = createApp(App)

app.use(Antd)

app.provide('echarts', echarts)
app.provide('axios', axios)
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$axios = axios

app.mount('#app')
