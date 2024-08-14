const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// connect to MongoDB
const uri = 'mongodb://localhost:27017/todolist';
mongoose.connect(uri);

const connection = mongoose.connection;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});


// import todos
const todoRouter = require('./routes/todos');
app.use('/todos', todoRouter);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`To-do-backend app listening on port ${port}`)
})