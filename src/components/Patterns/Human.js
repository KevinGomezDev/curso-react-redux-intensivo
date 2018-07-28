import React from 'react';
import image from './assets/human.svg'
import './styles/draw.css';
import { MyContextConsumer } from "../Patterns/ClothesContext";

const Human = () => { 
  return <MyContextConsumer>
  {(context) => <div>
    {!!context.state.data.hat && <img src={require(`./assets/${context.state.data.hat}`)} className='hat' />}
    {!!context.state.data.sunglasses && <img src={require(`./assets/${context.state.data.sunglasses}`)} className='sunglasses' />}
    <img src={image} className='graphic' />
  </div>}
</MyContextConsumer>
}

export default Human;