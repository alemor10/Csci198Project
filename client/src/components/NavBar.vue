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
          Welcome {{ role }}
        </v-list-item-title>
          <v-list-item-subtitle>
           :)
          </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list
      v-if="role=='Instructor'"
      dense
      nav
    >
      <v-list-item
        v-for="item in itemsforInstructors"
        :key="item.title"
        :to="item.link"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    <v-list
      v-if="role=='Student'"
      dense
      nav
    >
      <v-list-item
        v-for="item in itemsforStudents"
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
      itemsforStudents: [
        { title: 'Dashboard' ,link: '/Dashboard'},
        { title: 'Forms', link: '/Forms' },
        { title: 'Profile' ,link: '/Profile'},
        { title: 'Available Instructors',  },

      ],
      itemsforInstructors: [
        { title:'Forms from Students', link:'/studentforms'},
        { title:'My Profile' , link: '/Profile'},


      ]
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn","user","role"]),


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
