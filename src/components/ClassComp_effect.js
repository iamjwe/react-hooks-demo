import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('class', 'componentDidMount')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('class', 'componentWillUpdate')
    if(this.state.count !== nextState.count)console.log(this.state.count)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('class', 'componentDidUpdate')
    if(this.state.count !== prevState.count)console.log(this.state.count)
  }

  componentWillUnmount() {
    console.log('class', 'componentWillUnmount')
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times (classComp)</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
      </button>
      </div>
    );
  }
}