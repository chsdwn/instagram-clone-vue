<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

const CustomText = Vue.extend({
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    size: {
      type: String,
      default: 'normal', // normal: 14, small: 12, xsmall: 11, xxsmall: 10
      validator: function(value: string) {
        return ['normal', 'small', 'xsmall', 'xxsmall'].indexOf(value) !== -1;
      },
    },
  },
});

export default CustomText;
</script>

<style scoped>
.small {
  font-size: 12px;
}
.xsmall {
  font-size: 11px;
}
.xxsmall {
  font-size: 10px;
}
</style>
