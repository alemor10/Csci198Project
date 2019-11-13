//<template>
    <v-container
    fill-height
    fluid
  >   
    <v-navigation-drawer permanent>
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
  </v-container>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      items: [
        { title: 'Forms', link: '/Forms' },
        { title: 'Available Instructors',  },
        { title: 'Account Information'},   
        { title: 'Contact Faculty'},
      ],
      right: null,
    }
  },
}
</script>

<style>

</style>