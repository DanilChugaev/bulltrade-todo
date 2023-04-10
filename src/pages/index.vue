<template>
  <div class="index">
    <h2>Список задач</h2>

    <div class="index__input-container">
      <ui-input
        v-focus
        :model-value="fullText"
        @keyup.enter="addTodoToList"
        @update:model-value="setFullText"
        placeholder="введите новую задачу"
      />
      <ui-button
        @click="addTodoToList"
        :disabled="Boolean(!fullText)"
      >
        Создать задачу
      </ui-button>
    </div>

    <todo-container class="index__todo-container">
        <todo-item
          v-for="item in todoList"
          :key="item.id"
          :todo="item"
          :title="item.fullText"
          @onDelete="deleteTodo"
          @onComplete="completeTodo"
          @onEdit="editTodo"
        />
    </todo-container>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import UiInput from '~/components/ui-input.vue';
import UiButton from '~/components/ui-button.vue';
import TodoContainer from '~/components/todo-container.vue';
import TodoItem from '~/components/todo-item.vue';

import { EDIT_URL } from '~/constants';

export default {
  name: 'index',

  components: {
    UiInput,
    UiButton,
    TodoContainer,
    TodoItem,
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    const fullText = computed(() => store.state.fullText);
    const todoList = computed(() => store.state.todoList);
    const setFullText = (fullText) => store.commit('setFullText', fullText);
    const addTodoToList = () => {
      if (fullText.value.length) {
        store.commit('addTodoToList');
      }
    };
    const deleteTodo = (id) => store.commit('deleteTodo', id);
    const completeTodo = (id) => store.commit('completeTodo', id);
    const editTodo = (id) => router.push(`${EDIT_URL}/${id}`);

    return {
      fullText,
      todoList,
      setFullText,
      addTodoToList,
      deleteTodo,
      completeTodo,
      editTodo,
    };
  },
};
</script>

<style scoped lang="scss">
  .index {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spacer-main);

    &__input-container,
    &__todo-container {
      margin-top: var(--spacer-main);
      width: 100%;
      max-width: var(--container-width);
    }
  }
</style>