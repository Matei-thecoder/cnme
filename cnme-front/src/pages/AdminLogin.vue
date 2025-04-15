<template>
    <main class="signup-container">
      <form class="signup-form" @submit.prevent="handleSubmit">
        <h2 class="signup-title">Autentifică-te 📝</h2>
        
        <h2 class="signup-title">Admin </h2>
        
  
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email"  placeholder="Email" />
  
        <label for="password">Parolă</label>
        <input type="password" id="password" v-model="password" placeholder="Parola" required />
  
        
  
        <button type="submit" class="submit-button">Logheaza-te</button>
  
        <p class="login-link">
          Nu ai cont? <router-link to="/admin/signup">Creeaza unul</router-link>
        </p>
      </form>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  const email = ref('')
  const password = ref('')
 
  
  function handleSubmit() {
    
    // Send form data to backend or display success message
    alert(`Cont creat pentru ${email.value}! 🥳`)
  }
  </script>
  
  <style scoped>
  .signup-container {
    min-height: 100vh;
    background-color: #fef6e4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
  
  .signup-form {
    background: #fff;
    padding: 2.5rem;
    border-radius: 16px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', sans-serif;
  }
  
  .signup-title {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #ff69b4;
    text-align: center;
  }
  
  label {
    text-align: left;
    width:100%;
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
    color: #333;
    margin-left:0;
    padding-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  .submit-button {
    width: 100%;
    margin-top: 1.5rem;
    background-color: #ff69b4;
    color: white;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #ff1493;
  }
  
  .login-link {
    margin-top: 1rem;
    font-size: 0.95rem;
    text-align: center;
    color:black
  }
  
  .login-link a {
    color: #ff69b4;
    text-decoration: none;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  </style>
  