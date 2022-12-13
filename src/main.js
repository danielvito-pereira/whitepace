import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

/*header */
/* Quando clico no .button, .nav TOGGLE 'activo' */
const button = document.querySelector('button');/*me permite selecionar os dois elementos  */
const nav    = document.querySelector('nav');

button.addEventListener('click',()=>{
  nav.classList.toggle('activo')
})