import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterClass from "./assets/components/counterclass"
import Header from "./assets/components/header"
function App() {
  return (
    <div>
      <Header/>
      <CounterClass />

      </div>
  )
}

export default App
