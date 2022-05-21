import React, { Fragment } from 'react';
import classes from './MainList.module.css';
import ethereum from '../assets/ethereum_icon.png';
import frax from '../assets/frax_icon.png';
import uniswap from '../assets/uniswap_icon.png';
import bitcoin from '../assets/bitcoin_icon.png';
import arrowleft from '../assets/arrowleft_icon.png';




export default function MainList() {
  return (
    <Fragment>
        <div className={classes.container_list}>
            <div className={classes.item_container_flex}>
            <h3>RECENT PROJECTS</h3>
                <h3>SYMBOL</h3>
                <h3>NAME</h3>
                <h3>LAST UPDATES</h3>
                <h3>DETAILS</h3>
            </div>
            <div className={classes.item_container_flex}>
                <img src={ethereum} alt=" ethereum icon"/>
                <p>ETH</p>
                <p>Ethereum</p>
                <p>10 July, 2020</p>
                <button>
                    <span>DETAILS</span>
                    <img src={arrowleft} alt=" arrow icon"/>
                </button>
            </div>
            <div className={classes.item_container_flex}>
                <img src={frax} alt=" frax icon"/>
                <p>FRAX</p>
                <p>Frax</p>
                <p>28 June, 2020</p>
                <button>
                    <span>DETAILS</span>
                    <img src={arrowleft} alt=" arrow icon"/>
                </button>
            </div>
            <div className={classes.item_container_flex}>
                <img src={uniswap} alt=" uniswap icon"/>
                <p>UNI</p>
                <p>Uniswap</p>
                <p>11 June, 2020</p>
                <button>
                    <span>DETAILS</span>
                    <img src={arrowleft} alt=" arrow icon"/>
                </button>
            </div>
            <div className={classes.item_container_flex}>
                <img src={bitcoin} alt=" bitcoin icon"/>
                <p>BTC</p>
                <p>Bitcoin</p>
                <p>11 June, 2020</p>
                <button>
                    <span>DETAILS</span>
                    <img src={arrowleft} alt=" arrow icon"/>
                </button>
            </div>
        </div>
    </Fragment>
  )
}
