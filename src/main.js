// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// 匯入您的組件
import HomePage from './components/HomePage.vue';
import TodoListPage from './components/TodoListPage.vue';
import WeatherPage from './components/WeatherPage.vue';
import ResponsivePage from './components/ResponsivePage.vue';

// 引入 Tailwind CSS
import './assets/tailwind.css';

// 設定路由
const routes = [
  { path: '/', component: HomePage },
  { path: '/todolist', component: TodoListPage },
  { path: '/weather', component: WeatherPage },
  { path: '/responsive', component: ResponsivePage }
];

// 創建 router 實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 使用 createApp 而非 new Vue
const app = createApp(App);
app.use(router);
app.mount('#app');
