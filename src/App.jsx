import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import './App.css'

function App() {
  

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6 mt-4">
        Learn About Redux Toolkit
        </h1>
      <AddTodo />
      <Todos />
    
    </>
  )
}

export default App
