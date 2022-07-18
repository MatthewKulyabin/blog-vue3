import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export const useLoginSignUp = (type) => {
  const store = useStore();
  const router = useRouter();
  const { isSubmitting, handleSubmit } = useForm();

  const {
    value: email,
    errorMessage: emailError,
    handleBlur: emailBlur,
  } = useField(
    'email',
    yup.string().required('Email is required').email('Email shoud be valid')
  );
  const {
    value: password,
    errorMessage: passwordError,
    handleBlur: passwordBlur,
  } = useField(
    'password',
    yup
      .string()
      .required('Password is required')
      .min(8, 'Password requires 8+ symbols')
  );

  const onSubmit = handleSubmit((values) => {
    switch (type) {
      case 'signUp':
        store.dispatch('auth/signUp', { id: Date.now(), ...values });
        router.push('/');
        break;
      case 'login':
        store.commit('auth/login', values);
        router.push('/');
        break;
    }
  });

  return {
    isSubmitting,
    onSubmit,

    email,
    emailError,
    emailBlur,

    password,
    passwordError,
    passwordBlur,
  };
};
