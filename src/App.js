import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
