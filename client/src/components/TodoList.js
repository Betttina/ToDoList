import React from 'react';
import TodoItem from './TodoItem';
import './styles/_todolist.scss';

function TodoList({ todos }) {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;
