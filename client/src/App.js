// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';
import './App.scss';
import { getTodos, addTodo, deleteTodo as deleteTodoApi, updateTodo as updateTodoApi } from './services/api';


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


    const handleTodoAdded = async (newTodoData) => {
        const newTodo = await addTodo(newTodoData); // Lägg till to-do och få tillbaka den från servern
        console.log('New Todo:', newTodo);
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const handleToggleComplete = async (id) => {
        const todoToUpdate = todos.find(todo => todo._id === id);
        const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
        // Uppdatera todo i backend och sedan i state
        setTodos(prevTodos => prevTodos.map(todo => todo._id === id ? updatedTodo : todo));
    };


    const handleDeleteTodo = async (id) => {
        await deleteTodoApi(id);
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    };

    const handleUpdateTodo = async (id) => {
        const todoToUpdate = todos.find(todo => todo._id === id);
        console.log('Updating todo:', todoToUpdate);

        const updatedTodo = await updateTodoApi(id, { ...todoToUpdate, completed: !todoToUpdate.completed });
        console.log('Updated todo from API:', updatedTodo);

        setTodos(prevTodos => prevTodos.map(todo => todo._id === id ? updatedTodo : todo));
    };

    return (

        <div className="App">
            <Header />
            <TodoForm onTodoAdded={handleTodoAdded} />
            <TodoList
                todos={todos}
                onToggleComplete={handleToggleComplete}
                onDeleteTodo={handleDeleteTodo}
                onUpdateTodo={handleUpdateTodo}  />
            <Footer />
        </div>
    );
}

export default App;
