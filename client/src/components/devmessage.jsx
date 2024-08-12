import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/devmessage.css'; 

function Devmessage() {
  return (
    <bubble>
        <h1>Page is still under construction</h1>
        <Link to="/home"><button type="button" className="return">Return</button></Link>
    </bubble>
  );
}

export default Devmessage;