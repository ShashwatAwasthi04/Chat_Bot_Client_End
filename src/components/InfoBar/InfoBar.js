import React from 'react';

import Icon1 from '../../Icons/Icon1.png';
import Icon2 from '../../Icons/Icon2.png';
import './Infobar.css';

const InfoBar = ({room}) => (
    <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={Icon2} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={Icon1} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;