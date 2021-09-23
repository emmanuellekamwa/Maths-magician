import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculating = this.calculating.bind(this);
    this.state = {
      total: props.start,
    };
  }

  calculating(button) {
    this.setState((state) => calculate(state, button));
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const displayNum = this.state.next ? this.state.next : this.state.total || 0;
    return (
      <div className="calculator">
        <div className="display">
          <span className="displayNumber">{ displayNum }</span>
        </div>
        <div className="button-key">
          <button onClick={() => this.calculating('AC')} data="AC" className="btn" type="button">AC</button>
          <button onClick={() => this.calculating('+/-')} data="+/-" className="btn" type="button">+/-</button>
          <button onClick={() => this.calculating('%')} data="%" className="btn" type="button">%</button>
          <button onClick={() => this.calculating('÷')} data="÷" className="btn-operator" type="button">÷</button>
          <button onClick={() => this.calculating('7')} data="7" className="btn" type="button">7</button>
          <button onClick={() => this.calculating('8')} data="8" className="btn" type="button">8</button>
          <button onClick={() => this.calculating('9')} data="9" className="btn" type="button">9</button>
          <button onClick={() => this.calculating('X')} data="X" className="btn-operator" type="button">X</button>
          <button onClick={() => this.calculating('4')} data="4" className="btn" type="button">4</button>
          <button onClick={() => this.calculating('5')} data="5" className="btn" type="button">5</button>
          <button onClick={() => this.calculating('6')} data="6" className="btn" type="button">6</button>
          <button onClick={() => this.calculating('-')} data="-" className="btn-operator" type="button">-</button>
          <button onClick={() => this.calculating('1')} data="1" className="btn" type="button">1</button>
          <button onClick={() => this.calculating('2')} data="2" className="btn" type="button">2</button>
          <button onClick={() => this.calculating('3')} data="3" className="btn" type="button">3</button>
          <button onClick={() => this.calculating('+')} data="+" className="btn-operator" type="button">+</button>
          <button onClick={() => this.calculating('0')} data="0" className="btn btn-key" type="button">0</button>
          <button onClick={() => this.calculating('.')} data="." className="btn" type="button">.</button>
          <button onClick={() => this.calculating('=')} data="=" className="btn-operator" type="button">=</button>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = { start: PropTypes.number.isRequired };

export default Calculator;
