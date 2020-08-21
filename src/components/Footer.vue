<template>
  <div class="footer-container">
       <div class="footer-main">
           <a href="/" rel="noopener noreferrer">
                <img src="@/assets/image/footerLogo.png" alt="SMART CHOICES" class="footer-logo">
            </a> 
            <div class="content">
                <p>MARKETING DISCLOSURE: This website is a market place. As such you should know that the owner has a monetary connection to the product and services advertised on the site.</p>
                <p>The owner receives payment whenever a qualified lead is referred but that is the extent of it.</p>
                <p>ADVERTISING DISCLOSURE: This website and the products & services referred to on the site are advertising marketplaces.This website is an advertisement and note a news publication.Any photographs of persons used on thissite are models. The owner of this site and of the products and services referred to on this site only provides a service whereconsumers can obtain and compare.</p>
                    <p>2020 All Rights Reserved.</p>
            </div>
            <ul class="footer-nav-list clearfix">
                <li>
                    <router-link target="_blank" :to="{ name: 'disclosure'}">Disclosure</router-link>
                </li>
                <li>
                    <router-link target="_blank" :to="{ name: 'privacy'}">Privacy Policy</router-link>
                </li>
                <li>
                    <router-link target="_blank" :to="{ name: 'terms'}">Terms of Use</router-link>
                </li>
                <li>
                    <router-link target="_blank" :to="{ name: 'about'}">About Us</router-link>
                </li>
                <li>
                    <router-link target="_blank" :to="{ name: 'contact'}">Contact Us</router-link>
                </li>
            </ul>
     </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    @import url('../assets/css/footer.less');
</style>