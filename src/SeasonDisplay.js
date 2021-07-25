import React from 'react';
import './seasonDisplay.css';

const SeasonConfig = {
  summer: {
    text: "Lets hit beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr its chilly",
    iconName:"snowflake"
  },
};
const getSeason = (lat ,month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'Winter ' : 'summer';
  }
}


const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season]
return (
  <div className={`season-display ${season}`}>
    <i className={`icon-left massive ${iconName} icon`} />
    <h1>{text}</h1>
    <i className={`icon-right massive ${iconName} icon`} />
  </div>
);

}

export default Season;