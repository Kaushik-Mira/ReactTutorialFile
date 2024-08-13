import React from 'react'

export default function Button({onClick, label}) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}
