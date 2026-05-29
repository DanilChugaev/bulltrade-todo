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
      <draggable
        :model-value="todoList"
        @update:model-value="setTodoList"
        group="people" 
        @start="drag=true" 
        @end="drag=false" 
        item-key="id"
      >
        <template #item="{element}">
          <todo-item-component
            :todo="element"
            @onDelete="deleteTodo"
            @onComplete="completeTodo"
            @onEdit="editTodo"
          />
        </template>
      </draggable>
    </todo-container>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Draggable from 'vuedraggable';

import UiInput from '~/components/ui-input.vue';
import UiButton from '~/components/ui-button.vue';
import TodoContainer from '~/components/todo-container.vue';
import TodoItemComponent from '~/components/todo-item.vue';

import { EDIT_URL } from '~/constants';
import type { TodoItem } from '~/types';

export default {
  name: 'index',

  components: {
    UiInput,
    UiButton,
    TodoContainer,
    TodoItemComponent,
    Draggable,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const drag = ref(false);

    const fullText = computed(() => store.state.fullText);
    const todoList = computed(() => store.state.todoList);
    const setFullText = (text: string) => store.commit('setFullText', text);
    const setTodoList = (list: TodoItem[]) => store.commit('setTodoList', list);
    const addTodoToList = () => {
      if (fullText.value.length) {
        store.commit('addTodoToList');
      }
    };
    const deleteTodo = (id: number) => store.commit('deleteTodo', id);
    const completeTodo = (id: number) => store.commit('completeTodo', id);
    const editTodo = (id: number) => router.push(`${EDIT_URL}/${id}`);

    return {
      fullText,
      todoList,
      setFullText,
      addTodoToList,
      deleteTodo,
      completeTodo,
      editTodo,
      setTodoList,
      drag,
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