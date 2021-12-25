import { useState } from "react";
import "./App.css";
import Equal from "./components/Equal/Equal";
import Input from "./components/Input/input";
import LeftPanel from "./components/LeftPanel/leftPanel";
import Operator from "./components/Operators/operators";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [operator, setOperator] = useState("");
  const [enabled, setEnabled] = useState(true);

  const handleListenButton = (event) => {
    if (event.target.textContent === "AC") {
      return;
    }
    if (
      event.target.textContent === "+" ||
      event.target.textContent === "-" ||
      event.target.textContent === "*" ||
      event.target.textContent === "/"
    ) {
      setOperator(event.target.textContent);
    }
    if (
      enabled ||
      event.target.textContent === "+" ||
      event.target.textContent === "-" ||
      event.target.textContent === "*" ||
      event.target.textContent === "/"
    ) {
      setEnabled(true);
      setInputValue((prevState) => (prevState += event.target.textContent));
    }
  };

  const handleCalculate = () => {
    if (!inputValue) return;

    try {
      if (operator) {
        const numbers = inputValue.split(operator);

        const leftOperator = Number(numbers[0]);

        let rightOperator = Number(numbers[1]);

        if (isNaN(leftOperator) || isNaN(rightOperator)) {
          setInputValue(false);
          setEnabled(false);
          return;
        }
        
        let result;
        switch (operator) {
          case "+":
            result = leftOperator + rightOperator;
            break;
          case "-":
            result = (leftOperator - rightOperator).toString();
            console.log(result);
            break;
          case "/":
            result = leftOperator / rightOperator;
            break;
          case "*":
            result = leftOperator * rightOperator;
            break;
          default:
            result = "Ведите корректное значение";
            break;
        }
        setInputValue(result);
        setEnabled(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClearAC = (event) => {
    if (event.target.textContent === "AC") {
      setInputValue("");
      setEnabled(true);
    }
  };
  return (
    <div className="calculator">
      <Input inputValue={inputValue} />
      <div className="buttons">
        <Operator onListenButton={handleListenButton} />
        <LeftPanel
          onClear={handleClearAC}
          onListenButton={handleListenButton}
        />
        <Equal onCalculate={handleCalculate} />
      </div>
    </div>
  );
}

export default App;
