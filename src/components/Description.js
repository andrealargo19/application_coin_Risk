import React, { Fragment } from 'react'
import classes from './Description.module.css';

export default function Description(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_description ) {
      const limitedDescription = element.description.substring(0, 300);
      ListComponent.push(<p key={element.name}>{limitedDescription}</p>);
    }
    return ListComponent
  };

  return (
      <Fragment>
        <div className={classes.container_description}>
            <h1>DESCRIPTION</h1>
            {ListItems()}
        </div>
      </Fragment>
    
  )
}
