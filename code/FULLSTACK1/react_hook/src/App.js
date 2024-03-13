import logo from './logo.svg';
import './App.css';
import React from 'react'
//import Counter from './State/Counter/Counter';
import Login from './State/Counter/Login/Login'
//import Player from './Player/Player';
//import Counter from './Reducer'
import Counter from './Memo/Counter';
import CounterLimit from './Effect/CounterLimit';

function App() {
  return (
    <>
      <CounterLimit />
    </>
  );
}

export default App;
