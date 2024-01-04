<<<<<<< HEAD
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login-page/login'
=======
>>>>>>> user
import './App.css'

import {Route, Routes } from "react-router-dom"
import { User } from './component/user'
import { Navbar } from './component/Navbar'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Login/>} ></Route>
        </Routes>
    </>
=======

  return (
   <>
    <Navbar/>
    <Routes>
      <Route path='/user' element={<User/>}> </Route>
    </Routes>
   </>
>>>>>>> user
  )

}

export default App