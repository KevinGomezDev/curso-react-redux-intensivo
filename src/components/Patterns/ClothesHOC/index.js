import React, { Component } from 'react';
import data from '../data';

const ClothesHOC = WrappedComponent => {
  return class ClothingByHoc extends Component {
    render() {
      const props = {
        color: 'red',
        ...this.props,
        ...data
      }
      return <WrappedComponent {...props} />
    }
  }
}
 
export default ClothesHOC;