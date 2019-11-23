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
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getProfile"])
  },
  created() {
    this.getProfile();
  }


}
</script>