<template>
  <div class="admin__article">
    <h3 class="admin__article__title" @click.prevent="goTo">
      {{ article.title }}
    </h3>
    <button
      class="button button__primary admin__article__delete"
      @click.prevent="() => deleteArticleHandler(id)"
    >
      X
    </button>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  name: 'AppAdminArticle',
  props: ['goTo', 'article', 'id'],
  setup(props) {
    const store = useStore();

    const deleteArticleHandler = (id) => {
      store.dispatch('articles/deleteArticle', id);
    };

    return {
      deleteArticleHandler,
      article: computed(() => store.getters['articles/articleById'](props.id)),
    };
  },
};
</script>

<style></style>
