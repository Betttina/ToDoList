/*import React, { useState } from 'react';
import { addTodo } from '../services/api';
import PropTypes from 'prop-types';
import './styles/_todoform.scss';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Box, Typography} from "@mui/material";

function TodoForm({ onTodoAdded }){
    const [title, setTitle] = useState ('');
    const [description, setDescription ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validation to make sure that the fields are not empty
        if (!title || !description) {
            alert('Fyll i både rubrik och beskrivning.');
            return; // Cancel submitting the form
        }

        try {
            const newTodo = await addTodo({ title, description, completed: false });
            onTodoAdded(newTodo); // informing App that new post have been added

            // clean the fields
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Failed to add todo:', error);
            alert('Något gick fel när du försökte lägga till to-do-posten. Försök igen.');
        }
    };

    return (
        <Box className="todo-form-container">
            <form onSubmit={handleSubmit} className="todo-form">
                <Paper elevation={4} style={{padding:'2rem'}}>
                    <Typography variant="h6" gutterBottom>Lägg till en ny uppgift: </Typography>
                    <TextField
                        label="Rubrik"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={title || ''}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        label="Beskrivning"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={description || ''}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        rows={4}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Lägg till
                    </Button>
                </Paper>
            </form>
        </Box>
    )
}


TodoForm.propTypes = {
    onTodoAdded: PropTypes.func.isRequired
};

export default TodoForm;*/


import React, { useState } from 'react';
import { addTodo } from '../services/api';
import PropTypes from 'prop-types';
import './styles/_todoform.scss';
import { Paper, TextField, Button, Box, Typography } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

function TodoForm({ onTodoAdded }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert('Fyll i både rubrik och beskrivning.');
            return;
        }

        try {
            const newTodo = await addTodo({ title, description, dueDate, completed: false });
            onTodoAdded(newTodo);

            setTitle('');
            setDescription('');
            setDueDate(null);
        } catch (error) {
            console.error('Failed to add todo:', error);
            alert('Något gick fel när du försökte lägga till to-do-posten. Försök igen.');
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box className="todo-form-container">
                <form onSubmit={handleSubmit} className="todo-form">
                    <Paper elevation={4} style={{padding:'2rem'}}>
                        <Typography variant="h6" gutterBottom>Lägg till en ny uppgift: </Typography>
                        <TextField
                            label="Rubrik"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            label="Beskrivning"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={4}
                        />
                        <DatePicker
                            label="Deadline"
                            value={dueDate}
                            onChange={setDueDate}
                            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Lägg till
                        </Button>
                    </Paper>
                </form>
            </Box>
        </LocalizationProvider>
    )
}

TodoForm.propTypes = {
    onTodoAdded: PropTypes.func.isRequired
};

export default TodoForm;