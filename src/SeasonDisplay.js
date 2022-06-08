import "./SeasonDisplay.css";
import React from 'react';

const seasonConfig = {
    summer: {text:"Let's hit the beach", iconName:"sun"},
    winter:{text:"Burr its cold", iconName:"snowflake"}
};

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
        //northern hemisphere
        return lat > 0 ? 'summer': 'winter';
    }
    else{
        //southern hemisphere
        return lat > 0 ? 'winter': 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    //refer semantic ui for how to display size of icon. for e.g. we used massive - means 
    // huge icons on browser when shows up
    return( 
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;