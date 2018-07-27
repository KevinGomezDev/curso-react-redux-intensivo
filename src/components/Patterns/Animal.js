import React from 'react';
import image from './assets/animal.svg'
import './styles/draw.css';

const Animal = (props) => <div>
  {!!props.hat && <img src={require(`./assets/${props.hat}`)} className='hat' />}
  {!!props.sunglasses && <img src={require(`./assets/${props.sunglasses}`)} className='sunglasses' />}
  <img src={image} className='graphic'/>
</div>

export default Animal