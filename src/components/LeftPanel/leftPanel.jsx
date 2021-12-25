import React from "react";

const LeftPanel = ({ onListenButton, onClear }) => {
  return (
    <>
      <div className="leftPanel" >
        <div className="numbers">
          <div onClick={(event) => onListenButton(event)}>7</div>
          <div onClick={(event) => onListenButton(event)}>8</div>
          <div onClick={(event) => onListenButton(event)}>9</div>
        </div>
        <div className="numbers">
          <div onClick={(event) => onListenButton(event)}>4</div>
          <div onClick={(event) => onListenButton(event)}>5</div>
          <div onClick={(event) => onListenButton(event)}>6</div>
        </div>
        <div className="numbers">
          <div onClick={(event) => onListenButton(event)}>1</div>
          <div onClick={(event) => onListenButton(event)}>2</div>
          <div onClick={(event) => onListenButton(event)}>3</div>
        </div>
        <div className="numbers">
          <div onClick={(event) => onListenButton(event)}>0</div>
          <div onClick={(event) => onListenButton(event)}>.</div>
          <div onClick={(event) => onClear(event)}>AC</div>
        </div>
      </div>
    </>
  );
};

export default LeftPanel;
