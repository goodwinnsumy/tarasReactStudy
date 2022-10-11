import "./Header.scss"

import React, {Component} from 'react';
import {connect, useSelector} from "react-redux";
import {changeTitleCreator} from "./action";
import {Link, NavLink} from "react-router-dom";


const Header =(props)=> {
    const auth = useSelector((store) => store.auth)

    return (
      <>
        <div className="nav">
          <Link to="/">Home</Link>

          {!auth? <Link to="/auth">LogIn</Link>:<Link to="/auth">LogOut</Link>}
          <Link to="/users">Users</Link>
          <NavLink to="/counters">Counters</NavLink>

          <NavLink to="/messages">Messages</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </div>
      </>
    );
}

export default Header;

