import React, { Fragment } from 'react';
import classes from './Aside.module.css';
import ethereum from '../assets/ethereum_icon.png';
import uniswap from '../assets/uniswap_icon.png';
import bitcoin from '../assets/bitcoin_icon.png';

export default function Aside() {
  return (
    <Fragment>
      <div className={classes.aside_container}>
        <h5>Alexa-Rank</h5>
        <div className={classes.aside_item}>
          <img src={ethereum} alt=' its an icon'/>
          <div>
            <h4>Ethereum</h4>
            <p>8.798</p>
            <span>11 min ago</span>
          </div>
        </div>
        <div className={classes.aside_item}>
        <img src={uniswap} alt=' its an icon'/>
          <div>
            <h4>Ethereum</h4>
            <p>8.798</p>
            <span>11 min ago</span>
          </div>
        </div>
        <div className={classes.aside_item}>
        <img src={bitcoin} alt=' its an icon'/>
          <div>
            <h4>Ethereum</h4>
            <p>8.798</p>
            <span>11 min ago</span>
          </div>
        </div>
        <button>see more</button>
      </div>
    </Fragment>
  )
}
