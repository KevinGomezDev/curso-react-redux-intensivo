import React from 'react';
import image from './assets/human.svg'
import './styles/draw.css';
import ClothesFaaC from '../Patterns/ClothesFaaC'

const DumbHuman = (props) => <div>
  {!!props.hat && <img src={require(`./assets/${props.hat}`)} className='hat' />}
  {!!props.sunglasses && <img src={require(`./assets/${props.sunglasses}`)} className='sunglasses' />}
  <img src={image} className='graphic' />
</div>

const Human = () => <ClothesFaaC>
  {(props) => <DumbHuman {...props} />}
</ClothesFaaC> 

export default Human;