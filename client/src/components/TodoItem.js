import React, {useState} from 'react';
import './styles/_todoitem.scss';
import { formatDateToStockholm } from '../utils/dateUtils';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

function TodoItem({ todo, onDeleteTodo, onUpdateTodo }) {

    const [fadingOut, setFadingOut] = useState(false);
    /*const handleToggleComplete = () => {
        onUpdateTodo(todo._id);
    };*/

    const handleToggleComplete = () => {
        setFadingOut(true); // start anim
        setTimeout(() => { // delays to do-status until anim is done
            onUpdateTodo(todo._id, { completed: !todo.completed }); // update completed status
        }, 500); // match this time with css-anim
    };

    const handleDelete = () => {
        onDeleteTodo(todo._id);
    };

    const formattedDate = formatDateToStockholm(todo.createdAt);

    return (
        <div className={`todo-item ${fadingOut ? 'fade-out' : ''}`}>
            <h2 className={`todo-title ${todo.completed ? 'completed' : ''}`}>
                {todo.title}
            </h2>
            <p>{todo.description}</p>
            <p>Skapad: {formattedDate}</p>
            <div className="todo-actions">
                <button onClick={handleToggleComplete}>
                    <CheckCircleIcon className="check-icon" />
                    {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                </button>
                <Tooltip title="Ta bort uppgift" arrow>
                <button className="delete-button" onClick={handleDelete}>
                    <DeleteIcon className="delete-icon" />
                </button>
                </Tooltip>
            </div>
        </div>
    );
}

export default TodoItem;
