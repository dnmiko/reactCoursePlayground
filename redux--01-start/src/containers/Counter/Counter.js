import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        let storedInfoToRender = this.props.storedValues.map((data) => {
            return (
              <li key={data.id} onClick={() => this.props.onDeleteInformation(data.id)}>
                {data.value}
              </li>
            );
        })

        return (
          <div>
            <CounterOutput value={this.props.ctr} />
            <CounterControl
              label="Increment"
              clicked={this.props.onIncrementCounter}
            />
            <CounterControl
              label="Decrement"
              clicked={this.props.onDecrementCounter}
            />
            <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
            <CounterControl
              label="Subtract 5"
              clicked={this.props.onSubstractCounter}
            />
            <hr />
            <button onClick={() =>  this.props.onStoreInformation(this.props.ctr)}>
              Store Result
            </button>
            <ul>{storedInfoToRender}</ul>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        storedValues: state.result.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
      onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
      onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
      onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
      onSubstractCounter: () =>
        dispatch({ type: actionTypes.SUBSTRACT, value: 5 }),
      onStoreInformation: (valueToStore) =>
        dispatch({ type: actionTypes.STORE, value: valueToStore }),
      onDeleteInformation: (index) =>
        dispatch({ type: actionTypes.DELETE, position: index }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);