<template>
  <v-card>
    <v-card-title>
      Student Forms
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="this.$store.getters.user.studentForms"
      :search="search"
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Form ID',
            align: 'left',
            sortable: false,
            value: 'formID',
          },
          { text: 'Student ID', value: 'studentID' },
          { text: 'Supervising Instructor ', value: 'SupervisingInstructor'},
          { text: 'Student Last Name', value: 'firstName'},
          { text: 'Student First Name', value: 'lastName'},
          { text: 'Student Email', value: 'studentEmail'}
        ],

      }
    },
  }
</script>
