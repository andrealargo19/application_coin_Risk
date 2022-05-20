import React, { Fragment } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';


export default function Layout() {
  return (
    <Fragment>
      <Header/>
      <Sidebar/>
    </Fragment>
  )
}
