import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Sider from '../Sider';
import Calculator from '../Calculator';

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>

        <Sider title="Gato" />
        <div className="APP-content">
            <Calculator className="App-calc" title="Mi Calculadora" />
        </div>
    </div>
);

export default App;
