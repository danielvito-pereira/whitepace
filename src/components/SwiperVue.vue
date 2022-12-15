<template>
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
    </swiper-slide
    ><swiper-slide>
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
</template>
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
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>


<style lang="scss" scoped>

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

    height:  45.25rem;
    max-height: 75.25rem;

  }
  .priceBoard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
    padding: 1em;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    background: var(--primary-color);
    color: var(--white);
    max-height: 853px;
    min-height:39.875rem;
    max-width:29.5206rem;
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
    padding: 1em;
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
