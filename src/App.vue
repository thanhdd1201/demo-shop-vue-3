<template>
  <default-header />
  <router-view />
  <default-footer />
</template>

<script lang="ts">
import DefaultHeader from './components/DefaultHeader.vue'
import DefaultFooter from './components/DefaultFooter.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { DefaultHeader, DefaultFooter }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
