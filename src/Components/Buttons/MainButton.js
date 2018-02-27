import React from 'react';
import './Buttons.css'

const MainButton = (props) => {
  return (
    <div className="ButtonContainer" style={props.styleOfGradient}>
      <span className="ButtonText">{props.text}</span>
    </div>
  );
};

export default MainButton;
