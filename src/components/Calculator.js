import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = ({ start }) => {
  const [display, setDisplay] = useState({ next: start });
  const onClick = (e) => {
    setDisplay((display, calculate(display, e.target.textContent)));
  };

  const displayNum = display.next ? display.next : display.total || 0;
  return (
    <div className="calculator">
      <div className="display">
        <span className="displayNumber">{ displayNum }</span>
      </div>
      <div className="button-key">
        <button onClick={onClick} data="AC" className="btn" type="button">AC</button>
        <button onClick={onClick} data="+/-" className="btn" type="button">+/-</button>
        <button onClick={onClick} data="%" className="btn" type="button">%</button>
        <button onClick={onClick} data="÷" className="btn-operator" type="button">÷</button>
        <button onClick={onClick} data="7" className="btn" type="button">7</button>
        <button onClick={onClick} data="8" className="btn" type="button">8</button>
        <button onClick={onClick} data="9" className="btn" type="button">9</button>
        <button onClick={onClick} data="x" className="btn-operator" type="button">x</button>
        <button onClick={onClick} data="4" className="btn" type="button">4</button>
        <button onClick={onClick} data="5" className="btn" type="button">5</button>
        <button onClick={onClick} data="6" className="btn" type="button">6</button>
        <button onClick={onClick} data="-" className="btn-operator" type="button">-</button>
        <button onClick={onClick} data="1" className="btn" type="button">1</button>
        <button onClick={onClick} data="2" className="btn" type="button">2</button>
        <button onClick={onClick} data="3" className="btn" type="button">3</button>
        <button onClick={onClick} data="+" className="btn-operator" type="button">+</button>
        <button onClick={onClick} data="0" className="btn btn-key" type="button">0</button>
        <button onClick={onClick} data="." className="btn" type="button">.</button>
        <button onClick={onClick} data="=" className="btn-operator" type="button">=</button>
      </div>
    </div>
  );
};

Calculator.propTypes = { start: PropTypes.number };
Calculator.defaultProps = { start: 0 };

export default Calculator;
