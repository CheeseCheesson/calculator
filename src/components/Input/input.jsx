import React from "react";

const Input = ({ inputValue }) => {
  return (
    <div className="input">
      {inputValue === false
        ? `Значение не корректно`
        : inputValue}
    </div>
  );
};

export default Input;
