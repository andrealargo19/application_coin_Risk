import React, { Fragment } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import MainList from '../components/MainList';
import Sidebar from '../components/Sidebar';
import Aside from '../components/Aside';
import classes from './Dashboard.module.css';


export default function Dashboard(props) {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.Header}> <Header/></div>
        <div className={classes.Sidebar}><Sidebar/></div>
        <div className={classes.Main}><Main info_main={props.info_dashboard}/></div>
        <div className={classes.Aside}><Aside info_aside={props.info_dashboard}/></div>
        <div className={classes.List}><MainList info_main_list={props.info_dashboard}/></div>
      </div>
    </Fragment> 
  )
}
