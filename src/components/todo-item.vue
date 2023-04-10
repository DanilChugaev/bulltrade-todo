<template>
    <li
        class="todo-item"
        :class="{
            'todo-item--is-done': todo.done,
        }"
    >
        <div
            class="todo-item__text"
            @click="editTodo"
        >
            {{ todo.text }}
        </div>

        <div class="todo-item__actions">
            <ui-button
                @click="deleteTodo"
            >
                Удалить
            </ui-button>
            <ui-button
                @click="completeTodo"
                :disabled="todo.done"
            >
                Выполнено
            </ui-button>
        </div>
    </li>
</template>

<script lang="ts">
import UiButton from '~/components/ui-button.vue';

import { TodoItem } from '../types';

export default {
    name: 'todo-item',

    components: {
        UiButton,
    },

    props: {
        todo: {
            type: Object as TodoItem,
            required: true,
        },
    },

    setup(props, context) {
        const deleteTodo = () => context.emit('onDelete', props.todo.id);
        const completeTodo = () => context.emit('onComplete', props.todo.id);
        const editTodo = () => context.emit('onEdit', props.todo.id);

        return {
            deleteTodo,
            completeTodo,
            editTodo,
        };
  },
};
</script>

<style scoped lang="scss">
.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacer-mini);
    border: 1px solid var(--border-color);

    &--is-done {
        text-decoration: line-through;
        opacity: 0.5;
    }

    &__text {
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: var(--ui-height);
        padding-right: var(--spacer-mini);
        cursor: pointer;
    }

    &__actions {
        min-width: fit-content;
    }
}
</style>