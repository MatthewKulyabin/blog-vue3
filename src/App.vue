<template>
  <the-navbar></the-navbar>
  <router-view />
</template>

<script>
import { useStore } from 'vuex';

import TheNavbar from './components/TheNavbar.vue';

export default {
  components: { TheNavbar },
  setup() {
    const store = useStore();

    store.dispatch('articles/requestArticles');
    store.dispatch('auth/requestUsers');
  },
};
</script>
