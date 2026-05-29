import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ui-button',
    props: {
        type: {
            type: String,
            default: 'button',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "ui-button" },
    type: (__VLS_ctx.type),
    disabled: (__VLS_ctx.disabled),
});
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['ui-button']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=ui-button.vue.js.map