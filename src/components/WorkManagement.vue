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
          .heading{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: .2em;
            width:100%;
            gap: 50px;
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
                  color:var(--negro);
                }
                .paragrafo{
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 400;
                  font-size: 18px;
                  line-height: 30px;
                  text-align: center;
                  letter-spacing: -0.02em;
                  color:var(--paragraph);
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
              img{
                width: 100%;
                border-radius: 8px;
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
    .heading{
        .head {
          .text-block{
              
            }
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