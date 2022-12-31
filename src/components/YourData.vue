<template>
  <section class="yourdata">
    <div class="heading -reverse">
      <div class="img">
        <img src="../assets/img/Element_2.png" alt="">
      </div>
      <div class="head">
        <div class="text-block">
          <h1 class="titulo">100% your data </h1>
          <p class="paragrafo">
            The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>
        </div>
        <a class="bt -azul">Read more</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .yourdata{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 100%;
    height: 903px;
    left: 0px;
  }
  @media screen and (min-width:912px){
    .yourdata{
      height: 90%;
      max-height: 800px;
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
    .yourdata{
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
</style>

<script>
export default {
  name: 'YourData',
}
</script>