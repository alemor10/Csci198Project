// CSCI 198 Form 
<template>
  <v-container
  >
   <h1 class="subheading black--text">California State University, Fresno</h1>
      <h2 class="subheading grey--text">Department of Computer Science</h2>
      <h3 class="subheading grey--text">CSCI 198 Senior Project</h3>
      <h3 class="subheading black--text"> Please complete and sign this form for authorization for a restricted supervision course.
      Upon approval of the Department chair, a section number and permission number will be issued to you. You must then register for the course through your "My Fresno State" portal.</h3>
    <v-form class="px-3" ref="form">
        <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.firstname"
            :counter="15"
            :rules="namesrules"
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
            :counter="15"
            :rules="namesrules"
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
          :counter="15"
          label="Student Email"
          required
        >
        </v-text-field>
        </v-col>

        <v-col
        >
        <v-text-field
          v-model="form.projectTitle"
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
        <v-date-picker v-model="form.picker" color="green lighten-1"></v-date-picker>
        <v-date-picker v-model="form.picker2" color="green lighten-1" header-color="primary"></v-date-picker>
        </v-row>
        <h3> 2. Briefly describe the nature of the your project </h3>
        <v-text-field
            v-model="form.description"
            :counter="500"
            label="enter text here"
            required
        >
        </v-text-field>
      
        <v-btn @click="submit">submit</v-btn>
        <h4>hewooo</h4>
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
        projectTitle:'',
        description:'', 
        semester:'',
        years:'',
        units:'',
        startdate: '',
        enddate: '',
      },
        semester:['Fall','Spring'],
        years:['2019','2020','2021', '2022',],
        units:['1','2','3'],
        picker: new Date().toISOString().substr(0, 10),
        picker2: new Date().toISOString().substr(0, 10),
        namerules: [
          v => v.length >= 2|| 'Minimum length is 2 Characters'
        ]
    
    
    }
  },
  validations: {
    form: {
      firstname: { required, min: minLength(2) },
      lastname: {required, min: minLength(2)},
      studentID: {required},
      email: { required, email },
      subject: {required, min: minLength(10)},
      description:{required},
      picker: {required},
      picker2:{required}
    }
  },
  methods: {
    submit() {
      window.console.log('hewwo');
      this.$v.$touch();
      if(this.$v.$invalid) {
        window.console.log('no par')
      }
    }
  },
}
</script> 