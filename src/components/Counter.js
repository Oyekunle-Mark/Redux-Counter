import React, { Component } from "react";
import { connect } from "react-redux";
import Prop from "prop-types";

import { increment, decrement } from "../actions";

class Counter extends Component {
  incrementIfOdd = () => {
    const { count, increment } = this.props;

    if (count % 2 !== 0) increment();
  };

  incrementAsync = () => {
    const { increment } = this.props;

    setTimeout(increment, 1000);
  };

  render() {
    const { count, increment, decrement } = this.props;

    return (
      <p>
        Clicked: {count} times
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
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
