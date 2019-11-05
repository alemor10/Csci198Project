// Dashboard view

<template>
 
  <v-container
    fill-height
    fluid
  > 
    <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="form in forms" :key="form.name">
          <v-card flat class="text-xs-center ma-3">          
            <v-card-text>
              <div  class="black--text">{{form.name}}</div>
              <div class="grey--text">{{form.desc}}</div>
            </v-card-text>
            <v-card-actions  class="justify-center">
              <v-btn :to="form.link">
                <v-icon small >link</v-icon>
                <span>Link to Form</span>
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-flex>
    </v-layout>


  </v-container>
</template>
<script>
//import SideBar from '../components/SideBar'
export default {
  name: 'Forms',
  components: {
  //  SideBar
  },
  data (){
      return{
        forms: [
          { name: 'CSci 190', desc: 'Undergraduate Independent Study', link:'/csci190' },
          { name: 'CSci 194', desc: 'Co-op Education',  link:'/csci194'},
          { name: 'CSci 198', desc: 'Senior Project',  link:'/csci198' },
          { name: 'CSci 290', desc: 'Graduate Independent Study' ,  link:'/csci290'},
          { name: 'CSci 298', desc: 'Master Project',  link:'/csci298'},
          { name: 'CSci 299', desc: 'Master Thesis', link: '/csci299'},
          { name: 'CSci 298C', desc: 'Master Project Continuation', link:'/csci298C' },
        ]
      }
    }

}
</script>