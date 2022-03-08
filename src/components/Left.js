import React from 'react'

export default function Left() {
  return (
    <div className='left card'>
      <h1>
        Supervisor
      </h1>
      <p>
        Monitor activity to identify project roadblocks
      </p>
      <img src={process.env.PUBLIC_URL + './images/icon-supervisor.svg'} alt='supervisor icon'/>
    </div>
  )
}
