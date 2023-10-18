import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./Login"
import Signup from "./Signup"
const Pages = () => {
  return (
    <div>
      <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup/:userid' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default Pages
