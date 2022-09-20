import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import "./List.scss"

class List extends Component {




  render() {
    const {arr,name} = this.props;

    console.log(arr)

    const list = arr.map((e,i)=>{
      return <p key={uuidv4()}>{i} - {e}</p>
    })

    return (
      <div>


        {name}
        {list}

      </div>
    );
  }
}

export default List;