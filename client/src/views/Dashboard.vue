// Dashboard view

<template>
  <v-container
    fill-height
    fluid
  >
  <SideBar/>

  </v-container>
</template>
<script>
import SideBar from '../components/SideBar'
export default {
  name: 'Dashboard',
  components: {
    SideBar
  }

}
</script>