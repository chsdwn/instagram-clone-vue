<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText class="a1" tag="p">Hello World2</CustomText>
    <CustomText class="a2" tag="p" size="small">Hello World3</CustomText>
    <CustomText class="a3" tag="p" size="xsmall">Hello World4</CustomText>
    <CustomText tag="p" size="xxsmall">Hello World5</CustomText>
    <IconHome width="60" height="60" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CustomText from '@/components/CustomText';

import IconHome from '../icons/home.svg';

export default Vue.extend({
  name: 'Home',
  components: {
    CustomText,
    IconHome,
  },
});
</script>

<style scoped>
.a1 {
  color: rgb(var(--a72));
}
.a2 {
  color: rgb(var(--b3f));
}
.a3 {
  color: rgb(var(--ba8));
}
</style>
