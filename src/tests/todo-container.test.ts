import { mount } from '@vue/test-utils';
import TodoContainer from '../components/todo-container.vue';

describe('TodoContainer component', () => {
    test('with empty slot', () => {
        expect(TodoContainer).toBeTruthy();
    
        const wrapper = mount(TodoContainer, {
            slots: {
                default: '',
            },
        });
    
        expect(wrapper.html()).toContain('Список задач пуст');
        expect(wrapper.classes('todo-container')).toBe(true);
    });
    
    test('with filled slot', () => {
        expect(TodoContainer).toBeTruthy();
    
        const component = '<div>тестовый компонент</div>';
    
        const wrapper = mount(TodoContainer, {
            slots: {
                default: component,
            },
        });
    
        expect(wrapper.html()).toContain(component);
        expect(wrapper.classes('todo-container')).toBe(true);
    });
});



