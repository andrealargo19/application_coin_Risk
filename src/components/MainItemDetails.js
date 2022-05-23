import React from 'react';
import classes from './MainItemDetails.module.css';


export default function MainItemDetails(props) {
  return (
    <div className={classes.container_flex_2}>
      <div>
        <h2>Project:</h2>
        <h1>{props.info.name}</h1>
        <img src={props.info.image} alt="uniswap icon"/>
      </div>
    </div>
  );
}
