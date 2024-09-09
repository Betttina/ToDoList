const router = require('express').Router();
const Todo = require('../models/todo.model');

// get all posts
router.route('/').get((req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err));
});

// create a new post
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;
    const dueDate = req.body.dueDate;

    const newTodo = new Todo({
        title,
        description,
        completed,
        dueDate
    });

    newTodo.save()
        /*.then(() => res.json('To-Do added!'))*/
        .then(savedTodo => res.json(savedTodo)) // Return the latest created post
        .catch(err => res.status(400).json('Error: ' + err));
});

// get a specific post
router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err));
});

// delete a spec post
router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('To-Do deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update spec post based on id
/*router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id)
        // checks if id is matched with the post
        .then(todo => {
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.completed = req.body.completed;

            todo.save()
                .then(() => res.json(todo))
/!*
                .then(updatedTodo => res.json(updatedTodo)) // return object
*!/
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});*/

/*router.route('/update/:id').put((req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedTodo => res.json(updatedTodo))
        .catch(err => res.status(400).json('Error: ' + err));
});*/

// update an existing post
// Route för att uppdatera en to-do baserat på dess ID
/*router.post('/update/:id', (req, res) => {

    console.log('Received POST request to update todo with ID:', req.params.id);
    const { title, description, completed, dueDate } = req.body;

    Todo.findById(req.params.id)
        .then(todo => {
            if (!todo) {
                return res.status(404).json('Todo not found');
            }

            // Uppdatera de fält som skickats i begäran
            if (title !== undefined) todo.title = title;
            if (description !== undefined) todo.description = description;
            if (completed !== undefined) todo.completed = completed;

            /!*todo.completed = req.body.completed; // Uppdatera `completed`-fältet*!/

            // Lägg till andra fält som du vill uppdatera här om det behövs
            todo.save()
                /!*.then(() => res.json(todo))*!/
                .then(updatedTodo => res.json(updatedTodo))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/update/:id', (req, res) => {
    console.log('Simple update route hit');
    res.json({ message: 'Update route hit successfully', id: req.params.id, updates: req.body });
});*/


// Update an existing todo
router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.completed = req.body.completed;
            todo.dueDate = req.body.dueDate; // Uppdatera dueDate

            todo.save()
                .then(updatedTodo => res.json(updatedTodo)) // Returnera den uppdaterade todo-posten
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;
