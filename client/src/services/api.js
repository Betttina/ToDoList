const API_URL = 'http://localhost:5000/todos';

// get all
export const getTodos = async () => {
    const response = await fetch(API_URL);
    return await response.json();
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
            console.error('Response text:', await response.text()); // Logga hela svaret
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json(); // Förväntar oss JSON tillbaka
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
export const updateTodo = async (id, updates) => {
    // updates (object) contains the new values for completed: true/false.
    const response = await fetch(`${API_URL}/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
    });

    if (!response.ok){
        throw new Error('Failed to update the todo');
    }

    const updatedTodo = await response.json(); //return the updated post
    return updatedTodo;
};


