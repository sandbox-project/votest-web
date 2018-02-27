import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TypedJS from '../TypedJS/TypedJS';
import MainButton from '../Buttons/MainButton';

import './Information.css';


class Information extends Component {
  render() {
    return (
      <div className="Information">
        <div className="Text">
          <div className="Title">
            <h1>Votest</h1>
          </div>
          <div className="Subtitle">
            <span>Легко, просто та надійно&nbsp;</span> <TypedJS />
          </div>
          <div className="Buttons">
            <div className="ButtonsMargin">
              <Link to="/getpoll" style={{ textDecoration: 'none' }}>
                <MainButton styleOfGradient={{background: "linear-gradient(15deg,#96deda,#50c9c3)"}} text={"Голосувати"}/>
              </Link>
            </div>
            <div className="ButtonsMargin">
              <Link to="/createpoll" style={{ textDecoration: 'none' }}>
                <MainButton styleOfGradient={{background: "linear-gradient(15deg,#667eea,#764ba2)"}} text={"Створити"}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
