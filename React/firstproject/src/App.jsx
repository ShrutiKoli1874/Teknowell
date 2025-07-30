import { useState } from 'react'
import Nav from './components/nav'
import Count from './components/Count'
import Quotes from './components/quotes'
import Home from './components/home'


import{BrowserRouter,Route,Routes} from "react-router-dom"
import Userform from './components/Userform'
import User from './components/User'
import UserTable from './components/UserTable'
import Table from './components/Table'
import FetchList from './components/List'


function App() {


  return (
    <>
    {/* <Home/> 
   {/* <Nav name="Service" t1="Data"/> */}
  {/* <Count/> */}
  {/* <BrowserRouter>
  <Nav t1="Home" t2="Count" t3="Quotes" t4="https://images.unsplash.com/photo-1753133829431-ef2cdb0d2e57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"/>
  <Routes>
    <Route path='/Home'element={<Home />}></Route>
    <Route path='/Count'element={<Count />}></Route>
    <Route path='/Quotes'element={<Quotes />}></Route>
  </Routes> 
  </BrowserRouter> */}


  {/* <Userform /> */}
  {/* <UserTable/> */}
  <Table/>
  {/* <FetchList/> */}


  {/* <User/> */}

  
    
     
    </>
  )
}

export default App
