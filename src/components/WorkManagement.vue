<template>
  <section class="WorkManagement">
    <div class="content">
      <div class="heading">
        <div class="head">
          <div class="text-block">
            <h1 class="titulo">Project <div class="destaque">Management</div> </h1>
            <p class="paragrafo">
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
          </div>
          <a class="bt -azul">Get Started</a>
        </div>
      <div class="img">
        <img src="@/assets/img/pexels-fauxels-3184160.jpg" alt="imga">
      </div>
      </div>
    </div>
    <div class="content">
      <div class="heading -reverse">
        <div class="head ">
          <div class="text-block">
            <h1 class="titulo">Work together</h1>
            <p class="paragrafo">
              With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.

            </p>
          </div>
          <a class="bt -azul">Try it now</a>
        </div>
      <div class="img">
        <img src="../assets/img/Work_Together_Image.png" alt="">
      </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  .WorkManagement{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
    width: 100%;
    height: 1986.74px;
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 60px;
      width: 90%;
      max-width: 1920px;
    }
  }
  .destaque {
    background-image: url(../assets/img/Element.png);
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 120%;
    height: 4.5rem;
  }
  @media screen and (min-width:912px){
    .WorkManagement{
      .content{
        .heading{
          flex-direction: row ;
          justify-content: space-between;
          width: 100%;
          padding: 0px;
          .head{
            align-items: flex-start;
            .text-block{
              align-items: flex-start ;
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
    }
    .-reverse{
      flex-direction: row-reverse !important;
    }
  }
  @media screen and (min-width:1400px){
    .WorkManagement{
      .content{
        .heading{
          flex-direction: row ;
          justify-content: space-between;
          width: 100%;
          padding: 0px;
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

      .destaque {
        background-image: url(../assets/img/Element.png);
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: 120%;
        height: 7.3rem;
  }
  }
</style>
<script>
export default {
  name: 'HeroSection',
}
</script>