import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './login-page/login'
import './App.css'
import { Navbar } from './component/Navbar'
import { User } from './component/User';
import UserContext from './userContext';
import Admin from './admin-page/admin'
import { EditEntreprise } from './admin-page/editEntreprise';
import { AjouterEntreprise } from './admin-page/AjouterEntreprise';
import AuthGuard from './service/AuthGuard';

function App() {

  const [user, setUser] = React.useState(null)
  useEffect(() => {
  }, [])
  return (
    <>
      <UserContext.Provider value={{ user, setUser }} >
        {window.location.pathname !== "/" &&

          <Navbar />
        }

        <Routes>
          <Route path="/" element={<Login />} ></Route>

          <Route element={<AuthGuard />} >
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/admin/editEntreprise' element={<EditEntreprise />}> </Route>
            <Route path='/admin/ajouterEntreprise' element={<AjouterEntreprise />}> </Route>
          </Route>
          <Route path='/user' element={<User />}> </Route>
        </Routes>
      </UserContext.Provider>
    </>
  )

}

export default App