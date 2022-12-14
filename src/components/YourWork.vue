<template>
  <section class="YourWork">
    <div class="heading ">
      <div class="head">
        <div class="text-block">
          <h1 class="titulo">Your work, everywhere you are</h1>
          <p class="paragrafo">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
        </div>
        <a class="bt -azul">Try Taskey</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .YourWork{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 100%;
   
    max-height: 630px;
    left: 0px;
    background-color: var(--primary-color);
    .heading{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: .2em;
      gap: 100px;
      width:90%;
      max-width: 1920px;
      height:100vh;
      .head{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 60px;
        width: 100%;
        padding:1em;
        .text-block {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
          width: 100%;
          h1.titulo{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 42px;
            line-height: 44px;
            text-align: left;
            letter-spacing: -0.02em;
            color:var(--white);
          }
          .paragrafo{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            text-align: left;
            letter-spacing: -0.02em;
            color:var(--white);
          }
        }
      }
    }
  }
  @media screen and (min-width:912px){
    .YourWork{
      height: 90%;
      max-height: 800px;
      .heading{
        flex-direction: row ;
        justify-content: space-between;
        width: 90%;
        .head{
          align-items: center;
          .text-block{
            align-items: center !important;
            h1.titulo{
              text-align: center;
            }
            .paragrafo{
            text-align: center;
            }
          }
        }
    }
    }
  }
  @media screen and (min-width:1400px ){
    .YourWork{
      height: 90%;
      max-height: 574px;
    }
    .yourdata{
     
      .heading{
      flex-direction: row;
      justify-content: space-between;
      gap: 100;
      
      .head{
          .text-block{
            align-items:center;
            h1.titulo{
              text-align: center;
              font-weight: 700;
              font-size: 64px;
              line-height: 77px;
              letter-spacing: -0.02em;
            }
            .paragrafo{
            text-align: center;
            }
          }
    }
    }
    }
  }
/*Botão */
  .bt{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1em ;
    width: 227px;
    background: #4F9CF9;
    color: #FFFFFF;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
   
      transition: all .5s ease-in-out;
    }
    
    
  }
  .-azul {
      &::after{
      content: url("../assets/img/Group\ 212.png");    
      display: block;
      margin-left:1em;
    }
    &:hover:after {
      transform:  translate(5px, 0%);
      transition: all 0.5s ease-in-out;
    }
    }
</style>

<script>
export default {
  name: 'YourWork',
}
</script>