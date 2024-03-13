import React, { useEffect, useState } from 'react'

export default function CounterLimit() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    };

    useEffect(() => {
        if (count === 5){
          setCount(1)
        }
    }, [count]);
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>+</button>
    </div>
  )
}
