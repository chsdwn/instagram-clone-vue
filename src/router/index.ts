import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '@/views/home/Index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/direct',
    name: 'Direct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ '@/views/direct/Index.vue'),
  },
  {
    path: '/explore',
    name: 'Explore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ '@/views/explore/Index.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ '@/views/profile/Index.vue'),
    children: [
      {
        path: '',
        name: 'ProfilePosts',
        component: () =>
          import(
            /* webpackChunkName: "profile-posts" */ '@/views/profile/Posts.vue'
          ),
      },
      {
        path: 'igtv',
        name: 'ProfileIGTV',
        component: () =>
          import(
            /* webpackChunkName: "profile-posts" */ '@/views/profile/IGTV.vue'
          ),
      },
      {
        path: 'save',
        name: 'ProfileSave',
        component: () =>
          import(
            /* webpackChunkName: "profile-posts" */ '@/views/profile/Save.vue'
          ),
      },
      {
        path: 'tag',
        name: 'ProfileTag',
        component: () =>
          import(
            /* webpackChunkName: "profile-posts" */ '@/views/profile/Tag.vue'
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
