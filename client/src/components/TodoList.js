import React from 'react';
import TodoItem from './TodoItem';
import './styles/_todolist.scss';

function TodoList({ todos = [], filter, onDeleteTodo, onUpdateTodo }) {
    let filteredTodos;

    switch (filter) {
        case 'active':
            filteredTodos = todos.filter(todo => !todo.completed); // not done
            break;
        case 'completed':
            filteredTodos = todos.filter(todo => todo.completed); // done posts
            break;
        default:
            filteredTodos = todos; // display all
            break;
    }

    return (
        <div className="todo-list">
            {filteredTodos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onUpdateTodo={onUpdateTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
