import React from 'react'

export default function Counter() {
  return (
    <div>
        <h1>Count: 0</h1>
        <Content />
        <button type='button' onClick={handleIncrement}>+</button>
    </div>
  )
}

