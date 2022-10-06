import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import style from "./List.module.scss"
// import "./List.module.scss"
import {connect} from "react-redux";
import {addItemCreate} from "./action";

class List extends Component {

  state={
    inputValue:""
  }


  render() {
    const {name, list, dispatch} = this.props;
        // const arr = this.props.arr;

    const listElements = list?.map((e,i)=>{
      return <p className={style.p} key={uuidv4()}>{i} - {e}</p>
    })

    return (
      <div>
        {name}
        {listElements}
        <button onClick={()=>dispatch(addItemCreate(this.state.inputValue))}> ADD ToDo </button>

        <form action="">
          <input type="text" value={this.state.inputValue} onChange={(e)=>this.setState({inputValue:e.target.value})} />
        </form>

      </div>
    );
  }
}

function mapStateToProps(store) {
  return{
    list:store.list
  }
}

export default connect(mapStateToProps)(List);