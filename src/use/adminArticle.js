import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export const useAdminArticle = (currentArticle) => {
  const store = useStore();
  const router = useRouter();
  const { isSubmitting, handleSubmit } = useForm(
    currentArticle && {
      initialValues: {
        ...currentArticle,
      },
    }
  );

  const {
    value: title,
    errorMessage: titleError,
    handleBlur: titleBlur,
  } = useField(
    'title',
    yup
      .string()
      .required('Title is Required')
      .min(3, 'Title should has 3 or more symbols')
      .max(10, 'Title should not has 11 or more symbols')
  );

  const {
    value: shortText,
    errorMessage: shortTextError,
    handleBlur: shortTextBlur,
  } = useField(
    'shortText',
    yup
      .string()
      .required('Short Text is Required')
      .min(10, 'Short Text should has 10 or more symbols')
      .max(20, 'Short Text should not has 21 or more symbols')
  );

  const {
    value: longText,
    errorMessage: longTextError,
    handleBlur: longTextBlur,
  } = useField(
    'longText',
    yup
      .string()
      .required('Long Text is Required')
      .min(20, 'Long Text should has 20 or more symbols')
  );

  const onSubmit = handleSubmit((values) => {
    if (!currentArticle) {
      store.dispatch('articles/postArticle', { id: Date.now(), ...values });
    } else {
      console.log('PUT');
      store.dispatch('articles/putArticle', {
        ...currentArticle,
        ...values,
      });
    }

    router.push('/admin');
  });

  return {
    isSubmitting,
    onSubmit,

    title,
    titleError,
    titleBlur,

    shortText,
    shortTextError,
    shortTextBlur,

    longText,
    longTextError,
    longTextBlur,
  };
};
