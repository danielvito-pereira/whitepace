<template>
  <section class="Customise">
    <div class="heading">
      <div class="img">
        <img src="../assets/img/pexels-antoni-shkraba-4348404.jpg" alt="">
      </div>
      <div class="head">
        <div class="text-block">
          <h1 class="titulo">Customise it to  <div class="destaque -Dh2">your needs</div> </h1>
          <p class="paragrafo">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>
        <a class="bt -azul">Let’s Go</a>
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
    background-color: var(--white);
  }

  @media screen and (min-width:912px){
    .Customise{
      height: 90%;
      max-height: 800px;
      .heading{
        .head {
          .text-block{
              align-items: flex-start !important;
            }
        }
      }
    }
  }

</style>

<script>
export default {
  name: 'YourNeeds',
}
</script>