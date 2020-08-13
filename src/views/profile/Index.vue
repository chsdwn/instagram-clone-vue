<template>
  <div class="home">
    <CustomText tag="h1">Profile</CustomText>

    <div id="nav">
      <router-link to="/profile">Posts</router-link> |
      <router-link to="/profile/igtv">IG TV</router-link> |
      <router-link to="/profile/save">Save</router-link> |
      <router-link to="/profile/tag">Tag</router-link>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CustomText from '@/components/CustomText.vue';

export default Vue.extend({
  name: 'Profile',
  components: {
    CustomText,
  },
});
</script>

<style scoped></style>
