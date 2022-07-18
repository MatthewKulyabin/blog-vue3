<template>
  <div class="article">
    <h2 class="article__header">{{ article.title }}</h2>
    <p class="article__text">
      {{ article.shortText }}
    </p>
    <button class="button button__white" @click.prevent="goToArticleHandler">
      Button
    </button>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  name: 'AppArticle',
  props: ['id'],
  setup(props) {
    const router = useRouter();
    const store = useStore();

    const goToArticleHandler = () => {
      router.push(`/main/${props.id}`);
    };
    return {
      goToArticleHandler,
      article: computed(() => store.getters['articles/articleById'](props.id)),
    };
  },
};
</script>

<style></style>
