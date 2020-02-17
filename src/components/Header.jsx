import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
    <h1>TWITTER</h1>
    <Link to="/">Home</Link> | <Link to="/newtweet">Create Tweet</Link>
    </div>
  );
}

export default Header;
