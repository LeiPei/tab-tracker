<template>
  <v-layout>
    <v-flex xs10 offset-xs1>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            placeholder="abc@abc.com"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            placeholder="password must be at least 8 characters"
            v-model="password"
          ></v-text-field>
          <div class="err" v-html="error"></div>
          <br>
          <v-btn color="info" class="cyan"  @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data: function () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.err {
  color: red
}
</style>
