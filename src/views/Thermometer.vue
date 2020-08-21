<template>
  <div class="mosquito-wrapper">
        <div class="maskLayer">
            <div class="mask-content ">
                <span class="close"></span>
                <a :href="mainLink" target="_blank" class="mask-box clearfix">
                    <div class="mask-left">
                        <img src="@/assets/image/thermometer/alert-ad.jpg" alt="" class="ad">
                    </div>
                    <div class="mask-right">
                        <p class="offer">Limited Time Offer</p>
                        <p class="save"><span>SAVE</span><strong>50% MONEY</strong></p>
                        <p class="OEI">Offer Expires In</p>
                        
                        <div class="date-area">
                            <div class="time-box colon">
                                <span class="text">Hours</span>
                                <div class="time">
                                    <span class="hours-decade">0</span>
                                    <span class="hours-unit">0</span>
                                </div>
                            </div>
                            <div class="time-box colon">
                                <span class="text">Minutes</span>
                                <div class="time">
                                    <span class="minutes-decade">0</span>
                                    <span class="minutes-unit">0</span>
                                </div>
                            </div>
                            <div class="time-box">
                                <span class="text">Seconds</span>
                                <div class="time">
                                    <span class="seconds-decade">0</span>
                                    <span class="seconds-unit">0</span>
                                </div>
                            </div>
                        </div>
                        <p class="desc">30 Days Money Back Guarantee</p>
                        <a :href="mainLink" target="_blank" rel="noopener noreferrer" class="btn">Get the discount today!</a>
                    </div>
                </a>
            </div>
        </div>
      <header class="mosquito-header">
          <div class="header-left">
                <img src="@/assets/image/logo.png" alt="SMART CHOICES" class="logo">
                <p class="text">Check the body temperature without touching the child</p>
          </div>
          <a href="/" class="btn">No-Touch Thermometer</a>

      </header>
      <section class="banner">
          <div class="banner-container">
               <div class="banner-content">
                    <h1 class="g">2020’s TOP 3</h1>
                    <h1 class="a">No-Touch Thermometer</h1>
                    <p class="update-box">
                        <span class="icon"></span>
                        <span>Updated: August 2020</span>
                    </p>
                </div>
                <img src="@/assets/image/thermometer/seal.png" alt="" class="seal-picture">
          </div>
          
      </section>
      <main class="container">
          <div class="desc-area">
              <h2 class="area-title">The Best No-Touch Thermometers In 2020</h2>
              <div class="desc-content">
                  <p>The best thermometers help you monitor the temperatures of family from the comfort of your home so you know whether to seek medical care or simply wait for fevers to break. Most thermometers will read your temperature accurately. But really good ones should also be fast , user friendly and reliable—so you can quickly figure out what to do if you or your kid is sick.</p>
                    <p>We tested some of the most popular thermometer on the market. Our researchers looked at price, product quality, ease of use, scope, effectiveness, and discount. </p>
              </div>
          </div>
          <div class="product-area">
              <p class="product-area-title">And then we sorted out 3 major options:</p>
              <WifiProduct/>
          </div>
          <div class="why-area">
              <h2 class="area-title">Why Use No-Contact Thermometer?</h2>
              <div class="why-container">
                  <div class="content">
                      <p>Clinical thermometers like Fever Patrol guarantee simple and brisk application. The taking care of is advantageous for guardians. Contrasted with an digital thermometer, the new strategy ought to be a lot simpler to utilize and give exact outcomes in practically no time. </p>
                    <p>Contact-less thermometer helps to prevent cross infection and reduce time to disinfect the thermometer. On the off chance that your infant is continually moving, Fever Patrol makes taking precise readings conceivable. </p>
                    <p>Fever Patrol is cost-effective and will last you a long time. The efficiency of the device is excellent and must be tried in these challenging times!</p>
                  </div>
              </div>
          </div>
          <div class="how-work-area">
              <h2 class="area-title">How Does Fever Patrol Work?</h2>
              <div class="step-box">
                  <div class="step-item">
                      <div class="circle-box">
                          <span class="text">Step 1</span>
                      </div>
                      <p class="desc">Select Body or Object mode, hold the infrared sensor above your subject, and hold down the button.</p>

                        <img src="@/assets/image/thermometer/step1.png" alt="" class="step-picture">

                        
                  
                  </div>
                  <div class="step-item">
                      <div class="circle-box">
                          <span class="text">Step 2</span>
                      </div>
                      <p class="desc">In less than a second, the digital display will bring up the temperature reading, accurate to 0.4°F (0.2°C) with a matching color code. </p>

                       <img src="@/assets/image/thermometer/step2.png" alt="" class="step-picture">
                  
                  </div>
                  <div class="step-item">
                      <div class="circle-box">
                          <span class="text">Step 3</span>
                      </div>
                      <p class="desc">Wait and repeat. Store up to 64 temperature readings so you can track the progress of your child’s fever.</p>

                        <img src="@/assets/image/thermometer/step3.png" alt="" class="step-picture">
                  
                  </div>
              </div>
              <div class="special-box">
                  <img src="@/assets/image/thermometer/special-bg.jpg" alt="" class="special-bg">
                  <div class="special-content">
                      <h4 class="spe-title">Special Offer on Now!</h4>
                      <p class="sub">Order Today for an Amazing Price!</p>
                      <p class="text">Relieve stress with instant, reliable results! </p>
                      <p class="text"><strong>100% Accurate! Safe and easy to use! </strong></p>
                      <a :href="mainLink" target="_blank" class="btn" rel="noopener noreferrer">
                        <span>Get Your Fever Patrol Now！</span>
                        <span class="icon"></span>
                      </a>
                  </div>
              </div>
          </div>
          <div class="faq-area">
              <h2 class="area-title">FAQ</h2>
              <div class="question-box">
                  <div class="question-item" v-for="(item,index) in questionData" :key="index">
                      <h3 class="question-title">{{item.title}}</h3>
                      <div class="question-content" v-html="item.content"></div>
                  </div>
              </div>
          </div>
      </main>
  </div>
