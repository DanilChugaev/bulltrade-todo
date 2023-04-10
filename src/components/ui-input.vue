<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="ui-input"
    type="text"
  >
</template>

<script lang="ts">
export default {
  name: 'ui-input',

  props: {
    modelValue: [String, Number],
  },

  setup(props, context) {
    const updateInput = () => context.emit('update:modelValue', event.target.value);

    return {
        updateInput,
    };
  },
};
</script>

<style scoped lang="scss">
.ui-input {
  width: 300px;
  height: var(--ui-height);
  padding: 0 var(--spacer-mini);
  border: 1px solid var(--border-color);
}
</style>