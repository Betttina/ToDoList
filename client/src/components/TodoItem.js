import React from 'react';

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

export default TodoItem;
