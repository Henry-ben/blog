import React from 'react'
import Navbar from './Navbar.jsx'
import Body from './Body.jsx'
import { Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import About from './pages/About.jsx'
import Tag from './pages/Tag.jsx'
import Details from './pages/Details.jsx'
import blogs from "./blog/index.json";
import './index.css'
import './App.css'


function App() {
  

  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About/>} />
        <Route path="/tag" element={<Tag/>} />
        <Route path="/details/:id" element={<Details blogs={blogs}/>} />
      </Routes>
      
    </>
  )
}

export default App
