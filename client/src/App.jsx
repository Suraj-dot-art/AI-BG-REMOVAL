import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/> 
    
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/buy' element={<BuyCredit/>} />
        <Route path='/result' element={<Result/>} />

      </Routes>
      <Footer/>

    </div>
  )
}

export default App