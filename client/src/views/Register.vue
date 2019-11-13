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
                label="User name"
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
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      email: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      window.console.log(this.username,this.email,this.password)
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name
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