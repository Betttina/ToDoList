import /*React, */{useEffect, useState} from 'react';
import TodoItem from './TodoItem';
import './styles/_todolist.scss';
import {getTodos, updateTodo} from "../services/api";

/*function TodoList({ todos = [], filter, onDeleteTodo, onUpdateTodo }) {
    let filteredTodos;

    switch (filter) {
        case 'active':
            filteredTodos = todos.filter(todo => !todo.completed); // not done
            break;
        case 'completed':
            filteredTodos = todos.filter(todo => todo.completed); // done posts
            break;
        default:
            filteredTodos = todos; // display all
            break;
    }

    return (
        <div className="todo-list">
            {filteredTodos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onUpdateTodo={onUpdateTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;*/


const TodoList = () => {
    const [todos, setTodos] = useState([]);

   /* useEffect(() => {
        // hämta todo-listan från servern
        fetch('/api/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(data); // Uppdatera state med hämtade todo-objekt
                console.log('Hämtade todos:', data); //  se vad som hämtas
            })
            .catch(error => console.error('Error fetching todos:', error));
    }, []);*/



    const fetchTodos = async () => {
        const todosFromServer = await getTodos();
        setTodos(todosFromServer);
    };

    useEffect(() => {
        fetchTodos();
    }, []);


    const handleUpdate = async (id, updatedTodo) => {
        try {
            const updatedData = await updateTodo(id, updatedTodo);
            const updatedTodos = todos.map(todo =>
                todo._id === id ? { ...todo, ...updatedData } : todo
            );
            setTodos(updatedTodos);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    return (
        <div>
            {todos.length === 0 ? (
                <p>Inga todo-poster att visa</p>
            ) : (
                todos.map(todo => (
                    <TodoItem key={todo._id} todo={todo} onUpdate={handleUpdate} />
                ))
            )}
        </div>
    );
};

export default TodoList;