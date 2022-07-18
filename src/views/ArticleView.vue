<template>
  <div class="container">
    <h1>{{ article.title }}</h1>
    <p class="text">
      {{ article.longText }}
    </p>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
  name: 'ArticleView',
  setup() {
    const store = useStore();
    const route = useRoute();

    return {
      article: computed(() =>
        store.getters['articles/articleById'](+route.params.id)
      ),
    };
  },
};
</script>

<style></style>
