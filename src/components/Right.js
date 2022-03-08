import React from 'react'

export default function Right() {
  return (
    <div className='right card'>
      <h1>
        Calculator
      </h1>
      <p>Use data from past projects to provide better delivery estimates</p>
      <img src={process.env.PUBLIC_URL + './images/icon-calculator.svg'} alt='calculator icon'/>
    </div>
  )
}
