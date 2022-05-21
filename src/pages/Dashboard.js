import React, { Fragment } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';




export default function Dashboard() {
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Sidebar/>
    </Fragment> 
  )
}
