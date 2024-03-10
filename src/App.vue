<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <v-app>
      <v-app-bar>
        <v-app-bar-nav-icon icon="$vuetify">
        </v-app-bar-nav-icon>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
        <!-- <v-navigation-drawer location="bottom">
  <v-list-item title="" subtitle="Vuetify"></v-list-item>
  <v-divider></v-divider>
  <v-list-item title="List Item 1">
    <RouterLink to="/">Home</RouterLink>
  </v-list-item>
</v-navigation-drawer> -->
    <!-- <template v-slot:prepend>

    </template> -->
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <!-- <v-app-bar-title>Big Brain Learning</v-app-bar-title> -->
  </v-app-bar>
  <v-main padding="50">
    <v-card
        class="mx-auto"
        color="#26c6da"
        theme="dark"
        max-width="400"
        prepend-icon="mdi-twitter"
        title="Twitter"
      >
        <template v-slot:prepend>
          <v-icon size="x-large">md-menu</v-icon>
        </template>
        </v-card>
    <!-- <v-btn>
    <v-icon>mdi-home</v-icon>
    </v-btn> -->

    <!-- <v-icon icon="menu"></v-icon> -->

    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo-2.jpg" width="125" height="125" /> -->
  </v-main>
    <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="Big Brain Learning" /> -->
      <!-- <v-btn>Hi</v-btn> -->
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  <RouterView />
</v-app>
</template>

<style scoped>

</style>
