import { createStore } from 'vuex';
import type { TodoItem } from './types';

let uniqueId = 0;

// Create a new store instance.
const store = createStore({
  state () {
    return {
      text: '',
      todoList: [] as TodoItem[],
    };
  },

  mutations: {
    setText(state, text: TodoItem['text']) {
      state.text = text;
    },

    addTodoToList(state) {
      state.todoList.push({
        id: ++uniqueId,
        text: state.text,
        done: false,
      });

      state.text = '';
    },

    deleteTodo(state, id: TodoItem['id']) {
      state.todoList = state.todoList.filter(item => item.id !== id);
    },

    completeTodo(state, id: TodoItem['id']) {
      state.todoList.forEach(item => {
        if (item.id === id) {
          item.done = true;
        }

        return item;
      });
    },
  },
});

export default store;