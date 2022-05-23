import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Aside from '../components/Aside';
import MainDetail from '../components/MainDetail';
import Statistics from '../components/Statistics';
import Description from '../components/Description';
import classes from './DetailsProjects.module.css';



export default function DetailsProjects(props) {
  const params = useParams();
  const filter_info = props.info_detail.filter(
    (element) => element.id === params.cripto 
  );

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.Header}><Header/></div>
        <div className={classes.Sidebar}><Sidebar/></div>
        <div className={classes.Aside}><Aside info_aside={filter_info}/></div>
        <div className={classes.Statistics}><Statistics info_statistics={filter_info}/></div>
        {/* <div className={classes.Logo}><Main info_main={filter_info}/></div> */}
        <div className={classes.Logo}><MainDetail info_main={filter_info}/></div>
        <div className={classes.Description}><Description info_description={filter_info}/></div>
      </div>
    </Fragment>
    
  )
}

