import React from 'react';
import './App.css';
import data from '../Patterns/data';
import Human from '../Patterns/Human';
import Alien from '../Patterns/Alien';
import Animal from '../Patterns/Animal';

const App = () => (
    <div className="App">
        <Human />
        <Alien />
        <Animal />
    </div>
);

export default App;
