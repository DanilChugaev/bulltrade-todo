import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Draggable from 'vuedraggable';
import UiInput from '~/components/ui-input.vue';
import UiButton from '~/components/ui-button.vue';
import TodoContainer from '~/components/todo-container.vue';
import TodoItemComponent from '~/components/todo-item.vue';
import { EDIT_URL } from '~/constants';
export default (await import('vue')).defineComponent({
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
        const setFullText = (text) => store.commit('setFullText', text);
        const setTodoList = (list) => store.commit('setTodoList', list);
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
            setTodoList,
            drag,
        };
    },
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    UiInput,
    UiButton,
    TodoContainer,
    TodoItemComponent,
    Draggable,
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "index" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "index__input-container" },
});
const __VLS_0 = {}.UiInput;
/** @type {[typeof __VLS_components.UiInput, typeof __VLS_components.uiInput, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onKeyup': {} },
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.fullText),
    placeholder: "введите новую задачу",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onKeyup': {} },
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.fullText),
    placeholder: "введите новую задачу",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onKeyup: (__VLS_ctx.addTodoToList)
};
const __VLS_8 = {
    'onUpdate:modelValue': (__VLS_ctx.setFullText)
};
__VLS_asFunctionalDirective(__VLS_directives.vFocus)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
var __VLS_3;
const __VLS_9 = {}.UiButton;
/** @type {[typeof __VLS_components.UiButton, typeof __VLS_components.uiButton, typeof __VLS_components.UiButton, typeof __VLS_components.uiButton, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ 'onClick': {} },
    disabled: (Boolean(!__VLS_ctx.fullText)),
}));
const __VLS_11 = __VLS_10({
    ...{ 'onClick': {} },
    disabled: (Boolean(!__VLS_ctx.fullText)),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
let __VLS_13;
let __VLS_14;
let __VLS_15;
const __VLS_16 = {
    onClick: (__VLS_ctx.addTodoToList)
};
__VLS_12.slots.default;
var __VLS_12;
const __VLS_17 = {}.TodoContainer;
/** @type {[typeof __VLS_components.TodoContainer, typeof __VLS_components.todoContainer, typeof __VLS_components.TodoContainer, typeof __VLS_components.todoContainer, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    ...{ class: "index__todo-container" },
}));
const __VLS_19 = __VLS_18({
    ...{ class: "index__todo-container" },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
const __VLS_21 = {}.draggable;
/** @type {[typeof __VLS_components.Draggable, typeof __VLS_components.draggable, typeof __VLS_components.Draggable, typeof __VLS_components.draggable, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    ...{ 'onUpdate:modelValue': {} },
    ...{ 'onStart': {} },
    ...{ 'onEnd': {} },
    modelValue: (__VLS_ctx.todoList),
    group: "people",
    itemKey: "id",
}));
const __VLS_23 = __VLS_22({
    ...{ 'onUpdate:modelValue': {} },
    ...{ 'onStart': {} },
    ...{ 'onEnd': {} },
    modelValue: (__VLS_ctx.todoList),
    group: "people",
    itemKey: "id",
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_25;
let __VLS_26;
let __VLS_27;
const __VLS_28 = {
    'onUpdate:modelValue': (__VLS_ctx.setTodoList)
};
const __VLS_29 = {
    onStart: (...[$event]) => {
        __VLS_ctx.drag = true;
    }
};
const __VLS_30 = {
    onEnd: (...[$event]) => {
        __VLS_ctx.drag = false;
    }
};
__VLS_24.slots.default;
{
    const { item: __VLS_thisSlot } = __VLS_24.slots;
    const [{ element }] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_31 = {}.TodoItemComponent;
    /** @type {[typeof __VLS_components.TodoItemComponent, typeof __VLS_components.todoItemComponent, ]} */ ;
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({
        ...{ 'onOnDelete': {} },
        ...{ 'onOnComplete': {} },
        ...{ 'onOnEdit': {} },
        todo: (element),
    }));
    const __VLS_33 = __VLS_32({
        ...{ 'onOnDelete': {} },
        ...{ 'onOnComplete': {} },
        ...{ 'onOnEdit': {} },
        todo: (element),
    }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    let __VLS_35;
    let __VLS_36;
    let __VLS_37;
    const __VLS_38 = {
        onOnDelete: (__VLS_ctx.deleteTodo)
    };
    const __VLS_39 = {
        onOnComplete: (__VLS_ctx.completeTodo)
    };
    const __VLS_40 = {
        onOnEdit: (__VLS_ctx.editTodo)
    };
    var __VLS_34;
}
var __VLS_24;
var __VLS_20;
/** @type {__VLS_StyleScopedClasses['index']} */ ;
/** @type {__VLS_StyleScopedClasses['index__input-container']} */ ;
/** @type {__VLS_StyleScopedClasses['index__todo-container']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=index.vue.js.map