<template>

  <v-container>
   <h1 class="subheading black--text">California State University, Fresno</h1>
      <h2 class="subheading black--text">Department of Computer Science</h2>
      <h3 class="subheading grey--text">CSCI 290 Graduate Independent Study</h3>
      <h3 class="subheading black--text"> Please complete and sign this form for authorization for an Undergraduate Independent Study.
      Upon approval from your Supervising Instructor and the Department chair, a section number and permission number will be issued to you. You must then register for the course through your "My Fresno State" portal.</h3>
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
          :rules="numberRules"
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
          :counter="40"
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
          v-model="form.year"
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
          v-model="form.year"
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
        <v-text-field
          v-model="form.subject"
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
          v-model="form.units"
          :items="units"
          :error-messages="selectErrors"
          label="Number of Units"
          required

        >
        </v-select>

        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-select
          v-model="form.SupervisingInstructor"
          :items="this.$store.getters.instructors"
          label="Supervising Instructor"
          required
        >
        </v-select>
        </v-col>                    
        </v-row>
      <v-divider></v-divider>
      <h4> 1. Check below which sense the proposed independent study project conforms to Item 1 of the regulations for independent study. </h4>
        <v-select
          v-model="form.option"
          :items="option1"
          :rules="[required]"
          label="Select one of the options"
          required
        >
        </v-select>
        <h4> 2. Describe briefly the nature of the independent study project to be undertaken and, if possible at this time, the title of the paper. </h4>
        <v-text-field
            v-model="form.description"
            :counter="500"
            label="enter text here"
            loader-height="10"
            required
        >
        </v-text-field>
        <h4> 3.Are you below a 3.0 GPA? </h4>
        <v-select
          v-model="form.GPA"
          :rules="[required]"
          :items="GPA"
          label="Yes/No"
          required
        >
        </v-select>
      </v-form>
       <v-btn @click="submit" :disabled="!valid">submit</v-btn>
</v-container>

</template>

<script>
import { mapActions } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      valid:false,
      semester:['Fall','Spring'],       
      years:['2019','2020','2021', '2022',],        
      units:['1','2','3'],
      option1:['Desire to pursue information not covered in a regular course', 'Desire to study a special area in greater depth given in a regular course'],
      GPA:['Yes', 'No'],
      form: {
        formTitle: "290",
        username:this.$store.getters.user.username,
        firstname:this.$store.getters.user.firstname,
        lastname:this.$store.getters.user.lastname,
        studentID:this.$store.getters.user.studentID,
        studentEmail:this.$store.getters.user.email,
        SupervisingInstructor:'',
        subject:'',
        description:'', 
        semester: '',
        year: '',
        units: '',
        option:'',
        GPA:'',
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
    },
    methods: {
      ...mapActions(["submit290Form","submit290ToInstructor"]),  
      submit() {
        this.submit290Form(this.form)
          .then(res => {
            if (res.data.success) {
              window.console.log(this.user)
              this.$router.push("/Dashboard");
            }
        })
        .catch(err => {
          this.errormsg = err
        });
      }
    },
  
}
</script>


