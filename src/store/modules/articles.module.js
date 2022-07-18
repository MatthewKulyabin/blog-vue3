import ArticlesService from '@/services/articles.service';

export default {
  namespaced: true,
  state() {
    return {
      articles: [],
    };
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    },
    removeArticle(state, id) {
      state.articles = state.articles.filter((article) => article.id !== id);
    },
    createArticle(state, payload) {
      state.articles.push(payload);
    },
    updateArticle(state, payload) {
      const toUpdate = state.articles.findIndex(
        (article) => article.id === payload.id
      );
      state.articles[toUpdate] = payload;
    },
  },
  actions: {
    async requestArticles({ commit }) {
      const { content } = await ArticlesService.get();
      commit('setArticles', content);
    },
    async deleteArticle({ commit }, id) {
      const { content } = await ArticlesService.delete(id);
      commit('removeArticle', id);
    },
    async postArticle({ commit }, payload) {
      const { content } = await ArticlesService.post(payload);
      commit('createArticle', content);
    },
    async putArticle({ commit }, payload) {
      const { content } = await ArticlesService.put(payload.id, payload);
      commit('updateArticle', payload);
    },
  },
  getters: {
    articles(state) {
      console.log(state);
      return state.articles;
    },
    articleById: (state) => (id) => {
      return state.articles.find((article) => article.id === id);
    },
  },
};
