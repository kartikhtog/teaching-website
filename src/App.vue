

<template>
  <v-app>
    <v-app-bar elevation="1" :image='logo'  rounded-pill
>
      <v-app-bar-nav-icon @click.stop="NavBarClicked"></v-app-bar-nav-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <template v-slot:image>
          <v-img 
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer expand-on-hover rail permanent>
      <!-- v-model="nav_bar_closed"  -->
      <!-- app -->

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Home" value="myfiles" @click="goToHome()">
        </v-list-item>
        <v-list-item prepend-icon="mdi-bookshelf" title="Classes" value="shared" @click="goToClasses()">
        </v-list-item>
        <v-list-item prepend-icon="mdi-email" title="Contact Us" value="contact" @click="goToContact()">
        </v-list-item>
      </v-list>
      <!-- <v-list-item link title="List Item 1"></v-list-item>
  <v-list-item link title="List Item 2"></v-list-item>
  <v-list-item link title="List Item 3"></v-list-item> -->
    </v-navigation-drawer>

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
import logo from './assets/logo-2.jpg'
// import logo from '@assets/logo-2.jpg'
export default {
  name: 'App',
  data() {
      return {
       title : "Big Brain Learning",
       logo,
       nav_bar_closed: true,
       Navigation: [

        // Home, -> content -> sign up (for students only)
        // classes offered, -> 
        // contact 

       ]
    }
  },
  methods: {
    NavBarClicked(){
      this.nav_bar_closed = !this.nav_bar_closed;
    },
    goToHome() {
      this.$router.push('/')
    },
    goToClasses() {
      this.$router.push('/Classes')
    },
    goToContact() {
      this.$router.push('/Contact')
    }
  },
}

</script>
<style scoped>

</style>
