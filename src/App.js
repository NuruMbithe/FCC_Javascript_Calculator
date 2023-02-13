/*import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleNumber = (event) => {
    const number = event.target.textContent;

    if(display ==='0'){
    setDisplay(number);
    }else {
      setDisplay(display + number)
    }
  };

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display +' ' + operator + ' ');
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  };

  const handleDecimal =() => {
    const array = display.split (' ');
    const lastElement = array[array.length-1];

    if(!lastElement.includes('.')){
      setDisplay(display + '.')
    }
  };

  const handleClear = () => {
    setDisplay ('0');
  }

  return (
    <div className="App">
      <div className="calculator">
  <div id="display" className="row">{display}</div>
  <div id="clear" className="row" onClick = {handleClear}>
    AC
  </div>
  <div id="seven" onClick = {handleNumber}>7</div>
  <div id="eight" onClick = {handleNumber}>8</div>
  <div id="nine" onClick = {handleNumber}>9</div>
  <div id="multiply" onClick = {handleOperator}>*</div>
  <div id="four" onClick = {handleNumber}>4</div>
  <div id="five" onClick = {handleNumber}>5</div>
  <div id="six" onClick = {handleNumber}>6</div>
  <div id="divide">/</div>
  <div id="one" onClick = {handleNumber}>1</div>
  <div id="two" onClick = {handleNumber}>2</div>
  <div id="three" onClick = {handleNumber}>3</div>
  <div id="add" onClick = {handleOperator}>+</div>
  <div id="zero" onClick = {handleNumber}>0</div>
  <div id="decimal" onClick = {handleDecimal}>.</div>
  <div id="equals" onClick = {handleEqual}>=</div>
  <div id="subtract" onClick = {handleOperator}>-</div>
</div>;
    </div>
  );
}

export default App;
*/

/*
import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleNumber = (event) => {
    const number = event.target.textContent;

    if(display ==='0'){
      setDisplay(number);
    } else {
      setDisplay(display + number)
    }
  };

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display +' ' + operator + ' ');
  };

  const handleEqual = () => {
    try {
      const result = String(evalExpression(display));
      setDisplay(result);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const evalExpression = (expression) => {
    const tokens = expression.split(' ');
    let stack = [];
    for (const token of tokens) {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else if (token === '+') {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        stack.push(firstOperand + secondOperand);
      } else if (token === '-') {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        stack.push(firstOperand - secondOperand);
      } else if (token === '*') {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        stack.push(firstOperand * secondOperand);
      } else if (token === '/') {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        stack.push(firstOperand / secondOperand);
      }
    }
    return stack[0];
  };

  const handleDecimal =() => {
    const array = display.split (' ');
    const lastElement = array[array.length-1];

    if(!lastElement.includes('.')){
      setDisplay(display + '.')
    }
  };

  const handleClear = () => {
    setDisplay ('0');
  }

  return (
    <div className="App">
      <div className="calculator">
  <div id="display" className="row">{display}</div>
  <div id="clear" className="row" onClick = {handleClear}>
    AC
  </div>
  <div id="seven" onClick = {handleNumber}>7</div>
  <div id="eight" onClick = {handleNumber}>8</div>
  <div id="nine" onClick = {handleNumber}>9</div>
  <div id="multiply" onClick = {handleOperator}>*</div>
  <div id="four" onClick = {handleNumber}>4</div>
  <div id="five" onClick = {handleNumber}>5</div>
  <div id="six" onClick = {handleNumber}>6</div>
  <div id="divide">/</div>
  <div id="one" onClick = {handleNumber}>1</div>
  <div id="two" onClick = {handleNumber}>2</div>
  <div id="three" onClick = {handleNumber}>3</div>
  <div id="add" onClick = {handleOperator}>+</div>
  <div id="zero" onClick = {handleNumber}>0</div>
  <div id="decimal" onClick = {handleDecimal}>.</div>
  <div id="equals" onClick = {handleEqual}>=</div>
  <div id="subtract" onClick = {handleOperator}>-</div>
</div>;
    </div>
  );
}

export default App;
*/

import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleNumber = (event) => {
    const number = event.target.textContent;

    if (display === '0') {
      setDisplay(number);
    } else {
      let newDisplay = display;

      const lastChar = display.charAt(display.length - 1);
      const isOperator = ['+', '-', '*', '/'].includes(lastChar);
      const isEqual = lastChar === '=';

      if (isOperator || isEqual) {
        newDisplay = '';
      }

      setDisplay(newDisplay + number);
    }
  };

  const handleOperator = (event) => {
    let newDisplay = display;

    const lastChar = display.charAt(display.length - 1);
    const isOperator = ['+', '-', '*', '/'].includes(lastChar);
    const isEqual = lastChar === '=';

    if (!isOperator && !isEqual) {
      newDisplay += ' ' + event.target.textContent + ' ';
      setDisplay(newDisplay);
    } else {
      if (lastChar !== '-') {
        newDisplay = newDisplay.substring(0, newDisplay.length - 3);
        newDisplay += ' ' + event.target.textContent + ' ';
        setDisplay(newDisplay);
      }
    }
  };

  const handleEqual = () => {
    try {
      const result = evalExpression(display);
      setDisplay(result + ' = ' + result.toFixed(4));
    } catch (error) {
      setDisplay('Error');
    }
  };

  const evalExpression = (expression) => {
    const tokens = expression.split(' ');
    let stack = [];
    for (const token of tokens) {
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else if (token === '+') {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        stack.push(firstOperand + secondOperand);
      } else if (token === '-') {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        stack.push(firstOperand - secondOperand);
      } else if (token === '*') {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        stack.push(firstOperand * secondOperand);
      } else if (token === '/') {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();
        stack.push(firstOperand / secondOperand);
      }
    }
    return stack[0];
  };

      const handleDecimal =() => {
        const array = display.split (' ');
        const lastElement = array[array.length-1];
    
        if(!lastElement.includes('.')){
          setDisplay(display + '.')
        }
      };
    
      const handleClear = () => {
        setDisplay ('0');
      }
    
      return (
        <div className="App">
          <div className="calculator">
      <div id="display" className="row">{display}</div>
      <div id="clear" className="row" onClick = {handleClear}>
        AC
      </div>
      <div id="seven" onClick = {handleNumber}>7</div>
      <div id="eight" onClick = {handleNumber}>8</div>
      <div id="nine" onClick = {handleNumber}>9</div>
      <div id="multiply" onClick = {handleOperator}>*</div>
      <div id="four" onClick = {handleNumber}>4</div>
      <div id="five" onClick = {handleNumber}>5</div>
      <div id="six" onClick = {handleNumber}>6</div>
      <div id="divide">/</div>
      <div id="one" onClick = {handleNumber}>1</div>
      <div id="two" onClick = {handleNumber}>2</div>
      <div id="three" onClick = {handleNumber}>3</div>
      <div id="add" onClick = {handleOperator}>+</div>
      <div id="zero" onClick = {handleNumber}>0</div>
      <div id="decimal" onClick = {handleDecimal}>.</div>
      <div id="equals" onClick = {handleEqual}>=</div>
      <div id="subtract" onClick = {handleOperator}>-</div>
    </div>;
        </div>
      );
    }
    
    export default App;
  
       


/*
I should be able to perform any operation (+, -, *, /) on numbers containing decimal points
If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign.
 Pressing an operator immediately following "=" should start a new calculation that operates on the result of the previous evaluation
My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like "2 / 7" with reasonable precision to at least 4 decimal places)*/
