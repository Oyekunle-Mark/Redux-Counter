import React, { Component } from "react";
import { connect } from "react-redux";
import Prop from "prop-types";

import { increment, decrement } from "../actions";

class Counter extends Component {
  incrementIfOdd = () => {
    // Stretch Problem: Implement an increment function that
    // only increments if the counter value is odd
  };

  incrementAsync = () => {
    // Stretch Problem: Implement an increment function that
    // increments after waiting for one second
  };

  render() {
    const { count, increment, decrement } = this.props;
    return (
      <p>
        Clicked: {count} times
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
        {/* <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>  */}
      </p>
    );
  }
}

Counter.propTypes = {
  count: Prop.number.isRequired,
  increment: Prop.func.isRequired,
  decrement: Prop.func.isRequired
};

const mapStateToProps = state => ({
  count: state.count
});

export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);
