import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './login-page/login'

import { Navbar } from './component/Navbar'
import { User } from './component/User';

function App() {

  return (
    <>

      {window.location.pathname !== "/" &&

        <Navbar />
      }

      <Routes>
        <Route path="/" element={<Login />} ></Route>

        <Route path='/user' element={<User />}> </Route>
      </Routes>
    </>
  )

}

export default App