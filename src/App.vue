<template>
  <div class="app">
    <MainHeader />
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import MainHeader from '@/components/Header.vue';

const App = Vue.extend({
  name: 'App',
  components: {
    MainHeader,
  },
});

export default App;
</script>
