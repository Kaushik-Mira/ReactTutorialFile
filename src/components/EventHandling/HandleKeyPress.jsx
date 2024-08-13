import React from 'react'

const HandleKeyPress = () => {
    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            alert('Enter key was pressed');
        }
    }
  return (
    <div>
      <input type='text' onKeyPress={handleKeyPress}/>
    </div>
  )
}

export default HandleKeyPress;
