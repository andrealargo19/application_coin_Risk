import React, { Fragment } from 'react';
import classes from './MainList.module.css';
import MainListItem from './MainListItem';

export default function MainList(props) {
    console.log(props.info_main_list);
    const ListItems = () => {
        const ListComponent = [];
        for (const element of props.info_main_list ) {
          ListComponent.push(<MainListItem key={element.name} info={element}/>);
        }
        return ListComponent
      };


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
            {ListItems()}
        </div>
    </Fragment>
  )
}