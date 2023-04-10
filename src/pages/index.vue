<template>
  <div class="index">
    <h2>Список задач</h2>

    <div class="index__input-container">
      <ui-input
        :model-value="text"
        @update:model-value="setText"
        placeholder="введите новую задачу"
      />
      <ui-button
        @click="addTodoToList"
        :disabled="Boolean(!text)"
      >
        Создать задачу
      </ui-button>
    </div>

    <todo-container class="index__todo-container">
        <todo-item
          v-for="item in todoList"
          :key="item.id"
          :todo="item"
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

    const text = computed(() => store.state.text);
    const todoList = computed(() => store.state.todoList);
    const setText = (text) => store.commit('setText', text);
    const addTodoToList = () => store.commit('addTodoToList');
    const deleteTodo = (id) => store.commit('deleteTodo', id);
    const completeTodo = (id) => store.commit('completeTodo', id);
    const editTodo = (id) => router.push(`/edit/${id}`);

    return {
      text,
      todoList,
      setText,
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