import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import List from "./components/List/List";
import {Component} from "react";

class App extends Component {

  state={
    arr:[1,2,3,4,5,6,"qw","adsf"],
    visibleCounter:true
  }


  render() {

    const hello = "Доброго вечора!!!",
      hello1 = {a: 1, s: 4},
      visible = false;

    return (

      <>

        <List name={"List"} arr={this.state.arr}/>

        {this.state.visibleCounter&&<Counter name={"Counter"}/>}

        <button onClick={()=>this.setState({visibleCounter:!this.state.visibleCounter})}> Click</button>

        <div className="App">

          <Header text={hello} color={"green"} visible={visible}/>

          <Header/>

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>

            <h1>{hello}</h1>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </>
    );
  }

}

export default App;
