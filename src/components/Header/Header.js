import "./Header.scss"

import React from 'react';

const Header = (props) => {

  const style={
    color: props.color
  }

  return (
    <div>
      <header> Реакт это легко, но это не точно!!!</header>
      <h2 style={style}>{props.text}</h2>
    </div>
  );
};

export {Header};