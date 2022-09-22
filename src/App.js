import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import List from "./components/List/List";
import {Component} from "react";
import Page from "./pages/Page";

class App extends Component {

  state={
    arr:[1,2,3,4,5,6,"qw","adsf"],
    visibleCounter:true
  }

  arrAddHandler(el){
    let arr = this.state.arr
    arr.push(el)
    this.setState({arr})
    console.log(arr)
  }

  render() {

    const hello = "Доброго вечора!!!",
      hello1 = {a: 1, s: 4},
      visible = false;

    return (

      <>

        <Page/>

        <List addHandler={(el)=>this.arrAddHandler(el)} name={"List"} arr={this.state.arr}/>

        {this.state.visibleCounter&&<Counter name={"Counter"}/>}
        <button onClick={()=>this.setState({visibleCounter:!this.state.visibleCounter})}> Click</button>

      </>
    );
  }

}

export default App;
