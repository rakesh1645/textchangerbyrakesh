import React from 'react';
import '../Style/style.css';
import { Link } from 'react-router-dom';



export default function Navbara(props) {
  const changeColorRed = () => {
    document.body.style.backgroundColor = "red";
    props.showAlert("The Red Background color is ", "Success");
  };

  const changeColorBlue = () => {
    document.body.style.backgroundColor = "blue";
    props.showAlert("The blue background color is ", "Success");
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>
          <div className='colormodes'>
            <button className='bluecolor' onClick={changeColorBlue}></button>
            <p>Enable blue color</p>
            <button className='redcolor' onClick={changeColorRed}></button>
            <p>Enable red color</p>
          </div>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleBtn} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  
  );
}
