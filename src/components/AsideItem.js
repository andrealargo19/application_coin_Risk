import React from 'react';
import classes from './AsideItem.module.css';

export default function AsideItem(props) {
  return (
    <div className={classes.aside_item}>
      <img src={props.info.image} alt=' its an icon'/>
      <div>
        <h4>{props.info.name}</h4>
        <p>{props.info.alexa_rank}</p>
      </div>
    </div>
  )
}
