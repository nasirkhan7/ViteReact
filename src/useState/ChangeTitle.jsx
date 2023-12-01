import React, { useState } from 'react'

let title = 'Hello World'
const ChangeTitle = () => {
  // Using state to manage The Title
  const[title,setTitle] = useState('Hello World')

      const handleClick = () => {
        // Updating the title using the setTitle function
        setTitle('New World')
    }

        return ( 
        <>
          <div className="container">
              <h1 className='display-1'>
                {title}</h1> 
              <button onClick={ handleClick } className="btn btn-warning"> Change
                       Title </button>
  </div>
</>
)
}

export default ChangeTitle