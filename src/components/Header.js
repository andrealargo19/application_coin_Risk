import React, { Fragment } from 'react';
import alert from '../assets/alert_icon.png';
import avatar from '../assets/avatar_icon.png';
import downarrow from '../assets/downarrow_icon.png';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.container_buttons}>
          <Link to={'/'}>
          <button className={classes.button_dashboard}>Dashboard</button>
          </Link>
          <button className={classes.button_help}>Help</button>
        </div>
        <nav className={classes.nav}>
          <img className={classes.alert} src={alert} alt=" alert icon"/>
          <img className={classes.avatar} src={avatar} alt=" avatar icon"/>
          <button className={classes.user}>
            <span>Sara Hartman</span>
            <img className={classes.arrow} src={downarrow} alt="arrow icon"/>
          </button>
        </nav>
      </header>   
    </Fragment>     
  )
}
