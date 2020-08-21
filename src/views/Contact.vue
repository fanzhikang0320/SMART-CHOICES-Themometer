<template>
    <div class="contact-wrapper">
            <div class="contact_left">
                <h1 class="title">Contact Us</h1>
                <p class="subhead">We’re Here to Help</p>
                <p class="content">Have questions about our internet marketing service?
                    Let’s talk about how can we help you achieve your goals
                    And take your business to the top!</p>
            </div>
            <div class="contact_right">
                <form class="rulesForm">
                    <label for="">
                        <p>Name</p>
                        <input type="text" class="inp" id="name">
                    </label>
                    <label for="">
                        <p>Email</p>
                        <input type="text" class="inp" id="email">
                    </label>
                    <label for="">
                        <p>Message</p>
                        <textarea oninput="handleChange()" name="" id="" cols="30" rows="8" class="content talk"></textarea>
                    </label>
                    <button class="btn">SUBMIT</button>
                </form>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import url('../assets/css/contact.less');
</style> 