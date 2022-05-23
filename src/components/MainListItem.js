import React from 'react';
import classes from './MainListItem.module.css';
import arrowleft from '../assets/arrowleft_icon.png';
import { Link } from 'react-router-dom';

export default function MainListItem(props) {
  const link_route = "details/" + props.info.id;
  return (
    <div className={classes.item_container_flex}>
      <img src={props.info.image} alt=" ethereum icon"/>
      <p>{props.info.symbol}</p>
      <p>{props.info.name}</p>
      <p>{props.info.last_updated.substring(0,10)}</p>
      <Link to={link_route}>
        <button>
          <span>Details</span>
          <img src={arrowleft} alt=" arrow icon"/>
        </button>
      </Link>
     </div>
  );  
}
