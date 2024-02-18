import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Watch from './Pages/Watch'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/search' element={<Search/>}/>
    <Route path='/watch/:id' element={<Watch/>}/>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
