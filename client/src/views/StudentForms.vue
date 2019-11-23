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
      :items="desserts"
      :search="search"
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
            text: 'Student Name',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Student ID', value: 'calories' },
          { text: 'Date Received', value: 'date'}

        ],

      }
    },
  }
</script>
