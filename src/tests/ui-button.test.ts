import { mount } from '@vue/test-utils';
import UiButton from '../components/ui-button.vue';

test('UiButton component', () => {
    expect(UiButton).toBeTruthy();

    const type = 'submit';
    const disabled = true;
    const text = 'Кнопка';

    const wrapper = mount(UiButton, {
        props:{
            type,
            disabled,
        },
        slots: {
            default: text,
        },
    });

    expect(wrapper.text()).toContain('');
    expect(wrapper.classes('ui-button')).toBe(true);
    expect(wrapper.attributes('type')).toEqual(type);
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.html()).toContain(text);
});
