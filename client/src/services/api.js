const API_URL = 'http://localhost:5000/todos';

// get all
export const getTodos = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

// add
export const addTodo = async (todo) => {
    const response = await fetch (`${API_URL}/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(todo),
    });

    return await response.json();
};

// delete
export const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return await response.json();
};

// update
export const updateTodo = async (id, todo) => {
    const response = await fetch(`${API_URL}/update/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    return await response.json();
};


