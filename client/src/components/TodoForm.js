import React, { useState } from 'react';
import { addTodo } from '../services/api';

function TodoForm(){
    const [title, setTitle] = useState ('');
    const [description, setDescription ] = useState('');

    /*const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
            title, description,
            completed: false,
        }).then(() => {
            setTitle('');
            setDescription('');
        })
    };*/

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTodo = await addTodo({ title, description });
        onTodoAdded(newTodo); // Meddela TodoList att en ny to-do har lagts till
        setTitle('');
        setDescription('');
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
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
                />

            <button type="submit">Add To-Do</button>

        </form>
    )
}

export default TodoForm;
