<template>
  <section class="AppsSections">
    <div class="heading ">
      <div class="img">
        <img src="../assets/img/Apps.png" alt="">
      </div>
      <div class="head">
        <div class="text-block">
          <h1 class="titulo -branco">Work with Your Favorite Apps Using whitepace</h1>
          <p class="paragrafo -branco">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
        </div>
        <a class="bt -azul">Read more</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .AppsSections{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 100%;
    height: 1203px;
    padding: 1em;
    background-color: var(--primary-color);
    background-image: url("../assets/img/ElementBk.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (min-width:912px){
    .AppsSections{
      .heading{
        flex-direction: row ;
        justify-content: space-between;
        width: 90%;
        .head{
          align-items: flex-start;
          .text-block{
            h1.titulo{
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
    .-reverse{
      flex-direction: row-reverse !important;
    }
  }
  @media screen and (min-width:1400px ){
    .AppsSections{
      .heading{
        flex-direction: row;
        justify-content: space-between;
        gap: 100;
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
/*Botão 
*/
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
  name: 'AppsSections',
}
</script>