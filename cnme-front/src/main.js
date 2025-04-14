import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './pages/HomeView.vue'
import AdminSignUp from './pages/AdminSignUp.vue';
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {path:'/', component: HomeView},
    {path:'/admin/signup',component: AdminSignUp}
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })


createApp(App).use(router).mount('#app')
