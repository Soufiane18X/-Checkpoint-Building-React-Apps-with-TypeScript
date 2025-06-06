import React, { Component } from 'react';

// Step 1: Define interface for props (empty here since no props)
interface CounterProps {}

// Step 2: Define interface for state
interface CounterState {
  count: number; // 'count' is a number
}

class Counter extends Component<CounterProps, CounterState> {
  // Step 3: Initialize state with type safety
  state: CounterState = {
    count: 0,
  };

  // Step 4: Define method with correct typing
  increment = (): void => {
    // Using functional setState is better, but we keep original for simplicity
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
