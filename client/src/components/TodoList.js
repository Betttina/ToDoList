/*
import React from 'react';
import TodoItem from './TodoItem';
import './styles/_todolist.scss';

function TodoList({ todos = [], filter, onDeleteTodo, onUpdateTodo }) {
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

export default TodoList;
*/


/**/
/*

import React, { useState } from 'react';
import { Box, TextField, List, ListItem, ListItemIcon, ListItemText, Checkbox, IconButton, Button, Typography } from '@mui/material';
import { Add, Event } from '@mui/icons-material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [filter, setFilter] = useState('all');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: false, dueDate }]);
            setNewTodo('');
            setDueDate(null);
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Typography variant="h4" sx={{ color: '#365F62', marginBottom: 2 }}>Todo List</Typography>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                    <TextField
                        fullWidth
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Add a new task"
                        variant="outlined"
                        sx={{ marginRight: 1 }}
                    />
                    <DatePicker
                        value={dueDate}
                        onChange={setDueDate}
                        renderInput={(params) => <TextField {...params} sx={{ width: 120, marginRight: 1 }} />}
                    />
                    <IconButton onClick={addTodo} sx={{ backgroundColor: '#365F62', color: 'white', '&:hover': { backgroundColor: '#2a4b4d' } }}>
                        <Add />
                    </IconButton>
                </Box>
                <List>
                    {filteredTodos.map((todo, index) => (
                        <ListItem key={index} sx={{ backgroundColor: 'white', marginBottom: 1, borderRadius: 1 }}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(index)}
                                    sx={{ color: '#365F62', '&.Mui-checked': { color: '#365F62' } }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={todo.text}
                                secondary={todo.dueDate && `Due: ${todo.dueDate.toLocaleDateString()}`}
                                sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            />
                            {todo.dueDate && (
                                <IconButton size="small">
                                    <Event sx={{ color: '#365F62' }} />
                                </IconButton>
                            )}
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    {['all', 'active', 'completed'].map((f) => (
                        <Button
                            key={f}
                            onClick={() => setFilter(f)}
                            sx={{
                                marginX: 1,
                                backgroundColor: filter === f ? '#365F62' : 'transparent',
                                color: filter === f ? 'white' : '#365F62',
                                '&:hover': { backgroundColor: filter === f ? '#2a4b4d' : 'rgba(54, 95, 98, 0.1)' }
                            }}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </Button>
                    ))}
                </Box>
            </Box>
        </LocalizationProvider>



    );
};

export default TodoList;*/

/*import React from 'react';
import TodoItem from './TodoItem';
import './styles/_todolist.scss';

function TodoList({ todos = [], filter, onDeleteTodo, onUpdateTodo }) {
    console.log("TodoList rendering. Todos:", todos, "Filter:", filter);

    const filteredTodos = todos.filter(todo => {
        switch (filter) {
            case 'active':
                return !todo.completed;
            case 'completed':
                return todo.completed;
            default:
                return true;
        }
    });

    console.log("Filtered todos:", filteredTodos);

    return (
        <div className="todo-list">
            {filteredTodos.length === 0 ? (
                <p>No todos to display.</p>
            ) : (
                filteredTodos.map(todo => (
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onUpdateTodo={onUpdateTodo}
                    />
                ))
            )}
        </div>
    );
}

export default TodoList;*/


/*
import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Checkbox, IconButton, Button, Typography } from '@mui/material';
import { Event } from '@mui/icons-material';
import { formatDateToStockholm } from '../utils/dateUtils'; // Antag att du har denna funktion

const TodoList = ({ todos, onToggleComplete, onDeleteTodo, onUpdateTodo }) => {
    const [filter, setFilter] = React.useState('all');

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Typography variant="h4" sx={{ color: '#365F62', marginBottom: 2 }}>Todo List</Typography>
            <List>
                {filteredTodos.map((todo) => (
                    <ListItem key={todo._id} sx={{ backgroundColor: 'white', marginBottom: 1, borderRadius: 1 }}>
                        <ListItemIcon>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => onToggleComplete(todo._id)}
                                sx={{ color: '#365F62', '&.Mui-checked': { color: '#365F62' } }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={todo.title}
                            secondary={
                                <>
                                    <Typography component="span" variant="body2">{todo.description}</Typography>
                                    <br />
                                    {todo.createdAt && `Skapad: ${formatDateToStockholm(todo.createdAt)}`}
                                </>
                            }
                            sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        />
                        <IconButton size="small" onClick={() => onDeleteTodo(todo._id)}>
                            <Event sx={{ color: '#365F62' }} />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                {['all', 'active', 'completed'].map((f) => (
                    <Button
                        key={f}
                        onClick={() => setFilter(f)}
                        sx={{
                            marginX: 1,
                            backgroundColor: filter === f ? '#365F62' : 'transparent',
                            color: filter === f ? 'white' : '#365F62',
                            '&:hover': { backgroundColor: filter === f ? '#2a4b4d' : 'rgba(54, 95, 98, 0.1)' }
                        }}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default TodoList;*/

