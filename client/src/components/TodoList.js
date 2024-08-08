import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { getTodos } from '../services/api';

function TodoList() {
    const [todos, setTodos] = useState([]);

    /*useEffect(() => {
        getTodos().then(data => setTodos(data));
    }, []);*/

    useEffect(() => {
        setTodos([
            { _id: 1, title: 'Learn React', description: 'Learn the basics of React' },
            { _id: 2, title: 'Build To-Do App', description: 'Create a to-do app using React' }
        ]);
    }, []);

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList;