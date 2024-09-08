/*
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
    /!*updateTodo as updateTodoApi,*!/
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
*/

/*import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';
import './App.scss';
import {
    getTodos,
    addTodo,
    deleteTodo as deleteTodoApi,
    updateTodo
} from './services/api';

function App() {
    console.log("Rendering App");
    const [todos, setTodos] = useState([]);

    // get all todos when app is rendered
    const fetchTodos = async () => {
        const todosFromServer = await getTodos();
        console.log("Todos fetched from server:", todosFromServer);

        setTodos(todosFromServer);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleTodoAdded = async (newTodoData) => {
        const newTodo = await addTodo(newTodoData);
        console.log('New Todo:', newTodo);
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodoApi(id);
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    };

    const handleUpdateTodo = async (id, updates) => {
        try {
            const updatedTodo = await updateTodo(id, updates);
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo._id === id ? updatedTodo : todo
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
                <Header />
                <TodoForm onTodoAdded={handleTodoAdded} />
                <Routes>
                    <Route path="/active" element={
                        <TodoList
                            todos={todos}
                            filter="active"
                            onDeleteTodo={handleDeleteTodo}
                            onUpdateTodo={handleUpdateTodo}
                        />
                    } />
                    <Route path="/completed" element={
                        <TodoList
                            todos={todos}
                            filter="completed"
                            onDeleteTodo={handleDeleteTodo}
                            onUpdateTodo={handleUpdateTodo}
                        />
                    } />
                    <Route path="/" element={
                        <TodoList
                            todos={todos}
                            filter="all"
                            onDeleteTodo={handleDeleteTodo}
                            onUpdateTodo={handleUpdateTodo}
                        />
                    } />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;*/


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';
import './App.scss';
import {
    getTodos,
    addTodo,
    deleteTodo as deleteTodoApi,
    updateTodo
} from './services/api';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todosFromServer = await getTodos();
        setTodos(todosFromServer);
    };

    const handleTodoAdded = async (newTodoData) => {
        const newTodo = await addTodo(newTodoData);
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const handleToggleComplete = async (id) => {
        const todoToUpdate = todos.find(todo => todo._id === id);
        const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
        await updateTodo(id, updatedTodo);
        setTodos(prevTodos => prevTodos.map(todo => todo._id === id ? updatedTodo : todo));
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodoApi(id);
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    };

    const handleUpdateTodo = async (id, updates) => {
        try {
            const updatedTodo = await updateTodo(id, updates);
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo._id === id ? updatedTodo : todo
                )
            );
        } catch (error) {
            console.error('Failed to update the todo:', error);
        }
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <TodoForm onTodoAdded={handleTodoAdded} />
                <Routes>
                    <Route path="/" element={
                        <TodoList
                            todos={todos}
                            onToggleComplete={handleToggleComplete}
                            onDeleteTodo={handleDeleteTodo}
                            onUpdateTodo={handleUpdateTodo}
                        />
                    } />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
