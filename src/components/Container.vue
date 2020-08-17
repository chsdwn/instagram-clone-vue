<template>
  <div class="container">
    <!-- children, ng-content -->
    <slot />
  </div>
</template>

<script>
import Vue from 'vue';

const Container = Vue.extend({
  name: 'Container',
});

export default Container;
</script>

<style>
.container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}
</style>
