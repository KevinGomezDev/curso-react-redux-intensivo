import React from 'react';
import data from '../Patterns/data'
import './App.css';

import Human from '../Patterns/Human';
import Alien from '../Patterns/Alien';
import Animal from '../Patterns/Animal';

const App = () => (
    <div className="App">
        <Human { ...data} />
        <Alien {...data} />
        <Animal {...data} />
    </div>
);

export default App;
