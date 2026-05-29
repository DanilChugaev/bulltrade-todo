import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import UiInput from '~/components/ui-input.vue';
import UiButton from '~/components/ui-button.vue';
import { INDEX_URL } from '~/constants';
export default (await import('vue')).defineComponent({
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
        }
        else {
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
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    UiInput,
    UiButton,
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "edit" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: '/',
}));
const __VLS_2 = __VLS_1({
    to: '/',
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "edit__input-container" },
});
const __VLS_4 = {}.UiInput;
/** @type {[typeof __VLS_components.UiInput, typeof __VLS_components.uiInput, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.text),
}));
const __VLS_6 = __VLS_5({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.text),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_8;
let __VLS_9;
let __VLS_10;
const __VLS_11 = {
    onKeyup: (__VLS_ctx.editTodo)
};
__VLS_asFunctionalDirective(__VLS_directives.vFocus)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
var __VLS_7;
const __VLS_12 = {}.UiButton;
/** @type {[typeof __VLS_components.UiButton, typeof __VLS_components.uiButton, typeof __VLS_components.UiButton, typeof __VLS_components.uiButton, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ 'onClick': {} },
    disabled: (Boolean(!__VLS_ctx.text)),
}));
const __VLS_14 = __VLS_13({
    ...{ 'onClick': {} },
    disabled: (Boolean(!__VLS_ctx.text)),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_16;
let __VLS_17;
let __VLS_18;
const __VLS_19 = {
    onClick: (__VLS_ctx.editTodo)
};
__VLS_15.slots.default;
var __VLS_15;
/** @type {__VLS_StyleScopedClasses['edit']} */ ;
/** @type {__VLS_StyleScopedClasses['edit__input-container']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=edit.vue.js.map