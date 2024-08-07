import React from 'react';
import TodoItem from './TodoItem';
import './styles/_todolist.scss';

/*function TodoList({ todos, onToggleComplete, onDelete }) {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    onToggleComplete={onToggleComplete}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}*/


function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
    return (
        <div className="todo-list">
            {todos.map(todo => (
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
