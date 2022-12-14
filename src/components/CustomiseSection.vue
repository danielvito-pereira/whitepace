<template>
  <section class="Customise">
    <div class="heading">
      <div class="head">
        <div class="text-block">
          <h1 class="titulo">Use as Extension</h1>
          <p class="paragrafo">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>
        <a class="bt -azul">Let’s Go</a>
      </div>
      <div class="img">
        <img src="../assets/img/office-g35bfa4d2b_1920.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .Customise{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 100%;
    height: 903px;
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
      height:100vh;
      max-width: 1920px;
 
      /*
           background: #730404;
      min-width: 288px;
      height: 653px;*/
      .head{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
            text-align: center;
            letter-spacing: -0.02em;
            color:var(--white);
          }
          .paragrafo{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            text-align: center;
            letter-spacing: -0.02em;
            color:var(--white);
          }
        }
      }
      .img{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px;
        gap: 4px;
        width: 100%;
        min-width: 270px;
        border-radius: 8px;
        img{
          width: 100%;
          border-radius: 8px;
        }
      }
    }
  }
  @media screen and (min-width:912px){
    .Customise{
      height: 90%;
      max-height: 800px;
      .heading{
        flex-direction: row ;
        justify-content: space-between;
        width: 90%;
        .head{
          align-items: flex-start;
          .text-block{
            align-items: flex-start;
            .titulo{
              text-align: left;
            }
            .paragrafo{
            text-align: left;
            }
          }
          .img{
            height:100%;
          }
        }
    }
    }
    .Customise {
      .heading{
        .head {
          .text-block{
              align-items: flex-start !important;
            }
        }
      }
    }
      
        
  }
  @media screen and (min-width:1400px ){
    .Customise{
      .heading{
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
      .head{
          .text-block{
            align-items:flex-start;
            h1.titulo{
              text-align: left;
              font-weight: 700;
              font-size: 64px;
              line-height: 77px;
              letter-spacing: -0.02em;
            }
            .paragrafo{
            text-align: left;
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
  name: 'CustomiseSection',
}
</script>