import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';
/*import './App.scss';*/

function App() {
  console.log("Rendering App");
  return (
      <div className="App">
        <Header/>
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
  );
}

export default App;
