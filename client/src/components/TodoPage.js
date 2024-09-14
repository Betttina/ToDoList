import TodoForm from "./TodoForm";
import React, {useEffect, useState} from "react";
import TodoList from "./TodoList";
import {addTodo, deleteTodo as deleteTodoApi, getTodos, updateTodo} from "../services/api";
import './styles/_todopage.scss';


const TodoPage = () => {

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
        const updatedTodo = {...todoToUpdate, completed: !todoToUpdate.completed};
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

        <div className="todo-container">

            <div className="todo-form-container">
                <TodoForm onTodoAdded={handleTodoAdded}/>

            </div>



            <div className="todo-list">

                <TodoList
                    todos={todos}
                    onToggleComplete={handleToggleComplete}
                    onDeleteTodo={handleDeleteTodo}
                    onUpdateTodo={handleUpdateTodo}
                />

            </div>



        </div>




);
};

export default TodoPage;