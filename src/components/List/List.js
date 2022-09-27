import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import "./List.scss"

class List extends Component {

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
      </div>
    );
  }
}

export default List;