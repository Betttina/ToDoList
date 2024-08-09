const router = require('express').Router();
let Todo = require('../models/todo.model');

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

    const newTodo = new Todo({
        title,
        description,
        completed,
    });

    newTodo.save()
        /*.then(() => res.json('To-Do added!'))*/
        .then(savedTodo => res.json(savedTodo)) // Returnera den nyligen skapade to-do-posten
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
/*router.route('/update/:id').put((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.completed = req.body.completed;

            todo.save()
                /!*.then(() => res.json('To-Do updated!'))*!/
                .then(updatedTodo => res.json(updatedTodo)) // return object
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});*/

router.route('/update/:id').put((req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedTodo => res.json(updatedTodo))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
