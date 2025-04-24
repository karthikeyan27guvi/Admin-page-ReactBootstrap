import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'
import Dashboard from './Components/Dashboard'
import AddUser from './Components/AddUser'
import Profile from './Components/Profile'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import EditUser from './Components/EditUser'

function App() {

  let [user, setUser] = useState([
    {
      id: 1,
      name: "Karthikeyan",
      email: "karthick@gamil.com",
      dob: "1999-11-27",
      gender: "Male",
      subscription: true
    },
    {
      id: 2,
      name: "Dhanasekar",
      email: "dhana@gmail.com",
      dob: "1998-08-05",
      gender: "Male",
      subscription: true
    },
    {
      id: 3,
      name: "Divyadharshini",
      email: "divi@gmail.com",
      dob: "2002-01-28",
      gender: "Female",
      subscription: false
    },
    {
      id: 4,
      name: "Premkumar",
      email: "prem@gmail.com",
      dob: "1997-11-07",
      gender: "Male",
      subscription: true
    },
  ])
  return <>
    <div id="wrapper">
      <BrowserRouter>
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar/>
            <Routes>
              <Route path='/' element={<Dashboard user={user} setUser={setUser}/>}/>
              <Route path='/add-user' element={<AddUser user={user} setUser={setUser}/>}/>
              <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser}/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </div>
      </div>
        </BrowserRouter>  
    </div>  
  </>
}

export default App
