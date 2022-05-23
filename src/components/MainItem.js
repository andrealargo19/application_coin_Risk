import React from 'react'
import classes from './MainItem.module.css';


export default function MainItem(props) {
  return (
    <div className={classes.container_flex}>
        <div>
            <h2>Project:</h2>
            <h1>{props.info.name}</h1>
            <img src={props.info.image} alt="uniswap icon"/>
        </div>
    </div>
  )
}
