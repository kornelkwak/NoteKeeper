import React from "react";
//import Draggable from 'react-draggable';
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
  } from "react-grid-dnd";
import classes from './TableOfNotes.module.css';
import Note from './Note.js';
const TableOfNotes = (props) => {
    const [items, setItems] = React.useState(props.notes);

    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        const nextState = swap(items, sourceIndex, targetIndex);
        console.log(items);
        setItems(nextState);
      };

    const removeHandler = (id) => {
        console.log(id);
        const newItems = items.filter(item => 
            item.id !== id);
          setItems(newItems);
        console.log(items);
    };

    return (
        <GridContextProvider onChange={onChange}>
            <div className={classes.table}>
            <GridDropZone
                id="items"
                boxesPerRow={4}
                rowHeight={330}
                className={classes.dropzone}  
            >
           
           {items.map(item => (
             <GridItem key={item.key} className={classes.griditem}>
                <Note title = {item.title} content = {item.content} key = {item.key} onRemove = {removeHandler} id = {item.id}/>
            </GridItem>
               )
            )}     

            </GridDropZone>
            </div>
        </GridContextProvider>    
    );
}

export default TableOfNotes;