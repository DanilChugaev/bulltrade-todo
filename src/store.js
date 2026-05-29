import { createStore } from 'vuex';
import { transformText } from './helpers';
let uniqueId = 0;
// Create a new store instance.
const store = createStore({
    state() {
        return {
            fullText: '',
            todoList: [],
        };
    },
    getters: {
        getTodoById: (state) => (id) => {
            return state.todoList.find(item => item.id === Number(id));
        }
    },
    mutations: {
        setFullText(state, text) {
            state.fullText = text;
        },
        setTodoList(state, todoList) {
            state.todoList = todoList;
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
        deleteTodo(state, id) {
            state.todoList = state.todoList.filter(item => item.id !== id);
        },
        completeTodo(state, id) {
            state.todoList.forEach(item => {
                if (item.id === id) {
                    item.done = true;
                }
            });
        },
        editTodo(state, todo) {
            state.todoList.forEach(item => {
                if (item.id === todo.id) {
                    item.text = transformText(todo.fullText);
                    item.fullText = todo.fullText;
                }
            });
        },
    },
});
export default store;
//# sourceMappingURL=store.js.map