</template>

<script>
import WifiProduct from '@/components/wifi-product.vue'
import $ from 'jquery'
export default {
    components: {
        WifiProduct
    },
    data() {
        return {
            mainLink: 'https://www.flrtni.com/7QLQCMW/5N1X1F3/?uid=8276',
            questionData: [
                {
                    title: "What is a person's normal body temperature?",
                    content: `<p>Most literature tells you that a normal body temperature is 98.6°F, but this can depend on how you take the temperature, the age of the person in question, what they've been doing and the time of day. As a rule, a body temperature of 100.4°F or higher is considered a fever. However, if the temperature is taken in the armpit, anything over 99.3°F may indicate a fever.</p>`
                },
                {
                    title: "What's the best kind of thermometer to use?",
                    content: `<p>There's no single best type of thermometer to use. It all depends on your personal requirements. If you want something that's simple and affordable, for instance, we recommend a digital stick thermometer. If you want a thermometer that's going to make it easy for you to take a restless child's temperature, without making him or her stay still for too long, a non-contact thermometer would be your best bet. Think about what you want from a thermometer and go from there.</p>`
                },
                {
                    title: 'How do I use my thermometer?',
                    content: `<p>Every type and model works slightly differently, so be sure to familiarize yourself with the instructions before you first use your new thermometer.</p>`
                }
            ],
            timer: null,
            timer2: null,
            count: 0
        }
    },
    methods: {
        /**
         * 倒计时
         */
        countDown() {
            //结束时间
            let finishTime = new Date('2020/7/28').getTime();
            let startTime = new Date(new Date().toLocaleDateString()).getTime();
            let intervalTime = 0,
                day = 0,
                hours = 0,
                minutes = 0,
                seconds = 0;
            let that = this;
            this.timer = setInterval(function () {
                if (finishTime - new Date().getTime() <= 0) {
                     finishTime = new Date(new Date().toLocaleDateString()).getTime() + 1 * 24 * 60 * 60 * 1000;
                }
                intervalTime = finishTime - new Date().getTime();

                day =  Math.floor(intervalTime/(1000*60*60*24));
                hours = Math.floor(intervalTime / (60 * 60 * 1000) % 24) + day * 24;
                minutes = Math.floor(intervalTime / (60 * 1000) % 60);
                seconds = Math.floor(intervalTime / 1000 % 60); 
                that.renderTime(hours,minutes,seconds);
                
            },1000)
            
        },
        renderTime(hours,minutes,seconds) {
            let hoursObj = this.splitCell(hours);
            let minutesObj = this.splitCell(minutes);
            let secondsObj = this.splitCell(seconds);
            $('.hours-decade').text(hoursObj.decade);
            $('.hours-unit').text(hoursObj.unit);
            $('.minutes-decade').text(minutesObj.decade);
            $('.minutes-unit').text(minutesObj.unit);
            $('.seconds-decade').text(secondsObj.decade);
            $('.seconds-unit').text(secondsObj.unit);

        },
        splitCell(num) {
            let unit = Math.floor(num % 10);
            let decade = Math.floor(num / 10);
            return {
                unit: unit,
                decade: decade
            }
        },
        alert() {
            $('.maskLayer').css({
                display: 'block'
            })
            $('.mask-content').animate({
              opacity: 1,
              top: '50%'
            },300)
        }
    },
    mounted() {
        this.countDown();
        let that = this;

        this.timer2 = setTimeout(() => {
            $('body').on('mouseenter',function () {
                $('body').one('mouseleave',function () {
                    if (that.count == 0) {

                        that.alert();
                    }
                    that.count ++;
                })
            })
        },3000)
        
        $('.close').on('click',function (event) {
            event.stopPropagation();
            $('.maskLayer').css({
                display: 'none'
            })
            clearInterval(that.timer);
        })
        $('.maskLayer').on('click',function (e) {
            e.stopPropagation();
            $('.maskLayer').css({
                display: 'none'
            })
            clearInterval(that.timer);
        })
    },
    beforeDestroy() {
        $('body').off('mouseenter');
        clearInterval(this.timer);
        clearTimeout(this.timer2);
        this.timer = null;
    }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/Thermometer.less');
</style>