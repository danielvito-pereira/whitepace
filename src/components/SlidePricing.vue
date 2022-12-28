<template>
  <section class="SlidePricing">
    <div class="head">
        <div class="text-block">
          <h1 class="titulo">Choose Your Plan</h1>
          <p class="paragrafo">
            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
          </p>
        </div>
    </div>
    <div class="priceList">
      <div class="priceBoard -dourado">
        <div class="text">
            <h1>Free</h1>
            <p class="numero">$0</p>
            <p>Capture ideas and find them quickly</p>
          </div>
          <div class="bulletPoint">
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Sync unlimited devices</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>10 GB monthly uploads</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>200 MB max. note size</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Connect primary Google Calendar account</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Add due dates, reminders, and notifications to your tasks</p>
            </div>
          </div>
          <button class="bt -do">Get Started</button>
      </div>
      <div class="priceBoard -mid">
        <div class="text">
          <h1>Personal</h1>
          <p class="numero -goldNumber">$11.99</p>
          <p>Keep home and family on track</p>
        </div>
        <div class="bulletPoint">
          <div class="point -t">
            <img src="../assets/img/Icon.png" srcset="">
            <p>Sync unlimited devices</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon.png" srcset="">
            <p>10 GB monthly uploads</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon.png" srcset="">
            <p>200 MB max. note size</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon.png" srcset="">
            <p>Customize Home dashboard and access extra widgets</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon.png" srcset="">
            <p>Connect primary Google Calendar account</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon.png" srcset="">
            <p>Add due dates, reminders, and notifications to your tasks</p>
          </div>
        </div>
        <button class="bt ">Get Started</button>
      </div>
      <div class="priceBoard -dourado">
        <div class="text">
          <h1>Organization</h1>
          <p class="numero">$49.99</p>
          <p>Capture ideas and find them quickly</p>
        </div>
        <div class="bulletPoint">
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Sync unlimited devices</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>10 GB monthly uploads</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>200 MB max. note size</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Connect primary Google Calendar account</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Add due dates, reminders, and notifications to your tasks</p>
            </div>
        </div>
        <button class="bt -do">Get Started</button>
      </div>
    </div>
    <ul class="pontos">
            <li class="ponto activo"></li>
            <li class="ponto"></li>
            <li class="ponto"></li>
        </ul>
  </section>
  <div class="teste">
    <swiper 
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="priceBoard -dourado">
        <div class="text">
            <h1>Free</h1>
            <p class="numero">$0</p>
            <p>Capture ideas and find them quickly</p>
          </div>
          <div class="bulletPoint">
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Sync unlimited devices</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>10 GB monthly uploads</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>200 MB max. note size</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Connect primary Google Calendar account</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Add due dates, reminders, and notifications to your tasks</p>
            </div>
          </div>
          <button class="bt -do">Get Started</button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="priceBoard -mid">
        <div class="text">
          <h1>Personal</h1>
          <p class="numero -goldNumber">$11.99</p>
          <p>Keep home and family on track</p>
        </div>
        <div class="bulletPoint">
          <div class="point -t">
            <img src="../assets/img/Icon_d.png" srcset="">
            <p>Sync unlimited devices</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon_d.png" srcset="">
            <p>10 GB monthly uploads</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon_d.png" srcset="">
            <p>200 MB max. note size</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon_d.png" srcset="">
            <p>Customize Home dashboard and access extra widgets</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon_d.png" srcset="">
            <p>Connect primary Google Calendar account</p>
          </div>
          <div class="point -t">
            <img src="../assets/img/Icon_d.png" srcset="">
            <p>Add due dates, reminders, and notifications to your tasks</p>
          </div>
        </div>
        <button class="bt ">Get Started</button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="priceBoard -dourado">
        <div class="text">
          <h1>Organization</h1>
          <p class="numero">$49.99</p>
          <p>Capture ideas and find them quickly</p>
        </div>
        <div class="bulletPoint">
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Sync unlimited devices</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>10 GB monthly uploads</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>200 MB max. note size</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Connect primary Google Calendar account</p>
            </div>
            <div class="point -t">
              <img src="../assets/img/Icon.png" srcset="">
              <p>Add due dates, reminders, and notifications to your tasks</p>
            </div>
        </div>
        <button class="bt -do">Get Started</button>
      </div>
    </swiper-slide>
  </swiper>
  </div>

