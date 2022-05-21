import React, { Fragment } from 'react'
import classes from './Sidebar.module.css';
import dashboard from '../assets/dashboard_icon.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout_icon.png';



export default function Sidebar() {
  return (
    <Fragment>
      <div className={classes.sidebar_container}>
          <div className={classes.container_img}>
            <img className={classes.dashboard_icon} src={dashboard} alt="dashboard icon"/>
          </div>
          <div className={classes.container_img}>
            <img className={classes.settings_icon}  src={settings} alt="setting icon"/>
          </div>  
          <div className={classes.container_img}>
            <img className={classes.logout_icon}  src={logout} alt="logout icon"/>
          </div>
          
      </div>
    </Fragment>
  )
}
