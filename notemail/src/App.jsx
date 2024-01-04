import './App.css'
import {Route, Routes } from "react-router-dom"
import { User } from './component/user'
import { Navbar } from './component/Navbar'

function App() {

  return (
   <>
    <Navbar/>
    <Routes>
      <Route path='/user' element={<User/>}> </Route>
    </Routes>
   </>
  )
}

export default App
