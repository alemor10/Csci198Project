<template>
  <v-container>
   <h1 class="subheading black--text">California State University, Fresno</h1>
      <h2 class="subheading grey--text">Department of Computer Science</h2>
      <h3 class="subheading grey--text">CSCI 298 Masters Project</h3>
      <h3 class="subheading black--text"> Please complete and sign this form for authorization for a restricted supervision course.
      Upon approval of the Department chair, a section number and permission number will be issued to you. You must then register for the course through your "My Fresno State" portal.</h3>
  <v-form class="px-3" v-model="valid">
        <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.firstname"
            :counter="15"
            label="First name"
            required
            readonly
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
            label="Last name"
            required
            readonly
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-text-field
          v-model="form.studentID"
          :rules="[required]"
          label="Student ID"
          required
          readonly
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
          readonly
        >
        </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="form.semester"
          :items="semester"
          :rules="[required]"
          label="Semester"
          required
        >
        </v-select>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="form.years"
          :items="years"
          :rules="[required]"
          label="Year"
          required
        >
        </v-select>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="form.units"
          :items="units"
          label="Units"
          required
        >
        </v-select>
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
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="form.supervisingInstructor"
          :items="this.$store.getters.instructors"
          label="Supervising Instructor"
          required
        >
        </v-select>
        </v-col>               
        </v-row>
        <v-divider></v-divider>
        <h3> Select your start date and completion date. </h3>
        <v-row justify="space-around">
        <v-date-picker v-model="form.startdate" color="green lighten-1"></v-date-picker>
        <v-date-picker v-model="form.enddate" color="green lighten-1" header-color="primary"></v-date-picker>
        </v-row>
        <h3> 2. Briefly describe the nature of the your project </h3>
        <v-text-field
            v-model="form.description"
            :counter="500"
            label="enter text here"
            required
        >
        </v-text-field>
      
      <v-btn @click="submit" :disabled="!valid">submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      valid:false,
      semester:['Fall','Spring'],
      years:['2019','2020','2021', '2022',],
      units:['1','2','3'],
      picker: new Date().toISOString().substr(0, 10),
      picker2: new Date().toISOString().substr(0, 10),
      required: v => v.length > 0|| 'This field cannot be empty.',
      minLength: v => v.length >= 2 || 'This field must be at least two characters long',
      maxLength: v => v.length <= 12 || 'This field can only be twelve characters long',
      descminLength: v => v.length > 20 || 'This field must be at least twenty characters long',
      descmaxLength: v => v.length <= 500 || 'This field can only be five hundred characters long',        
      form: {
        formTitle: "298",
        username:this.$store.getters.user.username,
        firstname:this.$store.getters.user.firstname,
        lastname:this.$store.getters.user.lastname,
        studentID:this.$store.getters.user.studentID,
        studentEmail:this.$store.getters.user.email,
        supervisingInstructor:'',        
        projectTitle:'',
        description:'', 
        semester:'',
        years:'',
        units:'',
        startdate: '',
        enddate: '',
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
        description:{required},
        picker: {required},
        picker2:{required}
      }
    },
    methods: {
      ...mapActions(["submit298Form","submit298ToInstructor"]), 
      submit () {
        this.submit298Form(this.form)
          .then(res => {
            if (res.data.success) {
              this.submit298ToInstructor(this.form)
              .then(res => {
                  if (res.data.success) {
                    this.$router.push("/Dashboard");
                  }
              })
            }
        })
        .catch(err => {
          this.errormsg = err
        });
      }
    }
}
</script> 
