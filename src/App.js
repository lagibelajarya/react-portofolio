import logo from './logo.svg'
import './index.css'
import React from 'react'
import ReactDOM from 'react'
import reportWebVitals from './reportWebVitals'
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Sidebar from './component/Sidebar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Skill from './component/Skill'
import Project from './component/Project'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
