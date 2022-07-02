import React from 'react'
import { useState } from 'react'
import Inputs from './Inputs'

const Header = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div>
        <h1>Task Traker</h1>
        <button className='btn btn-primary my-3' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Show Task Bar' :  'Hide Task Bar'  }
        </button>
      {
        !isOpen && <Inputs /> 
      }
      {
        isOpen && <p>No task yet</p>
      }
    </div>
  )
}

export default Header