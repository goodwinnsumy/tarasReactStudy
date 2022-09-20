import React, {Component} from 'react';

class Counter extends Component {

  state={
    count:0,
    value:8

  }

  render() {
    return (
      <div>
        {this.props.name}
        {}

        <button onClick={()=>{

          this.setState((state) => ({
            count: state.count + 1
          }));
          console.log(this.state.count);
          console.log(this.state.value);
        }}>Click {this.state.count}</button>
      </div>
    );
  }
}

export default Counter;