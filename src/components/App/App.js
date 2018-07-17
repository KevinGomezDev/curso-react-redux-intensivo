import React, { Component } from 'react';
import './App.css';
import Calculator from '../Calculator';

class App extends Component {
    state = {
        renderMain: true,
    }

    render() {
        const { renderMain } = this.state;
        return (
            <div className="App">
                {renderMain && <Calculator className="App-calc" title="Mi Calculadora" />}
                {false && <button onClick={() => this.setState({ renderMain: !renderMain })}>App Button</button>}
            </div>
        );
    }
}

export default App;
