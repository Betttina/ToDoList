import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { getTodos } from '../services/api';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(data => setTodos(data));
    }, []);

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList;