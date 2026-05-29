import { mount } from '@vue/test-utils';
import UiInput from '../components/ui-input.vue';
test('UiInput component', async () => {
    expect(UiInput).toBeTruthy();
    const wrapper = mount(UiInput, {
        props: {
            modelValue: 'initialText',
            'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        },
    });
    expect(wrapper.classes('ui-input')).toBe(true);
    expect(wrapper.attributes('type')).toEqual('text');
    await wrapper.setValue('test');
    expect(wrapper.props('modelValue')).toBe('test');
});
//# sourceMappingURL=ui-input.test.js.map