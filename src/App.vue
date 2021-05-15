<template>
  <v-app id="app">
    <router-view />
    <Footer class="mt-10" />
  </v-app>
</template>

<script>
import Footer from "./components/footer";

export default {
  components: {
    Footer,
  },
};
</script>
<style>
/*set global font style*/
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
#app {
  font-family: "Montserrat";
}
</style>
