<template>
  <div class="container">
    <h1>Add New Article</h1>
    <form class="new-article" @submit.prevent="onSubmit">
      <div>
        <input
          :class="{ text__input__wrong: titleError }"
          type="text"
          placeholder="Title"
          class="new-article__text"
          v-model="title"
          @blur="titleBlur"
        />
        <br />
        <span v-if="titleError" style="color: red">{{ titleError }}</span>
      </div>
      <div>
        <textarea
          :class="{ text__input__wrong: shortTextError }"
          placeholder="Short text"
          class="new-article__text new-article__short"
          v-model="shortText"
          @blur="shortTextBlur"
        ></textarea
        ><br />
        <span v-if="shortTextError" style="color: red">{{
          shortTextError
        }}</span>
      </div>
      <div>
        <textarea
          :class="{ text__input__wrong: longTextError }"
          placeholder="Long text"
          class="new-article__text new-article__long"
          v-model="longText"
          @blur="longTextBlur"
        ></textarea
        ><br />
        <span v-if="longTextError" style="color: red">{{ longTextError }}</span>
      </div>
      <br />
      <button class="button button__primary" :disabled="isSubmitting">
        Save
      </button>
    </form>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import { useAdminArticle } from '@/use/adminArticle';

export default {
  name: 'AdminArticleView',
  setup() {
    const store = useStore();
    const route = useRoute();

    if (!store.getters['auth/isAdmin']) {
      router.push('/login');
    }

    const id = +route.params.id;
    let currentArticle = null;

    if (id) {
      currentArticle = store.getters['articles/articleById'](id);
      console.log('Article Change');
    }

    return {
      ...useAdminArticle(currentArticle),
    };
  },
};
</script>

<style></style>
