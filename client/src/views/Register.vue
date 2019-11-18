<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <v-form @submit.prevent="registerUser">
          <v-layout column>
            <v-flex>
              <v-text-field
                v-model="username"
                label="Username"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="email"
                label="Email"
                required>
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required>
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="confirm_password"
                label="Confirm Password"
                type="password"
                required
                ></v-text-field>
            </v-flex>
            <v-flex>
              <v-select
                v-model="role"
                :items="roles"
                :rules="[required]"
                label="Select your Role"
                required
              >
              </v-select>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Sign Up</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, minLength,maxLength,sameAs } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      roles:['Student','Instructor','Secretary'],
      required: v => v.length > 0|| 'This field cannot be empty.',
      minLength: v => v.length >= 6 || 'This field must be at least two characters long',
      descminLength: v => v.length > 20 || 'This field must be at least twenty characters long', 
      user: {
        username: "",
        password: "",
        confirm_password: "",
        role: "",
        email: ""
      }
    };
  },
  validators: {
    user: {
      username: { required },
      email: { required },
      password: { required, minLength:minLength(6)},
      confirm_password: { required, sameAs:sameAs('password')}
    }
  }
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      window.console.log(this.username,this.email,this.password)
      let user = {
        username: this.user.username,
        password: this.user.password,
        confirm_password: this.user.confirm_password,
        email: this.user.email,
        role: this.user.role
      };
      this.register(user).then(res => {
        if (res.data.success) {
          this.$router.push("dashboard");
        }
      });
    }
  }
};
</script>

<style>
.card {
  width: 60%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
</style>