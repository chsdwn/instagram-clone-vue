<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
import Vue from 'vue';

const Avatar = Vue.extend({
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default: require('@/assets/avatar.jpg'),
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
});

export default Avatar;
</script>

<style lang="postcss" scoped>
.avatar {
  border-radius: 999px;
  padding: 2px;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );

  display: inline-flex;

  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
