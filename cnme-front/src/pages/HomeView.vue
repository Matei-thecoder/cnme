<template>
    <main class="home-container">
      <div class="content-box">
        <h1 class="title">🎉 CATALOGUL VESEL 🎉</h1>
        <p class="description">
          Bine ai venit în lumea notelor vesele! Aici găsești un mod prietenos și colorat de a-ți organiza și vizualiza catalogul școlar.
        </p>
        <button class="cta-button" @click="goToCatalog">
          Intră în catalog
        </button>
      </div>
    </main>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  function goToCatalog() {
    router.push('/admin/signup')
  }
  </script>
  
  <style scoped>
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }
  .home-container {
    min-height: 100vh;
    width:100vw;
    background-color: #fff8dc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0rem;
    text-align: center;
  }
  
  .content-box {
    max-width: 700px;
    background: #ffffff;
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 3rem;
    color: #ff69b4;
    margin-bottom: 1rem;
    font-weight: bold;
    animation: bounce 1.5s infinite;
  }
  
  .description {
    font-size: 1.125rem;
    color: #444;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    background-color: #ff69b4;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #ff1493;
  }
  
  /* Simple bounce animation */
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }
  </style>
  