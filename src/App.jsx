import { useState } from 'react'
import EcomList from './Components/EcomList.jsx'
import Appbar from './Components/Appbar.jsx'
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <Appbar/>
      <EcomList />
      <button onClick = {() => setCount(count + 1)}>+</button>
      <h2>{count}</h2>
      <button onClick = {() => setCount(1)}>-</button>
    </div>
    </>
  )
}

export default App
