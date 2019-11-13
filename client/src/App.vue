<template>
<v-app id="app">

   <NavBar/>
    <v-content transition="slide-x-transition">
//
      <router-view/>
    </v-content>
  <Footer/>
</v-app>

</template>


<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
//import Errors from './components/Errors.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    Footer,
   // Errors
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
