import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import "./List.scss"
import {logDOM} from "@testing-library/react";

class List extends Component {

  state={
    inputValue:""
  }


  render() {
    const {arr,name, addHandler, ...props} = this.props;
        // const arr = this.props.arr;

    console.log(arr)

    const list = arr.map((e,i)=>{
      return <p key={uuidv4()}>{i} - {e}</p>
    })

    return (
      <div>
        {name}
        {list}
        <button onClick={()=>{addHandler("Добавленное поле")}}> ADD 1 </button>

        <form action="">
          <input type="text" value={this.state.inputValue} onChange={(e)=>this.setState({inputValue:e.target.value})} />
        </form>
      </div>
    );
  }
}

export default List;