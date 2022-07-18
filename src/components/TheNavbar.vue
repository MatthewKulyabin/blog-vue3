<template>
  <header>
    <div ref="dropdown" class="dropdown" id="dropdown">
      <button
        class="dropdown__toggle"
        id="dropdown-toggle"
        @click.prevent="toggleButton"
      >
        Menu
      </button>
      <div class="dropdown__drawer">
        <ul class="menu">
          <li><router-link to="/">Main</router-link></li>
          <li v-if="isAdmin"><router-link to="/admin">Admin</router-link></li>
          <li v-if="!currentUser">
            <router-link to="/login">Log In</router-link>
          </li>
          <li v-else>
            <a @click.prevent="logout" class="admin__article__title">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'TheNavbar',
  setup() {
    const store = useStore();
    const router = useRouter();
    const dropdown = ref(null);

    const toggleButton = () => {
      dropdown.value.classList.toggle('is-open');
    };

    const logout = () => {
      store.commit('auth/logout');
      router.push('/login');
    };

    return {
      dropdown,
      toggleButton,
      logout,
      currentUser: computed(() => store.getters['auth/currentUser']),
      isAdmin: computed(() => store.getters['auth/isAdmin']),
    };
  },
};
</script>
