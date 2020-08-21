<template>
  <div class="product-wrapper">
      <div :class="{'product-item': true, 'first-item': index == 0, 'last-item': index == productList.length - 1}" v-for="(product,index) in productList" :key="index">
          <div class="circle" v-if="index != productList.length- 1">
              <span class="num">{{index + 1}}</span>
          </div>
          <div class="corner-box" v-if="index == 0">
              <span class="text">Editor's Choice</span>
          </div>
          <div class="big-title" v-if="index == productList.length - 1">The Most Popular No-Touch Thermometer In 2020</div>
          <a :href="product.link" target="_blank" class="product-link-box">
            <div class="product-container">
                <div class="product-container-left">
                    <div class="picture-box">
                        <img :src="product.picture" :alt="product.name" class="picture">
                    </div>
                    <div class="desc-list-box">
                        <h2 class="product-name">{{product.name}}</h2>
                        <ul class="list-box">
                            <li v-for="(item,id) in product.list" :key="id">
                                <span class="icon"></span>
                                <p class="text">{{item.text}}</p>
                            </li>
                        </ul>
                        <p class="buys" v-if="index == 0 || index == productList.length - 1">Limited Offer : 50% Discount Now</p>
                    </div>
                </div>
                <div class="product-container-right">
                    <p class="good">
                        <span class="text">{{index == 0 || index == productList.length - 1 ? 'Excellent': index == 1 ? 'Very Good': 'Good'}}</span>
                        <span class="king-icon" v-if="index == 0 || index == productList.length - 1"></span>
                        <span class="good-icon" v-if="index == 1"></span>
                    </p>
                    <p class="rate-box"><span class="score">{{product.score}}</span><span>/10</span></p>
                    <a :href="product.link" target="_blank" class="btn">
                        <span class="text">Visit Site</span>
                        <span class="icon"></span>
                    </a>
                    <!-- <a :href="product.reviewLink" class="review">Read Our Review</a> -->
                </div>
            </div>
          </a>
      </div>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            productList: [
                {
                    name: 'Fever Patrol',
                    picture: require('@/assets/image/thermometer/FP.png'),
                    link: 'https://www.flrtni.com/7QLQCMW/5N1X1F3/?uid=8276',
                    reviewLink: '',
                    buys: 828,
                    list: [
                        {
                            text: 'Fast detection (instant reading)'
                        },
                        {
                            text: 'Innovative non-contact design'
                        },
                        {
                            text: 'Stores up to 64 readings'
                        },
                        {
                            text: 'Can measure temperature on forehead or object'
                        },
                        {
                            text: 'Provides result in under 0.5 second'
                        },
                        {
                            text: 'Light display with w/color alarm'
                        },
                        {
                            text: 'Reading w/out spreading germs'
                        },
                        {
                            text: 'Support silient mode'
                        }
                    ],
                    score: '9.8'

                },
                {
                    name: 'Live Temp',
                    picture: require('@/assets/image/thermometer/LT.png'),
                    link: 'https://hypertechx.com/ps/livetemppro/index.php?net=9785&aff={AFFID}&sid={SUBID}&cid={CLICKID}',
                    reviewLink: '',
                    buys: 828,
                    list: [
                        
                        {
                            text: 'Instantly test body temperature'
                        },
                        {
                            text: 'Fast scan time (1 second)'
                        },
                        {
                            text: 'No contact forehear thermometer'
                        },
                        {
                            text: 'Suitable for children and adults'
                        },
                        {
                            text: 'Moderate LDC display'
                        }
                    ],
                    score: '9.6'
                },
                {
                    name: 'Smart Fever',
                    picture: require('@/assets/image/thermometer/SF.png'),
                    link: 'https://smartfevershop.com?widipub_id=5f07f06db7bb81096719fce3&wtrd_offer_id=5e7cee17ef28644d9c328164&wtrd_offer_lids[]=5e7cf07fef286452324a3c85	',
                    reviewLink: '',
                    buys: 828,
                    list: [
                        
                        {
                            text: 'Fabulous no-Contact thermometer'
                        },
                        {
                            text: 'Amazing quick readings'
                        },
                        {
                            text: 'Test multiple family members'
                        },
                        {
                            text: 'Portable & lightweight'
                        }
                    ],
                    score: '9.5'
                },
                {
                    name: 'Fever Patrol',
                    picture: require('@/assets/image/thermometer/FP.png'),
                    link: 'https://www.flrtni.com/7QLQCMW/5N1X1F3/?uid=8276',
                    reviewLink: '',
                    buys: 828,
                    list: [
                        {
                            text: 'Fast detection (instant reading)'
                        },
                        {
                            text: 'Innovative non-contact design'
                        },
                        {
                            text: 'Stores up to 64 readings'
                        },
                        {
                            text: 'Can measure temperature on forehead or object'
                        },
                        {
                            text: 'Provides result in under 0.5 second'
                        },
                        {
                            text: 'Light display with w/color alarm'
                        },
                        {
                            text: 'Reading w/out spreading germs'
                        },
                        {
                            text: 'Support silient mode'
                        }
                    ],
                    score: '9.8'

                }
            ]
        }
    },
    methods: {
    }

}
</script>

<style lang="less" scoped>
@import url('../assets/css/wifi-product.less');
</style>