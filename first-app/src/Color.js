import React, { useState } from 'react'

const Color = () => {
    const [car, setCar]=useState({
        color: 'blue',
        year: 1934,
        country: 'Germany'
    })
    const changeColor=()=>{
      setCar((carPrevious)=>{
        return{...carPrevious, color:"whiteyellow"}
      })
    }

  return (
    <div>
        <h1>this car has color {car.color} and was made in {car.year} it is a {car.country} machine</h1>
        <button onClick={changeColor}>changecolor</button>

    </div>
  )
}

export default Color
