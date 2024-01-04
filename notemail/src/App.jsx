import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login-page/login'
import './App.css'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login/>} ></Route>
        </Routes>
    </>
  )

}

export default App