import React from 'react';
import data from '../../Patterns/data'

const ClothesFaaC = (props) => { 
  const faacprops = {
    ...data,
    color: 'blue',
  }
  return props.children(faacprops)
}

export default ClothesFaaC;