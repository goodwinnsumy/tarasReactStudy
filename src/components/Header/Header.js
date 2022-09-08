import "./Header.scss"

import React from 'react';

const Header = (props) => {

  const {text, visible, color} = props

  const style={
    color: color
  }

  return (
    visible&&<>
      {visible&&<header> Реакт это легко, но это не точно!!!</header>}

      {visible?<p>true</p>:<span>false</span>}
      {/*<h2 style={style}>{text}</h2>*/}
    </>
  );
};

export {Header};