import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  winter: {
    iconName: 'snowflake',
    text: "Burr, it's chilly!"
  },
  summer: {
    iconName: 'sun',
    text: "Let's hit the beach!"
  }
}

const getSeason = (lat) => {
  const month = new Date().getMonth();

  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"
  }
  return lat > 0 ? "winter" : "summer"
  
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat)
  const {iconName, text} = seasonConfig[season]
  return (
    <div className={ `season-display ${season}` }>
      <i className={ `icon-top massive icon ${iconName}` }></i>
      <h1>{ text }</h1>
      <i className={ `icon-bottom massive icon ${iconName}` }></i>
    </div>
  )
}

export default SeasonDisplay;
