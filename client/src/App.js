// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';
import './App.scss';
import { getTodos } from './services/api';

function App() {
    console.log("Rendering App");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
    };

    const handleTodoAdded = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    return (

        <div className="App">
            <Header />
            <TodoForm onTodoAdded={handleTodoAdded} />
            <TodoList todos={todos} />
            <Footer />
        </div>
    );
}

export default App;
