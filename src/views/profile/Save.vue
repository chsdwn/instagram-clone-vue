<template>
  <div class="home">
    <CustomText tag="h1">Profile Save</CustomText>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CustomText from '@/components/CustomText';

export default Vue.extend({
  name: 'ProfileSave',
  components: {
    CustomText,
  },
});
</script>

<style scoped></style>
