

<template>
  <v-app>
    <v-navigation-drawer app v-model="nav_bar_closed">
    </v-navigation-drawer >
    <v-app-bar elevation="4" absolute>
      <v-app-bar-nav-icon @click.stop="NavBarClicked"></v-app-bar-nav-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  data() {
      return {
       title : "App Name Ispsm",
       nav_bar_closed: true,
    }
  },
  methods: {
    NavBarClicked(){
      this.nav_bar_closed = !this.nav_bar_closed;
    }
  },
}

</script>
<style scoped>

</style>
