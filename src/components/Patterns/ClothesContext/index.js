import React from 'react';
import data from '../data';

const MyContext = React.createContext();
export const MyContextConsumer = MyContext.Consumer;

export class MyProvider extends React.Component {
  state = {
    color: 'yellow',
    data,
  }

  render() {
    return <MyContext.Provider value={{ state: this.state }}>
      {this.props.children}
    </MyContext.Provider>
  }
}
