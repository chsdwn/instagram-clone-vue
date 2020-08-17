<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">Instagram</router-link>

      <form class="search">
        <input type="text" placeholder="Search" />
      </form>

      <nav class="navigation">
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" class="icon" />
          <IconHome v-else class="icon" />
        </router-link>
        <router-link to="/direct">
          <IconDirectFill v-if="$route.name === 'Direct'" class="icon" />
          <IconDirect v-else class="icon" />
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" class="icon" />
          <IconExplore v-else class="icon" />
        </router-link>
        <router-link to="/profile"><Avatar :size="22"/></router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import Vue from 'vue';

import Avatar from '@/components/Avatar.vue';
import Container from '@/components/Container.vue';

import IconDirect from '@/icons/direct.svg';
import IconDirectFill from '@/icons/direct-fill.svg';
import IconExplore from '@/icons/explore.svg';
import IconExploreFill from '@/icons/explore-fill.svg';
import IconHome from '@/icons/home.svg';
import IconHomeFill from '@/icons/home-fill.svg';

const MainHeader = Vue.extend({
  name: 'MainHeader',
  components: {
    Avatar,
    Container,
    IconDirect,
    IconDirectFill,
    IconExplore,
    IconExploreFill,
    IconHome,
    IconHomeFill,
  },
});

export default MainHeader;
</script>

<style lang="postcss" scoped>
.header {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a));
}

.header-inner {
  height: var(--header-height);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (--t) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}

.search {
  display: none;

  @media (--t) {
    text-align: center;

    display: block;

    input {
      background-color: rgb(var(--b3f));
      width: 215px;
      height: 28px;
      border: 1px solid rgb(var(--b6a));
      border-radius: 4px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40px;
  background-color: white;
  border-top: 1px solid rgb(var(--b6a));

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (--t) {
    position: static;
    height: auto;
    border: 0;

    justify-content: flex-end;

    a {
      margin-left: 20px;
    }
  }
}
</style>
