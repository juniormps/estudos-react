import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//Pages

function App() {

  return (
    <>
        <div>
            <h1>Context API</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
