<template>
  <div class="home">
    <CustomText tag="h1">Profile IG TV</CustomText>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CustomText from '@/components/CustomText';

export default Vue.extend({
  name: 'ProfileIGTV',
  components: {
    CustomText,
  },
});
</script>

<style scoped></style>
