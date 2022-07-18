import AuthService from '@/services/auth.service';

export default {
  namespaced: true,
  state() {
    return {
      users: [],
      error: null,
      currentUser: localStorage.getItem('currentUser'),
    };
  },
  mutations: {
    getUsers(state, payload) {
      state.users = payload;
    },
    createError(state, payload) {
      state.error = payload;
    },
    deleteError(state) {
      state.error = null;
    },
    createUser(state, payload) {
      state.users.push(payload);
      state.currentUser = payload.id;
      localStorage.setItem('currentUser', payload.id);
    },
    login(state, payload) {
      let USER_EXISTS = false;
      state.users.forEach(
        (user) =>
          user.email === payload.email &&
          user.password === payload.password &&
          (USER_EXISTS = user.id)
      );
      if (!USER_EXISTS) {
        state.error = { email: 'Email or password is incorrect' };
      } else {
        localStorage.setItem('currentUser', USER_EXISTS);
        state.currentUser = USER_EXISTS;
        state.error = null;
      }
    },
    logout(state) {
      state.currentUser = null;
      localStorage.removeItem('currentUser');
    },
  },
  actions: {
    async requestUsers({ commit }) {
      const { content } = await AuthService.get();
      commit('getUsers', content);
    },
    async signUp({ commit, state }, payload) {
      let EMAIL_EXISTS = false;
      state.users.forEach(
        (user) => user.email === payload.email && (EMAIL_EXISTS = true)
      );
      if (EMAIL_EXISTS)
        commit('createError', { email: 'This email is already taken' });
      else {
        commit('deleteError');
        const { content } = await AuthService.post(payload);
        commit('createUser', content);
      }
    },
  },
  getters: {
    emailError(state) {
      return state.error?.email;
    },
    currentUser(state) {
      return state.currentUser;
    },
    isAdmin(state) {
      return (
        state.users.find((user) => user.id === +state.currentUser)?.role ===
        'admin'
      );
    },
  },
};
