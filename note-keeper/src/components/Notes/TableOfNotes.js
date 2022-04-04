import React from "react";
import classes from './TableOfNotes.module.css';
import Note from './Note.js';

const TableOfNotes = (props) => {
    console.log(props);
    return (
        <div className={classes.table}>
            {props.notes.map(item => 
                <Note title = {item.title}
                      content = {item.content}
                      key = {item.key}
                />
            )}
        </div>    
    );
}

export default TableOfNotes;