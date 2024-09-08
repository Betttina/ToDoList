import React, {useState} from 'react';
import './styles/_todoitem.scss';
import { formatDateToStockholm } from '../utils/dateUtils';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import {updateTodo} from "../services/api";
import TextField from "@mui/material/TextField";
import {IconButton} from "@mui/material";
import Button from "@mui/material/Button";
/*
import { handleSave } from '../services/api';
*/

function SaveIcon() {
    return null;
}

function TodoItem({ todo, onDeleteTodo, onUpdateTodo }) {

    const [isEditing, setIsEditing] = useState(false); // edit-mode
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [fadingOut, setFadingOut] = useState(false);
    /*const handleToggleComplete = () => {
        onUpdateTodo(todo._id);
    };*/


    // when user marks post as "complete"
    const handleToggleComplete = () => {
        setFadingOut(true); // start anim
        setTimeout(() => { // delays to do-status until anim is done
            onUpdateTodo(todo._id, { completed: !todo.completed }); // update completed status
        }, 500); // match this time with css-anim
    };

    const handleEdit = () => {
        setIsEditing(true); // activate edit-mode
    };

    const handleSaveClick = async () => {
        try {
            await updateTodo(todo._id, {title, description}); // func for saving edits
            onUpdateTodo(todo._id, {title, description}); // update after save
            setIsEditing(false); // deactivate edit mode
        } catch (error) {
           console.error('Failed to save todo:', error);
        }
    };

    const handleDelete = () => {
        onDeleteTodo(todo._id);
    };

    const formattedDate = formatDateToStockholm(todo.createdAt);

    return (
        <div className={`todo-item ${fadingOut ? 'fade-out' : ''}`}>
            {isEditing ? (
                <div>
                    <TextField
                    type="text"
                    label="titel"
                    margin="normal"
                    value={title}
                    defaultValue=""
                    onChange={(e) => setTitle (e.target.value)}
                    />
                    <TextField
                        value={description}
                        label="beskrivning"
                        margin="normal"
                        fullWidth
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button onClick={handleSaveClick}>Save</button>

                    <Button startIcon={<SaveIcon />}>Spara</Button>

                    <IconButton aria-label="delete" className="bla">
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </div>
            ) : (
                // if not in edit-mode, display regular todo-layout
            <div>
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
            </div>
        </div>
    )}
</div>
);
}

export default TodoItem;
