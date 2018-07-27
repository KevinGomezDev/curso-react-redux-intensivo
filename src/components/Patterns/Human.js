import React from 'react';
import image from './assets/human.svg'
import './styles/draw.css';
import ClothesHOC from './ClothesHOC'

const Human = (props) => <div>
  {!!props.hat && <img src={require(`./assets/${props.hat}`)} className='hat' />}
  {!!props.sunglasses && <img src={require(`./assets/${props.sunglasses}`)} className='sunglasses' />}
  <img src={image} className='graphic' />
</div>

export default ClothesHOC(Human);