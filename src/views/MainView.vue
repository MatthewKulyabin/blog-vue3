<template>
  <div class="container">
    <h1>Header</h1>
    <div class="grid">
      <app-article
        v-for="(article, index) in articles"
        :key="index"
        :id="article.id"
      ></app-article>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

import AppArticle from '@/components/AppArticle.vue';

export default {
  components: { AppArticle },
  name: 'HomeView',
  setup() {
    const store = useStore();
    return {
      articles: computed(() => store.getters['articles/articles']),
    };
  },
};
</script>
