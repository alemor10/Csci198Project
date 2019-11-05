<template>
 <v-content>
    <section>
      
       <v-parallax src="../assets/para2.jpeg" height="700">
        <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <v-img
             contain
             height="500"
             width="500px"
             :src="myImage"></v-img>
          <h1 class="white--text mb-2 display-1 text-center">Department of Computer Science</h1>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-layout
        column
        wrap
        class="my-12"
        align-center
      >
      <v-flex xs12 sm4 class="my-4">
        <div class="text-center">
        <h2 class="headline">COMPUTER SCIENCE FORMS</h2>
          <span class="subheading">
           The Computer Science Department has developed a website to handle online forms for common requests. To be able to access and submit a form, login to your account or create an account if you haven't created one yet.
          </span>
        </div>
      </v-flex>
     </v-layout>
    </section>
 </v-content>
 
</template>

<script>
export default {
  name: "home",
  components: {},
  data () {
    return {
      myImage: require('../assets/fresnoseal.png')
    }
  }
};
</script>