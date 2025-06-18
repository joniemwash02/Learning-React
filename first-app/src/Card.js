import React, { use } from 'react'
import { useState } from 'react'
const Card = () => {
  const [color, setColor]=useState('red')
  const changeColor = () => {
    const colors = [
      {
        colorname: 'red',
        hex: '#FF0000'
      },
      {
        colorname: 'blue',
        hex: '#0000FF'
      },
      {
        colorname: 'green',
        hex: '#00FF00'
      },
      {
        colorname: 'yellow',
        hex: '#FFFF00'
      },
      {
        colorname: 'purple',
        hex: '#800080'
      }
    ]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(randomColor.hex)
  }
  return (
    <div className='card'>
      <h1 style={{backgroundColor: color}}>background is color {color}</h1>
      <button onClick={changeColor}>Click to change color</button>
    </div>
    
  )
}

export default Card
