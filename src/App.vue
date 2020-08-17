<template>
  <div class="app">
    <MainHeader />
    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>

<script>
import Vue from 'vue';

import Container from '@/components/Container.vue';
import MainHeader from '@/components/Header.vue';

const App = Vue.extend({
  name: 'App',
  components: {
    Container,
    MainHeader,
  },
});

export default App;
</script>

<style lang="postcss" scoped>
.main {
  padding-top: 40px;
}
</style>
