import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons/faWheatAwn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
const FontAwesome = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faWheatAwn}/>
      <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
    </div>
  )
}

export default FontAwesome;