import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Checkbox, IconButton, Button, Typography } from '@mui/material';
import { Event, Delete, Edit } from '@mui/icons-material';
import { formatDateToStockholm } from '../utils/dateUtils'; // Antag att du har denna funktion
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

const TodoList = ({ todos, onToggleComplete, onDeleteTodo, onUpdateTodo }) => {
    const [filter, setFilter] = React.useState('all');
    const [editingTodo, setEditingTodo] = React.useState(null);

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const handleEdit = (todo) => {
        setEditingTodo({ ...todo });
    };

    const handleSave = () => {
        onUpdateTodo(editingTodo._id, editingTodo);
        setEditingTodo(null);
    };

    const handleDateChange = (date) => {
        setEditingTodo({ ...editingTodo, dueDate: date });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>


                <Typography variant="h4" sx={{ color: '#365F62', marginBottom: 2 }}>Todo List</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    {['all', 'active', 'completed'].map((f) => (
                        <Button
                            key={f}
                            onClick={() => setFilter(f)}
                            sx={{
                                marginX: 1,
                                backgroundColor: filter === f ? '#365F62' : 'transparent',
                                color: filter === f ? 'white' : '#365F62',
                                '&:hover': { backgroundColor: filter === f ? '#2a4b4d' : 'rgba(54, 95, 98, 0.1)' }
                            }}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </Button>
                    ))}
                </Box>

                <List>
                    {filteredTodos.map((todo) => (
                        <ListItem key={todo._id} sx={{ backgroundColor: 'white', marginBottom: 1, borderRadius: 1 }}>
                            {editingTodo && editingTodo._id === todo._id ? (
                                <>
                                    <TextField
                                        value={editingTodo.title}
                                        onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
                                        fullWidth
                                        margin="dense"
                                    />
                                    <TextField
                                        value={editingTodo.description}
                                        onChange={(e) => setEditingTodo({ ...editingTodo, description: e.target.value })}
                                        fullWidth
                                        margin="dense"
                                        multiline
                                    />
                                    <DatePicker
                                        value={editingTodo.dueDate}
                                        onChange={handleDateChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    <Button onClick={handleSave}>Save</Button>
                                </>
                            ) : (
                                <>
                                    <ListItemIcon>
                                        <Checkbox
                                            checked={todo.completed}
                                            onChange={() => onToggleComplete(todo._id)}
                                            sx={{ color: '#365F62', '&.Mui-checked': { color: '#365F62' } }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={todo.title}
                                        secondary={
                                            <>
                                                <Typography component="span" variant="body2">{todo.description}</Typography>
                                                <br />
                                                {todo.createdAt && `Skapad: ${formatDateToStockholm(todo.createdAt)}`}
                                                <br />
                                                {todo.dueDate && `Deadline: ${formatDateToStockholm(todo.dueDate)}`}
                                            </>
                                        }
                                        sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                    />
                                    <IconButton size="small" onClick={() => handleEdit(todo)}>
                                        <Edit sx={{ color: '#365F62' }} />
                                    </IconButton>
                                    <IconButton size="small" onClick={() => onDeleteTodo(todo._id)}>
                                        <Delete sx={{ color: '#365F62' }} />
                                    </IconButton>
                                </>
                            )}
                        </ListItem>
                    ))}
                </List>

            </Box>
        </LocalizationProvider>
    );
};

export default TodoList;
