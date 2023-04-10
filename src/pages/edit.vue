<template>
  <div class="edit">
    <h2>Редактирование задачи</h2>
    <router-link to='/'>Вернуться к списку</router-link>

    <div class="edit__input-container">
      <ui-input
        v-focus
        v-model="text"
        @keyup.enter="editTodo"
      />
      <ui-button
        @click="editTodo"
        :disabled="Boolean(!text)"
      >
        Редактировать
      </ui-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import UiInput from '~/components/ui-input.vue';
import UiButton from '~/components/ui-button.vue';

import { INDEX_URL } from '~/constants';

export default {
  name: 'edit',

  components: {
    UiInput,
    UiButton,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const text = ref('');

    const todoId = Number(router.currentRoute.value.params.id);
    const todoItem = computed(() => store.getters.getTodoById(todoId));

    if (todoItem.value) {
      text.value = todoItem.value.fullText;
    } else {
      router.push(INDEX_URL);
    }

    const editTodo = () => {
      if (text.value.length) {
        store.commit('editTodo', {
          id: todoId,
          fullText: text.value,
        });

        router.push(INDEX_URL);
      }
    };

    return {
      text,
      editTodo,
    };
  },
};
</script>

<style scoped lang="scss">
  .edit {
    padding: var(--spacer-main);

    &__input-container {
      margin-top: var(--spacer-main);
    }
  }
</style>