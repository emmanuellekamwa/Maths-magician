import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: props.result,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          <span className="displayNumber">{result}</span>
        </div>
        <div className="button-key">
          <button data="AC" className="btn" type="button">AC</button>
          <button data="+/-" className="btn" type="button">+/-</button>
          <button data="%" className="btn" type="button">%</button>
          <button data="÷" className="btn-operator" type="button">÷</button>
          <button data="7" className="btn" type="button">7</button>
          <button data="8" className="btn" type="button">8</button>
          <button data="9" className="btn" type="button">9</button>
          <button data="X" className="btn-operator" type="button">X</button>
          <button data="4" className="btn" type="button">4</button>
          <button data="5" className="btn" type="button">5</button>
          <button data="6" className="btn" type="button">6</button>
          <button data="-" className="btn-operator" type="button">-</button>
          <button data="1" className="btn" type="button">1</button>
          <button data="2" className="btn" type="button">2</button>
          <button data="3" className="btn" type="button">3</button>
          <button data="+" className="btn-operator" type="button">+</button>
          <button data="0" className="btn btn-key" type="button">0</button>
          <button data="." className="btn" type="button">.</button>
          <button data="=" className="btn-operator" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
