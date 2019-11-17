<template>
<div>
  <v-toolbar color="cyan darken-4" dark>
    <v-btn v-if="isLoggedIn"
     @click.stop="drawer = !drawer">
     Menu
    </v-btn>
    <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn v-if="!isLoggedIn" to='/login'  class="hidden-sm-and-down">Log In</v-btn>
      <v-btn v-if="!isLoggedIn" to='/register' color="brown lighten-3" class="hidden-sm-and-down">Register</v-btn>
      <v-btn v-if="isLoggedIn" to='/logout' @click.prevent="logoutUser">Logout</v-btn>
  </v-toolbar>
  <v-navigation-drawer
    v-model="drawer" 
    absolute
    temporary>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Welcome 
        </v-list-item-title>
          <v-list-item-subtitle>
           :)
          </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.link"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  appTitle:"Welcome :)",
  data () {
    return {
      drawer:null,
      items: [
        { title: 'Forms', link: '/Forms' },
        { title: 'Available Instructors',  },
        { title: 'Account Information'},   
        { title: 'Contact Faculty'},
      ],
    }
  },
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
