import React, { useState } from 'react';
import { addTodo } from '../services/api';

function TodoForm(){
    const [title, setTitle] = useState ('');
    const [description, setDescripton ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            title, description,
            completed: false,
        }).then(() => {
            setTitle('');
            setDescripton('');
        })
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle (e.target.value)}
                placeholder="Title"
                required
                />

            <textarea
                value={description}
                onChange={(e) => setDescripton(e.target.value)}
                placeholder="Description"
                required
                />

            <button type="submit">Add To-Do</button>

        </form>
    )
}

export default TodoForm;
