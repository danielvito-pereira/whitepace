<template>
  <section class="YourSponsors">
    <div class="text-block">
      <h1 class="titulo">Your  sponsors</h1> 
    </div>
    <div class="sponsors">
      <img src="../assets/img/Apple.png" alt="">
      <img src="../assets/img/microsoft1.png" alt="">
      <img src="../assets/img/SlackTechnologiesLogo1.png" alt="">
      <img src="../assets/img/Group246.png" alt="">
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .YourSponsors{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    gap: 100px;
      
      .text-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        width: 100%;
        max-width: 1920px;
        h1.titulo{
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 42px;
          line-height: 44px;
          text-align: center;
          letter-spacing: -0.02em;
          color:var(--negro);
        }
      }
      .sponsors {
        display:flex;
        width: 90%;
        max-width: 1920px;
        flex-direction:column;
        gap: 100px;
        padding: 1em;
        align-items:center;  
        justify-content: space-between;
        padding-bottom: 5em;
        img{
          width: 50%;
        }
      }
  }
 
  @media screen and (min-width:912px){
    .YourSponsors{
      .sponsors {
        display: flex;
        flex-direction: row;
        padding: 140px 220px;
        gap: 100px;
        align-items: center;
        justify-content: space-around;
        max-height: 538px;
        width: 90%;
      }
    }
  }     
</style>

<script>
  export default {
    name: 'YourSponsors',
  }
</script>