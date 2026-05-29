import { defineComponent } from 'vue';
import UiButton from '~/components/ui-button.vue';
export default defineComponent({
    name: 'todo-item',
    components: {
        UiButton,
    },
    props: {
        todo: {
            type: Object,
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
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
const __VLS_componentsOption = {
    UiButton,
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "todo-item" },
    ...{ class: ({
            'todo-item--is-done': __VLS_ctx.todo.done,
        }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.editTodo) },
    ...{ class: "todo-item__text" },
    title: (__VLS_ctx.todo.fullText),
});
(__VLS_ctx.todo.text);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "todo-item__actions" },
});
const __VLS_0 = {}.UiButton;
/** @type {[typeof __VLS_components.UiButton, typeof __VLS_components.uiButton, typeof __VLS_components.UiButton, typeof __VLS_components.uiButton, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    ...{ class: "todo-item__delete" },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    ...{ class: "todo-item__delete" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (__VLS_ctx.deleteTodo)
};
__VLS_3.slots.default;
var __VLS_3;
const __VLS_8 = {}.UiButton;
/** @type {[typeof __VLS_components.UiButton, typeof __VLS_components.uiButton, typeof __VLS_components.UiButton, typeof __VLS_components.uiButton, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ 'onClick': {} },
    ...{ class: "todo-item__complete" },
    disabled: (__VLS_ctx.todo.done),
}));
const __VLS_10 = __VLS_9({
    ...{ 'onClick': {} },
    ...{ class: "todo-item__complete" },
    disabled: (__VLS_ctx.todo.done),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onClick: (__VLS_ctx.completeTodo)
};
__VLS_11.slots.default;
var __VLS_11;
/** @type {__VLS_StyleScopedClasses['todo-item']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-item__text']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-item__actions']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-item__delete']} */ ;
/** @type {__VLS_StyleScopedClasses['todo-item__complete']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=todo-item.vue.js.map