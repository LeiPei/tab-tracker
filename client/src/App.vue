<template>
  <div id="app">
    <v-app>
      <PageHeader/>
      <v-content>
        <v-container fluid>
           <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
