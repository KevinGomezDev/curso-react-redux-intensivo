import React from 'react';
import './App.css';
import Human from '../Patterns/Human';
import Alien from '../Patterns/Alien';
import Animal from '../Patterns/Animal';

const App = () => (
    <div className="App">
        <Human parentProp='Hello Masmellow' />
        <Alien />
        <Animal />
    </div>
);

export default App;
