<template>
  <section class="freetrial">
    <div class="heading">
      <div class="text-block">
            <h1 class="titulo">Try Whitepace today</h1>
            <p class="paragrafo">
              Get started for free.<br/>Add your whole team as your needs grow.
            </p>
      </div>

      <div class="btnTry">
        <a class="bt -azul">Try Taskey free</a>
        <p class="paragrafo">On a big team? Contact sales</p>
        <div class="appIcons">
          <img src="../assets/img/Group.png" alt="">
          <img src="../assets/img/windowsLogo1.png" alt="">
          <img src="../assets/img/Group2.png" alt="">
        </div>
      </div>

    </div>
  </section>
</template>


<style lang="scss" scoped>
  .freetrial{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    background-color: var(--primary-color);
    width: 100%;
    height:100vh;
    min-height: 596px;
    max-height: 705px;
    padding: 1em;
    .heading{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content:flex-start;
      width: 90%;
      gap: 40px;
      .text-block {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
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
    .btnTry {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content:flex-start;
      width: 100%;
      gap: 40px;
      .appIcons{
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 40px;
        width: 30%;
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
  @media screen and (min-width:1150px ){
    .freetrial {
      align-items:center;
      justify-content:center;
      padding: 5em;
      .heading{
        .text-block {
          h1.titulo{
            text-align: center;
          }
          .paragrafo{
            text-align: center;
          }
        }
        .btnTry{
          align-items:center;
          .appIcons{
          justify-content: center;
          gap: 40px;
          width: 60px;
          height: 60px;
        }
        }
      }
    }
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
</style>


<script>
export default {
  name: 'FreeTrial',
  props: {
    msg: String,
  }
}
</script>