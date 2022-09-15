import React from 'react'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Single from './Pages/Single/Single'
import New  from './Pages/New/New'
import "./Style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from './Context/DarkModeContext'
import { userInputs,productInputs } from './formSource'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import List from './Pages/List/List';


function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
    <Routes>
      <Route path='/' >
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='users'>
        <Route index element={<List/>}/>
        <Route path=':userId' element={<Single/>}/>
        <Route path='new' element={<New inputs={userInputs} title="Add New User"/>}/>
        </Route>
        <Route path='products'>
        <Route index element={<List/>}/>
        <Route path=':productId' element={<Single/>}/>
        <Route path='new' element={<New inputs={productInputs} title="Add New Product"  />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App