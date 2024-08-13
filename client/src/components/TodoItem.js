import React from 'react';
import './styles/_todoitem.scss';
import { formatDateToStockholm } from '../utils/dateUtils';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

function TodoItem({ todo, onDeleteTodo, onUpdateTodo }) {
    const handleToggleComplete = () => {
        onUpdateTodo(todo._id);
    };

    const handleDelete = () => {
        onDeleteTodo(todo._id);
    };

    const formattedDate = formatDateToStockholm(todo.createdAt);

    return (
        <div className="todo-item">
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
