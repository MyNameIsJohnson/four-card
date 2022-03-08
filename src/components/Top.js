import React from 'react'

export default function Top() {
  return (
    <div className='top card'>
      <h1> Team Builder </h1>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img src={process.env.PUBLIC_URL + '/images/icon-team-builder.svg'} alt='logo'/>

    </div>
  )
}
