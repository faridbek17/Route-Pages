import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Cervice from '../pages/Cervice'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

function Main() {
  return (
    <main className='main container'>
        <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/cervice' element={<Cervice/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/#' element={<Home/>}/>
        </Routes>
    </main>
  )
}

export default Main