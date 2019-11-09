<template>
  <v-container
    fluid
  >
   <h1 class="subheading black--text">California State University, Fresno</h1>
      <h2 class="subheading black--text">Department of Computer Science</h2>
      <h3 class="subheading grey--text">CSCI 190 Undergraduate Independent Study</h3>
      <h3 class="subheading black--text"> Please complete and sign this form for authorization for an Undergraduate Independent Study.
      Upon approval from your Supervising Instructor and the Department chair, a section number and permission number will be issued to you. You must then register for the course through your "My Fresno State" portal.</h3>
    <v-form @submit.prevent="submit">
        <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.firstname"
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
            v-model="form.lastname"
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
          v-model="form.studentID"
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
          v-model="form.studentEmail"
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
          :items="form.semester"
          :error-messages="selectErrors"
          label="Semester"
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
          :items="form.years"
          :error-messages="selectErrors"
          label="Year"
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
        <v-text-field
          v-model="subject"
          :counter="15"
          label="Course Subject"
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
          :items="form.units"
          :error-messages="selectErrors"
          label="Number of Units"
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
          label="Supervising Instructor"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        </v-col>                    
        </v-row>
      <v-divider></v-divider>
      <h4> 1. Check below which sense the proposed independent study project conforms to Item 1 of the regulations for independent study. </h4>
        <v-select
          v-model="select"
          :items="form.option1"
          :error-messages="selectErrors"
          label="Select one of the options"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        <h4> 2. Describe briefly the nature of the independent study project to be undertaken and, if possible at this time, the title of the paper. </h4>
        <v-text-field
            v-model="form.description"
            :counter="500"
            label="enter text here"
            required
        >
        </v-text-field>
        <h4> 3.Are you below a 3.0 GPA? </h4>
        <v-select
          v-model="select"
          :items="form.GPA"
          :error-messages="selectErrors"
          label="Yes/No"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        >
        </v-select>
        <v-btn> hewoo </v-btn>
        <h1> HEWOOO</h1>
    </v-form>
  </v-container>
</template>


<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        firstname:'',
        lastname:'',
        studentID:'',
        studentEmail:'',
        subject:'',
        description:'', 
        semester:['Fall','Spring'],
        years:['2019','2020','2021', '2022',],
        units:['1','2','3'],
        option1:['Desire to pursue information not covered in a regular course', 'Desire to study a special area in greater depth given in a regular course'],
        GPA:['Yes', 'No'],
      }
     } 
    },
    validations: {
      form: {
        firstname: { required, min: minLength(2) },
        lastname: {required, min: minLength(2)},
        studentID: {required},
        email: { required, email },
        subject: {required, min: minLength(10)},
        description:{required}
      }
    }
  
}
</script>