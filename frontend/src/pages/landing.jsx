import '../style/landing.css'
import React, { useState } from "react";
import logo from "../assets/logo.png";
import File from '../components/file';
import Hash from '../components/hash';
import Url from '../components/url';
import { ToastContainer, toast } from 'react-toastify';

const Landing = () => {
    const [response, setResponse] = useState("");

  const [active, setActive] = useState(1);

  const renderComponent = () => {
    switch (active) {
      case 1:
        return <Hash/>;
      case 2:
        return <File/>;
      case 3:
        return <Url/>;
      default:
        return null;
    }
  };

    return (
        <div className='landing'>
            <ToastContainer />
            <div className='body'>
                <img src={logo} alt="Logo" id='logo'/>

                <div id='toggle-btns'>
                    <button className={`toggle-btn ${active === 1 ? "active" : ""}`} onClick={() => setActive(1)}>Hash</button>
                    <button className={`toggle-btn ${active === 2 ? "active" : ""}`} onClick={() => setActive(2)}>File</button>
                    <button className={`toggle-btn ${active === 3 ? "active" : ""}`} onClick={() => setActive(3)}>Url</button>
                </div>

                <div id='section'>
                    {renderComponent()}
                </div>
            </div>
            
        </div>

    );
}

export default Landing;
