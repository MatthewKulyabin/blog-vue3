<template>
  <div class="container">
    <div class="admin__header">
      <h1>Articles</h1>
      <button
        class="button button__primary admin__header__create"
        @click.prevent="goToAdminArticleHandler"
      >
        Create New Article
      </button>
    </div>
    <div class="grid">
      <app-admin-article
        v-for="(article, index) in articles"
        :key="index"
        :goTo="() => goToAdminArticleHandler(article.id)"
        :id="article.id"
      ></app-admin-article>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AppAdminArticle from '../components/AppAdminArticle.vue';

export default {
  name: 'AdminView',
  components: { AppAdminArticle },
  setup() {
    const store = useStore();
    const router = useRouter();

    if (!store.getters['auth/isAdmin']) {
      router.push('/login');
    }

    const goToAdminArticleHandler = (id) => {
      router.push(`/admin/${id}`);
    };

    return {
      articles: computed(() => store.getters['articles/articles']),
      goToAdminArticleHandler,
    };
  },
};
</script>

<style></style>
