import { createStore, createLogger } from 'vuex';

import articles from './modules/articles.module';
import auth from './modules/auth.module';

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger());
}

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    articles,
    auth,
  },
  plugins,
});