</template>
<style lang="scss" scoped>
    .SlidePricing{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;
      width: 100%;
      padding: 5em;
      overflow: hidden;
      .head{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 60px;
        width: 100%;
        max-width: 1920px;
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
            color:var(--negro);
          }
        }
        }
      .priceList{
        width: 100%;
        max-width: 1920px;
        padding:1em;
        display: grid;
        grid-template-columns: repeat( auto-fit , minmax( 10em , 1fr ) );
        gap: 0;
        align-items: center;
        justify-items: center;
          .priceBoard{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 0px;
            width: 97%;
            padding: 1em;
            box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.08);
            border-radius: 10px;
            background: var(--primary-color);
            color: var(--white);
            min-height: 855px;
            max-width: 472.33px;
              .text{
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 0px;
                  gap: 15px;
                  width: 90%;
                  padding: 1em;
                  h1{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 36px;
                  }
                    .numero{
                      font-family: 'Inter';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 36px;
                      line-height: 44px;
                    }
                  p.-goldNumber{
                    color: #FFE492;
                  }
              }
              .bulletPoint{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 0px;
                gap: 0px;
                width: 100%;
    
                .point{
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  padding: 0px;
                  gap: 19px;
                  padding: 1em;
                  width: 100%;
                }
                img{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  padding: 0px;
                  gap: 4px;
                  width: 18.01px;
                  height: 18.01px;
                  
              }
              }
          }
          .priceBoard.-dourado{
            background-color: var(--white);
            color: var(--negro);
            border: 1px solid var(--button2);
            padding:0;
            min-height: 50rem;
            gap: 0;
            padding: 1em;
          }
        }  
      .pontos{
        display: none;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0px;
        gap: 12px;
        width: 60px;
        height: .5em;
        
        #bb{
          width: 12px;
          height: 12px;
          border-radius:50%;
          background: var(--blue-2);
          cursor: pointer;
          
          &:hover{
            background:var(--primary-color);
            transition: all .5s ease-in-out;
          }
        }
      }  
    }
    @media screen and (max-width:912px){
      .SlidePricing{
        .priceList{
          display: none;
          align-items: center;
          justify-content:space-between;
          width: 92.5625rem;
          height: 44.4375rem;
          .priceBoard{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 0px;
            width: 90%;
            padding: 1em;
            box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.08);
            border-radius: 10px;
            background: var(--primary-color);
            color: var(--white);
            max-height: 53.3125rem;
            min-height: 47.5625rem;
            max-width: 29.5206rem;
          }
          .priceBoard.-dourado{
            background-color: var(--white);
            color: var(--negro);
            border: 1px solid var(--button2);
            padding:0;
            min-height: 13.75rem;
            gap: 0;
            padding: 1em;
          }
        }
      }
      .SlidePricing .head {
       
         padding: 0; 
    }
      .teste{
        display: block !important;
      }
    }
    @media screen and (max-width:280px){
      .swiper{
        height:  55.25rem !important;
      }
      .mySwiper{
        width: 17rem !important;
      }

      .priceBoard[data-v-2d4c8285] {
        gap: 0;
        width: 15.5rem;
        height: 50.125rem;
      }
    }
    .SlidePricing {
      .priceList{
        .priceBoard{
          .bt{
            width: 176px;
            height: 62px;
            padding: 16px 40px;
          }
          .bt.-do{
            background: var(--white);
            color: var(--negro);
            border: 1px solid #FFE492;
          }
        }
      }
    }
    .teste{
        display:none;
      }
    .mySwiper{
      width: 20rem;
      display: flex;
      align-items:center;
      justify-content: space-evenly;
    }
    .swiper-wrapper{
      padding: 1rem;
      background-color: #043873;
    }
    .swiper-pagination{
      padding: 2rem;
    }
    .swiper{
      padding-right: 0;
      padding: 1rem;
      height:  50.25rem;
      max-height: 75.25rem;
    }
    .priceBoard{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 25px;
      padding: 1em;
      border-radius: 10px;
      background: var(--primary-color);
      color: var(--white);
      width: 18.0625rem;
      height: 43.125rem;
    }
    .priceBoard.-dourado{
        background-color: var(--white);
        color: var(--negro);
        border: 1px solid var(--button2);
        padding:0;
        min-height: 39.875rem;
        gap: 0;
        padding: 1em;
      }
    .text{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 15px;
      width: 90%;
      padding: 0;
      .numero{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
      }
    }
    .bulletPoint{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
 
    }
    h1{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }
    .point{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0px;
      gap: 19px;
      padding: 1em;
      width: 100%;
    }
    img{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0px;
      gap: 4px;
      width: 18.01px;
      height: 18.01px;         
    }
</style>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";

  // Import Swiper styles
  import 'swiper/scss';
  import 'swiper/scss/navigation';
  import 'swiper/scss/pagination';

  // import required modules
  import { Pagination } from "swiper";

export default {
  name: 'SlidePricing',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
}
</script>