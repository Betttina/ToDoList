// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,  Link } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';
import './App.scss';
import {
    getTodos,
    addTodo,
    deleteTodo as deleteTodoApi,
    /*updateTodo as updateTodoApi,*/
    updateTodo
} from './services/api';


function App() {
    console.log("Rendering App");
    const [todos, setTodos] = useState([]);


    // get all todos when app is rendered
    const fetchTodos = async () => {
        const todosFromServer = await getTodos();
        setTodos(todosFromServer);
    };
    useEffect(() => {
        fetchTodos();
    }, []);


    const handleTodoAdded = async (newTodoData) => {
        const newTodo = await addTodo(newTodoData); // Lägg till to-do och få tillbaka den från servern
        console.log('New Todo:', newTodo);
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    /*const handleToggleComplete = async (id) => {
        const todoToUpdate = todos.find(todo => todo._id === id);
        const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
        // Uppdatera todo i backend och sedan i state
        setTodos(prevTodos => prevTodos.map(todo => todo._id === id ? updatedTodo : todo));
    };*/

    const handleToggleComplete = async (id) => {
        const todoToUpdate = todos.find(todo => todo._id === id);
        const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

        try {
            // Uppdatera todo i backend först
            const updatedTodoFromServer = await updateTodo(id, { completed: updatedTodo.completed });
            // Uppdatera sedan state i frontend
            setTodos(prevTodos => prevTodos.map(todo => todo._id === id ? updatedTodoFromServer : todo));
        } catch (error) {
            console.error('Failed to toggle complete status:', error);
        }
    };


    const handleDeleteTodo = async (id) => {
        await deleteTodoApi(id);
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    };


    const handleUpdateTodo = async (id, updates) => {
        try {
            const updatedTodo = await updateTodo(id, updates); // calls api-func
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo._id === id ? updatedTodo : todo // update state with the updated post
                )
            );
        } catch (error) {
            console.error('Failed to update the todo:', error);
        }
    };



    return (
        <Router>
        <div className="App">
            <nav>
                <ul>
                    <li><Link to="/active">Aktiva</Link></li>
                    <li><Link to="/completed">Klara</Link></li>
                    <li><Link to="/">Alla</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/active" element={<TodoList filter="active" />} />
                <Route path="/completed" element={<TodoList filter="completed" />} />
                <Route path="/" element={<TodoList filter="all" />} />
            </Routes>
            <Header />
            <TodoForm onTodoAdded={handleTodoAdded} />
            <TodoList
                todos={todos}
                onToggleComplete={handleToggleComplete}
                onDeleteTodo={handleDeleteTodo}
                onUpdateTodo={handleUpdateTodo}  />
            <Footer />
        </div>
        </Router>
    );
}

export default App;
