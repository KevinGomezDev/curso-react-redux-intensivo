import React, { Component } from 'react';
import './App.css';
import Form from '../Form';

class App extends Component {
    state = {
        user: {
            firstName: 'Sebas',
            lastName: 'Fernandez',
            gender: 1,
            active: true,
        }
    }

    handleChangeOnForm = (e) => {
        const { user } = this.state;
        let value = e.target.value;
        if (e.target.type === 'radio') value = value === 'true';
        user[e.target.name] = value;
        this.setState({ user });
    }

    render() {
        return (
            <div className="App">
                <Form user={this.state.user} onChange={this.handleChangeOnForm} />
            </div>
        );
    }
}

export default App;
