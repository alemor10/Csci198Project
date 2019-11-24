// Dashboard view

<template>
  <v-container
    fill-height
    fluid
  >
 <li class="list-group-item">Name: {{user.username}}</li>
  </v-container>
</template>
<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Dashboard',
      data() {
      return {
        role: "",
      };
    },
  computed: mapGetters(["user","role"]),
  methods: {
    ...mapActions(["getProfile"])
  },
  created() {
    this.getProfile();
  }


}
</script>