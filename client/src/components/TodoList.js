import React from 'react';
import TodoItem from './TodoItem';
import { getTodos } from '../services/api';
import './styles/_todolist.scss';

function TodoList({todos}) {
    /*const [todos, setTodos] = useState([]);*/

    /*useEffect(() => {
        getTodos().then(data => setTodos(data));
    }, []);*/

    /*useEffect(() => {
        fetchTodos();
    }, []);*/


    /*useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
    };*/

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList;