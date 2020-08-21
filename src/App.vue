<template>
  <div id="app">
    <main class="main">
      <router-view></router-view>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  height: 100%;
  font-family: Helvetica;
}
.main {
  min-height: calc(100% - 234px);
}
</style>
