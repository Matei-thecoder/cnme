<script setup>

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
</script>

<template>
  
  
  <main class="no-overflow">
    <RouterView />
  </main>
  
</template>

<style scoped>
*{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
    
.no-overflow {
  overflow-x: hidden;
}
main {
  /*line-height: 1.5;*/
  width:100vw;
  margin:0 ;
}


/*.logo {
  display: block;
  margin: 0 auto 2rem;
}
 */
@media (min-width: 1024px) {
  main {
    width:100vw;
    display: flex;
    place-items: center;
    text-align: center;
    /*padding-right: calc(var(--section-gap) / 2);*/
    padding: 0;
    margin-left:0;
    margin-right:0;
  }

  /*.logo {
    margin: 0 2rem 0 0;
  }*/

  main.wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
