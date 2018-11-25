<template>
  <v-toolbar fixed color="cyan" dark>
     <v-toolbar-title class="mr-4">
       <span
        class="home"
        @click="navigateTo({name: 'Home'})">
         TabTracker
       </span>
     </v-toolbar-title>

     <!--TODO: Implement me-->
     <!-- <v-toolbar-items>
      <v-btn flat>Browse</v-btn>
     </v-toolbar-items> -->

     <v-spacer></v-spacer>
     <v-toolbar-items>
       <v-btn flat @click="navigateTo({name: 'Login'})">
         Login
       </v-btn>
       <v-btn flat @click="navigateTo({name: 'Register'})">
         Sign Up
       </v-btn>
     </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  cursor: pointer;
}

.home:hover {
  color:powderblue
}
</style>
