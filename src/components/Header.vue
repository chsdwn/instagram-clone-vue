<template>
  <header>
    <router-link to="/">Home</router-link> |
    <router-link to="/direct">Direct</router-link> |
    <router-link to="/explore">Explore</router-link> |
    <router-link to="/profile">Profile</router-link>
  </header>
</template>

<script>
import Vue from 'vue';

const MainHeader = Vue.extend({
  name: 'MainHeader',
});

export default MainHeader;
</script>
