import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";
import React from "react";

// const Counter = ({start, add, ms}) => {
//   const [count, setCount] = useState(start);

//   useEffect(() => {
//     const interval = setInterval(() => {
//         setCount(count => count + add);
//     }, ms);
//     return () => clearInterval(interval)
//   }, [])

//   return <CounterDisplay count={count} />
// };

class Counter extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        count: props.start
      };
      
      this.interval = null;
    }
  
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(state => ({
          count: state.count + this.props.add
        }));
      }, this.props.ms);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return <CounterDisplay count={this.state.count} />;
    }
  }

export default Counter;
