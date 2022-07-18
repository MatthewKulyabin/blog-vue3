<template>
  <form class="form" @submit.prevent="onSubmit">
    <h2>Log In</h2>
    <div class="form__field">
      <label for="email">Email</label>
      <input
        :class="{ text__input__wrong: emailError }"
        type="text"
        id="email"
        class="text__input"
        v-model="email"
        @blur="emailBlur"
      />
      <span v-if="emailError || emailError2" style="color: red">{{
        emailError || emailError2
      }}</span>
    </div>
    <div class="form__field">
      <label for="password">Password</label>
      <input
        :class="{ text__input__wrong: passwordError }"
        type="password"
        id="password"
        class="text__input"
        v-model="password"
        @blur="passwordBlur"
      />
      <span v-if="passwordError" style="color: red">{{ passwordError }}</span>
      <br />
      <button class="button button__primary">Submit</button>
      <br />
      <br />
      <span
        ><router-link class="link__separate" to="/signUp"
          >SignUp</router-link
        ></span
      >
    </div>
  </form>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useLoginSignUp } from '@/use/loginSignUp';
import { useStore } from 'vuex';
export default {
  name: 'SignUpView',
  setup() {
    const store = useStore();
    return {
      ...useLoginSignUp('login'),
      emailError2: computed(() => store.getters['auth/emailError']),
    };
  },
};
</script>

<style></style>
