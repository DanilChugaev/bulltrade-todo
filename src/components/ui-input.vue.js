export default (await import('vue')).defineComponent({
    name: 'ui-input',
    props: {
        modelValue: [String, Number],
    },
    setup(_props, context) {
        const updateInput = (event) => {
            const target = event.target;
            context.emit('update:modelValue', target.value);
        };
        return {
            updateInput,
        };
    },
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    ...{ onInput: (__VLS_ctx.updateInput) },
    value: (__VLS_ctx.modelValue),
    ...{ class: "ui-input" },
    type: "text",
});
/** @type {__VLS_StyleScopedClasses['ui-input']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=ui-input.vue.js.map