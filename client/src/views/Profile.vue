<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md8
      >
        <material-card
          color="green"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="First Name"
                    v-model='firstname'
                    class="purple-input"
                    :disabled="edit"/>
                </v-flex>
                <v-flex
                  xs12
                  md6>
                  <v-text-field
                    label="Last Name"
                    v-model='lastname'
                    class="purple-input"
                    :disabled="edit"/>
                </v-flex>
                <v-flex
                  xs12
                  md12
                >
                <v-text-field
                    label="Email Address"
                    v-model='email'
                    class="purple-input"
                    :disabled="edit"/>
                <v-text-field
                    label="Student ID "
                    v-model='studentID'
                    class="purple-input"
                    :disabled="edit"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    :disabled="edit"
                    v-model='bio'
                    class="purple-input"
                    label="About Me"
                    
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="success"
                    @click="editToggle"
                  >
                    Edit Profile
                  </v-btn>
                <v-btn
                    v-if="!edit"
                    class="mx-0 font-weight-light"
                    color="success"
                    @click="submit"
                  >
                    Save
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h2 class="category text-gray font-weight-thin mb-3">@{{this.user.username}}</h2>
            <h3 class="category text-gray font-weight-thin mb-3">{{this.user.firstname }} {{this.user.lastname}}</h3>
            
            <h4 class="card-title font-weight-light">{{this.user.studentID}}</h4>
            <p class="card-description font-weight-light">{{this.user.bio}}</p>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { mapActions } from "vuex";
export default {
    data() {
    return {
        user:this.$store.getters.user,
        firstname: "",
        lastname: "",
        email:"",
        studentID:"",
        bio:"",
        errormsg: "",
        edit:true,
        required: v => v.length > 0|| 'This field cannot be empty.',
        minLength: v => v.length >= 6 || 'This field must be at least two characters long',
        descminLength: v => v.length > 20 || 'This field must be at least twenty characters long', 
      };
    },
    methods: {
        editToggle() {
            this.edit = !this.edit
           
        },
        submit() {
          let userInfo = {
            username: this.user.username,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            studentID: this.studentID,
            bio: this.bio

          };
          this.updateProfile(userInfo)
            .then(res => {

              if (res.data.success) {
                //window.console.log(user)
                this.$router.push("/Dashboard");
          }
        })
        .catch(err => {
          this.errormsg = err
        });
        },
        ...mapActions(["getProfile","updateProfile"]),

    },
    created() {
        this.getProfile();
    },


}
</script>