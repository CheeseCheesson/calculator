import React from "react";

const Operators = ({onListenButton}) => {
  return (
    <div className="operators" >
      <div onClick={(event) => onListenButton(event)}>+</div>
      <div onClick={(event) => onListenButton(event)}>-</div>
      <div onClick={(event) => onListenButton(event)}>*</div>
      <div onClick={(event) => onListenButton(event)}>/</div>
    </div>
  );
};

export default Operators;
