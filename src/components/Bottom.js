import React from 'react'

export default function Bottom() {
  return (
    <div className='bottom card'>
      <h1>Karma</h1>
      <p>Regularly evaluates our talent to ensure quaility</p>
      <img src={process.env.PUBLIC_URL + './images/icon-karma.svg'} alt='karma icon'/>
    </div>
  )
}