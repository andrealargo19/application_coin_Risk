import React, { Fragment } from 'react';
import classes from './MainDetail.module.css';
import MainItemDetails from './MainItemDetails';


export default function MainDetail(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_main ) {
      ListComponent.push(<MainItemDetails key={element.name} info={element}/>);
    }
    return ListComponent
  };

  return (
    <Fragment>
        <div className={classes.general_container}>
          {ListItems()}
        </div>
    </Fragment>
  )
}
