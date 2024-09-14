import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TodoPage from './components/TodoPage';
import Footer from './components/Footer';
import './App.scss';


function App() {


    return (
        <Router>
            <div className="App">
                <Header />

                <Routes>
                    <Route path="/" element={ <TodoPage />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
