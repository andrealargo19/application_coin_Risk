import React, { Fragment } from 'react'
import classes from './Main.module.css';
import uniswap from '../assets/uniswap_icon.png';
import bitcoin from '../assets/bitcoin_icon.png';
import frax from '../assets/frax_icon.png';
import ethereum from '../assets/ethereum_icon.png';
import MainList from './MainList';
import Aside from './Aside';

export default function Main() {
  return (
    <Fragment>
      <div className={classes.general_container}>
        <div className={classes.container_flex}>
          <div>
            <h2>Project:</h2>
            <h1>UNISWAP</h1>
            <img src={uniswap} alt="uniswap icon"/>
          </div>
          <div>
            <h2>Project:</h2>
            <h1>BITCOIN</h1>
            <img src={bitcoin} alt="bitcoin icon"/>
          </div>
        </div>
          <div className={classes.container_flex}>
            <div>
              <h2>Project:</h2>
              <h1>FRAX</h1>
              <img src={frax} alt=" frax icon"/>
            </div>
            <div>
              <h2>Project:</h2>
              <h1>ETHEREUM</h1>
              <img src={ethereum} alt=" ethereum icon"/>
            </div>
          </div>
          
      </div>
      <MainList/>
      <Aside/>
    </Fragment>
  )
}
