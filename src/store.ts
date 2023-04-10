import { createStore } from 'vuex';
import type { TodoItem } from './types';
import { transformText } from './helpers';

let uniqueId = 0;

// Create a new store instance.
const store = createStore({
  state () {
    return {
      fullText: '',
      todoList: [] as TodoItem[],
    };
  },

  getters: {
    getTodoById: (state) => (id: TodoItem['id']) => {
      return state.todoList.find(item => item.id === Number(id));
    }
  },

  mutations: {
    setFullText(state, text: TodoItem['text']) {
      state.fullText = text;
    },

    addTodoToList(state) {
      state.todoList.push({
        id: ++uniqueId,
        text: transformText(state.fullText),
        fullText: state.fullText,
        done: false,
      });

      state.fullText = '';
    },

    deleteTodo(state, id: TodoItem['id']) {
      state.todoList = state.todoList.filter(item => item.id !== id);
    },

    completeTodo(state, id: TodoItem['id']) {
      state.todoList.forEach(item => {
        if (item.id === id) {
          item.done = true;
        }
      });
    },

    editTodo(state, todo: Partial<TodoItem>) {
      state.todoList.forEach(item => {
        if (item.id === todo.id) {
          item.text = transformText(todo.fullText as string);
          item.fullText = todo.fullText as string;
        }
      });
    },
  },
});

export default store;