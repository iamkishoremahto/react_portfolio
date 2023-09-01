

import './App.scss'
import Hero from './component/Hero/Hero'
import Home from './component/Home/Home'
import About from './component/About/About'
import Resume from './component/Resume/Resume'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Hero long_info = {<Home />} />} />
      <Route path='/about' element = {<Hero long_info = {<About />} />} />
      <Route path='/resume' element = {<Hero long_info = {<Resume />} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

{/* <Hero long_info = {<Home />} /> */}
{/* <Hero long_info = {<About />} /> */}