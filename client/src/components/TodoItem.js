/*import React from 'react';

function TodoItem({ todo }) {
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default TodoItem;*/


import React from 'react';
import { deleteTodo, updateTodo } from '../services/api';
/*
import './styles/_todoitem.scss';
*/

function TodoItem({ todo }) {
    const handleDelete = async () => {
        await deleteTodo(todo._id);
        // Uppdatera listan efter radering om nödvändigt
    };

    const handleToggleComplete = async () => {
        await updateTodo(todo._id, { ...todo, completed: !todo.completed });
        // Uppdatera listan efter uppdatering om nödvändigt
    };

    return (
        <div className="todo-item">
            <h2 className={`todo-title ${todo.completed ? 'completed' : ''}`}>
                {todo.title}
            </h2>
            <p>{todo.description}</p>
            <div className="todo-actions">
                <button onClick={handleToggleComplete}>
                    {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                </button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
