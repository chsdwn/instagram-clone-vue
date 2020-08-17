<template>
  <div class="home">
    <div class="timeline">
      <Post />
    </div>

    <div class="sidebar">
      <p>Sidebar</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Post from '@/components/Post.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Post,
  },
});
</script>

<style lang="postcss" scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;

    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;

  @media (--t) {
    display: block;
  }
}
</style>
