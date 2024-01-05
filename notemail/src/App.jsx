import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './login-page/login'
import './App.css'
import { Navbar } from './component/Navbar'
import { User } from './component/User';
import ExempleContext from './component/context'

function App() {

  const dataContext = 'Data à partager';
  const [user, setUser] = useState('Message')

  return (
    
    <>
    <ExempleContext.Provider value={{user, setUser} } >
      {window.location.pathname !== "/" &&
      
      <Navbar />
    }

      <Routes>
        <Route path="/" element={<Login />} ></Route>

        <Route path='/user' element={<User />}> </Route>
      </Routes>
      </ExempleContext.Provider>
    </>
  )

}

export default App