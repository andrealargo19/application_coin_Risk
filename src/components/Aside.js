import React, { Fragment } from 'react';
import classes from './Aside.module.css';
import AsideItem from './AsideItem';

export default function Aside(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_aside ) {
      ListComponent.push(<AsideItem key={element.name} info={element}/>);
    }
    return ListComponent
  };

  return (
    <Fragment>
      <div className={classes.aside_container}>
        <h5>Alexa-Rank</h5>
        {ListItems()}
        <button>see more</button>
      </div>
    </Fragment>
  )
}
