<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <TopButton></TopButton>
    <Footer></Footer>
  </div>
</template>

<script>
import "@/assets/css/index.css";

import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
import TopButton from "./components/button/TopButton.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    TopButton,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
