const API_URL = 'http://localhost:5000/todos';

// get all
/*export const getTodos = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};*/

export const getTodos = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error; // Återkasta felet så att anroparen kan hantera det
    }
};

export const addTodo = async (todo) => {
    try {
        const response = await fetch(`${API_URL}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });

        if (!response.ok) {
            console.error('Response status:', response.status);
            console.error('Response text:', await response.text());
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json(); // expecting json back
    } catch (error) {
        console.error('API call failed:', error);
        throw error; // Kasta om felet för att hanteras i `handleSubmit`
    }
};


// delete
export const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
};

// UPDATE ITEM BASED ON ID
/*export const updateTodo = async (id, updates) => {
    try {
        const response = await fetch(`${API_URL}/update/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
        });

        if (!response.ok) {
            throw new Error(`Failed to update the todo: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error details:', error);
        throw error;
    }
};*/

export const updateTodo = async (id, updatedTodo) => {
    try {
        const response = await fetch(`/api/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTodo),
        });

        if (!response.ok) {
            throw new Error('Failed to update todo');
        }

        const updatedData = await response.json();
        return updatedData;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
};



/*export const handleSave = async (id, updatedData) => {
    try {
        const response = await fetch(`http://localhost:5000/todos/update/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error('Failed to update the todo');
        }

        const updatedTodo = await response.json();
        // Uppdatera frontendens state med det nya värdet
        setTodos(prevTodos =>
            prevTodos.map(todo => todo._id === id ? updatedTodo : todo)
        );
    } catch (error) {
        console.error(error);
    }
};*/



