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
import './styles/_todoitem.scss';

function TodoItem({ todo, onDeleteTodo, onUpdateTodo }) {
    const handleToggleComplete = () => {
        onUpdateTodo(todo._id);
    };

    const handleDelete = () => {
        onDeleteTodo(todo._id);
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
