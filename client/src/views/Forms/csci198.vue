// CSCI 198 Form 
<template>
  <v-container>
   <h1 class="subheading black--text">California State University, Fresno</h1>
      <h2 class="subheading grey--text">Department of Computer Science</h2>
      <h3 class="subheading grey--text">CSCI 198 Senior Project</h3>
      <h3 class="subheading black--text"> Please complete and sign this form for authorization for a restricted supervision course.
      Upon approval of the Department chair, a section number and permission number will be issued to you. You must then register for the course through your "My Fresno State" portal.</h3>
    <v-card>
    <v-form v-model="valid">

        <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="15"
            label="First name"
            required
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="15"
            label="Last name"
            required
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-text-field
          v-model="studentID"
          :rules="numberRules"
          label="Student ID"
          required
        >
        </v-text-field>
        </v-col>
        </v-row>
        <v-row>

        <v-col
          cols="12"
          md="4"
        >
        <v-text-field
          v-model="studentEmail"
          :rules="nameRules"
          :counter="15"
          label="Student Email"
          required
        >
        </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        </v-col>
        <v-col
        >
        <v-text-field
          v-model="projectTitle"
          :counter="15"
          label="Project Title"
          required
        >
        </v-text-field>
        </v-col>               
        </v-row>
        <v-divider></v-divider>
        <h3> Select your start date and completion date. </h3>
        <v-row justify="space-around">
        <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
        <v-date-picker v-model="picker2" color="green lighten-1" header-color="primary"></v-date-picker>
        </v-row>
        <h3> 2. Briefly describe the nature of the your project </h3>
        <v-text-field
            v-model="description"
            :counter="500"
            label="enter text here"
            required
        >
        </v-text-field>
      
        <v-btn class="mr-4" @click="submit">submit</v-btn>
    </v-form>
    </v-card>
  </v-container> 

</template>

<script>
export default {

}
</script>

<style>

</style>