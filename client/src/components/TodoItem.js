import React, {useState} from 'react';
import './styles/_todoitem.scss';
import { formatDateToStockholm } from '../utils/dateUtils';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
/*import {updateTodo} from "../services/api";*/
import Button from "@mui/material/Button";
/*
import { handleSave } from '../services/api';
*/

function TodoItem({ title, description, todo, onDeleteTodo, onUpdate }) {

    const [isEditing, setIsEditing] = useState(false); // edit-mode
    const [editedTitle, setEditedTitle] = useState(todo.title || '');
    const [editedDescription, setEditedDescription] = useState(todo.description || '');

    console.log('Rendering TodoItem with:', todo);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        onUpdate(todo._id, { title: editedTitle, description: editedDescription });
    };

    const handleEdit = () => {
        setIsEditing(true); // activate edit-mode
    };

    const handleToggleComplete = () => {
        // Logik för att markera en todo som färdig eller inte
    };

    const [fadingOut, setFadingOut] = useState(false);


    /*
    /!*const handleToggleComplete = () => {
        onUpdateTodo(todo._id);
    };*!/

    const handleToggleComplete = () => {
        setFadingOut(true); // start anim
        setTimeout(() => { // delays to do-status until anim is done
            onUpdateTodo(todo._id, { completed: !todo.completed }); // update completed status
        }, 500); // match this time with css-anim
    };



    /!*const handleSaveClick = async () => {
        try {
            await updateTodo(todo._id, {title, description}); // func for saving edits
            onUpdateTodo(todo._id, {title, description}); // update after save
            setIsEditing(false); // deactivate edit mode
        } catch (error) {
           console.error('Failed to save todo:', error);
        }
    };*!/


    const handleSaveClick = async () => {
        try {
            console.log('Sending update request for:', todo._id);
            console.log('Data being sent:', { title, description });
            console.log('Saving todo:', todo._id, { title, description }); // Logga data som skickas

            const updatedTodo = await updateTodo(todo._id, { title, description });

            console.log('Updated todo from server:', updatedTodo); // Logga svaret från servern

            onUpdateTodo(todo._id, updatedTodo); // Uppdatera state med den nya objektet
            setIsEditing(false); // Deaktivera redigeringsläge
        } catch (error) {
            console.error('Failed to save the todo:', error);
        }
    };*/


    const handleDelete = () => {
        onDeleteTodo(todo._id);
    };

    const formattedDate = formatDateToStockholm(todo.createdAt);

    return (
        <div className={`todo-item ${fadingOut ? 'fade-out' : ''}`}>
            {isEditing ? (
                <div>
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setEditedTitle (e.target.value)}
                    />
                    <textarea
                        value="description"
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />

                    <button onClick={handleSaveClick}>Save</button>
                </div>
            ) : (

                // if not in edit-mode, display regular todo-layout
            <div>

                <>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <Button onClick={handleEditClick}>Edit</Button>
                </>

            <h2 className={`todo-title ${todo.completed ? 'completed' : ''}`}>
                {title}
            </h2>
            <p>{description}</p>
            <p>Skapad: {formattedDate}</p>
            <div className="todo-actions">
                <button onClick={handleToggleComplete}> {/*knapp för växling av fulländad-status*/}
                    <CheckCircleIcon className="check-icon" />
                    {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                </button>

                <Tooltip title="Redigera uppgift" arrow>
                    <button onClick={handleEdit}>
                        <EditIcon className="edit-icon"/>
                    </button>
                </Tooltip>

                <Tooltip title="Ta bort uppgift" arrow>
                <button className="delete-button" onClick={handleDelete}>
                    <DeleteIcon className="delete-icon" />
                </button>
                </Tooltip>

                <button onClick={() => setIsEditing(true)}>✏️</button> {/* Redigeringsknapp */}


            </div>
        </div>
    )}
</div>
);
}

export default TodoItem;
