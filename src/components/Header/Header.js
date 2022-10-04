import "./Header.scss"

import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeTitleCreator} from "./action";


class Header extends Component {

  render() {

    const {color,title,dispatch} = this.props

    const style={
      color: color
    }

    return (
      <>
        <h1>{title}</h1>
        <button onClick={()=>dispatch(changeTitleCreator())}>Change Title</button>
      </>
    );
  }
}

const mapStateToProps = (store)=>{
  return{
    title: store.title
  }
}

export default connect(mapStateToProps)(Header);

