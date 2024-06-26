import React from 'react'
import modal from '../modal--gif.svg'
import { FaTimes } from 'react-icons/fa'

export default function Modal() {
  return (
    <div>
      <div className="modal--content">
        <FaTimes/>
      <p>We are in your email, pls check your inbox.</p>
      <img src={modal} alt="gif" className='modal-gif'/>
      </div>
    </div>
  )
}
