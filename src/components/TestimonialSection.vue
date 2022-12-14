<template>
  <section class="TestimonialSection">
    <div class="head">
        <div class="text-block">
          <h1 class="titulo">What Our Clients Says</h1>
        </div>
    </div>
    <div class="priceList">
      <div class="client" id="c-desk">
        <div class="comment">
          <img src="../assets/img/Quote_blue.png" alt="quote" srcset="">
          <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
        </div>
        <div class="name-box">
          <img class="avatar" src="../assets/img/Avater_1.png" alt="avatar" srcset="">
          <div class="name">
            <h1>Oberon Shaw, MCH</h1>
            <p>Head of Talent Acquisition, North America</p>
          </div>
        </div>
      </div>
    <div class="client -blue" id="c-desk" >
      <div class="comment">
              <img src="../assets/img/Quote_blue.png" alt="quote" srcset="">
              <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
      </div>
      <div class="name-box">
              <img class="avatar" src="../assets/img/Avater2.png" alt="avatar" srcset="">
              <div class="name">
                <h1>Oberon Shaw, MCH</h1>
                <p>Head of Talent Acquisition, North America</p>
              </div>
      </div>
    </div>
    <div class="client -blue" id="c-desk">
      <div class="comment">
              <img src="../assets/img/Quote_blue.png" alt="quote" srcset="">
              <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
      </div>
      <div class="name-box">
              <img class="avatar" src="../assets/img/Avater3.png" alt="avatar" srcset="">
              <div class="name">
                <h1>Oberon Shaw, MCH</h1>
                <p>Head of Talent Acquisition, North America</p>
              </div>
      </div>
    </div>
        </div>
   
    <div class="indicadores">
      <button id="bb" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1" class="" aria-current="true"></button>
      <button id="bb" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 2" class="active" aria-current="true"></button>
      <button id="bb" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 3" class="" aria-current="true"></button>
    </div>
  </section>
</template>


<style lang="scss" scoped>
    .TestimonialSection{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 100%;
      padding: 1em;
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
          .client{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: 60px;
            width:90%;
            padding: 1em;
            box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.08);
            border-radius: 10px;
            background: var(--white);
            color: var(--paragraph);
            min-width: 95px;
            max-width: 471.67px;
            min-height: 95px;
            max-height: 498.46px;
            .comment{
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              padding: 0px 0px 40px;
              gap: 32px;
              width:90%;
              height: 192.02px;
              border-bottom: 1px solid #212529;
              img{
                width: 56px;
                height: 40.02px;
              }
              p{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                letter-spacing: -0.02em;
              }
            }
            .name-box{
              display: flex;
              flex-direction:row;
              justify-content: flex-end;
              align-items: flex-start;
              gap: 30px;
              .avatar{
                width: 65px;
                height: 65px;
              }
              .name{
                display: flex;
                flex-direction: column;
                gap: 15px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
                letter-spacing: -0.02em;
                color: var(--paragraph);
                h1{
                  color: #212529;
                }
                
              }
            }
          }
        }
      .priceBoard.-dourado{
            background-color: var(--white);
            color: var(--negro);
            border: 1px solid var(--button2);
            padding:0;
            min-height: 700px;
            gap: 0;
            padding: 1em;
      }
  
      .indicadores{
        display: flex;
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
</style>

      


<script>
export default {
  name: 'TestimonialSection',
}
</script>