import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import TodoPage from './components/TodoPage';
import Footer from './components/Footer';
import './App.scss';
import theme from './theme';


function App() {


    return (
        <ThemeProvider theme={theme}>
            <div className="todo-app">

        <Router>
            <div className="TodoApp">
                <Header />

                <Routes>
                    <Route path="/" element={ <TodoPage />} />
                </Routes>

                <Footer />
            </div>
        </Router>

                </div>
        </ThemeProvider>
    );
}

export default App;
