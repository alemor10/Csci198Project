<template>
  <v-toolbar app color="cyan darken-4" dark>
    <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn v-if="!isLoggedIn" to='/login' flat class="hidden-sm-and-down">Log In</v-btn>
      <v-btn v-if="!isLoggedIn" to='/register' color="brown lighten-3" class="hidden-sm-and-down">Register</v-btn>
      <v-btn  v-if="isLoggedIn" to='/logout' @click.prevent="logoutUser">Logout</v-btn>
  
  </v-toolbar>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  appTitle:"Welcome :)",
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
};
</script>

<style>
</style>