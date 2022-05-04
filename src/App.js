import './Styles/App.css';
import React from 'react';
import UseEffectAPI from './components/useEffectAPI/useEffectAPI';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//used for rendering app component
function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark  ps-1">
        <a className="navbar-brand" href="#">Global Government Initiative</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

          </ul>

        </div>
      </nav>

      <Routes>
        <Route exact path='/' element={< UseEffectAPI />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
