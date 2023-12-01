import React from 'react'


const ChangeTitle = () => {
const handleClick = () => {
  // console.log('hello');
  
}

return (<>
  <div className="container">
    <h1 className='display-1'> Hello World </h1> 
    <button onClick={ handleClick } className="btn btn-warning"> Change
      Title </button>
  </div>
</>)
}

export default ChangeTitle