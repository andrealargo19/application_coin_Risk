import React, { Fragment } from 'react'
import classes from './Main.module.css';
import MainItem from './MainItem';



export default function Main(props) {
  const ListItems = () => {
    const ListComponent = [];
    for (const element of props.info_main ) {
      ListComponent.push(<MainItem key={element.name} info={element}/>);
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
