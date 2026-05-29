<template>
  <button
    class="ui-button"
    :type="type"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ui-button',

  props: {
    type: {
        type: String as () => 'button' | 'reset' | 'submit' | undefined,
        default: 'button',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
  },
});
</script>

<style scoped lang="scss">
.ui-button {
  padding: 10px 15px;
  height: var(--ui-height);
  background: none;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  cursor: pointer;
}
</style>