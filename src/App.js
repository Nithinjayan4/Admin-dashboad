import React from 'react'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Single from './Pages/Single/Single'
import New  from './Pages/New/New'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import List from './Pages/List/List';


function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path='/' >
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='users'>
        <Route index element={<List/>}/>
        <Route path=':userId' element={<Single/>}/>
        <Route path='new' element={<New/>}/>
        </Route>
        <Route path='products'>
        <Route index element={<List/>}/>
        <Route path=':productId' element={<Single/>}/>
        <Route path='new' element={<New/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App