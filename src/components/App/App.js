import React from 'react';
import './App.css';
import { MyProvider } from '../Patterns/ClothesContext';

import Human from '../Patterns/Human';
import Alien from '../Patterns/Alien';
import Animal from '../Patterns/Animal';

const App = () => (
    <div className="App">
        <MyProvider>
            <Human />
        </MyProvider>
        <Alien />
        <Animal />
    </div>
);

export default App;
