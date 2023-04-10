import { mount } from '@vue/test-utils';
import TodoItem from '../components/todo-item.vue';
import type { TodoItem as TodoItemType } from '../types';

const todo: TodoItemType = {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing...',
    fullText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati beatae nulla facere veritatis dolores quibusdam aut accusantium, dolor culpa quisquam assumenda, vitae ipsum ratione repellat, placeat molestiae. Pariatur, exercitationem tempora.',
    done: false,
};

describe('TodoItem component', () => {
    test('when todo is not done', () => {
        expect(TodoItem).toBeTruthy();

        const wrapper = mount(TodoItem, {
            props:{
                todo,
            },
        });
    
        expect(wrapper.text()).toContain(todo.text);
        expect(wrapper.find('.todo-item__text').attributes('title')).toEqual(todo.fullText);
        expect(wrapper.classes('todo-item')).toBe(true);
        expect(wrapper.classes('todo-item--is-done')).toBe(false);
    
        wrapper.find('.todo-item__text').trigger('click');
        wrapper.find('.todo-item__delete').trigger('click');
        wrapper.find('.todo-item__complete').trigger('click');
    
        const onDeleteEvent = wrapper.emitted('onDelete');
        const onCompleteEvent = wrapper.emitted('onComplete');
        const onEditEvent = wrapper.emitted('onEdit');
    
        expect(onDeleteEvent).toHaveLength(1);
        expect(onCompleteEvent).toHaveLength(1);
        expect(onEditEvent).toHaveLength(1);
    });

    test('when todo is done', () => {
        expect(TodoItem).toBeTruthy();

        const wrapper = mount(TodoItem, {
            props:{
                todo: {
                    ...todo,
                    done: true,
                },
            },
        });
    
        expect(wrapper.text()).toContain(todo.text);
        expect(wrapper.find('.todo-item__text').attributes('title')).toEqual(todo.fullText);
        expect(wrapper.classes('todo-item')).toBe(true);
        expect(wrapper.classes('todo-item--is-done')).toBe(true);
    
        wrapper.find('.todo-item__text').trigger('click');
        wrapper.find('.todo-item__delete').trigger('click');
        wrapper.find('.todo-item__complete').trigger('click');
    
        const onDeleteEvent = wrapper.emitted('onDelete');
        const onCompleteEvent = wrapper.emitted('onComplete');
        const onEditEvent = wrapper.emitted('onEdit');
    
        expect(onDeleteEvent).toHaveLength(1);
        expect(onCompleteEvent).toBeFalsy();
        expect(onEditEvent).toHaveLength(1);
    });
});
