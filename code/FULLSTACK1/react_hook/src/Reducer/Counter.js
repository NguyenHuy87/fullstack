import React, { useReducer } from 'react';

export default function Counter() {

    /*
    Khởi tạo state mặc định
    */

    /*
    Định nghĩa Reducer
     */
    const countReducer = (state, action) => {
        switch (action.type){
            case "increment":
            return {count: state.count + 1};

            case "decrement":
            return {count: state.count - 1};
        }
        return
    }

    /*
    Gọi hook useReducer
    */
   const [state, dispatch] = useReducer(countReducer, initialState);
  
  
  
   return (
    <div>
        <h1>Count: 1</h1>
        <button>-</button>
        <button>+</button>
    </div>
  )
}
