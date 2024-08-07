const API_URL = 'http://localhost:5000/todos';

export const getTodos = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

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

//funk editTodo, deleteTodo
