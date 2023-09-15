import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Imp from './components/Imp';
import Navigation from './components/Navigation'; // Import the Navigation component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Home />} />
				<Route path="/Imp" element={<Imp />} />
            </Routes>
        </Router>
    );
}

export default App;
