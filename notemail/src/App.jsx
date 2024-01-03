import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { User } from './pages/user'
import { Navbar } from './pages/navbar'

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
