import { createApp } from 'vue'
import App from './App.vue'
'use strict'
createApp(App).mount('#app')

/*header */
/* Quando clico no .button, .nav TOGGLE 'activo' */
const button = document.querySelector('button');/*me permite selecionar os dois elementos  */
const nav    = document.querySelector('nav');

button.addEventListener('click',()=>{
  nav.classList.toggle('activo')
})






const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

//quando clicar 
  // Saber a posição do ponto 
  // aplicar um transform translateX a div grande 
  // tirar a classe activo de todos os pontos 
  // Adicionar a classe activo a ponto que clicamos 
 

  punto.forEach( ( cadaPunto , i )=> {//Pega cada ponto e sua posição 
    punto[i].addEventListener( 'click',()=>{
      //quando a posição é o transformX é 0
      // quando é 1 transformX é -50%
      // oparação = posicion * -50 vai dar o numero do transformX


    
        // Guardar a posição do  PUNTO
        let posicion  = i
    
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -37

      console.log(operacion)
           // MOVEMOS el grand
           grande.style.transform = `translateX(${ operacion }%)`// Pega a dive grande e dentro dela seleciona o stilo e acessa o transform e depos o redefine  


        // Recorremos TODOS los punto
          punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
                // Añadir la clase activo en el punto que hemos hecho CLICK
                punto[i].classList.add('activo')
    })
  })  